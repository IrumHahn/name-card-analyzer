import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const businessCard = await prisma.businessCard.findUnique({
      where: { id },
      include: {
        messageHistory: {
          orderBy: { createdAt: 'desc' },
          include: {
            template: true,
          },
        },
      },
    })

    if (!businessCard) {
      return NextResponse.json({ error: '명함을 찾을 수 없습니다.' }, { status: 404 })
    }

    return NextResponse.json(businessCard)
  } catch (error) {
    console.error('명함 조회 오류:', error)
    return NextResponse.json(
      { error: '명함 조회 중 오류가 발생했습니다.' },
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
    const { companyName, name, email, phone, address, notes } = body

    const businessCard = await prisma.businessCard.update({
      where: { id },
      data: {
        companyName,
        name,
        email,
        phone,
        address,
        notes,
      },
    })

    return NextResponse.json(businessCard)
  } catch (error) {
    console.error('명함 업데이트 오류:', error)
    return NextResponse.json(
      { error: '명함 업데이트 중 오류가 발생했습니다.' },
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
    await prisma.businessCard.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('명함 삭제 오류:', error)
    return NextResponse.json(
      { error: '명함 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 