# 内容类型设计

四类内容集合：works、voice、photography、notes。全部包含隐私门禁字段。

## works（作品）
```yaml
title, slug, category（六类 slug）, summary, cover,
date(YYYY-MM), role, status(public|draft|private),
featured(bool), tags[], links[]({label,url}), metrics[]({label,value}),
privacy: {sensitivity: low|medium|high, approved: bool, note}
```

## voice（声音节目）
```yaml
title, slug, program, cover, audio(可空), duration, date,
summary, script, tags[], privacy: {approved, note}
```

## photography（摄影专题）
```yaml
title, slug, category(portrait|campus|travel|light|rework), cover,
location, date, summary, images[]({src,alt}), story, tags[],
privacy: {approved, note}
```

## notes（成长记录，V2）
```yaml
title, slug, category(learning|project|campus|ai|reflection), date,
summary, tags[], status(public|draft)
```

## 构建门禁规则
- `privacy.sensitivity: high` → 默认不公开；
- `privacy.approved: false` → 不进入页面构建；
- `status: private/draft` → 不进入公开列表。
