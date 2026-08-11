import type { Metadata } from "next";
import "@flaticon/flaticon-uicons/css/regular/rounded.css";
import "@flaticon/flaticon-uicons/css/brands/all.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medical-fullstack-portfolio.kikyehaksp.chatgpt.site";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chanyu's Portfolio | Full-stack Developer",
  description: "의료영상, AI, 웹·앱 및 현장 운영 시스템 개발 경험을 담은 풀스택 개발자 포트폴리오",
  openGraph: {
    title: "Chanyu's Portfolio",
    description: "Medical Imaging · Full-stack · AI · PWA",
    url: siteUrl,
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1733, height: 909, alt: "개발자 포트폴리오" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanyu's Portfolio",
    description: "Medical Imaging · Full-stack · AI · PWA",
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
