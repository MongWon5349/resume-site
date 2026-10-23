"use client";

import { useState } from "react";
import Link from "next/link";
import { timelinePeriods } from "@/content/resume";
import type { UiCopy } from "@/content/site";
import { Girl } from "@/components/girl";

const padStart = 8;
const padEnd = 16;

function place(t: number) {
  return padStart + t * (100 - padStart - padEnd);
}

function midpoint(start: number, end: number) {
  return (start + end) / 2;
}

export function Timeline({ periods = timelinePeriods, ui }: { periods?: typeof timelinePeriods; ui: Pick<UiCopy, "toBeContinued" | "viewChapter"> }) {
  const [activeId, setActiveId] = useState(periods[periods.length - 1].id);
  const active = periods.find((period) => period.id === activeId) ?? periods[0];
  const activeAt = place(midpoint(active.start, active.end));
  const cardAt = Math.min(78, Math.max(24, activeAt));

  return (
    <div>
      <div className="relative hidden w-full lg:left-1/2 lg:block lg:w-[calc(100%+6rem)] lg:-translate-x-1/2">
        <div className="relative h-52">
          <div className="timeline-move absolute bottom-4 transition-[left] duration-700 ease-[cubic-bezier(.22,.61,.36,1)]" style={{ left: `${activeAt}%` }}>
            <div className="-translate-x-1/2">
              <Girl className="h-44 w-auto" />
              <div className="mx-auto -mt-1 h-2.5 w-16 rounded-full bg-[#f4efe6]" />
            </div>
          </div>
        </div>

        <div className="relative -my-4 py-4">
          <div className="h-px bg-white/15" />
          {periods.map((period) => (
            <span
              key={period.id}
              className={`absolute top-1/2 h-0.5 -translate-y-1/2 ${period.id === active.id ? "bg-white" : "bg-white/40"}`}
              style={{ left: `${place(period.start)}%`, width: `${place(period.end) - place(period.start)}%` }}
            />
          ))}
          {periods.map((period) => {
            const at = place(midpoint(period.start, period.end));
            const selected = period.id === active.id;
            return (
              <button
                key={period.id}
                type="button"
                className="group/node absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${at}%` }}
                aria-pressed={selected}
                onClick={() => setActiveId(period.id)}
              >
                <span
                  className={`block rounded-full border-2 border-white transition duration-200 group-hover/node:scale-125 group-hover/node:border-[#f03434]! group-hover/node:bg-[#f03434]! ${selected ? "h-4 w-4 bg-white" : "h-3 w-3 bg-black"}`}
                />
                <span
                  className={`absolute left-1/2 top-6 w-max max-w-[9rem] -translate-x-1/2 whitespace-pre-line text-center text-sm leading-5 transition-colors duration-200 group-hover/node:text-[#f03434] ${selected ? "text-white" : "text-white/45"}`}
                >
                  {period.markerLabel ?? period.title}
                </span>
              </button>
            );
          })}
          <div className="absolute right-0 top-1/2 text-right">
            <svg
              viewBox="0 0 28 12"
              aria-hidden="true"
              className="h-3 w-7 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 6h26M21 1l5 5-5 5" />
            </svg>
            <span className="absolute right-0 top-4 block whitespace-nowrap text-xs text-white/45">{ui.toBeContinued}</span>
          </div>
        </div>

        <div className="relative mt-24 h-36">
          <article
            className="timeline-move absolute w-[min(26rem,70%)] -translate-x-1/2 transition-[left] duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{ left: `${cardAt}%` }}
          >
            <PeriodCard period={active} viewChapter={ui.viewChapter} />
          </article>
        </div>
      </div>

      <ol className="space-y-3 lg:hidden">
        {periods.map((period) => {
          const selected = period.id === active.id;
          return (
            <li key={period.id}>
              <button
                type="button"
                className="group/node flex w-full items-center gap-4 text-left"
                aria-pressed={selected}
                onClick={() => setActiveId(period.id)}
              >
                <span
                  className={`h-3 w-3 shrink-0 rounded-full border-2 border-white transition duration-200 group-hover/node:scale-125 group-hover/node:border-[#f03434] group-hover/node:bg-[#f03434] ${selected ? "bg-white" : "bg-transparent"}`}
                />
                <span>
                  <span className="block text-xs text-white/45 transition-colors duration-200 group-hover/node:text-[#f03434]">{period.years}</span>
                  <span className={`whitespace-pre-line text-lg transition-colors duration-200 group-hover/node:text-[#f03434] ${selected ? "text-white" : "text-white/55"}`}>
                    {period.markerLabel ?? period.title}
                  </span>
                </span>
              </button>
              {selected ? (
                <div className="mt-4 flex items-end gap-4 pl-7">
                  <div className="shrink-0">
                    <Girl className="h-28 w-auto" />
                    <div className="mx-auto h-2 w-10 rounded-full bg-[#f4efe6]" />
                  </div>
                  <PeriodCard period={period} viewChapter={ui.viewChapter} />
                </div>
              ) : null}
            </li>
          );
        })}
        <li className="flex items-center gap-3 pl-1 pt-3 text-sm text-white/45">
          <span className="text-xl text-white">→</span>
          <span>{ui.toBeContinued}</span>
        </li>
      </ol>
    </div>
  );
}

function PeriodCard({ period, viewChapter }: { period: (typeof timelinePeriods)[number]; viewChapter: string }) {
  return (
    <div>
      <p className="text-sm text-white/45">{period.years}</p>
      <h3 className="mt-2 text-3xl tracking-tight">{period.title}</h3>
      <p className="mt-2 text-white/70">{period.role}</p>
      {period.summary ? <p className="mt-3 max-w-sm leading-7 text-white/60">{period.summary}</p> : null}
      {period.href ? (
        <Link href={period.href} className="mt-4 inline-block text-sm text-white no-underline transition-colors duration-200 hover:text-[#f03434]">
          {viewChapter}
        </Link>
      ) : null}
    </div>
  );
}
