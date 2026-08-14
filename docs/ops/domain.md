# 域名建议

## 现状
- 项目预设站点：`https://luoyedashi.github.io/wangyuxian-portfolio/`（GitHub Pages 子路径）；
- Cloudflare Pages 默认提供 `wangyuxian-portfolio.pages.dev`；
- Vercel 默认提供 `wangyuxian-portfolio.vercel.app`。

## 自定义域名建议（可选）
| 类型 | 示例 | 适用场景 |
|---|---|---|
| 个人域名 | `wangyuxian.cn` / `wangyuxian.com` | 长期个人品牌 |
| 拼音域名 | `yuxian.wang` | 简短好记 |
| 子域名 | `portfolio.wangyuxian.cn` | 与博客/其他站共用主域 |

## 域名绑定步骤（以 Cloudflare 为例）
1. 在域名注册商处将 DNS 托管迁移到 Cloudflare；
2. Pages 项目 → Custom domains → 添加域名；
3. 自动签发 HTTPS 证书；
4. 更新 `astro.config.mjs` 的 `site` 为最终域名，重建后重新部署。

## 说明
域名购买与 DNS 配置需要用户本人操作，本项目不代购。
