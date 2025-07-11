import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    console.log('🔍 헬스체크 시작...')
    
    // 1. 기본 API 응답 테스트
    const timestamp = new Date().toISOString()
    console.log('✅ API 서버 정상:', timestamp)
    
    // 2. 데이터베이스 연결 테스트
    console.log('🔗 데이터베이스 연결 테스트 중...')
    await prisma.$connect()
    console.log('✅ 데이터베이스 연결 성공')
    
    // 3. 간단한 쿼리 테스트
    console.log('📊 데이터베이스 쿼리 테스트 중...')
    const userProfileCount = await prisma.userProfile.count()
    const businessCardCount = await prisma.businessCard.count()
    const templateCount = await prisma.messageTemplate.count()
    const settingsCount = await prisma.settings.count()
    
    console.log('✅ 데이터베이스 쿼리 성공')
    
    return NextResponse.json({
      status: 'healthy',
      timestamp,
      database: {
        connected: true,
        userProfiles: userProfileCount,
        businessCards: businessCardCount,
        templates: templateCount,
        settings: settingsCount
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        runtime: 'Vercel',
        region: process.env.VERCEL_REGION || 'unknown'
      }
    })
    
  } catch (error) {
    console.error('❌ 헬스체크 실패:', error)
    
    const errorInfo = {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack?.split('\n').slice(0, 5).join('\n') : 'No stack'
    }
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: errorInfo
      },
      { status: 500 }
    )
  } finally {
    // 연결 정리
    await prisma.$disconnect()
  }
} 