import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/content/resume";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const title = "庞梦媛 · AI 产品增长 / 整体运营";

export const metadata: Metadata = {
  title,
  description: profile.summary,
  openGraph: {
    title,
    description: profile.summary,
    locale: "zh_CN",
    type: "profile",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=location.pathname==="/en"||location.pathname.startsWith("/en/")?"en":"zh-CN"`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
