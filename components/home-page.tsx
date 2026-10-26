import { Chrome } from "@/components/chrome";
import { ExperienceSwitcher } from "@/components/experience-switcher";
import { getSite } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale = "zh" }: { locale?: Locale }) {
  const site = getSite(locale);
  const { profile, ui } = site;
  return (
    <>
      <Chrome locale={locale} />
      <main>
        <section id="top" className="flex min-h-[88svh] items-end px-5 pb-12 pt-24 sm:px-8 lg:min-h-[82svh] lg:px-16">
          <div className="mx-auto grid w-full max-w-6xl items-end gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
            <div>
              <h1 className="text-[clamp(4.25rem,11vw,7.75rem)] font-medium leading-[0.9] tracking-[-0.045em]">
                {profile.name}
              </h1>
              <p className="mt-12 text-2xl tracking-tight sm:mt-16 sm:text-3xl">{ui.hero}</p>
            </div>
            <div className="justify-self-center lg:justify-self-end">
              <img
                src="/portrait.png"
                width={320}
                height={320}
                alt={ui.portraitAlt}
                className="h-[280px] w-[280px] rounded-full border border-white/15 object-cover"
              />
            </div>
          </div>
        </section>

        <ExperienceSwitcher periods={site.timelinePeriods} chapters={site.homeChapters} works={site.visualWorks} ui={ui} />

        <section id="education" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-16 lg:py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-banner">{ui.education}</h2>
            <p className="mt-6 text-2xl tracking-tight">{site.education.school}</p>
            <p className="mt-2 text-white/60">{site.education.detail}</p>
          </div>
        </section>

        <section id="contact" className="flex min-h-[52svh] scroll-mt-24 items-end px-5 pb-14 pt-20 sm:px-8 lg:min-h-[46svh] lg:px-16 lg:pb-16 lg:pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="section-banner">{ui.contact}</h2>
            <a href={`mailto:${profile.email}`} className="mt-8 block max-w-full break-all text-2xl leading-snug tracking-tight text-white no-underline sm:break-normal sm:text-4xl">
              {profile.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.xiaohongshu.com/user/profile/59d1202220e88f51490cef3a?channel_type=msg_chat_page&xsec_token=ABboJMLpA-YfTT8xZmiFlT9zD726gNQtRntug4TSpa1yQ%3D&xsec_source=pc_chat"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/25 bg-black py-2 pl-2 pr-5 text-sm text-white no-underline transition hover:border-[#f03434] hover:bg-[#f03434] hover:text-white"
              >
                <img
                  src="/profiles/xiaohongshu-mengyuan.png"
                  width={40}
                  height={40}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span>{ui.xiaohongshu}</span>
              </a>
              <a
                href="https://x.com/mengyuan5349"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/25 bg-black py-2 pl-2 pr-5 text-sm text-white no-underline transition hover:border-[#f03434] hover:bg-[#f03434] hover:text-white"
              >
                <img
                  src="/profiles/x-mengyuan.jpg"
                  width={40}
                  height={40}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span>{ui.twitter}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
