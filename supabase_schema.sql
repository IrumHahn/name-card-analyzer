-- 명함 저장 앱 데이터베이스 스키마
-- Supabase 대시보드 SQL Editor에서 실행

-- CreateTable
CREATE TABLE "business_cards" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagePath" TEXT NOT NULL,
    "companyName" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "notes" TEXT,

    CONSTRAINT "business_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_templates" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "message_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_history" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "businessCardId" TEXT NOT NULL,
    "templateId" TEXT,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "message_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_profile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "companyName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "title" TEXT,

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "autoSendEnabled" BOOLEAN NOT NULL DEFAULT false,
    "autoSendTemplateId" TEXT,
    "defaultSenderPhone" TEXT,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "message_history" ADD CONSTRAINT "message_history_businessCardId_fkey" FOREIGN KEY ("businessCardId") REFERENCES "business_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_history" ADD CONSTRAINT "message_history_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "message_templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- 기본 데이터 삽입
INSERT INTO "message_templates" ("id", "createdAt", "updatedAt", "name", "content") VALUES 
  ('template1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '첫 만남 인사 메세지', '안녕하세요. 
오늘 만나뵈서 반가웠습니다.
제 정보 보내드립니다.

{연락처}'),
  ('template2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '명함 교환 감사 메세지', '안녕하세요. {이름}님!
오늘 만나서 너무 반갑습니다.
제 정보 간략히 보내드려요.

{이름} | {회사} | {직책}
📧 {이메일}
📞 {연락처}
🏢 {주소}

감사합니다!'); 