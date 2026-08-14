---
title: 雅砻江水风光互补预测与调度研究
slug: yalong-wind-solar-hydro
category: ai-technology
summary: 用合成数据预演「水风光互补预测 → 简化调度」全链路，验证技术路线可行性。
cover: /images/works/yalong-cover.png
date: 2026-07
role: 研究者 / 代码与文档
status: public
featured: true
tags:
  - 深度学习
  - 水风光互补
  - 时序预测
  - PyTorch
links:
  - label: 查看主论文 PDF
    url: /files/works/yalong-dispatch-paper.pdf
  - label: Informer vs LSTM 对比论文
    url: /files/works/yalong-informer-lstm-paper.pdf
  - label: 大创汇报 PPT
    url: /files/works/yalong-dacreate-report.pptx
metrics:
  - label: 测试 MAE
    value: 约 30.4 MW
  - label: PICP（90% 区间）
    value: 约 0.91
  - label: 模型参数量
    value: 约 0.147 M
privacy:
  sensitivity: low
  approved: true
  note: 合成数据预演，已注明不外推为实际精度
---

## 背景

水利水电与新能源的协同调度是行业前沿方向。在不接触商业数据的前提下，我想先验证一条「预测 → 决策」的技术路线：能否用公开可复现的方法，走通数据生成、时序预测、概率评估与简化调度研究的全流程。

## 我的角色

项目的发起者与执行者：完成数据仿真、模型训练、评估绘图、论文与汇报材料，并用 `AUDIT.md` 对结果做诚实审计。

## 我做了什么

- 构造统计—机理混合仿真的雅砻江流域数据集（气象/水电/光伏/风电/负荷）；
- 实现 Patch 化时序模型 + 分位数预测头，与 LSTM、岭回归等基线对比；
- 研究预测误差如何转化为弃电、缺供、备用成本，输出调度情景分析；
- 产出《水风光预测与简化调度研究》论文、大创汇报 PPT 与 Fig1–Fig6 图件。

## 成果

- 测试集 MAE 约 30.4 MW、RMSE 约 39.1 MW，PICP(90%) 约 0.91；
- 完整复现命令与依赖清单，任何人可按文档跑通；
- 输出 6 张科研图件与两篇论文 PDF。

## 反思

合成数据不能替代现场数据，结果只证明「技术路线可行」，不证明「精度可达」。
这让我更清楚一件事：工程研究里，诚实地标注数据边界，比好看的指标更重要。
