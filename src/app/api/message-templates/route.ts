import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const templates = await prisma.messageTemplate.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(templates)
  } catch (error) {
    console.error('템플릿 조회 오류:', error)
    return NextResponse.json(
      { error: '템플릿 목록을 불러오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, content } = body

    if (!name || !content) {
      return NextResponse.json(
        { error: '템플릿 이름과 내용이 필요합니다.' },
        { status: 400 }
      )
    }

    const template = await prisma.messageTemplate.create({
      data: {
        name,
        content,
      },
    })

    return NextResponse.json(template)
  } catch (error) {
    console.error('템플릿 생성 오류:', error)
    return NextResponse.json(
      { error: '템플릿 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 