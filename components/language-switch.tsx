"use client";

import { useEffect } from "react";
import Link from "next/link";
import { switchedPath, type Locale } from "@/lib/i18n";

export function LanguageSwitch({
  locale,
  pathname,
  tone = "nav",
}: {
  locale: Locale;
  pathname: string;
  tone?: "nav" | "header";
}) {
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [locale]);

  const zhHref = locale === "zh" ? pathname : switchedPath(locale, pathname);
  const enHref = locale === "en" ? pathname : switchedPath(locale, pathname);
  const active = tone === "header" ? "bg-[var(--accent,#fff)] text-[var(--accent-fg,#000)]" : "bg-[#f03434] text-white";
  const idle = tone === "header" ? "text-[var(--muted,#a3a3a3)] hover:text-[var(--text,#fff)]" : "text-black hover:bg-black/5";
  const shell = tone === "header" ? "border border-[var(--line,rgb(255_255_255/0.16))]" : "";

  return (
    <div className={`flex items-center rounded-full p-0.5 text-sm font-medium ${shell}`}>
      <Link href={zhHref} hrefLang="zh-CN" className={`rounded-full px-3 py-2 no-underline ${locale === "zh" ? active : idle}`}>
        中文
      </Link>
      <Link href={enHref} hrefLang="en" className={`rounded-full px-3 py-2 no-underline ${locale === "en" ? active : idle}`}>
        EN
      </Link>
    </div>
  );
}
