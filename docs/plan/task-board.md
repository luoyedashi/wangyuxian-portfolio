# 任务看板

| Task ID | Agent | 状态 | 依赖 | 输出文件 | 备注 |
|---|---|---|---|---|---|
| ORC-001 | 项目总控 Agent | DONE | 无 | docs/plan/project-roadmap.md | 项目启动 |
| PM-001 | 产品定位 Agent | TODO | ORC-001 | docs/brief/site-brief.md | 明确定位 |
| IA-001 | 信息架构 Agent | TODO | PM-001 | docs/ia/sitemap.md | 页面结构 |
| PRI-001 | 隐私合规 Agent | TODO | PM-001 | docs/privacy/content-policy.md | 内容审查 |
| CON-001 | 内容盘点 Agent | TODO | IA-001, PRI-001 | docs/content/inventory.md | 素材盘点 |
| COPY-001 | 文案 Agent | TODO | CON-001 | docs/copy/*.md | 网站文案 |
| DESIGN-001 | 视觉设计 Agent | TODO | PM-001, COPY-001 | docs/design/style-guide.md | 视觉规范 |
| DEV-001 | 前端脚手架 Agent | TODO | IA-001, DESIGN-001 | 可运行 Astro 项目 | 项目初始化 |
| DEV-002 | 页面开发 Agent | TODO | DEV-001, COPY-001 | src/pages/*, src/components/* | 页面开发 |
| MEDIA-001 | 媒体处理 Agent | TODO | CON-001, PRI-001 | public/assets + docs/media/asset-manifest.md | 资源处理 |
| SEO-001 | SEO Agent | TODO | DEV-002 | SEOHead.astro + robots/sitemap | SEO 优化 |
| QA-001 | 测试 Agent | TODO | DEV-002, MEDIA-001 | docs/qa/test-report.md | 上线检查 |
| OPS-001 | 部署 Agent | TODO | QA-001 | docs/ops/deploy.md | 部署文档 |
