# 王钰贤个人作品展示网站

把想法落地成作品。

四川大学水利水电学院学生、校园主播「望川客」、策划与影像实践者的个人作品证据库。技术栈：Astro + Tailwind CSS + Markdown Content Collections + TypeScript。

## 本地运行

```bash
npm install
npm run dev       # 开发预览 http://localhost:4321
npm run build     # 构建到 dist/
npm run preview   # 预览构建产物
npm run check     # 类型检查
```

## 目录结构

```text
src/
├── components/   # Navbar/WorkCard/Gallery/Lightbox 等组件
├── layouts/      # BaseLayout
├── pages/        # 首页/关于/作品集/声音/摄影/联系/404
├── content/      # works/voice/photography/notes 内容集合
├── lib/          # 站点配置与工具
└── styles/       # 全局样式与设计 token
public/
├── images/       # 摄影、作品封面、OG 图
├── files/        # 简历、作品 PDF/文档
├── audio/        # 声音节目（待补）
├── robots.txt
└── sitemap.xml
docs/             # 12 个 Agent 的交接文档（plan/brief/ia/privacy/...）
scripts/          # 简历生成、QA 检查、截图脚本
```

## 内容维护

在 `src/content/` 对应目录添加 Markdown 文件即可新增作品/节目/摄影专题：

```markdown
---
title: 作品标题
slug: url-slug
category: ai-technology        # 六类之一
summary: 一句话简介
cover: /images/works/xxx.jpg
date: "2026-07"
role: 我的角色
status: public                 # public | draft | private
featured: false
tags: [标签]
links:
  - label: 查看 PDF
    url: /files/works/xxx.pdf
privacy:
  sensitivity: low             # low | medium | high
  approved: true               # false 则不进入构建
---
正文：背景 / 我的角色 / 我做了什么 / 成果 / 反思
```

## 部署

构建命令 `npm run build`，输出目录 `dist`。详见 `docs/ops/deploy.md`（Cloudflare Pages / Vercel / GitHub Pages）。

## 隐私声明

本网站不包含感情细节、聊天记录、他人隐私与未授权素材。内容模型内置 `privacy.approved` 门禁，未通过审查的内容不会进入构建。

## 待补素材
- 《川雅颂》广播音频（`public/audio/voice/`）
- 部分作品界面截图
- 简历 PDF 需本人核对后正式公开
