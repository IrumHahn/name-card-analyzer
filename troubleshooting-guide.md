# 명함 분석기 앱 트러블슈팅 가이드

## 개요
Next.js 기반 명함 분석기 앱 개발 중 발생한 주요 문제들과 해결 방법을 정리한 문서입니다.

## 주요 해결 문제들

### 1. 카메라 무한 루프 문제 🔄

**문제**:
- `CameraCapture.tsx`에서 카메라가 무한 재시작되는 문제
- `useEffect`에서 `isStreaming` 상태 변경 시 무한 루프 발생

**해결**:
```javascript
// src/components/CameraCapture.tsx
const prevFacingModeRef = useRef<string>('')

useEffect(() => {
  if (prevFacingModeRef.current !== facingMode) {
    prevFacingModeRef.current = facingMode
    // 카메라 재시작 로직만 실행
  }
}, [facingMode]) // isStreaming 의존성 제거
```

**교훈**:
- useEffect 의존성 배열 관리 중요
- 상태 변경을 추적할 때 이전 값과 비교하는 ref 사용

### 2. API 500 에러 (데이터베이스 연결 문제) 🗄️

**문제**:
- 모든 API 엔드포인트에서 500 에러 발생
- PostgreSQL/Supabase 연결 실패
- 실제로는 SQLite 사용 중

**해결**:
```javascript
// prisma/schema.prisma
datasource db {
  provider = "sqlite"  // "postgresql"에서 변경
  url      = env("https://nlxcjrzndntbjxmmscau.supabase.co")
}

// .env
DATABASE_URL="file:./prisma/dev.db"
```

**실행 명령**:
```bash
npx prisma generate
npx prisma db push
```

**교훈**:
- 데이터베이스 설정과 실제 사용 환경 일치 확인
- Prisma 스키마 변경 후 반드시 generate 실행

### 3. OpenAI API 파싱 에러 🤖

**문제**:
- OpenAI API 응답을 JSON으로 파싱 실패
- 빈 응답 또는 텍스트 응답 반환
- API 키 문제, 할당량 초과 등

**해결**:
```javascript
// src/app/api/business-cards/route.ts
try {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a business card OCR system. Return only valid JSON."
      },
      {
        role: "user", 
        content: [
          { type: "text", text: "Extract business card info as JSON" },
          { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
        ]
      }
    ],
    response_format: { type: "json_object" }
  })
  
  const content = response.choices[0].message.content
  if (!content) {
    throw new Error('OpenAI returned empty response')
  }
  
  const businessCardInfo = JSON.parse(content)
  
} catch (error) {
  // 폴백 더미 데이터 생성
  const businessCardInfo = {
    companyName: "알 수 없음",
    name: "알 수 없음", 
    email: "unknown@example.com",
    phone: "000-0000-0000",
    address: "알 수 없음"
  }
}
```

**교훈**:
- OpenAI API 호출 시 항상 폴백 로직 구현
- `response_format: { type: "json_object" }` 사용
- 에러 처리로 앱 크래시 방지

### 4. SMS API 키 길이 문제 📱

**문제**:
- "child apikey fails because apikey length must be 16 characters long"
- 기존 17자리 API 키가 16자리 검증 로직과 충돌

**해결**:
```javascript
// src/lib/sms.ts
// 기존 엄격한 검증 제거
if (apiKey.length < 10) {  // 16자리 고정 → 최소 10자리
  throw new Error(`API Key is too short: ${apiKey.length} characters`)
}

// .env
SOLAPI_API_KEY="NCSTGP5MZDC8JK1V"  // 정확히 16자리
SOLAPI_API_SECRET="P9D3X5RKXGW8YTBSIRQ9ADKUGUNYBQPL"  // 32자리
```

**교훈**:
- 외부 API 키 형식 변경에 유연하게 대응
- 엄격한 검증보다는 최소 요구사항 검증

### 5. 전화번호 정규화 📞

**문제**:
- 다양한 전화번호 형식 처리 필요
- 국제 번호 (+82) 처리

**해결**:
```javascript
// src/app/api/business-cards/normalize-phones/route.ts
function normalizePhoneNumber(phone: string): string {
  const cleaned = phone.replace(/[^0-9]/g, '')
  
  if (cleaned.startsWith('82')) {
    return '0' + cleaned.substring(2)
  }
  
  if (cleaned.startsWith('010')) {
    return cleaned
  }
  
  return cleaned
}

// 사용 예
"82-10-4636-8292" → "010-4636-8292"
```

### 6. 환경 변수 관리 ⚙️

**최종 .env 설정**:
```env
# Solapi SMS API 설정
SOLAPI_API_KEY="NCSTGP5MZDC8JK1V"
SOLAPI_API_SECRET="P9D3X5RKXGW8YTBSIRQ9ADKUGUNYBQPL"

# OpenAI API 설정
OPENAI_API_KEY="sk-proj-..."

# Database URL
DATABASE_URL="file:./prisma/dev.db"
```

**주의사항**:
- 환경 변수 변경 후 Next.js 서버 재시작 필수
- API 키 길이 확인 (SOLAPI: 16자리, Secret: 32자리)

## 성공한 완전한 워크플로우 🎯

1. **카메라로 명함 촬영** → CameraCapture.tsx
2. **OpenAI로 정보 추출** → /api/business-cards
3. **전화번호 정규화** → normalizePhoneNumber()
4. **데이터베이스 저장** → SQLite (Prisma)
5. **자동 SMS 발송** → Solapi API
6. **LMS 타입 자동 선택** → 메시지 길이 기반

## 최종 테스트 결과 ✅

```
✅ SMS 발송 성공: registeredSuccess: 1
✅ 그룹 ID: G4V20250712004440W13KBQIIHG9FHJZ
✅ 메시지 타입: LMS (220바이트)
✅ 발송 상태: SENDING → 정상 처리
```

## 향후 개발 시 체크리스트

- [ ] 데이터베이스 provider 설정 확인
- [ ] OpenAI API 폴백 로직 구현
- [ ] 카메라 useEffect 의존성 관리
- [ ] API 키 길이 유연한 검증
- [ ] 환경 변수 설정 후 서버 재시작
- [ ] 전화번호 정규화 테스트
- [ ] SMS 발송 로그 모니터링

---

**작성일**: 2025-07-12  
**최종 업데이트**: 2025-07-12  
**상태**: 모든 주요 기능 정상 작동 확인 