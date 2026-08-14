# 川大团委文艺部 · 智慧招新系统 — 操作手册

## 一、系统概览

本系统用于辅助四川大学团委文艺部的招新工作，覆盖从信息采集到最终录取的全流程。

```
📁 文艺部招新系统/
├── config.yaml                  ← 全局配置（部门、比例、密钥等）
├── scripts/                     ← Python 自动化脚本
│   ├── import_data.py           ← 问卷CSV导入与数据清洗
│   ├── schedule_interview.py    ← 面试分组与时间表生成
│   ├── rank_candidates.py       ← 评分排名与淘汰
│   ├── send_notifications.py    ← 批量短信通知
│   └── export_results.py        ← 最终录取名单导出
├── templates/                   ← 短信通知文案模板
├── data/                        ← 所有CSV数据文件
└── docs/                        ← 文档（本文 + 面试评分标准）
```

## 二、环境准备

### 2.1 安装 Python（3.9+）
- 下载地址：https://www.python.org/downloads/
- 安装时勾选 "Add Python to PATH"

### 2.2 安装依赖包
```bash
pip install pyyaml
# 短信功能按需安装：
# 阿里云：pip install alibabacloud_dysmsapi20170525
# 腾讯云：pip install tencentcloud-sdk-python
```

### 2.3 修改配置文件
打开 `config.yaml`，修改以下内容：
- `recruitment.year` → 招新年份
- `qq_groups` → 实际的QQ群号
- `sms.access_key_id` / `sms.access_key_secret` → 云短信密钥

## 三、完整操作流程

### 阶段1：信息采集

```
步骤1：在腾讯问卷制作报名问卷
  建议字段：姓名、学号、性别、学院、专业、年级、手机号、QQ号、
           志愿部门（多选）、是否服从调剂、特长、自我评述、过往经历

步骤2：收集完毕后，从腾讯问卷导出CSV
  腾讯问卷 → 我的问卷 → 统计 → 导出 → 选择 CSV 格式

步骤3：将导出的CSV文件重命名为「01_原始问卷数据.csv」
       放入 data/ 目录

步骤4：运行导入脚本
  cd 文艺部招新系统
  python scripts/import_data.py

  输出：data/02_候选人信息总表.csv（清洗后的数据）
```

### 阶段2：一轮面试安排

```
步骤1：生成面试时间表
  python scripts/schedule_interview.py 1

  输出：data/03_一轮面试评分表.csv
  （已按部门分组，每人分配了面试时间段）

步骤2：打印评分表给面试官
  - 直接打开 CSV 用 Excel 打印，或
  - 复制到飞书多维表格/腾讯文档供在线填写

步骤3：面试官评分后，将分数填入CSV的评分维度列
  - 如果多位面试官打分，用逗号或顿号分隔（如 85、90）
  - 也可以只填总分，系统会自动计算

步骤4：运行排名脚本
  python scripts/rank_candidates.py 1

  输出：更新 data/03_一轮面试评分表.csv（补充排名和结论）
```

### 阶段3：一轮结果通知

```
步骤1：人工检查排名结果，必要时手动调整结论列

步骤2：发送一轮面试通知（如果之前没发）
  python scripts/send_notifications.py round1_invite

步骤3：发送一轮结果通知
  python scripts/send_notifications.py round1_result
  - 自动区分通过/淘汰，发送对应模板
  - 发送日志：data/06_短信发送日志.csv

步骤4：人工操作
  - 通过者 → 手动拉入「一轮通过QQ群」
  - 编辑短信模板可修改 templates/ 下的txt文件
```

### 阶段4：二轮面试（重复阶段2-3）
```
python scripts/schedule_interview.py 2
python scripts/rank_candidates.py 2
python scripts/send_notifications.py round2_result
```

### 阶段5：最终录取
```
python scripts/export_results.py
→ data/05_最终录取名单.csv（完整版）
→ data/05_最终录取名单_公示版.csv（可发群公告的脱敏版）

人工操作：
- 录取者拉入「正式成员QQ群」
- 公示版发群公告
```

## 四、常见问题

**Q：腾讯问卷CSV列名和脚本里的字段名不一致怎么办？**
A：打开 `import_data.py`，修改第 ~78-90 行的字段映射。脚本已支持常见列名变体。

**Q：面试分数格式怎么填？**
A：每位面试官的打分用顿号（、）或英文逗号（,）分隔即可。例如 `85、90` 或 `85,90`。

**Q：短信发不出去？**
A：检查 `config.yaml` 中的短信配置，确认已开通云短信服务并通过模板审核。测试阶段可先不装短信SDK，脚本会模拟发送。

**Q：想调整通过比例？**
A：修改 `config.yaml` 中的 `cutoff.round1_pass_ratio` 和 `cutoff.round2_pass_ratio`。

## 五、文件清单

| 文件 | 作用 | 手动/自动 |
|------|------|----------|
| 01_原始问卷数据.csv | 腾讯问卷导出 | 手动导入 |
| 02_候选人信息总表.csv | 清洗后主表 | 自动生成 |
| 03_一轮面试评分表.csv | 时间表+评分 | 自动生成，手动填分 |
| 04_二轮面试评分表.csv | 时间表+评分 | 自动生成，手动填分 |
| 05_最终录取名单.csv | 录取结果 | 自动生成 |
| 06_短信发送日志.csv | 发送记录 | 自动生成 |
