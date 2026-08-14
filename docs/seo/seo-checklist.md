# 任务结果

## Task ID
SEO-001

## Agent 角色
SEO 与传播 Agent / SEO & Growth Agent

## 状态
completed

## 摘要
完成全站 SEO 与分享优化：SEOHead 组件、title/description/OG 规则、robots.txt、sitemap.xml、URL slug 规范与图片 alt 规范，并输出部署后的更新清单。

## 产出文件
- src/components/SEOHead.astro
- public/robots.txt
- public/sitemap.xml
- docs/seo/seo-checklist.md

## Title 规则
| 页面 | title |
|---|---|
| 首页 | 王钰贤 \| 水利方向学生 · 校园主播 · 策划与影像实践者 |
| 关于我 | 关于我 \| 王钰贤 |
| 作品集 | 作品集 \| 王钰贤 |
| 作品详情 | {作品标题} \| 王钰贤作品集 |
| 声音电台 | 声音电台 \| 王钰贤 |
| 摄影画廊 | 摄影画廊 \| 王钰贤 |
| 联系我 | 联系我 \| 王钰贤 |
| 404 | 页面未找到 \| 王钰贤 |

## Description 规则
每个页面使用专属 description（首页为全站定位，列表页为栏目说明，详情页为作品一句话简介）。

## Open Graph
- og:title / og:description / og:image / og:url / og:locale=zh_CN 已注入；
- OG 图：/images/og/default-cover.svg（1200×630 品牌封面），作品页可覆盖为作品封面。

## sitemap / robots
- robots.txt：允许全站抓取 + sitemap 地址；
- sitemap.xml：覆盖主要静态路由；部署后按真实域名更新。

## URL slug 规范
- 全部使用英文 slug（yalong-wind-solar-hydro 等）；
- 中文内容保留在正文，不进入 URL。

## 图片 alt 规范
- 卡片图 alt=作品标题；
- 摄影图 alt=图片描述（场景/主体）；
- 装饰性 SVG 封面 alt 用于卡片可访问性。

## 部署后待办
- 将 robots/sitemap/canonical 中的占位域名替换为真实域名；
- 提交 sitemap 到 Google Search Console / Bing Webmaster；
- 检查 OG 分享预览。
