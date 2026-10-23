import type { Inline, LinkLine } from "@/content/resume";

export function Rich({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, index) =>
        part.kind === "text" ? (
          <span key={index}>{part.text}</span>
        ) : (
          <a key={index} href={part.href} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline">
            {part.label}
          </a>
        ),
      )}
    </>
  );
}

export function Lines({ lines, className }: { lines: LinkLine[]; className?: string }) {
  return (
    <ul className={className ?? "mt-4 space-y-2 text-[15px] leading-7 text-[var(--body)]"}>
      {lines.map((line) => (
        <li
          key={`${line.label ?? ""}-${line.items.map((item) => item.href).join()}`}
          className={line.thumb ? "flex items-center gap-3" : undefined}
        >
          {line.thumb && line.labelHref ? (
            <a
              href={line.labelHref}
              className="relative block h-20 w-14 shrink-0 overflow-hidden rounded-lg"
              {...(line.labelHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <img src={line.thumb} alt={line.label ?? ""} className="h-full w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[10px] text-black">
                  ▶
                </span>
              </span>
            </a>
          ) : null}
          <span className={line.thumb ? "min-w-0" : undefined}>
          {line.label ? (
            line.labelHref ? (
              <>
                <a
                  href={line.labelHref}
                  className="text-[var(--accent)] underline"
                  {...(line.labelHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {line.label}
                </a>
                {line.items.length || line.note ? "：" : null}
              </>
            ) : (
              <span className="text-[var(--faint)]">{line.label}：</span>
            )
          ) : null}
          {line.items.map((item, index) => {
            const external = item.href.startsWith("http");
            return (
              <span key={item.href}>
                {index > 0 ? " · " : null}
                <a
                  href={item.href}
                  className="text-[var(--accent)] underline"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </a>
              </span>
            );
          })}
          {line.note ? <span>{line.items.length ? "，" : ""}{line.note}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
