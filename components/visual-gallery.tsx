"use client";

import { useEffect, useState } from "react";
import { visualWorks } from "@/content/resume";
import type { UiCopy } from "@/content/site";

type Work = (typeof visualWorks)[number];

function WorkMedia({ work, frame }: { work: Work; frame: string }) {
  return work.src.endsWith(".mp4") ? (
    <video
      src={work.src}
      poster="/hackathon/overseas-video.png"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`${frame} w-full transition duration-700 ease-out group-hover:brightness-[0.58]`}
    />
  ) : (
    <img
      src={work.src}
      alt={work.title}
      className={`${frame} w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-[0.58]`}
    />
  );
}

function WorkCaption({ work }: { work: Work }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
        <p className="text-[10px] text-white/60 sm:text-xs">{work.category}</p>
        <h4 className="mt-1 whitespace-pre-line text-sm font-medium tracking-tight text-white">{work.title}</h4>
      </div>
    </>
  );
}

export function VisualGallery({ works, ui }: { works: Work[]; ui: Pick<UiCopy, "videos" | "posters" | "close"> }) {
  const videos = works.filter((work) => work.kind === "video" || work.src.endsWith(".mp4"));
  const posters = works.filter((work) => work.kind !== "video" && !work.src.endsWith(".mp4"));
  const [open, setOpen] = useState<Work | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="mt-10">
      {videos.length > 0 ? <h3 className="visual-kind">{ui.videos}</h3> : null}
      {videos.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {videos.map((work) => (
            <a
              key={work.src}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative block overflow-hidden rounded-2xl border border-white/15 bg-black no-underline ${work.src.endsWith(".mp4") ? "col-span-2" : ""}`}
            >
              <WorkMedia work={work} frame="aspect-video" />
              <WorkCaption work={work} />
              <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-sm text-white transition group-hover:bg-white group-hover:text-black">
                ▶
              </span>
            </a>
          ))}
        </div>
      ) : null}

      {posters.length > 0 ? <h3 className={`visual-kind ${videos.length > 0 ? "mt-12" : ""}`}>{ui.posters}</h3> : null}
      {posters.length > 0 ? <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {posters.map((work) => (
          <button
            key={work.src}
            type="button"
            onClick={() => setOpen(work)}
            className="group relative block cursor-zoom-in overflow-hidden rounded-2xl border border-white/15 bg-black text-left"
          >
            <WorkMedia work={work} frame="aspect-[3/4]" />
            <WorkCaption work={work} />
            <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-white text-sm text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              +
            </span>
          </button>
        ))}
      </div> : null}

      {open ? (
        <div
          className="fixed inset-0 z-[80] overflow-y-auto bg-black/92 px-4 py-16 sm:px-10"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label={ui.close}
            className="fixed right-5 top-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black"
            onClick={() => setOpen(null)}
          >
            ×
          </button>
          <figure className="mx-auto w-[min(94vw,56rem)]" onClick={(event) => event.stopPropagation()}>
            <img src={open.src} alt={open.title} className="h-auto w-full" />
            <figcaption className="mt-4 text-center text-sm text-white/75">{open.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
