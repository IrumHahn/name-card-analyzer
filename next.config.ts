import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 이미지 최적화 설정
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 빌드 시 ESLint 건너뛰기 (Prisma 생성 파일 오류 방지)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 빌드 시 TypeScript 타입 체크 건너뛰기
  typescript: {
    ignoreBuildErrors: true,
  },
} as any;

export default nextConfig;
