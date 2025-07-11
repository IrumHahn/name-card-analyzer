import { SolapiMessageService } from 'solapi'

export interface SMSOptions {
  to: string
  from: string
  text: string
  type?: 'SMS' | 'LMS' | 'AUTO'
}

// 메시지 타입 자동 결정 함수
function getMessageType(text: string): 'SMS' | 'LMS' {
  // 한글 기준: 45자 이하 SMS, 46자 이상 LMS
  // 영문 기준: 90자 이하 SMS, 91자 이상 LMS
  const koreanRegex = /[가-힣]/g
  const koreanCount = (text.match(koreanRegex) || []).length
  const nonKoreanCount = text.length - koreanCount
  
  // 한글 1자 = 2바이트, 영문 1자 = 1바이트로 계산
  const estimatedBytes = koreanCount * 2 + nonKoreanCount
  
  console.log(`📏 메시지 길이 분석:`, {
    totalLength: text.length,
    koreanCount,
    nonKoreanCount,
    estimatedBytes
  })
  
  // SMS 기준: 90바이트 이하 (한글 45자 또는 영문 90자)
  return estimatedBytes <= 90 ? 'SMS' : 'LMS'
}

export async function sendSMS(options: SMSOptions): Promise<any> {
  const apiKey = process.env.SOLAPI_API_KEY
  const apiSecret = process.env.SOLAPI_API_SECRET

  if (!apiKey || !apiSecret) {
    throw new Error('SOLAPI_API_KEY 또는 SOLAPI_API_SECRET가 설정되지 않았습니다.')
  }

  console.log('🔍 SMS 발송 시도:', {
    apiKeyLength: apiKey.length,
    apiSecretLength: apiSecret.length,
    to: options.to,
    from: options.from,
    textLength: options.text.length
  })

  // API Key/Secret 길이 검증 제거 (Solapi 형식이 변경될 수 있음)
  if (apiKey.length < 10) {
    const error = `API Key is too short: ${apiKey.length} characters`
    console.error('❌ API Key 길이 오류:', error)
    throw new Error(error)
  }

  if (apiSecret.length < 20) {
    const error = `API Secret is too short: ${apiSecret.length} characters`
    console.error('❌ API Secret 길이 오류:', error)
    throw new Error(error)
  }

  try {
    console.log('🚀 Solapi SDK 초기화 중...')
    const messageService = new SolapiMessageService(apiKey, apiSecret)

    // 전화번호 정리 (하이픈 제거)
    const cleanTo = options.to.replace(/[^0-9]/g, '')
    const cleanFrom = options.from.replace(/[^0-9]/g, '')

    console.log('📱 정리된 전화번호:', {
      originalTo: options.to,
      cleanTo,
      originalFrom: options.from,
      cleanFrom
    })

    // 메시지 타입 결정
    const messageType = options.type === 'AUTO' || !options.type ? getMessageType(options.text) : options.type
    
    console.log('📨 메시지 타입 결정:', {
      requestedType: options.type,
      determinedType: messageType,
      textPreview: options.text.substring(0, 50) + (options.text.length > 50 ? '...' : '')
    })

    // 메시지 발송
    console.log('📤 메시지 발송 중...')
    const result = await messageService.send({
      to: cleanTo,
      from: cleanFrom,
      text: options.text,
      type: messageType,
      autoTypeDetect: false // 수동으로 타입 지정
    })

    console.log('✅ SMS 발송 성공:', result)
    return result

  } catch (error: any) {
    console.error('💥 SMS 발송 에러 상세:', {
      error,
      message: error.message,
      stack: error.stack
    })

    // failedMessageList 상세 정보 출력
    if (error.failedMessageList && Array.isArray(error.failedMessageList)) {
      console.error('📋 실패한 메시지 상세 정보:')
      error.failedMessageList.forEach((failedMessage: any, index: number) => {
        console.error(`${index + 1}. 실패한 메시지:`, JSON.stringify(failedMessage, null, 2))
      })
    }

    throw error
  }
} 