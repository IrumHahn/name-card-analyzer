import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { extractBusinessCardInfo } from '@/lib/openai'
import { sendSMS } from '@/lib/sms'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json({ error: '이미지 파일이 필요합니다.' }, { status: 400 })
    }

    // 이미지 파일 저장
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = `${Date.now()}-${file.name}`
    const filePath = path.join(process.cwd(), 'public/uploads', fileName)
    
    // uploads 디렉토리 생성
    await writeFile(filePath, buffer)

    // 이미지를 base64로 변환
    const base64Image = buffer.toString('base64')

    // OpenAI Vision API로 명함 정보 추출
    const businessCardInfo = await extractBusinessCardInfo(base64Image)

    // 데이터베이스에 저장
    const businessCard = await prisma.businessCard.create({
      data: {
        imagePath: `/uploads/${fileName}`,
        companyName: businessCardInfo.companyName,
        name: businessCardInfo.name,
        email: businessCardInfo.email,
        phone: businessCardInfo.phone,
        address: businessCardInfo.address,
      },
    })

    console.log('📝 명함 등록 완료:', businessCard.id)

    // 자동발송 확인 및 처리
    let autoSendResult = null
    const settings = await prisma.settings.findFirst()
    
    console.log('🔍 자동발송 설정 확인:', {
      autoSendEnabled: settings?.autoSendEnabled,
      hasTemplateId: !!settings?.autoSendTemplateId,
      hasSenderPhone: !!settings?.defaultSenderPhone,
      hasBusinessCardPhone: !!businessCard.phone
    })
    
    if (settings?.autoSendEnabled && settings.autoSendTemplateId && settings.defaultSenderPhone && businessCard.phone) {
      try {
        console.log('🚀 자동발송 시작...')
        
        // 자동발송 템플릿 조회
        const template = await prisma.messageTemplate.findUnique({
          where: { id: settings.autoSendTemplateId },
        })
        
        if (!template) {
          console.error('❌ 자동발송 템플릿을 찾을 수 없습니다:', settings.autoSendTemplateId)
          autoSendResult = {
            success: false,
            error: '자동발송 템플릿을 찾을 수 없습니다.',
          }
        } else {
          console.log('📋 자동발송 템플릿 찾음:', template.name)
          
          // 사용자 프로필 조회
          const userProfile = await prisma.userProfile.findFirst()
          console.log('👤 사용자 프로필 조회:', !!userProfile)
          
          // 템플릿 내용 개인화 (간단한 치환)
          let finalMessage = template.content
          if (userProfile) {
            finalMessage = finalMessage
              .replace(/\{이름\}/g, userProfile.name || '')
              .replace(/\{회사\}/g, userProfile.companyName || '')
              .replace(/\{직책\}/g, userProfile.title || '')
              .replace(/\{이메일\}/g, userProfile.email || '')
              .replace(/\{연락처\}/g, userProfile.phone || '')
              .replace(/\{주소\}/g, userProfile.address || '')
          }
          
          console.log('💬 최종 메시지:', finalMessage.substring(0, 50) + '...')
          
          // SMS 발송 (SMS/LMS 자동 구분)
          const smsResult = await sendSMS({
            to: businessCard.phone,
            from: settings.defaultSenderPhone,
            text: finalMessage,
            type: 'AUTO' // SMS/LMS 자동 구분
          })
          
          console.log('✅ SMS 발송 성공:', !!smsResult.messageId)
          
          // 발송 기록 저장
          await prisma.messageHistory.create({
            data: {
              businessCardId: businessCard.id,
              templateId: template.id,
              message: finalMessage,
              status: 'sent',
            },
          })
          
          autoSendResult = {
            success: true,
            error: null,
            template: template.name,
            messageId: smsResult.messageId
          }
        }
      } catch (error: any) {
        console.error('💥 자동발송 실패:', error)
        
        let errorMessage = '자동발송 중 오류가 발생했습니다.'
        if (error.message) {
          if (error.message.includes('API Key')) {
            errorMessage = 'SMS API 키가 올바르지 않습니다.'
          } else if (error.message.includes('발신번호')) {
            errorMessage = '발신번호가 인증되지 않았습니다.'
          } else if (error.message.includes('잔액')) {
            errorMessage = 'SMS 계정 잔액이 부족합니다.'
          } else {
            errorMessage = error.message
          }
        }
        
        autoSendResult = {
          success: false,
          error: errorMessage,
        }
      }
    } else {
      console.log('⏭️ 자동발송 조건 불만족 - 건너뛰기')
    }

    return NextResponse.json({ 
      ...businessCard, 
      autoSend: autoSendResult 
    })
  } catch (error) {
    console.error('명함 처리 오류:', error)
    return NextResponse.json(
      { error: '명함 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const businessCards = await prisma.businessCard.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        messageHistory: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    })

    return NextResponse.json(businessCards)
  } catch (error) {
    console.error('명함 목록 조회 오류:', error)
    return NextResponse.json(
      { error: '명함 목록을 불러오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 