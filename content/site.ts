import {
  education,
  homeChapters,
  homeMetrics,
  homeProjects,
  homeSkills,
  jobs,
  profile,
  timelinePeriods,
  visualWorks,
  type Job,
} from "@/content/resume";
import { enDict } from "@/content/en-dict";
import { localizedPath, type Locale } from "@/lib/i18n";

const routePrefixes = ["/work/wellcee", "/work/infinisynapse"];

export const uiCopy = {
  zh: {
    nav: [
      { href: "#infinisynapse", label: "InfiniSynapse" },
      { href: "#wellcee", label: "Wellcee" },
      { href: "#contact", label: "联系" },
    ],
    hero: "AI 产品增长 · 全栈运营 · ENFJ · 巨蟹座",
    portraitAlt: "庞梦媛的照片",
    experience: "经历",
    education: "教育",
    skills: "技能",
    results: "结果",
    visuals: "视觉作品",
    contact: "联系",
    xiaohongshu: "小红书 · Mong Won",
    twitter: "Twitter / X · mengyuan P (@mengyuan5349)",
    videos: "视频",
    posters: "海报设计",
    close: "关闭",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toBeContinued: "故事续写中...",
    viewChapter: "查看这段经历 →",
    back: "← 回到首页经历",
    result: "效果：",
    previous: "查看上一段经历",
    next: "查看下一段经历",
    updated: "简历更新于",
    chartTitle: "Google 搜索增长 · 2026 年 6–9 月",
    chartY: "纵轴：指数（6月 = 100）",
    chartX: "横轴：月份",
    chartAria: "2026 年 6 月到 9 月的搜索增长。横轴单位是月份，纵轴单位是指数，6 月等于 100。",
    chartBaseline: "起点 100",
    chartNote:
      "纵轴单位是指数，6 月 = 100。9 月点击指数 667，是 6 月的 6.7 倍；展示指数 8 月 1,271（12.7 倍），9 月 934（9.3 倍）；点击率指数 9 月为 71。来源：Google Search Console。",
    months: ["6月", "7月", "8月", "9月"],
    clicks: "点击次数",
    impressions: "展示次数",
    ctr: "点击率",
  },
  en: {
    nav: [
      { href: "#infinisynapse", label: "InfiniSynapse" },
      { href: "#wellcee", label: "Wellcee" },
      { href: "#contact", label: "Contact" },
    ],
    hero: "AI Product Growth · Full-stack Operations · ENFJ · Cancer",
    portraitAlt: "Portrait of Mengyuan Pang",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    results: "Results",
    visuals: "Visual work",
    contact: "Contact",
    xiaohongshu: "Rednote · Mong Won",
    twitter: "X · mengyuan P (@mengyuan5349)",
    videos: "Video",
    posters: "Posters",
    close: "Close",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toBeContinued: "To be continued...",
    viewChapter: "View this chapter →",
    back: "← Back to experience",
    result: "Result: ",
    previous: "Previous chapter",
    next: "Next chapter",
    updated: "Resume updated",
    chartTitle: "Google Search growth · Jun–Sep 2026",
    chartY: "Y: index (Jun = 100)",
    chartX: "X: month",
    chartAria: "Search growth from June to September 2026. The x-axis is months and the y-axis is an index, with June equal to 100.",
    chartBaseline: "Baseline 100",
    chartNote:
      "The y-axis is an index, June = 100. September clicks reached 667, 6.7× June. Impressions peaked at 1,271 in August (12.7×) and were 934 in September (9.3×). The September CTR index was 71. Source: Google Search Console.",
    months: ["Jun", "Jul", "Aug", "Sep"],
    clicks: "Clicks",
    impressions: "Impressions",
    ctr: "CTR",
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type UiCopy = Widen<(typeof uiCopy)["zh"]>;

function localizeHref(href: string, locale: Locale) {
  if (locale === "zh") return href;
  if (href.startsWith("/#") || href === "/") return localizedPath("en", href);
  if (routePrefixes.some((prefix) => href === prefix || href.startsWith(`${prefix}#`))) return localizedPath("en", href);
  return href;
}

function translateNode(value: unknown, locale: Locale, key?: string): unknown {
  if (locale === "zh") return value;
  if (typeof value === "string") {
    if (key === "href" || key === "labelHref" || key === "src" || key === "logo") return localizeHref(value, locale);
    return enDict[value] ?? value;
  }
  if (Array.isArray(value)) return value.map((item) => translateNode(item, locale));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([childKey, child]) => [childKey, translateNode(child, locale, childKey)]));
  }
  return value;
}

export function getSite(locale: Locale) {
  const ui = uiCopy[locale];
  return {
    locale,
    ui,
    profile: translateNode(profile, locale) as typeof profile,
    homeSkills: translateNode(homeSkills, locale) as typeof homeSkills,
    homeMetrics: translateNode(homeMetrics, locale) as typeof homeMetrics,
    homeProjects: translateNode(homeProjects, locale) as typeof homeProjects,
    homeChapters: translateNode(homeChapters, locale) as typeof homeChapters,
    education: translateNode(education, locale) as typeof education,
    visualWorks: translateNode(visualWorks, locale) as typeof visualWorks,
    timelinePeriods: translateNode(timelinePeriods, locale) as typeof timelinePeriods,
    jobs: translateNode(jobs, locale) as Job[],
  };
}

export function getLocalizedJob(locale: Locale, slug: string) {
  return getSite(locale).jobs.find((job) => job.slug === slug);
}
