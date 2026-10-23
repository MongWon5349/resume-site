import type { homeSkills } from "@/content/resume";

type Skill = (typeof homeSkills)[number];

export function SkillsMarquee({ skills }: { skills: Skill[] }) {
  const rows = [
    [skills[0], skills[3]],
    [skills[1], skills[4]],
    [skills[2], skills[5]],
  ];
  return (
    <div className="skills-marquee mt-8 space-y-3">
      {rows.map((row, rowIndex) => (
        <div className="skills-marquee__row" key={rowIndex}>
          <div className={`skills-marquee__track skills-marquee__track--${rowIndex + 1}`}>
            {[0, 1].map((copy) => (
              <div className="skills-marquee__group" aria-hidden={copy === 1 ? true : undefined} key={copy}>
                {row.map((skill) => (
                  <div className="skill-pill" key={`${copy}-${skill.name}`}>
                    <span className="skill-pill__name">{skill.name}</span>
                    <span className="skill-pill__detail">{skill.detail}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
