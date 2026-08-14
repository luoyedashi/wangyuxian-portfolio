---
title: 团委智慧招新系统
slug: recruitment-system
category: ai-technology
summary: 用 Python 把团委文艺部招新全流程自动化。
cover: /images/works/recruitment-cover.svg
date: 2026-07
role: 设计与开发
status: public
featured: true
tags:
  - Python
  - 自动化
  - 招新
  - 流程设计
  - 界面截图待补
links:
  - label: 操作手册
    url: /files/works/recruitment-system-manual.md
privacy:
  sensitivity: low
  approved: true
  note: 展示流程，隐去报名者信息
---

## 背景

校团委文艺部招新涉及问卷收集、分组面试、评分排名与结果通知，人工处理效率低、易出错。我提出并实现一套轻量自动化系统。

## 我的角色

系统设计者与开发者：从需求梳理、配置设计到脚本实现与文档编写。

## 我做了什么

- 设计"腾讯问卷 → CSV → Python 本地管理 → 两轮面试"的整体流程；
- 实现问卷数据导入清洗、面试分组排程、评分排名淘汰、批量通知与结果导出五个脚本；
- 编写操作手册与面试评分标准，配置模板短信文案。

## 成果

- 一套可配置的招新自动化系统（config.yaml 驱动）；
- 把人工处理数小时的工作压缩为几分钟脚本运行。

## 反思

做工具前先想清楚流程。这套系统真正有用的部分不是代码，而是先把"谁在哪个环节做什么"定义清楚了。
