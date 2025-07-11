import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  // 환경 변수 상태 확인 (민감한 정보는 마스킹)
  const envCheck = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: !!process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    DATABASE_URL: process.env.DATABASE_URL ? '✅ 설정됨' : '❌ 없음',
    DIRECT_URL: process.env.DIRECT_URL ? '✅ 설정됨' : '❌ 없음',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ? '✅ 설정됨' : '❌ 없음',
    SOLAPI_API_KEY: process.env.SOLAPI_API_KEY ? '✅ 설정됨' : '❌ 없음',
    SOLAPI_API_SECRET: process.env.SOLAPI_API_SECRET ? '✅ 설정됨' : '❌ 없음',
  }

  // Prisma 생성 경로 확인
  const prismaInfo = {
    clientPath: '@/generated/prisma',
    schemaPath: 'prisma/schema.prisma',
  }

  // 데이터베이스 URL 형식 확인 (민감한 부분 제거)
  let dbUrlFormat = 'Unknown'
  if (process.env.DATABASE_URL) {
    if (process.env.DATABASE_URL.includes('postgresql://')) {
      dbUrlFormat = 'PostgreSQL (Supabase/Neon)'
    } else if (process.env.DATABASE_URL.includes('file:')) {
      dbUrlFormat = 'SQLite (로컬 파일)'
    } else if (process.env.DATABASE_URL.includes('mysql://')) {
      dbUrlFormat = 'MySQL'
    }
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: envCheck,
    database: {
      format: dbUrlFormat,
      hasDirectUrl: !!process.env.DIRECT_URL,
    },
    prisma: prismaInfo,
    runtime: {
      platform: process.platform,
      nodeVersion: process.version,
      cwd: process.cwd(),
    },
    tips: {
      vercel: process.env.VERCEL ? 
        '✅ Vercel 환경에서 실행 중' : 
        '⚠️ 로컬 환경에서 실행 중',
      database: !process.env.DATABASE_URL ? 
        '❌ DATABASE_URL이 설정되지 않았습니다. Vercel 환경 변수를 확인하세요.' :
        '✅ 데이터베이스 URL이 설정되어 있습니다.',
      prisma: process.env.VERCEL && !process.env.DIRECT_URL && dbUrlFormat === 'PostgreSQL (Supabase/Neon)' ?
        '⚠️ Supabase/Neon 사용 시 DIRECT_URL도 설정하는 것을 권장합니다.' :
        '✅ Prisma 설정이 올바릅니다.'
    }
  })
} 