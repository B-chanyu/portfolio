import type { Metadata } from "next";
import { headers } from "next/headers";
import "@flaticon/flaticon-uicons/css/regular/rounded.css";
import "@flaticon/flaticon-uicons/css/brands/all.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const imageUrl = `${origin}/og.png`;

  return {
    title: "찬유의 포트폴리오 | Full-stack Developer",
    description: "소개, 기술, 아카이브, 프로젝트와 커리어를 담은 프론트엔드 중심 풀스택 개발자 포트폴리오",
    openGraph: {
      title: "찬유의 포트폴리오",
      description: "Medical Imaging · DICOM/PACS · Edge AI",
      url: origin,
      type: "website",
      images: [{ url: imageUrl, width: 1733, height: 909, alt: "개발자 포트폴리오" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "찬유의 포트폴리오",
      description: "Medical Imaging · DICOM/PACS · Edge AI",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
