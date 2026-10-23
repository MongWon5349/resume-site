"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/resume";
import { uiCopy } from "@/content/site";
import { localizedPath, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";

function itemClass(active: boolean, layout: string) {
  return `${layout} no-underline ${active ? "bg-[#f03434] text-white" : "text-black hover:bg-black/5"}`;
}

export function Chrome({ locale = "zh" }: { locale?: Locale }) {
  const links = uiCopy[locale].nav;
  const home = localizedPath(locale, "/");
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 48);
      if (y > last) setOpen(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = links
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => node instanceof Element);
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-28% 0px -52% 0px", threshold: [0.15, 0.35, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const shift = hidden ? "-translate-y-[calc(100%+2rem)] opacity-0 pointer-events-none" : "translate-y-0 opacity-100";

  return (
    <>
      <a
        href={`${home}#top`}
        className={`fixed left-5 top-5 z-50 text-sm font-medium tracking-wide text-white no-underline transition duration-500 ease-[cubic-bezier(.22,.61,.36,1)] sm:left-8 sm:top-7 ${shift}`}
      >
        {locale === "en" ? "Mengyuan Pang" : profile.name}
      </a>

      <div className="fixed right-6 top-6 z-50 sm:right-10 sm:top-8">
        <div className="relative hidden sm:block">
          <span className="nav-burst nav-burst-stroke" aria-hidden />
          <span className="nav-burst nav-burst-fill" aria-hidden />
          <nav className="relative z-10 flex items-center gap-1 p-1.5 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={itemClass(active === link.href, "rounded-full px-4 py-2")}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitch locale={locale} pathname={home} />
          </nav>
        </div>

        <div className="relative flex items-center gap-2 sm:hidden">
          <div className="rounded-full bg-white px-1 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            <LanguageSwitch locale={locale} pathname={home} />
          </div>
          <div className="relative">
            <span className="nav-burst-round nav-burst-stroke" aria-hidden />
            <span className="nav-burst-round nav-burst-fill" aria-hidden />
            <button
              type="button"
              className="relative z-10 flex h-12 w-12 items-center justify-center"
              aria-expanded={open}
              aria-label={open ? uiCopy[locale].closeMenu : uiCopy[locale].openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className={`block h-0.5 w-full bg-black transition ${open ? "translate-y-1 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-full bg-black transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
          {open ? (
            <div className="absolute right-0 top-full mt-3 w-36">
              <span className="nav-burst-card nav-burst-stroke" aria-hidden />
              <span className="nav-burst-card nav-burst-fill" aria-hidden />
              <nav className="relative z-10 p-2 text-sm font-medium">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={active === link.href ? "true" : undefined}
                    className={itemClass(active === link.href, "block rounded-2xl px-4 py-3")}
                    onClick={() => {
                      setActive(link.href);
                      setOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
