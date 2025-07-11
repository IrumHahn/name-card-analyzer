// 파일 업로드 제한
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

// SMS 제한
export const MAX_SMS_LENGTH = 2000 // 한글 기준 약 90자

// 데이터베이스 제한
export const MAX_BUSINESS_CARD_NOTES_LENGTH = 1000
export const MAX_TEMPLATE_NAME_LENGTH = 50
export const MAX_TEMPLATE_CONTENT_LENGTH = 500

// 기본 메시지 템플릿
export const DEFAULT_TEMPLATES = [
  {
    name: '인사 메시지',
    content: '안녕하세요! 오늘 만나서 반가웠습니다. 앞으로 좋은 인연 부탁드립니다.',
  },
  {
    name: '비즈니스 팔로업',
    content: '안녕하세요! 오늘 논의했던 건에 대해 추가로 궁금한 점이 있으시면 언제든 연락주세요.',
  },
  {
    name: '감사 인사',
    content: '오늘 귀중한 시간 내어 만나주셔서 감사합니다. 좋은 하루 되세요!',
  },
] 