export type Locale = "zh" | "en";

export function otherLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export function localizedPath(locale: Locale, path: string) {
  const [pathname, hash = ""] = path.split("#");
  const suffix = hash ? `#${hash}` : "";
  if (locale === "zh") return `${pathname || "/"}${suffix}`;
  if (pathname === "/" || pathname === "") return `/en${suffix}`;
  return `/en${pathname}${suffix}`;
}

export function switchedPath(locale: Locale, pathname: string) {
  if (locale === "en") {
    const next = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    return next;
  }
  if (pathname === "/") return "/en";
  return `/en${pathname}`;
}
