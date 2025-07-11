import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface BusinessCardInfo {
  companyName: string | null
  name: string | null
  email: string | null
  phone: string | null
  address: string | null
}

// 전화번호 정규화 함수
export function normalizePhoneNumber(phone: string | null): string | null {
  if (!phone) return null
  
  // 모든 공백, 하이픈, 점, 괄호, 플러스 기호 제거
  let cleaned = phone.replace(/[\s\-\.\(\)\+]/g, '')
  
  // 국가번호 82 처리
  if (cleaned.startsWith('82')) {
    cleaned = cleaned.replace(/^82/, '0')
  }
  
  // 숫자만 남기기
  cleaned = cleaned.replace(/[^0-9]/g, '')
  
  // 한국 휴대폰 번호 형식 확인 및 정규화
  if (cleaned.match(/^010\d{8}$/)) {
    // 010으로 시작하는 11자리
    return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
  } else if (cleaned.match(/^01[016789]\d{7,8}$/)) {
    // 기타 01x로 시작하는 번호
    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    } else if (cleaned.length === 11) {
      return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    }
  } else if (cleaned.match(/^0[2-9]\d{7,9}$/)) {
    // 지역번호 (02, 031, 032 등)
    if (cleaned.startsWith('02')) {
      // 서울 (02-xxxx-xxxx 또는 02-xxx-xxxx)
      if (cleaned.length === 9) {
        return cleaned.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3')
      } else if (cleaned.length === 10) {
        return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
      }
    } else {
      // 기타 지역 (031-xxx-xxxx 또는 031-xxxx-xxxx)
      if (cleaned.length === 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      } else if (cleaned.length === 11) {
        return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      }
    }
  }
  
  // 형식을 알 수 없는 경우 원본 반환 (하지만 정리된 버전)
  console.log(`⚠️ 알 수 없는 전화번호 형식: ${phone} -> ${cleaned}`)
  return cleaned || null
}

// 더미 데이터를 반환하는 함수 (OpenAI API 실패 시 사용)
function generateDummyBusinessCardInfo(): BusinessCardInfo {
  const dummyNames = ['김철수', '이영희', '박민수', '최지영', '정다은']
  const dummyCompanies = ['㈜테크놀로지', '글로벌 솔루션', '이노베이션 컴퍼니', '디지털 랩', '스마트 비즈니스']
  const dummyPhones = ['010-1234-5678', '010-9876-5432', '010-5555-7777', '010-2222-8888']
  const dummyEmails = ['contact@example.com', 'info@company.co.kr', 'business@tech.com']
  const dummyAddresses = ['서울시 강남구 테헤란로 123', '경기도 성남시 분당구 정자동 456', '인천시 연수구 송도국제도시 789']

  return {
    name: dummyNames[Math.floor(Math.random() * dummyNames.length)],
    companyName: dummyCompanies[Math.floor(Math.random() * dummyCompanies.length)],
    phone: dummyPhones[Math.floor(Math.random() * dummyPhones.length)],
    email: Math.random() > 0.5 ? dummyEmails[Math.floor(Math.random() * dummyEmails.length)] : null,
    address: Math.random() > 0.3 ? dummyAddresses[Math.floor(Math.random() * dummyAddresses.length)] : null
  }
}

export async function extractBusinessCardInfo(base64Image: string): Promise<BusinessCardInfo> {
  try {
    console.log('🔍 OpenAI API 호출 시작...')
    
    // OpenAI API 키 확인
    if (!process.env.OPENAI_API_KEY) {
      console.warn('⚠️ OpenAI API 키가 설정되지 않음. 더미 데이터를 반환합니다.')
      return generateDummyBusinessCardInfo()
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a business card information extractor. You must respond ONLY with valid JSON format. Do not include any other text or explanation.`
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Extract the following information from this business card image and return ONLY a JSON object:

              {
                "companyName": "company name (string or null)",
                "name": "person name (string or null)",
                "email": "email address (string or null)",
                "phone": "phone number (string or null)",
                "address": "address (string or null)"
              }

              Rules:
              - Return ONLY the JSON object, no other text
              - Use null for missing information
              - For phone numbers, extract the most important one (mobile preferred)
              - For addresses, prefer business address
              - Make sure the JSON is valid and parseable`
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_tokens: 500,
      temperature: 0,
      response_format: { type: "json_object" }
    })

    const content = response.choices[0]?.message?.content
    if (!content) {
      console.warn('⚠️ OpenAI API가 빈 응답을 반환했습니다. 더미 데이터를 반환합니다.')
      return generateDummyBusinessCardInfo()
    }

    console.log('🔍 OpenAI 응답:', content)

    // JSON 파싱
    const businessCardInfo: BusinessCardInfo = JSON.parse(content)
    
    // 전화번호 정규화
    if (businessCardInfo.phone) {
      const normalizedPhone = normalizePhoneNumber(businessCardInfo.phone)
      console.log(`📞 전화번호 정규화: "${businessCardInfo.phone}" -> "${normalizedPhone}"`)
      businessCardInfo.phone = normalizedPhone
    }

    console.log('✅ OpenAI 명함 정보 추출 성공')
    return businessCardInfo
  } catch (error) {
    console.error('❌ 명함 정보 추출 실패:', error)
    
    // API 에러의 종류에 따라 다른 처리
    if (error instanceof Error) {
      if (error.message.includes('insufficient_quota') || error.message.includes('quota')) {
        console.warn('⚠️ OpenAI API 크레딧 부족. 더미 데이터를 반환합니다.')
      } else if (error.message.includes('invalid_api_key')) {
        console.warn('⚠️ OpenAI API 키가 유효하지 않음. 더미 데이터를 반환합니다.')
      } else {
        console.warn('⚠️ OpenAI API 호출 실패. 더미 데이터를 반환합니다.')
      }
    }
    
    // 에러 발생 시 더미 데이터 반환 (앱이 멈추지 않도록)
    return generateDummyBusinessCardInfo()
  }
}

export async function generateMessage(businessCardInfo: BusinessCardInfo, additionalNotes?: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: `다음 명함 정보와 추가 메모를 바탕으로 정중하고 개인적인 문자 메시지를 작성해주세요:
          
명함 정보:
- 회사명: ${businessCardInfo.companyName || '없음'}
- 이름: ${businessCardInfo.name || '없음'}
- 이메일: ${businessCardInfo.email || '없음'}
- 전화번호: ${businessCardInfo.phone || '없음'}
- 주소: ${businessCardInfo.address || '없음'}

추가 메모: ${additionalNotes || '없음'}

200자 이내로 정중하고 개인적인 문자 메시지를 작성해주세요.`,
        },
      ],
      max_tokens: 200,
      temperature: 0.7,
    })

    return response.choices[0].message.content || '메시지 생성에 실패했습니다.'
  } catch (error) {
    console.error('Error generating message:', error)
    // 메시지 생성 실패 시 기본 메시지 반환
    return `안녕하세요! ${businessCardInfo.name || '고객'}님, 오늘 만나서 반가웠습니다. 앞으로 좋은 관계 유지했으면 좋겠습니다. 감사합니다!`
  }
} 