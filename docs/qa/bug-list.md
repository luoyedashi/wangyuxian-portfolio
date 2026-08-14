# Bug 列表

## 已修复
| # | 问题 | 修复 |
|---|---|---|
| 1 | 全局样式未注入（global.css 未被引用） | BaseLayout 增加 `import '@/styles/global.css'` |
| 2 | SEOHead canonical/OG 在子路径部署下丢失路径 | 改为基于 SITE.url 拼接完整 URL |
| 3 | voice 集合类型错误（访问不存在的 status 字段） | 移除该判断 |
| 4 | notes 草稿日期被 YAML 解析为 Date 导致 schema 报错 | 日期加引号 |
| 5 | 未使用导入告警（SITE / PhotoCard） | 清理 |

## 待办（非阻塞）
- 《川雅颂》音频文件缺失 → 声音页显示"音频整理中"占位；
- 部分作品缺界面截图 → 以 SVG 品牌封面占位；
- 简历 PDF 待本人核对。
