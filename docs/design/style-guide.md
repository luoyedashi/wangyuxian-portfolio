# 任务结果

## Task ID
DESIGN-001

## Agent 角色
视觉设计 Agent / Visual Design Agent

## 状态
completed

## 摘要
完成网站视觉设计规范：继承用户既有「代表作」作品集设计语言（纸白/墨黑/克莱因蓝），主题「水 · 声 · 光」；定义主色/辅助色/强调色、字体、组件风格、暗色模式与 Tailwind token，移动端优先、以内容展示为主。

## 产出文件
- docs/design/style-guide.md
- docs/design/components.md
- docs/design/page-layout.md

## 设计主题
水 · 声 · 光
- 水：水利、工程、理性 → 深江蓝（克莱因蓝系）；
- 声：广播、表达、主持 → 晨雾白与墨黑的对白感；
- 光：摄影、影像、记录 → 琥珀橙点缀。

## 色彩 token
| Token | 值 | 用途 |
|---|---|---|
| paper | #fafaf8 | 页面背景（亮色） |
| ink | #0a0a0a | 主文字 |
| accent | #002FA7 | 主强调（克莱因蓝） |
| river | #0b3d91 | 深江蓝（渐变/次级强调） |
| amber | #E8762C | 琥珀橙（点缀/标签） |
| graphite | #525252 | 次级文字 |
| grey-1 | #f0f0ee | 卡片底 |
| border-subtle | #e0e0e0 | 边框 |
| 暗色背景 | #0e0f12 | dark 模式背景 |
| 暗色文字 | #f2f2ef | dark 模式文字 |

## 字体
- 中文：Noto Sans SC（系统回退 sans-serif）；
- 英文/数字：Inter；
- 代码/编号：JetBrains Mono；
- 展示标题可用衬线 Noto Serif SC 增强「杂志感」（可选）。

## 组件风格
- 按钮：墨黑实底（主） / 描边（次），圆角 999px，hover 加深；
- 卡片：纸白底、1px 细边框、大留白、hover 阴影轻微上浮；
- 标签：小号 Mono 编号 + 中文标签，琥珀橙/克莱因蓝点缀；
- 导航：顶栏固定，品牌字 + 右侧导航，移动端汉堡；
- 页脚：分隔线上方，品牌 + 导航 + 联系方式。

## 暗色模式
- 背景 #0e0f12、文字 #f2f2ef、边框 #26282c；
- accent 提亮为 #4f7cff 保证对比度；
- 图片不加暗化滤镜，保持摄影作品原貌。

## Tailwind token（实现时写入 CSS）
```css
--color-paper: #fafaf8; --color-ink: #0a0a0a;
--color-accent: #002FA7; --color-river: #0b3d91;
--color-amber: #E8762C; --color-graphite: #525252;
--color-grey1: #f0f0ee; --color-border: #e0e0e0;
```
