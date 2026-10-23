import { Chrome } from "@/components/chrome";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Timeline } from "@/components/timeline";
import { VisualGallery } from "@/components/visual-gallery";
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
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">{profile.summary}</p>
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

        <section id="experience" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-16 lg:py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-banner">{ui.experience}</h2>
            <div className="mt-8">
              <Timeline periods={site.timelinePeriods} ui={ui} />
            </div>
          </div>
        </section>

        <section id="skills" className="flex scroll-mt-24 items-center px-5 py-20 sm:px-8 lg:min-h-[52svh] lg:px-16 lg:py-16">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="section-banner">{ui.skills}</h2>
            <SkillsMarquee skills={site.homeSkills} />
          </div>
        </section>

        <section id="results" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-banner">{ui.results}</h2>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
              {site.homeMetrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-3xl font-medium tracking-tight sm:text-4xl">{metric.value}</dt>
                  <dd className="mt-2 text-sm text-white/55">{metric.label}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-12 grid gap-4 lg:grid-cols-3">
              {site.homeProjects.map((project) => (
                <li
                  key={project.title}
                  className="group rounded-3xl border border-white/15 p-7 transition duration-300 ease-out hover:-translate-y-2 hover:border-[#f03434] hover:bg-[#f03434] hover:text-white hover:shadow-[0_24px_70px_rgba(240,52,52,0.28)]"
                >
                  <h3 className="text-3xl tracking-tight">{project.title}</h3>
                  <p className="mt-4 leading-7 text-white/60 transition-colors duration-300 group-hover:text-white/85">
                    {project.result}
                  </p>
                  <a
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-white no-underline transition-colors duration-300 group-hover:text-white"
                  >
                    {project.link}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="visuals" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-banner">{ui.visuals}</h2>
            <VisualGallery works={site.visualWorks} ui={ui} />
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
