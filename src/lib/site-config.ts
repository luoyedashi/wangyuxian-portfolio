export const SITE = {
  title: '王钰贤 | 水利方向学生 · 校园主播 · 策划与影像实践者',
  shortTitle: '王钰贤',
  description:
    '王钰贤个人作品展示网站：四川大学水利水电学院学生、校园主播「望川客」、策划与影像实践者。把想法落地成作品。',
  author: '王钰贤',
  email: '3341207813@qq.com',
  github: 'https://github.com/luoyedashi',
  githubHandle: 'luoyedashi',
  url: 'https://luoyedashi.github.io/wangyuxian-portfolio/',
  locale: 'zh-CN',
  ogImage: '/images/og/default-cover.svg',
  resume: '/files/resume/wang-yuxian-resume.pdf',
};

export const NAV = [
  { label: '首页', href: '/' },
  { label: '关于我', href: '/about' },
  { label: '作品集', href: '/works' },
  { label: '声音', href: '/voice' },
  { label: '摄影', href: '/photography' },
  { label: '联系我', href: '/contact' },
];

export const WORK_CATEGORIES = [
  { slug: 'hydraulic-engineering', label: '水利与工程' },
  { slug: 'business-planning', label: '商业与策划' },
  { slug: 'campus-leadership', label: '校园与组织' },
  { slug: 'voice-expression', label: '声音与表达' },
  { slug: 'photography-visual', label: '摄影与视觉' },
  { slug: 'ai-technology', label: 'AI 与技术' },
] as const;

export const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  WORK_CATEGORIES.map((c) => [c.slug, c.label])
);

export const PHOTO_CATEGORIES = [
  { slug: 'portrait', label: '人像' },
  { slug: 'campus', label: '校园' },
  { slug: 'nature', label: '风景' },
  { slug: 'flora', label: '花卉' },
  { slug: 'heritage', label: '古建人文' },
  { slug: 'urban', label: '城市光影' },
  { slug: 'animals', label: '自然生灵' },
  { slug: 'travel', label: '旅行' },
  { slug: 'light', label: '光影' },
  { slug: 'rework', label: '废片改造' },
] as const;

export const PHOTO_CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  PHOTO_CATEGORIES.map((c) => [c.slug, c.label])
);

export const TIMELINE = [
  { year: '2025.09', text: '入学四川大学水利水电学院' },
  { year: '2025.10', text: '加入校团委文化艺术部 · 视听宣传部' },
  { year: '2026.06', text: '完成「汉水留声」实践全案论证' },
  { year: '2026.07', text: '就任 202 班团支书' },
  { year: '2026.08', text: '「汉水留声·拾忆烽火」实践团赴安康' },
];
