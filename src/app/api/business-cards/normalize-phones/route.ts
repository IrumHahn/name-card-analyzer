import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { normalizePhoneNumber } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    console.log('📞 기존 명함 전화번호 일괄 정규화 시작...')
    
    // 모든 명함 조회
    const businessCards = await prisma.businessCard.findMany({
      where: {
        phone: {
          not: null
        }
      }
    })
    
    console.log(`📋 정규화 대상 명함 수: ${businessCards.length}개`)
    
    let updatedCount = 0
    let skippedCount = 0
    const results = []
    
    for (const card of businessCards) {
      if (!card.phone) continue
      
      const originalPhone = card.phone
      const normalizedPhone = normalizePhoneNumber(card.phone)
      
      if (originalPhone !== normalizedPhone) {
        // 전화번호가 변경된 경우에만 업데이트
        await prisma.businessCard.update({
          where: { id: card.id },
          data: { phone: normalizedPhone }
        })
        
        updatedCount++
        results.push({
          id: card.id,
          name: card.name,
          original: originalPhone,
          normalized: normalizedPhone,
          status: 'updated'
        })
        
        console.log(`✅ ${card.name}: "${originalPhone}" -> "${normalizedPhone}"`)
      } else {
        skippedCount++
        results.push({
          id: card.id,
          name: card.name,
          original: originalPhone,
          normalized: normalizedPhone,
          status: 'skipped'
        })
        
        console.log(`⏭️ ${card.name}: "${originalPhone}" (변경 없음)`)
      }
    }
    
    console.log(`🎉 정규화 완료: ${updatedCount}개 업데이트, ${skippedCount}개 건너뛰기`)
    
    return NextResponse.json({
      success: true,
      summary: {
        total: businessCards.length,
        updated: updatedCount,
        skipped: skippedCount
      },
      results
    })
    
  } catch (error) {
    console.error('전화번호 정규화 실패:', error)
    return NextResponse.json(
      { error: '전화번호 정규화 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 