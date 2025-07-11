# 명함 저장 앱

휴대폰에서 명함을 촬영하고 AI로 정보를 추출하여 저장하고 문자를 발송할 수 있는 웹 애플리케이션입니다.

## 주요 기능

### 📸 명함 촬영 및 정보 추출
- 휴대폰 카메라로 명함 촬영
- ChatGPT Vision API를 통해 자동으로 회사명, 이름, 이메일, 연락처, 주소 추출
- 추출된 정보 수정 및 추가 메모 작성 가능

### 📋 명함 관리
- 명함 목록 조회
- 명함 정보 수정
- 추가 정보 필드 (만났던 내용, 특징, 상세 내용 등)

### 💬 문자 발송
- 저장된 명함 연락처로 문자 발송
- 3가지 문자 작성 방식:
  1. 직접 입력
  2. 미리 저장된 템플릿 사용
  3. AI 자동 작성 (명함 정보와 추가 메모 기반)

### 📝 템플릿 관리
- 자주 사용하는 문자 템플릿 저장
- 템플릿 추가/수정/삭제

## 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: SQLite (Prisma ORM)
- **AI**: OpenAI GPT-4o Vision API
- **SMS**: Solapi API
- **Deployment**: Vercel

## 환경 설정

### 1. 환경 변수 설정

`.env` 파일에 다음 환경 변수를 설정하세요:

```env
# Database
DATABASE_URL="file:./dev.db"

# OpenAI API
OPENAI_API_KEY="your-openai-api-key-here"

# Solapi SMS API
SOLAPI_API_KEY="your-solapi-api-key-here"
SOLAPI_API_SECRET="your-solapi-api-secret-here"
SOLAPI_PHONE_NUMBER="your-sender-phone-number-here"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"
```

### 2. API 키 발급

#### OpenAI API 키
1. [OpenAI 플랫폼](https://platform.openai.com/account/api-keys)에서 회원가입
2. API 키 생성
3. 결제 정보 등록 (Vision API 사용 시 필요)

#### Solapi SMS API 키
1. [Solapi 콘솔](https://console.solapi.com/)에서 회원가입
2. 프로젝트 생성 후 API 키 생성
3. 발신번호 등록 (SMS 발송 시 필요)

### 3. 설치 및 실행

```bash
# 의존성 설치
npm install

# 데이터베이스 설정
npx prisma migrate dev --name init

# 개발 서버 시작
npm run dev
```

## 사용 방법

### 1. 명함 촬영
- 메인 화면에서 "명함 촬영" 버튼 클릭
- 파일 선택 또는 카메라로 명함 촬영
- AI가 자동으로 명함 정보 추출

### 2. 명함 정보 수정
- 명함 카드의 수정 버튼 클릭
- 추출된 정보 수정 및 추가 메모 작성

### 3. 문자 발송
- 명함 카드의 문자 발송 버튼 클릭
- 문자 작성 방식 선택:
  - 직접 입력: 원하는 메시지 직접 작성
  - 템플릿 사용: 미리 저장된 템플릿 선택
  - AI 자동 작성: 명함 정보와 메모를 바탕으로 AI가 자동 작성

### 4. 템플릿 관리
- "템플릿 관리" 버튼 클릭
- 자주 사용하는 문자 템플릿 추가

## 개발 중 주의사항

### 환경 변수 보안
- `.env` 파일은 절대 Git에 커밋하지 마세요
- 프로덕션 환경에서는 안전한 방법으로 환경 변수를 관리하세요

### API 사용량
- OpenAI API는 사용량에 따라 비용이 발생합니다
- Solapi SMS API도 발송량에 따라 비용이 발생합니다

### 휴대폰 최적화
- 카메라 기능은 HTTPS 환경에서만 제대로 작동합니다
- 로컬 개발 시 `https://localhost` 설정을 권장합니다

## 배포

### Vercel 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 환경 변수 설정
Vercel 대시보드에서 환경 변수를 설정하세요:
- `OPENAI_API_KEY`
- `SOLAPI_API_KEY`
- `SOLAPI_API_SECRET`
- `SOLAPI_PHONE_NUMBER`
- `NEXTAUTH_SECRET`

## 문제 해결

### 명함 정보 추출이 안 될 때
- OpenAI API 키가 올바르게 설정되었는지 확인
- 이미지가 명확하고 텍스트가 읽기 쉬운지 확인
- 개발자 도구에서 네트워크 탭 확인

### 문자 발송이 안 될 때
- Solapi API 키와 시크릿이 올바르게 설정되었는지 확인
- 발신번호가 등록되었는지 확인
- 수신번호가 올바른 형식인지 확인 (010-1234-5678)

## 기여하기

1. 이 저장소를 포크하세요
2. 새 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
