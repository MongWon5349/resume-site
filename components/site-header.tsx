import Link from "next/link";
import { profile } from "@/content/resume";
import { uiCopy } from "@/content/site";
import { localizedPath, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";

export function SiteHeader({ toned = false, locale = "zh", pathname = "/" }: { toned?: boolean; locale?: Locale; pathname?: string }) {
  const ui = uiCopy[locale];
  const home = localizedPath(locale, "/");
  if (toned) {
    return (
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--header)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-3 px-5 py-4">
          <Link href={home} className="mr-auto text-sm tracking-wide text-[var(--text)] no-underline">
            {locale === "en" ? "Mengyuan Pang" : profile.name}
          </Link>
          <nav className="order-3 flex w-full flex-wrap items-center gap-2 sm:order-none sm:w-auto">
            {ui.nav.map((link) => (
              <Link key={link.href} href={`${home}${link.href}`} className="theme-button px-4 py-2">
                {link.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitch locale={locale} pathname={pathname} tone="header" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#1c1c1c]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-3 px-5 py-4">
        <Link href={home} className="mr-auto text-sm tracking-wide no-underline">
          {locale === "en" ? "Mengyuan Pang" : profile.name}
        </Link>
        <nav className="order-3 flex w-full flex-wrap items-center gap-2 sm:order-none sm:w-auto">
          {ui.nav.map((link) => (
            <Link key={link.href} href={`${home}${link.href}`} className="theme-button px-4 py-2">
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitch locale={locale} pathname={pathname} tone="header" />
      </div>
    </header>
  );
}

export function SiteFooter({ toned = false, locale = "zh" }: { toned?: boolean; locale?: Locale }) {
  const ui = uiCopy[locale];
  if (toned) {
    return (
      <footer id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            <a href={`mailto:${profile.email}`} className="text-[var(--accent)] underline">
              {profile.email}
            </a>
          </p>
          <p>
            {ui.updated} {profile.updated}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-[#a19e97] sm:flex-row sm:items-center sm:justify-between">
        <p>
          <a href={`mailto:${profile.email}`} className="underline">
            {profile.email}
          </a>
        </p>
        <p>
          {ui.updated} {profile.updated}
        </p>
      </div>
    </footer>
  );
}
