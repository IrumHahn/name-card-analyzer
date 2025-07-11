import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const template = await prisma.messageTemplate.findUnique({
      where: { id },
    })

    if (!template) {
      return NextResponse.json({ error: '템플릿을 찾을 수 없습니다.' }, { status: 404 })
    }

    return NextResponse.json(template)
  } catch (error) {
    console.error('템플릿 조회 오류:', error)
    return NextResponse.json(
      { error: '템플릿 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { name, content } = body

    if (!name || !content) {
      return NextResponse.json(
        { error: '템플릿 이름과 내용이 필요합니다.' },
        { status: 400 }
      )
    }

    const template = await prisma.messageTemplate.update({
      where: { id },
      data: {
        name,
        content,
      },
    })

    return NextResponse.json(template)
  } catch (error) {
    console.error('템플릿 업데이트 오류:', error)
    return NextResponse.json(
      { error: '템플릿 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.messageTemplate.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('템플릿 삭제 오류:', error)
    return NextResponse.json(
      { error: '템플릿 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 