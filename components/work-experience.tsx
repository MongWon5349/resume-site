import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocalizedJob, uiCopy } from "@/content/site";
import { localizedPath, type Locale } from "@/lib/i18n";
import { Lines, Rich } from "@/components/rich-text";
import { SearchGrowthChart } from "@/components/search-growth-chart";
import { SiteFooter, SiteHeader } from "@/components/site-header";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateWorkMetadata(locale: Locale, params: PageProps["params"]): Promise<Metadata> {
  const { slug } = await params;
  const job = getLocalizedJob(locale, slug);
  if (!job) return {};
  const name = locale === "en" ? "Mengyuan Pang" : "庞梦媛";
  return {
    title: `${job.shortName} · ${name}`,
    description: job.summary || `${job.role} · ${job.period}`,
  };
}

export async function WorkExperience({ locale = "zh", params }: { locale?: Locale; params: PageProps["params"] }) {
  const { slug } = await params;
  const job = getLocalizedJob(locale, slug);
  const ui = uiCopy[locale];
  if (!job) notFound();

  const experienceOrder = ["wellcee", "infinisynapse"];
  const experienceIndex = experienceOrder.indexOf(job.slug);
  const previousJob = experienceIndex > 0 ? getLocalizedJob(locale, experienceOrder[experienceIndex - 1]) : undefined;
  const nextJob =
    experienceIndex >= 0 && experienceIndex < experienceOrder.length - 1
      ? getLocalizedJob(locale, experienceOrder[experienceIndex + 1])
      : undefined;

  const themeStyle = {
    background: job.theme.bg,
    color: job.theme.text,
    "--bg": job.theme.bg,
    "--header": job.theme.header,
    "--surface": job.theme.surface,
    "--text": job.theme.text,
    "--body": job.theme.body,
    "--muted": job.theme.muted,
    "--faint": job.theme.faint,
    "--accent": job.theme.accent,
    "--accent-fg": job.theme.accentFg,
    "--line": job.theme.line,
    "--result": job.theme.result,
  } as CSSProperties;

  return (
    <div className="min-h-screen" style={themeStyle}>
      <style>{`body{background:${job.theme.bg};color:${job.theme.text}}`}</style>
      <SiteHeader toned locale={locale} pathname={localizedPath(locale, `/work/${job.slug}`)} />
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-10">
        <Link href={localizedPath(locale, "/#experience")} className="theme-button px-4 py-2">
          {ui.back}
        </Link>
        <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 sm:gap-x-10">
          <p className="col-start-1 row-start-1 text-sm text-[var(--muted)]">{job.period}</p>
          <h1 className="col-start-1 row-start-2 mt-4 text-4xl leading-tight tracking-tight text-[var(--text)] sm:text-6xl">
            {job.shortName}
          </h1>
          <p className="col-span-2 col-start-1 row-start-3 mt-5 text-lg text-[var(--body)] sm:col-span-1">
            {job.role}
            <span className="px-2 text-[var(--faint)]">·</span>
            {job.company}
          </p>
          {job.logo ? (
            <img
              src={job.logo}
              alt={`${job.shortName} logo`}
              className={`col-start-2 row-start-1 row-span-2 h-32 w-32 self-center sm:row-span-3 sm:h-72 sm:w-72 ${
                job.logoBlend === "screen"
                  ? "object-contain mix-blend-screen"
                  : "rounded-2xl object-cover shadow-[0_10px_28px_rgba(20,180,184,0.28)]"
              }`}
            />
          ) : null}
        </div>
        {job.summary ? <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">{job.summary}</p> : null}
        <dl className="mt-10 grid grid-cols-1 items-start gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
          {job.highlights.map((item) => (
            <div key={item.label} className="bg-[var(--bg)] px-5 py-5">
              <dt className="text-2xl text-[var(--accent)]">{item.value}</dt>
              <dd className="mt-1 text-sm text-[var(--muted)]">{item.label}</dd>
            </div>
          ))}
          {job.lines ? (
            <div className="col-span-full bg-[var(--bg)] px-5 py-4">
              <Lines
                lines={job.lines}
                className="flex flex-wrap gap-x-6 gap-y-1 text-[15px] leading-7 text-[var(--body)] [&>li]:whitespace-nowrap"
              />
            </div>
          ) : null}
        </dl>

        <div className="mt-14 space-y-6">
          {job.blocks.map((block) => (
            <section key={block.title} id={block.title} className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] px-6 py-7 sm:px-8">
              <h2 className="text-2xl tracking-tight text-[var(--text)]">{block.title}</h2>
              {block.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-[15px] leading-8 text-[var(--body)]">
                  <Rich parts={paragraph} />
                </p>
              ))}
              {block.posterColumns ? (
                <div className="mt-5 grid grid-cols-2 items-start gap-x-4 gap-y-2">
                  {block.posterColumns.map((column) => (
                    <img
                      key={`${column.href}-poster`}
                      src={column.src}
                      alt={column.label.replaceAll("\n", "")}
                      className="mx-auto block max-h-72 w-auto max-w-full rounded-xl border border-[var(--line)]"
                    />
                  ))}
                  {block.posterColumns.map((column) => (
                    <a
                      key={`${column.href}-label`}
                      href={column.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-[11px] leading-4 text-[var(--accent)] underline sm:text-sm sm:leading-5"
                    >
                      {column.label.split("\n").map((part, index) => (
                        <span key={part}>
                          {index > 0 ? <br className="sm:hidden" /> : null}
                          {part}
                        </span>
                      ))}
                    </a>
                  ))}
                  {block.posterColumns.map((column) =>
                    column.banner ? (
                      <a
                        key={`${column.href}-banner`}
                        href={column.banner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-xl border border-[var(--line)] no-underline"
                      >
                        <span className="relative block aspect-video">
                          <img
                            src={column.banner.src}
                            alt={column.banner.title}
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute inset-y-0 right-[18%] flex items-center">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm text-black">
                              ▶
                            </span>
                          </span>
                        </span>
                        <span className="block px-2.5 py-2 text-center text-xs leading-5 text-[var(--text)]">
                          {column.banner.title}
                        </span>
                      </a>
                    ) : (
                      <div key={`${column.href}-banner`} />
                    ),
                  )}
                  {block.posterColumns.map((column) =>
                    column.lines ? (
                      <Lines
                        key={`${column.href}-lines`}
                        lines={column.lines}
                        className="space-y-2 text-[13px] leading-6 text-[var(--body)] sm:text-[15px] sm:leading-7"
                      />
                    ) : (
                      <div key={`${column.href}-lines`} />
                    ),
                  )}
                </div>
              ) : null}
              {block.profiles ? (
                <div
                  className={`mt-5 grid grid-cols-2 gap-x-3 gap-y-5 ${
                    block.profiles.length > 2 ? "sm:grid-cols-5" : "max-w-sm"
                  }`}
                >
                  {block.profiles.map((profile) => (
                    <div key={profile.id} className="min-w-0 text-center">
                      <a href={profile.href} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <img
                          src={profile.src}
                          alt={profile.id}
                          className="mx-auto h-16 w-16 rounded-full object-cover"
                        />
                      </a>
                      <a
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block break-all text-sm leading-5 text-[var(--accent)] underline"
                      >
                        {profile.id}
                      </a>
                      {profile.followers ? (
                        <p className="mt-0.5 text-xs leading-5 text-[var(--body)]">{profile.followers}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
              {block.lines ? <Lines lines={block.lines} /> : null}
              {block.posters ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {block.posters.map((poster) => (
                    <a
                      key={poster.href}
                      href={poster.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-40 overflow-hidden rounded-xl border border-[var(--line)] no-underline sm:w-52"
                    >
                      <span className="relative block aspect-video">
                        <img src={poster.src} alt={poster.title} className="h-full w-full object-cover object-top" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-sm text-white">
                            ▶
                          </span>
                        </span>
                      </span>
                      <span className="block whitespace-pre-line px-2.5 py-2 text-xs leading-5 text-[var(--text)]">{poster.title}</span>
                    </a>
                  ))}
                </div>
              ) : null}
              {block.result ? (
                <p className="mt-5 rounded-2xl bg-[var(--result)] px-4 py-3 text-[15px] leading-7 text-[var(--text)]">
                  <span>{ui.result}</span>
                  <Rich parts={block.result} />
                </p>
              ) : null}
              {block.searchChart ? <SearchGrowthChart locale={locale} /> : null}
            </section>
          ))}
        </div>

        <nav className="mt-12 flex flex-wrap items-center justify-between gap-3">
          {previousJob ? (
            <Link
              href={localizedPath(locale, `/work/${previousJob.slug}`)}
              className="theme-button gap-3 px-5 py-3"
            >
              <span aria-hidden>←</span>
              <span>
                {ui.previous}
                <span className="mt-0.5 block text-xs opacity-70">{previousJob.shortName}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {nextJob ? (
            <Link
              href={localizedPath(locale, `/work/${nextJob.slug}`)}
              className="theme-button gap-3 px-5 py-3 text-right"
            >
              <span>
                {ui.next}
                <span className="mt-0.5 block text-xs opacity-70">{nextJob.shortName}</span>
              </span>
              <span aria-hidden>→</span>
            </Link>
          ) : null}
        </nav>
      </main>
      <SiteFooter toned locale={locale} />
    </div>
  );
}
