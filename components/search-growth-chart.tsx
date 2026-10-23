import { uiCopy } from "@/content/site";
import type { Locale } from "@/lib/i18n";

const Y_MAX = 1400;

const SERIES = [
  { id: "clicks", color: "#8ec5ff", values: [100, 437.7, 589.5, 666.5] },
  { id: "impressions", color: "#5ddeaf", values: [100, 987.1, 1271.4, 934.4] },
  { id: "ctr", color: "#f0c36a", values: [100, 43.8, 45.8, 70.8] },
] as const;

const WIDTH = 640;
const HEIGHT = 300;
const PAD = { l: 52, r: 36, t: 28, b: 36 };

function xAt(index: number, count: number) {
  const inner = WIDTH - PAD.l - PAD.r;
  return PAD.l + (index / (count - 1)) * inner;
}

function yAt(value: number) {
  const inner = HEIGHT - PAD.t - PAD.b;
  return PAD.t + (1 - value / Y_MAX) * inner;
}

function pathOf(values: readonly number[]) {
  return values.map((value, index) => `${index === 0 ? "M" : "L"} ${xAt(index, values.length).toFixed(1)} ${yAt(value).toFixed(1)}`).join(" ");
}

export function SearchGrowthChart({ locale = "zh" }: { locale?: Locale }) {
  const copy = uiCopy[locale];
  const labels = copy.months;
  const series = SERIES.map((item) => ({ ...item, name: copy[item.id] }));
  const ticks = [0, 400, 800, 1200];
  const baseline = yAt(100);

  return (
    <figure className="mt-5">
      <figcaption className="text-sm text-[var(--text)]">{copy.chartTitle}</figcaption>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--body)]">
        {series.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            <span className="inline-block h-0.5 w-6 rounded-full" style={{ background: item.color }} />
            {item.name}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-baseline justify-between gap-3 text-sm text-[var(--body)]">
        <span>{copy.chartY}</span>
        <span>{copy.chartX}</span>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={copy.chartAria}
        className="mt-2 h-auto w-full"
        style={{ fontFamily: "inherit" }}
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.l}
              x2={WIDTH - PAD.r}
              y1={yAt(tick)}
              y2={yAt(tick)}
              stroke="currentColor"
              strokeOpacity={tick === 0 ? 0.28 : 0.12}
            />
            <text x={PAD.l - 8} y={yAt(tick) + 4} textAnchor="end" fill="currentColor" fillOpacity={0.55} fontSize="12">
              {tick === 0 ? "0" : tick.toLocaleString(locale === "en" ? "en-US" : "zh-CN")}
            </text>
          </g>
        ))}
        <line
          x1={PAD.l}
          x2={WIDTH - PAD.r}
          y1={baseline}
          y2={baseline}
          stroke="currentColor"
          strokeOpacity={0.45}
          strokeDasharray="4 4"
        />
        <text x={WIDTH - PAD.r} y={baseline - 6} textAnchor="end" fill="currentColor" fillOpacity={0.55} fontSize="12">
          {copy.chartBaseline}
        </text>
        {series.map((item) => (
          <g key={item.id}>
            <path d={pathOf(item.values)} fill="none" stroke={item.color} strokeWidth="2.5" strokeLinejoin="round" />
            {item.values.map((value, index) => (
              <circle key={labels[index]} cx={xAt(index, labels.length)} cy={yAt(value)} r="3.5" fill={item.color} />
            ))}
          </g>
        ))}
        {series
          .filter((item) => item.id !== "ctr")
          .map((item) =>
            item.values.map((value, index) =>
              index === 0 && item.id !== "clicks" ? null : (
                <text
                  key={`${item.id}-${labels[index]}`}
                  x={xAt(index, labels.length)}
                  y={yAt(value) - 10}
                  textAnchor="middle"
                  fill={item.color}
                  fontSize="12"
                >
                  {index === 0 ? "100" : Math.round(value).toLocaleString(locale === "en" ? "en-US" : "zh-CN")}
                </text>
              ),
            ),
          )}
        {labels.map((label, index) => (
          <text
            key={label}
            x={xAt(index, labels.length)}
            y={HEIGHT - 8}
            textAnchor="middle"
            fill="currentColor"
            fillOpacity={0.72}
            fontSize="13"
          >
            {label}
          </text>
        ))}
      </svg>
      <p className="text-xs leading-5 text-[var(--faint)]">
        {copy.chartNote}
      </p>
    </figure>
  );
}
