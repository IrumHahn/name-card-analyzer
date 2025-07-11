import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    let settings = await prisma.settings.findFirst()
    
    // 설정이 없으면 기본 설정 생성
    if (!settings) {
      settings = await prisma.settings.create({
        data: {
          autoSendEnabled: false,
          autoSendTemplateId: null,
          defaultSenderPhone: null,
        },
      })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('설정 조회 오류:', error)
    return NextResponse.json(
      { error: '설정을 불러오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { autoSendEnabled, autoSendTemplateId, defaultSenderPhone } = body

    // 기존 설정 조회
    let settings = await prisma.settings.findFirst()
    
    if (!settings) {
      // 설정이 없으면 새로 생성
      settings = await prisma.settings.create({
        data: {
          autoSendEnabled: autoSendEnabled || false,
          autoSendTemplateId,
          defaultSenderPhone,
        },
      })
    } else {
      // 기존 설정 업데이트
      settings = await prisma.settings.update({
        where: { id: settings.id },
        data: {
          autoSendEnabled: autoSendEnabled || false,
          autoSendTemplateId,
          defaultSenderPhone,
        },
      })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('설정 업데이트 오류:', error)
    return NextResponse.json(
      { error: '설정 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 