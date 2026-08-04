import type { Metadata } from "next";
import "@flaticon/flaticon-uicons/css/regular/rounded.css";
import "@flaticon/flaticon-uicons/css/brands/all.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medical-fullstack-portfolio.kikyehaksp.chatgpt.site";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chanyu's Portfolio | Full-stack Developer",
  description: "소개, 기술, 아카이브, 프로젝트와 커리어를 담은 프론트엔드 중심 풀스택 개발자 포트폴리오",
  openGraph: {
    title: "Chanyu's Portfolio",
    description: "Medical Imaging · DICOM/PACS · Edge AI",
    url: siteUrl,
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1733, height: 909, alt: "개발자 포트폴리오" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanyu's Portfolio",
    description: "Medical Imaging · DICOM/PACS · Edge AI",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
