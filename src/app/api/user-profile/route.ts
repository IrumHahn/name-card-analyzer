import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    let profile = await prisma.userProfile.findFirst()
    
    // 프로필이 없으면 기본 프로필 생성
    if (!profile) {
      profile = await prisma.userProfile.create({
        data: {
          name: null,
          companyName: null,
          email: null,
          phone: null,
          address: null,
          title: null,
        },
      })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('프로필 조회 오류:', error)
    return NextResponse.json(
      { error: '프로필을 불러오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, companyName, email, phone, address, title } = body

    // 기존 프로필 조회
    let profile = await prisma.userProfile.findFirst()
    
    if (!profile) {
      // 프로필이 없으면 새로 생성
      profile = await prisma.userProfile.create({
        data: {
          name,
          companyName,
          email,
          phone,
          address,
          title,
        },
      })
    } else {
      // 기존 프로필 업데이트
      profile = await prisma.userProfile.update({
        where: { id: profile.id },
        data: {
          name,
          companyName,
          email,
          phone,
          address,
          title,
        },
      })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('프로필 업데이트 오류:', error)
    return NextResponse.json(
      { error: '프로필 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 