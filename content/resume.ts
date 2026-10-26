export type Inline =
  | { kind: "text"; text: string }
  | { kind: "link"; label: string; href: string };

export type LinkLine = {
  label?: string;
  labelHref?: string;
  thumb?: string;
  items: { label: string; href: string }[];
  note?: string;
};

export type Block = {
  title: string;
  paragraphs: Inline[][];
  lines?: LinkLine[];
  posters?: { src: string; href: string; title: string }[];
  posterColumns?: {
    src: string;
    href: string;
    label: string;
    lines?: LinkLine[];
    banner?: { src: string; href: string; title: string };
  }[];
  profiles?: { src: string; href: string; id: string; followers?: string }[];
  result?: Inline[];
  searchChart?: boolean;
};

export type PageTheme = {
  bg: string;
  header: string;
  surface: string;
  text: string;
  body: string;
  muted: string;
  faint: string;
  accent: string;
  accentFg: string;
  line: string;
  result: string;
};

export type Job = {
  slug: string;
  company: string;
  shortName: string;
  role: string;
  period: string;
  summary: string;
  logo?: string;
  logoBlend?: "screen";
  theme: PageTheme;
  highlights: { value: string; label: string }[];
  lines?: LinkLine[];
  blocks: Block[];
};

const infiniTheme: PageTheme = {
  bg: "#000000",
  header: "rgb(0 0 0 / 0.92)",
  surface: "#141414",
  text: "#ffffff",
  body: "#d4d4d4",
  muted: "#9a9a9a",
  faint: "#737373",
  accent: "#ffffff",
  accentFg: "#000000",
  line: "rgb(255 255 255 / 0.14)",
  result: "rgb(255 255 255 / 0.06)",
};

const wellceeTheme: PageTheme = {
  bg: "#f3fbfb",
  header: "rgb(243 251 251 / 0.92)",
  surface: "#ffffff",
  text: "#12383a",
  body: "#2c5557",
  muted: "#5d7e80",
  faint: "#7d9899",
  accent: "#14b4b8",
  accentFg: "#ffffff",
  line: "rgb(20 180 184 / 0.22)",
  result: "#e5f7f7",
};

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

const t = (text: string): Inline => ({ kind: "text", text });
const a = (label: string, href: string): Inline => ({ kind: "link", label, href });

export const profile = {
  name: "庞梦媛",
  meta: "女 · 籍贯北京 · ENFJ",
  phone: "13701005574",
  email: "mengyuanp5349@gmail.com",
  target: "AI 产品增长 / 整体运营",
  summary:
    "近 6 年增长运营经验。2021 年至 2025 年在互联网UGC租房平台「Wellcee」负责 App 用户增长、海外社媒矩阵和 KOL 合作；2025 年 11 月起在 AI-native Data Agent「InfiniSynapse」负责官网、内容、视频、社群、用户增长和海内外社媒运营，ToB售前支持。",
  updated: "2026-10",
};

export const metrics = [
  { value: "2000+", label: "三个月上线页面" },
  { value: "3.2 万", label: "海外官网访问用户" },
  { value: "8000 万+", label: "App 下载用户" },
  { value: "40 万+", label: "Instagram 矩阵粉丝" },
];

export const skills = [
  { name: "用户增长", detail: "拉新、激活、留存、付费，以及社群承接" },
  { name: "内容与搜索", detail: "Google SEO、中文搜索内容、Reddit GEO、多平台内容策划" },
  {
    name: "渠道",
    detail: "小红书、抖音、微博、知乎、公众号、视频号、CSDN 博客、Instagram、Facebook、YouTube、X、Discord",
  },
  { name: "KOL", detail: "国内外达人合作、brief 和内容审核" },
  { name: "AI - Native", detail: "熟练使用 Cursor、ChatGPT 搭建内容、SEO 和社媒工作流" },
  { name: "设计与剪辑", detail: "Canva、Photoshop、Figma、剪映、Lovart" },
  { name: "英语", detail: "英语口语流畅，可作为工作语言，能独立完成英文内容制作、海外 KOL 沟通" },
];

export const jobs: Job[] = [
  {
    slug: "infinisynapse",
    company: "上海衡数无限科技有限公司 · InfiniSynapse",
    shortName: "InfiniSynapse",
    role: "AI Data Agent 整体运营负责人",
    period: "2025.11 – 2026.10",
    logo: "/logos/infinisynapse.png",
    logoBlend: "screen",
    theme: infiniTheme,
    highlights: [
      { value: "10万+", label: "全站访问用户" },
      { value: "2000+", label: "博客页面" },
      { value: "5k+", label: "黑客松注册转化" },
    ],
    summary:
      "负责 AI-native Data Agent 整体的运营和增长，包括产品的官网搭建、内容、视频、社群、用户增长和海内外社媒运营，ToB 用户的售前维护。",
    lines: [
      { label: "英文官网", items: [{ label: "infinisynapse.com", href: "https://infinisynapse.com/" }] },
      { label: "中文官网", items: [{ label: "infinisynapse.cn", href: "https://infinisynapse.cn/" }] },
    ],
    blocks: [
      {
        title: "1. 从 0 到 1 搭建 SEO 内容体系",
        paragraphs: [
          [
            t(
              "基于 SEMrush、Ahrefs 公开流量和自建 SEO 基线完成渠道与竞品调研。2026 年 7 月按该判断启动内容体系，页面按「比较页 + 教程页 + 工具页 + 行业场景页」组织，覆盖英文博客、工具页和中文博客。三个月内国内外博客页面累计 2000+。",
            ),
          ],
        ],
        lines: [
          {
            label: "竞品调研",
            items: [{ label: "2026 渠道与竞品增长方案", href: "/work/infinisynapse/plan/index.html" }],
          },
          {
            label: "英文",
            items: [
              { label: "博客", href: "https://infinisynapse.com/en/blog" },
              { label: "工具页", href: "https://infinisynapse.com/tools" },
            ],
          },
          { label: "中文", items: [{ label: "博客", href: "https://infinisynapse.cn/zh/blog" }] },
          {
            label: "代表页",
            items: [
              { label: "What is a Data Agent", href: "https://infinisynapse.com/en/blog/what-is-a-data-agent" },
              { label: "Data Catalog Platforms", href: "https://infinisynapse.com/en/blog/data-catalog-platforms" },
              { label: "Test-NetConnection", href: "https://infinisynapse.com/en/tool/test-netconnection" },
            ],
          },
          {
            label: "中文代表页",
            items: [
              { label: "退货分析", href: "https://infinisynapse.cn/zh/blog/ai-returns-analysis" },
              { label: "财报分析", href: "https://infinisynapse.cn/zh/blog/financial-statement-analysis" },
              { label: "医疗分析", href: "https://infinisynapse.cn/zh/blog/healthcare-analytics" },
              { label: "合同分析", href: "https://infinisynapse.cn/zh/blog/contract-analytics" },
              { label: "供应链", href: "https://infinisynapse.cn/supply-chain-analytics/" },
            ],
          },
        ],
        result: [
          t(
            "全站访问用户 10万+。海外官网 2026-07-01 至 2026-10-20，PV 3.8 万，用户遍及 166 个国家，Google 自然搜索 4,452。同期 Google 搜索展示为 4,225 次点击、149 万次曝光，平均点击率 0.5%，平均排名 9。国内官网 2026-08-12（百度统计上线后）至 2026-10-20，PV 5,816，平均访问时长 3 分 19 秒，外链占比 27.42%。",
          ),
        ],
        searchChart: true,
      },
      {
        title: "2. 建立 Reddit GEO 内容体系",
        paragraphs: [
          [
            t(
              "为 Reddit GEO 单独建设一套运营 Skill，把版规、双账号人设、选题标准和 AI 引用目标写进同一套执行规则。日常运营由 AI 按这套 Skill 端到端完成，并按具体帖子定制主帖、嵌套回复和复盘。阵地覆盖数据分析、SQL 和 AI Agent 讨论。对外承接页包括比较文、",
            ),
            a("What is a Data Agent", "https://infinisynapse.com/en/blog/what-is-a-data-agent"),
            t(" 和 "),
            a("Best Data Analysis Software", "https://infinisynapse.com/use-cases/best-data-analysis-software"),
            t("。"),
          ],
        ],
        profiles: [
          {
            src: "/reddit/mongwonp.png",
            href: "https://www.reddit.com/user/MongWonP/",
            id: "u/MongWonP",
            followers: "karma 4,957（172 条贡献）",
          },
          {
            src: "/reddit/haunting.png",
            href: "https://www.reddit.com/user/Haunting-Paint7990/",
            id: "u/Haunting-Paint7990",
            followers: "karma 827（115 条贡献）",
          },
        ],
        result: [
          t("账号 "),
          a("u/MongWonP", "https://www.reddit.com/user/MongWonP/"),
          t(" karma 4,957（172 条贡献），账号 "),
          a("u/Haunting-Paint7990", "https://www.reddit.com/user/Haunting-Paint7990/"),
          t(" karma 827（115 条贡献）。同期归档 100 余条主帖、回复和复盘，并据此排 SEO 优先级。相关视频同步分发到公众号、视频号和 B 站。"),
        ],
      },
      {
        title: "3. 运营国内外社媒账号",
        paragraphs: [
          [
            t(
              "从 0 到 1 搭建品牌社媒运营体系，为各平台单独建运营 Skill，由 AI 完成选题、策划、制作和发布，并把公域线索承接进私域社群。",
            ),
          ],
        ],
        lines: [
          {
            items: [{ label: "小红书", href: "https://www.xiaohongshu.com/user/profile/691d710f00000000370051d1" }],
            note: "图文拆分析案例，也发功能片、大赛和直播预热",
          },
          {
            items: [{ label: "知乎", href: "https://www.zhihu.com/people/infinisynapse" }],
            note: "长文定义分析师角色，也复盘三十件大赛作品",
          },
          {
            items: [{ label: "微博", href: "https://weibo.com/u/5347698824" }],
            note: "官方微博用倒计时和活动长图推国内大赛",
          },
          {
            items: [{ label: "抖音", href: "https://www.douyin.com/user/MS4wLjABAAAAvi4xXWQfIulb66GDXabSSKWEpFO_zbANE4-sH37DXTs" }],
            note: "直连数据库的分析短片，强调不止于查询",
          },
          {
            items: [{ label: "CSDN博客", href: "https://blog.csdn.net/InfiniSynapse?type=blog" }],
            note: "写安装教程和模型实测，也征集大赛作品",
          },
          {
            items: [{ label: "公众号", href: "https://mp.weixin.qq.com/s/btMLQJ_qhrL059RVeIMHAg" }],
            note: "企业库取数实战和会员福利，也写行业共识",
          },
          {
            items: [{ label: "YouTube", href: "https://www.youtube.com/@infinisynapse" }],
            note: "两条英文产品片：可追溯 SQL，和替你下单",
          },
          {
            items: [{ label: "X", href: "https://x.com/InfiniSynapse" }],
            note: "英文短帖推黑客松，也发十分钟电商月报片",
          },
        ],
        result: [
          t("公众号累计粉丝 3000+。CSDN 博客访问量累计 2 万+，424 次点赞、457 次收藏。小红书粉丝 458，获赞与收藏 2,407。国内外社群约 4,000 人。"),
        ],
      },
      {
        title: "4. 主导国内外两场线上黑客松",
        paragraphs: [
          [
            t(
              "国内联合 CSDN 主办首届泛数据分析应用开发大赛，定规则和评分，独立搭建报名页和作品长廊，并运营公众号、小红书、微博做预热、倒计时和收官。海外完成首届 InfiniSynapse Vibe Coding Hackathon 2026 的赛事页、规则、评分和奖金说明。",
            ),
          ],
        ],
        posterColumns: [
          {
            src: "/hackathon/cn-contest.png",
            href: "https://infinisynapse.cn/contest/vibe-coding",
            label: "Vibe Coding\n泛数据分析应用开发大赛",
            lines: [
              {
                label: "国内中文",
                items: [
                  { label: "大赛详情", href: "https://infinisynapse.cn/contest/vibe-coding" },
                  { label: "作品长廊", href: "https://infinisynapse.cn/contest/vibe-coding/gallery" },
                ],
              },
              {
                label: "国内英文",
                items: [
                  { label: "Contest", href: "https://infinisynapse.com/contest/vibe-coding" },
                  { label: "Gallery", href: "https://infinisynapse.com/contest/vibe-coding/gallery" },
                ],
              },
              {
                label: "复盘",
                items: [{ label: "Vibe Coding Contest", href: "https://infinisynapse.com/en/blog/vibe-coding-contest" }],
              },
            ],
          },
          {
            src: "/hackathon/overseas.png",
            href: "https://infinisynapse.com/en/hackathon/2026",
            label: "Hackathon 2026",
            lines: [
              {
                label: "海外",
                items: [
                  { label: "Hackathon 2026", href: "https://infinisynapse.com/en/hackathon/2026" },
                  { label: "Judging", href: "https://infinisynapse.com/en/hackathon/2026/judging" },
                  { label: "Prizes", href: "https://infinisynapse.com/en/hackathon/2026/prizes" },
                  { label: "Luma 报名", href: "https://luma.com/tf5i5e6l" },
                ],
              },
            ],
            banner: {
              src: "/hackathon/overseas-video.png",
              href: "https://x.com/InfiniSynapse/status/2108121345079034129",
              title: "宣传视频",
            },
          },
        ],
        result: [
          t(
            "国内 243 人报名，100+ 个已上线应用，62 席获奖，超过原定不少于 100 个有效作品的目标，黑客松注册转化 5k+。海外赛事页和报名物料包已完成。",
          ),
        ],
      },
      {
        title: "5. 运营国内外社群",
        paragraphs: [
          [
            t("以社群维护付费用户留存和日常体验。微信群承接产品答疑、Vibe Coding 大赛进度和创始人直播预告。Discord 作为海外黑客松选手社区，报名后从 "),
            a("Luma", "https://luma.com/tf5i5e6l"),
            t(" 确认信进服，规则、文档和提交清单在服内发放。"),
          ],
        ],
        result: [t("国内 10 个微信群，每群 400 人，合计约 4,000 人。海外 1 个 Discord，100 人。")],
      },
      {
        title: "6. 策划创始人企业落地直播",
        paragraphs: [
          [
            t(
              "为创始人祝威廉完成微信视频号直播，独立策划选题、脚本、海报和预热。流程按分钟级 rundown 执行，从暖场演示、开播讲解到收束转化。独立完成视频号后台预告、预约码、开播提醒、直播间话题框和标题切片，以及 OBS 的场景、画面源和推流配置。",
            ),
          ],
        ],
        result: [t("5 场直播累计转化新用户 500+，均引入微信社群。视频号涨粉 700+。")],
      },
      {
        title: "7. ToB 用户售前支持",
        paragraphs: [
          [
            t(
              "负责企业版客户的售前支持。包括但不限于：简单的线上产品演示、编写使用手册、在售前沟通中记录客户需求，整理后同步给产品。制定演示视频的场景和脚本，组织实习生完成拍摄与剪辑，供后续售前讲解使用。",
            ),
          ],
        ],
        posters: [
          {
            src: "/demos/demo-lineage.jpg",
            href: "https://www.xiaohongshu.com/explore/6acc4550000000001802c8dc?xsec_token=ABJB2a0upsbEa8xbBPDY5CGrDlnDhp0gWxAhq5T9ZPhrg=&xsec_source=pc_user",
            title: "自定义看板 + 数据血缘",
          },
          {
            src: "/demos/demo-ecommerce.jpg",
            href: "https://www.xiaohongshu.com/explore/6aca172e000000001a02a9c6?xsec_token=AB-FJraHCyXPEhGLADrfMC6EjjqkiRUPyRFEZtHWOeEzM=&xsec_source=pc_user",
            title: "记忆构建 + 看板",
          },
        ],
      },
    ],
  },
  {
    slug: "wellcee",
    company: "唯心所寓（Wellcee）",
    shortName: "唯心所寓",
    role: "市场营销策划",
    period: "2021.02 – 2025.08",
    logo: "/logos/wellcee.png",
    theme: wellceeTheme,
    highlights: [
      { value: "8000 万+", label: "App 下载用户" },
      { value: "40 万+", label: "Instagram 粉丝" },
      { value: "9000 万+", label: "KOL 播放量" },
    ],
    summary: "",
    blocks: [
      {
        title: "App 用户增长",
        paragraphs: [
          [t("制定并执行用户增长策略，建立用户转化模型。通过社媒、KOL 合作、付费广告、SEO 和内容营销提升品牌知名度。")],
        ],
        result: [
          t("App 下载用户 8000 万+，用户基数连续三年翻倍增长，MAU 年度同比增长 60%，B 端与 C 端收入连续两年翻倍增长。"),
        ],
      },
      {
        title: "海外市场拓展",
        paragraphs: [
          [t("从 0 到 1 搭建 5 个 Instagram 矩阵账号，覆盖上海、北京、深圳、香港。管理国内最大的外国人租房 Facebook 小组，为海外用户做引流。")],
        ],
        profiles: [
          {
            src: "/instagram/shenzhen.life.jpg",
            href: "https://www.instagram.com/shenzhen.life/",
            id: "shenzhen.life",
            followers: "粉丝 11.6 万",
          },
          {
            src: "/instagram/shanghai.lifestyle.jpg",
            href: "https://www.instagram.com/shanghai.lifestyle/",
            id: "shanghai.lifestyle",
            followers: "粉丝 9.4 万",
          },
          {
            src: "/instagram/expat.hongkong.jpg",
            href: "https://www.instagram.com/expat.hongkong/",
            id: "expat.hongkong",
            followers: "粉丝 5.2 万",
          },
          {
            src: "/instagram/china.journey.jpg",
            href: "https://www.instagram.com/china.journey/",
            id: "china.journey",
            followers: "粉丝 4.9 万",
          },
          {
            src: "/instagram/expat.beijing.jpg",
            href: "https://www.instagram.com/expat.beijing/",
            id: "expat.beijing",
            followers: "粉丝 3.3 万",
          },
        ],
        result: [
          t("Instagram 矩阵累计粉丝 40 万+，10 条百万播放视频，转化海外用户 20 万+，2025 年异业合作收入 20 万+。Facebook 小组引流海外用户 50 万。"),
        ],
      },
      {
        title: "KOL / KOC 合作",
        paragraphs: [
          [t("挖掘小红书、抖音、YouTube、Instagram 等同赛道国内外达人，负责商务谈判、brief、内容审核和发布质量。")],
          [t("往期合作案例：")],
        ],
        lines: [
          {
            label: "小红书爆款",
            labelHref:
              "https://www.xiaohongshu.com/explore/67b086fa0000000029030c9d?xsec_token=ABuBethVP4jKv6KAe2RUliDMIh6tq7wbfVK70UD7dAEwc=&xsec_source=pc_search&source=unknown",
            thumb: "/kol/xiaohongshu.jpg",
            items: [],
            note: "点赞 1.03 万，收藏 2,522",
          },
          {
            label: "抖音爆款",
            labelHref: "https://www.douyin.com/video/7474932413685173564",
            thumb: "/kol/douyin.jpg",
            items: [],
            note: "点赞 76,905，收藏 45,149",
          },
        ],
        result: [t("合作 KOL / KOC 400+，产出内容 200+，全平台播放量 9000 万+。")],
      },
      {
        title: "优质用户故事 / PR 合作",
        paragraphs: [
          [
            t(
              "挑选与品牌契合的优质用户进行视频约拍，全程跟进选题策划、脚本撰写、前期沟通、项目拍摄、后期剪辑及全平台宣发；拍摄对象包括艺术家、胡同民宿房东、外国用户、北影导演系高材生、大厂程序员、瑜伽音疗师等；围绕内容栏目拓展品牌 PR 与异业合作。",
            ),
          ],
        ],
        posters: [
          {
            src: "/user-stories/story-01.png",
            href: "https://weixin.qq.com/sph/AiK1pJ4ZPP",
            title: "加拿大背包客Dragos在北京胡同的生活",
          },
          {
            src: "/user-stories/story-02.png",
            href: "https://weixin.qq.com/sph/A3iVv6voy0",
            title: "北影导演系高材生的租房故事",
          },
          {
            src: "/user-stories/story-03.png",
            href: "https://weixin.qq.com/sph/Acnni1L8jG",
            title: "北大艺术家/诗人在线招室友",
          },
          {
            src: "/user-stories/story-04.png",
            href: "https://weixin.qq.com/sph/AeYWPQeNaV",
            title: "Do You Really Know China?\n乌克兰博主Nika的北京生活",
          },
          {
            src: "/user-stories/story-05.png",
            href: "https://weixin.qq.com/sph/Aduml78iYf",
            title: "A Day in the Life of a Software Engineer\n大厂程序员的胡同生活",
          },
          {
            src: "/user-stories/story-06.png",
            href: "https://weixin.qq.com/sph/AQd9HeYJDj",
            title: "Wellcee × COHO\n艺术家彭铎的胡同记忆",
          },
          {
            src: "/user-stories/story-07.png",
            href: "https://weixin.qq.com/sph/AzFBKjCG1k",
            title: "Angel 的中国故事",
          },
          {
            src: "/user-stories/story-08.png",
            href: "https://weixin.qq.com/sph/AJBe6IiKWR",
            title: "法国小伙在北京的租房生活",
          },
        ],
        result: [
          t(
            "产出大量优质用户视频，获得大量积极反馈，强化 Wellcee 真实、多元、有温度的品牌形象，并通过商业赞助获得增量收入。全平台（微信视频号、App、B 站、抖音）播放量 100 万+，流量互动 10 万+。",
          ),
        ],
      },
      {
        title: "小红书品牌账号",
        paragraphs: [
          [
            t("从 0 到 1 搭建「"),
            a("Wellcee 唯心所寓", "https://www.xiaohongshu.com/user/profile/5fa25a27000000000101df18"),
            t("」「"),
            a("Wellcee", "https://www.xiaohongshu.com/user/profile/5cdd80b2000000000502a16e"),
            t("」账号，使用聚光、蒲公英做投放。"),
          ],
        ],
        profiles: [
          {
            src: "/xiaohongshu/weixin.jpg",
            href: "https://www.xiaohongshu.com/user/profile/5fa25a27000000000101df18",
            id: "Wellcee 唯心所寓",
          },
          {
            src: "/xiaohongshu/wellcee.jpg",
            href: "https://www.xiaohongshu.com/user/profile/5cdd80b2000000000502a16e",
            id: "Wellcee",
          },
        ],
        result: [t("累计粉丝 4 万+，赞藏 7.4 万+，爆款内容 200+。")],
      },
    ],
  },
];

export const education = {
  school: "北京印刷学院",
  detail: "新闻学｜本科｜全日制｜2015 – 2019",
  note: "大学英语六级（CET-6）。",
};

export const homeSkills = [
  { name: "增长", detail: "拉新、激活、留存、付费，以及社群承接" },
  { name: "SEO", detail: "Google SEO、中文搜索内容、Reddit GEO、多平台内容策划" },
  {
    name: "社媒",
    detail: "小红书、抖音、微博、知乎、公众号、视频号、CSDN 博客、Instagram、Facebook、YouTube、X、Discord",
  },
  { name: "KOL", detail: "国内外达人合作、brief 和内容审核" },
  { name: "AI 工作流", detail: "熟练使用 Cursor、ChatGPT 搭建内容、SEO 和社媒工作流" },
  { name: "英语", detail: "英语口语流畅，可作为工作语言，能独立完成英文内容制作、海外 KOL 沟通" },
];

export const homeMetrics = [
  { value: "6 年", label: "增长运营" },
  { value: "10万+", label: "官网访问用户" },
  { value: "8000万+", label: "App 下载" },
  { value: "40万+", label: "Instagram 粉丝" },
];

export const homeChapters = [
  {
    id: "infinisynapse",
    company: "InfiniSynapse",
    market: "海外 AI 产品 · ToB",
    period: "2025.11 – 2026.10",
    role: "AI Data Agent 整体运营负责人",
    summary: "负责官网、内容、视频、社群和海内外增长，以及 ToB 售前。",
    href: "/work/infinisynapse",
    items: [
      { skill: "SEO", result: "三个月博客 2000+ 页，全站访问 10 万+。" },
      { skill: "社群", result: "国内外社群约 4,000 人，公众号粉丝 3000+。" },
      { skill: "黑客松", result: "100+ 个已上线应用。" },
      { skill: "ToB 售前", result: "企业版演示、使用手册，并把客户需求同步给产品。" },
    ],
  },
  {
    id: "wellcee",
    company: "Wellcee",
    market: "国内 UGC 租房 · 海外获客",
    period: "2021.02 – 2025.08",
    role: "市场营销策划",
    summary: "负责 App 用户增长、国内社媒和海外获客。",
    href: "/work/wellcee",
    items: [
      { skill: "App 增长", result: "下载用户 8000 万+，MAU 年度同比增长 60%。" },
      { skill: "KOL", result: "合作 KOL / KOC 400+，全平台播放量 9000 万+。" },
      { skill: "海外获客", result: "Instagram 矩阵粉丝 40 万+，转化海外用户 20 万+。" },
      { skill: "小红书", result: "品牌账号粉丝 4 万+，赞藏 7.4 万+。" },
      { skill: "用户视频", result: "全平台播放量 100 万+，流量互动 10 万+。" },
    ],
  },
];

export const homeProjects = [
  {
    title: "SEO 体系",
    result: "三个月博客 2000+ 页，全站访问 10 万+。",
    href: "https://infinisynapse.com/en/blog",
    link: "英文博客",
  },
  {
    title: "黑客松",
    result: "国内 243 人报名，100+ 个已上线应用。",
    href: "https://infinisynapse.cn/contest/vibe-coding",
    link: "大赛页面",
  },
  {
    title: "海外矩阵",
    result: "Instagram 粉丝 40 万+，10 条百万播放视频。",
    href: "https://www.instagram.com/shenzhen.life/",
    link: "shenzhen.life",
  },
  {
    title: "国内社媒运营",
    result: "公众号粉丝 3000+，CSDN 访问量 2 万+，国内社群约 4000 人。",
    href: "/work/infinisynapse",
    link: "查看经历",
  },
  {
    title: "KOL开发",
    result: "合作 KOL / KOC 400+，全平台播放量 9000 万+。",
    href: "/work/wellcee",
    link: "查看经历",
  },
  {
    title: "PR视频制作",
    result: "优质用户视频全平台播放量 100 万+，流量互动 10 万+，并获得商业赞助。",
    href: "/work/wellcee",
    link: "查看经历",
  },
];

export const visualWorks = [
  {
    title: "Vibe Coding Hackathon · EN",
    category: "海外赛事 · 宣发视频",
    company: "infinisynapse",
    src: "/visuals/hackathon-en.mp4",
    href: "https://infinisynapse.com/en/hackathon/2026",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "加拿大背包客Dragos在北京胡同的生活",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-01.png",
    href: "https://weixin.qq.com/sph/AiK1pJ4ZPP",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "北影导演系高材生的租房故事",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-02.png",
    href: "https://weixin.qq.com/sph/A3iVv6voy0",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "北大艺术家/诗人在线招室友",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-03.png",
    href: "https://weixin.qq.com/sph/Acnni1L8jG",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "Do You Really Know China?\n乌克兰博主Nika的北京生活",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-04.png",
    href: "https://weixin.qq.com/sph/AeYWPQeNaV",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "A Day in the Life of a Software Engineer\n大厂程序员的胡同生活",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-05.png",
    href: "https://weixin.qq.com/sph/Aduml78iYf",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "Wellcee × COHO\n艺术家彭铎的胡同记忆",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-06.png",
    href: "https://weixin.qq.com/sph/AQd9HeYJDj",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "Angel 的中国故事",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-07.png",
    href: "https://weixin.qq.com/sph/AzFBKjCG1k",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "法国小伙在北京的租房生活",
    category: "Wellcee · 用户视频",
    company: "wellcee",
    src: "/user-stories/story-08.png",
    href: "https://weixin.qq.com/sph/AJBe6IiKWR",
    row: 1,
    aspect: 16 / 9,
    kind: "video" as const,
  },
  {
    title: "Vibe Coding 黑客松",
    category: "海外赛事 · 小红书封面",
    company: "infinisynapse",
    src: "/visuals/hackathon-xhs.webp",
    href: "https://infinisynapse.com/en/hackathon/2026",
    row: 1,
    aspect: 3 / 4,
  },
  {
    title: "七日打卡活动",
    category: "用户运营 · 活动长图",
    company: "infinisynapse",
    src: "/visuals/seven-day-checkin.webp",
    href: "https://infinisynapse.cn/",
    row: 3,
    aspect: 356 / 1800,
  },
  {
    title: "AI 时代企业如何解决数据问题",
    category: "直播宣发 · 视频号海报",
    company: "infinisynapse",
    src: "/visuals/founder-live-0820.webp",
    href: "https://infinisynapse.cn/",
    row: 3,
    aspect: 3 / 4,
  },
  {
    title: "数据洞察创作者招募",
    category: "创作者运营 · 招募海报",
    company: "infinisynapse",
    src: "/visuals/creator-recruitment.webp",
    href: "https://infinisynapse.cn/",
    row: 3,
    aspect: 270 / 1024,
  },
  {
    title: "请您挑刺",
    category: "Wellcee · 用户调研海报",
    company: "wellcee",
    src: "/visuals/wellcee-challenge.webp",
    href: "/work/wellcee",
    row: 2,
    aspect: 791 / 1024,
  },
  {
    title: "Vibe Coding 泛数据分析应用开发大赛",
    category: "国内赛事 · 主视觉海报",
    company: "infinisynapse",
    src: "/hackathon/cn-contest.png",
    href: "https://infinisynapse.cn/contest/vibe-coding",
    row: 3,
    aspect: 760 / 1024,
  },
  {
    title: "Data Agent · 新文明",
    category: "内容专题 · 视觉封面",
    company: "infinisynapse",
    src: "/visuals/data-agent-story.png",
    href: "https://infinisynapse.com/en/blog/what-is-a-data-agent",
    row: 2,
    aspect: 16 / 9,
  },
  {
    title: "获奖名单正式公布",
    category: "赛事收官 · 小红书海报",
    company: "infinisynapse",
    src: "/visuals/contest-awards.png",
    href: "https://infinisynapse.cn/contest/vibe-coding/gallery",
    row: 3,
    aspect: 9 / 16,
  },
  {
    title: "InfiniSynapse + GPT 5.6 Sol",
    category: "产品宣发 · 社媒封面",
    company: "infinisynapse",
    src: "/visuals/gpt56-launch.png",
    href: "https://infinisynapse.com/",
    row: 3,
    aspect: 3 / 2,
  },
  {
    title: "迁服倒计时",
    category: "品牌运营 · 小红书通知海报",
    company: "infinisynapse",
    src: "/visuals/domain-migration-cover.png",
    href: "https://www.xiaohongshu.com/explore/6ab48e78000000001a021a0c?xsec_token=AB3vAzdlrUsonn-VwWCg-QY_p8pHUiUSjC1CrK-7Fs67c=&xsec_source=pc_user",
    row: 3,
    aspect: 1080 / 1265,
  },
  {
    title: "弄堂夜骑",
    category: "Wellcee · 城市社群活动海报",
    company: "wellcee",
    src: "/visuals/wellcee-night-rider.webp",
    href: "/work/wellcee",
    row: 4,
    aspect: 452 / 720,
  },
  {
    title: "Frisbee & Picnic",
    category: "Wellcee · 户外活动海报",
    company: "wellcee",
    src: "/visuals/wellcee-frisbee.webp",
    href: "/work/wellcee",
    row: 4,
    aspect: 460 / 690,
  },
  {
    title: "Mid-Autumn Roof Party",
    category: "Wellcee · 节日活动海报",
    company: "wellcee",
    src: "/visuals/wellcee-autumn-party.webp",
    href: "/work/wellcee",
    row: 4,
    aspect: 462 / 724,
  },
  {
    title: "LGBT Pride · Love is Love",
    category: "Wellcee · 品牌价值视觉",
    company: "wellcee",
    src: "/visuals/wellcee-pride-photo.webp",
    href: "/work/wellcee",
    row: 4,
    aspect: 504 / 708,
  },
  {
    title: "Love is Love",
    category: "Wellcee · Pride 字体海报",
    company: "wellcee",
    src: "/visuals/wellcee-pride-type.webp",
    href: "/work/wellcee",
    row: 4,
    aspect: 504 / 708,
  },
  {
    title: "Workout Party",
    category: "Wellcee · 运动社群海报",
    company: "wellcee",
    src: "/visuals/wellcee-workout.webp",
    href: "/work/wellcee",
    row: 4,
    aspect: 526 / 686,
  },
];

export type TimelinePeriod = {
  id: string;
  start: number;
  end: number;
  years: string;
  markerLabel?: string;
  title: string;
  role: string;
  summary: string;
  href?: string;
};

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: "wellcee",
    start: 0.12,
    end: 0.42,
    years: "2021.02 – 2025.08",
    title: "Wellcee",
    role: "国内 UGC 租房 · 海外获客",
    summary: "App 下载 8000 万+，Instagram 矩阵粉丝 40 万+。",
    href: "/work/wellcee",
  },
  {
    id: "infinisynapse",
    start: 0.58,
    end: 0.88,
    years: "2025.11 – 2026.10",
    title: "InfiniSynapse",
    role: "海外 AI 产品 · ToB",
    summary: "官网访问 10 万+，三个月博客 2000+ 页。黑客松 100+ 个已上线应用。",
    href: "/work/infinisynapse",
  },
];
