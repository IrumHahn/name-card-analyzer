import { NextRequest, NextResponse } from 'next/server'
import { sendSMS } from '@/lib/sms'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessCardId, message, templateId, useAI } = body

    // 명함 정보 조회
    const businessCard = await prisma.businessCard.findUnique({
      where: { id: businessCardId },
    })

    if (!businessCard || !businessCard.phone) {
      return NextResponse.json({ error: '명함 정보를 찾을 수 없거나 전화번호가 없습니다.' }, { status: 400 })
    }

    // 설정 정보 조회 (발신번호 가져오기)
    const settings = await prisma.settings.findFirst()
    if (!settings?.defaultSenderPhone) {
      return NextResponse.json({ error: '기본 발신번호가 설정되지 않았습니다. 설정 메뉴에서 발신번호를 등록해주세요.' }, { status: 400 })
    }

    let finalMessage = ''

    // 메시지 결정
    if (useAI) {
      // AI 메시지 생성
      const userProfile = await prisma.userProfile.findFirst()
      if (userProfile) {
        const profileInfo = [
          userProfile.name && `이름: ${userProfile.name}`,
          userProfile.title && `직책: ${userProfile.title}`,
          userProfile.companyName && `회사: ${userProfile.companyName}`,
          userProfile.email && `이메일: ${userProfile.email}`,
          userProfile.phone && `연락처: ${userProfile.phone}`,
        ].filter(Boolean).join('\n')
        
        finalMessage = `안녕하세요! ${businessCard.name || '고객'}님께 제 명함을 전해드립니다.\n\n${profileInfo}\n\n앞으로 좋은 관계 유지했으면 좋겠습니다. 감사합니다!`
      } else {
        finalMessage = `안녕하세요! ${businessCard.name || '고객'}님께 제 명함을 전해드립니다. 앞으로 좋은 관계 유지했으면 좋겠습니다. 감사합니다!`
      }
    } else if (templateId) {
      // 템플릿 메시지 사용
      const template = await prisma.messageTemplate.findUnique({
        where: { id: templateId },
      })
      
      if (!template) {
        return NextResponse.json({ error: '템플릿을 찾을 수 없습니다.' }, { status: 400 })
      }
      
      // 사용자 프로필 조회 및 템플릿 변수 치환
      const userProfile = await prisma.userProfile.findFirst()
      finalMessage = template.content
      
      if (userProfile) {
        console.log('🔄 템플릿 변수 치환 시작...')
        console.log('📋 사용자 프로필:', userProfile)
        console.log('📝 치환 전 메시지:', template.content)
        
        finalMessage = finalMessage
          .replace(/\{이름\}/g, userProfile.name || '')
          .replace(/\{회사\}/g, userProfile.companyName || '')
          .replace(/\{직책\}/g, userProfile.title || '')
          .replace(/\{이메일\}/g, userProfile.email || '')
          .replace(/\{연락처\}/g, userProfile.phone || '')
          .replace(/\{주소\}/g, userProfile.address || '')
        
        console.log('✅ 치환 후 메시지:', finalMessage)
      } else {
        console.log('⚠️ 사용자 프로필이 없어 변수 치환을 건너뜁니다.')
      }
    } else if (message) {
      // 직접 입력된 메시지 사용
      finalMessage = message
    } else {
      return NextResponse.json({ error: '메시지 내용이 없습니다.' }, { status: 400 })
    }

    // SMS 발송 (SMS/LMS 자동 구분 기능 사용)
    const result = await sendSMS({
      to: businessCard.phone,
      from: settings.defaultSenderPhone,
      text: finalMessage,
      type: 'AUTO' // 자동 구분 기능 사용
    })

    // 발송 기록 저장
    await prisma.messageHistory.create({
      data: {
        businessCardId,
        templateId: templateId || null,
        message: finalMessage,
        status: 'sent',
      },
    })

    return NextResponse.json({ 
      success: true, 
      messageId: result.messageId,
      message: '메시지가 성공적으로 발송되었습니다.' 
    })
  } catch (error: any) {
    console.error('SMS 발송 오류:', error)
    
    let errorMessage = '문자 발송 중 오류가 발생했습니다.'
    
    if (error.message) {
      if (error.message.includes('API Key')) {
        errorMessage = 'API Key 형식이 올바르지 않습니다. (16자 필요)'
      } else if (error.message.includes('API Secret')) {
        errorMessage = 'API Secret 형식이 올바르지 않습니다. (32자 필요)'
      } else if (error.message.includes('InvalidMemberId')) {
        errorMessage = 'API Key나 Secret이 올바르지 않습니다. Solapi 콘솔에서 확인해주세요.'
      } else if (error.message.includes('발신번호')) {
        errorMessage = '발신번호가 Solapi에서 인증되지 않았습니다.'
      } else if (error.message.includes('수신번호')) {
        errorMessage = '수신번호 형식이 올바르지 않습니다.'
      } else if (error.message.includes('잔액')) {
        errorMessage = 'Solapi 계정 잔액이 부족합니다.'
      } else if (error.message.includes('승인')) {
        errorMessage = '발신번호가 승인되지 않았습니다. Solapi 콘솔에서 발신번호를 등록해주세요.'
      } else {
        errorMessage = `${error.message}`
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
} 