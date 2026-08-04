import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Portfolio | Medical Imaging & Full-stack",
  description: "의료영상과 현장 운영 제품을 구현한 프론트엔드 중심 풀스택 개발자 포트폴리오",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
