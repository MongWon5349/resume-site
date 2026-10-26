"use client";

import { useEffect, useRef, useState } from "react";
import { Timeline } from "@/components/timeline";
import { VisualGallery } from "@/components/visual-gallery";
import type { homeChapters, timelinePeriods, visualWorks } from "@/content/resume";
import type { UiCopy } from "@/content/site";

type Period = (typeof timelinePeriods)[number];
type Chapter = (typeof homeChapters)[number];
type Work = (typeof visualWorks)[number];

export function ExperienceSwitcher({
  periods,
  chapters,
  works,
  ui,
}: {
  periods: Period[];
  chapters: Chapter[];
  works: Work[];
  ui: Pick<UiCopy, "experience" | "viewChapter" | "toBeContinued" | "videos" | "posters" | "close">;
}) {
  const [activeId, setActiveId] = useState(periods[periods.length - 1]?.id ?? chapters[0]?.id ?? "");
  const pendingScroll = useRef<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      if (!chapters.some((chapter) => chapter.id === id)) return;
      const node = document.getElementById(id);
      if (node && !node.classList.contains("hidden")) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      pendingScroll.current = id;
      setActiveId(id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [chapters]);

  useEffect(() => {
    if (pendingScroll.current !== activeId) return;
    pendingScroll.current = null;
    document.getElementById(activeId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeId]);

  return (
    <>
      <section id="experience" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-banner">{ui.experience}</h2>
          <div className="mt-8">
            <Timeline periods={periods} ui={ui} activeId={activeId} onActiveChange={setActiveId} />
          </div>
        </div>
      </section>

      {chapters.map((chapter) => {
        const selected = chapter.id === activeId;
        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`scroll-mt-24 px-5 py-16 sm:px-8 lg:px-16 lg:py-14 ${selected ? "" : "hidden"}`}
          >
            <div className="mx-auto max-w-6xl">
              <p className="text-sm tracking-wide text-white/45">{chapter.market}</p>
              <h2 className="section-banner mt-3">{chapter.company}</h2>
              <p className="mt-4 text-white/70">
                {chapter.role} · {chapter.period}
              </p>
              <p className="mt-3 max-w-2xl leading-8 text-white/60">{chapter.summary}</p>
              <ul className="mt-8 border-y border-white/10">
                {chapter.items.map((item) => (
                  <li key={item.skill} className="grid gap-1 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <h3 className="text-lg tracking-tight">{item.skill}</h3>
                    <p className="leading-7 text-white/70">{item.result}</p>
                  </li>
                ))}
              </ul>
              <a href={chapter.href} className="chapter-link mt-6">
                <span>{ui.viewChapter.replace(/\s*→\s*$/, "")}</span>
                <span className="chapter-link__arrow" aria-hidden="true">→</span>
              </a>
              <VisualGallery works={works.filter((work) => work.company === chapter.id)} ui={ui} />
            </div>
          </section>
        );
      })}
    </>
  );
}
