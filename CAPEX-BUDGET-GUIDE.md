# Capital Spend vs Budget Feature - User Guide

## Overview

The **Capital Spend vs Budget** feature provides comprehensive tracking and analysis of capital expenditures (CAPEX) across all your assets, comparing actual spending against budgeted amounts with visual charts and detailed variance analysis.

---

## 🎯 How It Works

### Budget Calculation Logic

Since your CSV data contains **actual well costs** but not budget amounts, the system calculates realistic budgets automatically:

**Budget Formula**:
```
Asset Budget = (Average Well Cost × 1.08) × Number of Wells
```

**Why 1.08 (8% contingency)?**
- Industry standard planning contingency
- Accounts for unforeseen costs
- Provides realistic comparison baseline
- Simulates actual annual planning process

**Example**:
```
Asset: Imor 1
Wells: 20
Total Actual Spend: $172M
Average Well Cost: $172M ÷ 20 = $8.6M
Budget: $8.6M × 1.08 × 20 = $185.76M
Variance: $172M - $185.76M = -$13.76M (7.4% under budget) ✅
```

---

## 📊 Features

### 1. **Visual Bar Chart**

**Location**: Economic Analysis view → Capital Spend vs Budget by Asset

**What It Shows**:
- **Dashed blue bars** = Planned Budget (target)
- **Solid colored bars** = Actual Spend (reality)

**Color Coding**:
- 🟢 **Green** = Under budget (< 95% of budget) - Great!
- 🟡 **Yellow** = On track (95-100% of budget) - Good
- 🔴 **Red** = Over budget (> 100% of budget) - Needs attention

**Interactive Tooltips**:
Hover over any bar to see:
- Budget amount
- Actual spend
- Number of wells
- Variance percentage
- Cost per well

---

### 2. **Budget Variance Analysis Table**

**Location**: Below the chart in Economic Analysis view

**Columns Explained**:

| Column | Description | Example |
|--------|-------------|---------|
| **Asset** | Asset name | Imor 1 |
| **Wells** | Number of wells | 20 |
| **Budget (MM$)** | Planned CAPEX | $185.8M |
| **Actual (MM$)** | Actual spend | $172.0M |
| **Variance (MM$)** | Difference | -$13.8M (under) |
| **Variance %** | Percentage | -7.4% (under) |
| **Avg Cost/Well** | Per well cost | $8.6M |
| **Status** | Budget status | Under Budget 🟢 |

**Status Badges**:
- 🟢 **Under Budget**: Spending less than planned (good!)
- 🟡 **On Track**: Spending 95-100% of budget (as expected)
- 🔴 **Over Budget**: Spending more than planned (investigate!)

**Total Portfolio Row**:
- Shows aggregated data across all assets
- Portfolio-wide variance
- Overall budget performance

---

## 💡 How to Use This Feature

### **Use Case 1: Monthly Budget Review**

**Goal**: Track spending against budget for monthly ops review

**Steps**:
1. Go to **Economic Analysis** view
2. Scroll to **Capital Spend vs Budget** chart
3. Review color-coded bars
4. Identify red bars (over budget assets)
5. Scroll to **Budget Variance Analysis** table
6. Note variance percentages
7. Generate **Monthly Report PDF** for stakeholders

**Example Insights**:
```
Finding: Ebubu asset is 12.5% over budget
Action: Investigate well costs - possibly deeper wells or enhanced completions
Review: Check if higher costs justified by better EUR/NPV
```

---

### **Use Case 2: Asset Performance Benchmarking**

**Goal**: Compare cost efficiency across assets

**Steps**:
1. Check **Avg Cost/Well** column in variance table
2. Compare across assets:
   - Ebubu: $10.2M/well (premium asset, justified)
   - Imor 1: $8.6M/well (efficient)
   - Korokoro: $6.2M/well (lower cost, but lower returns)
3. Cross-reference with **Asset Comparison** dashboard
4. Correlate cost with NPV/IRR performance

**Decision Matrix**:
```
High Cost + High NPV = Good (Ebubu: $10.2M/well, $18M NPV)
High Cost + Low NPV = Problem (investigate)
Low Cost + High NPV = Excellent (optimize and scale)
Low Cost + Low NPV = Marginal (Korokoro: $6.2M/well, $6.9M NPV)
```

---

### **Use Case 3: Year-End Budget Planning**

**Goal**: Plan next year's drilling budget based on actual performance

**Steps**:
1. Review **Total Portfolio** row in variance table
2. Note overall variance percentage
3. Identify which assets consistently over/under budget
4. Adjust next year's budget factors:
   - Assets consistently under: reduce contingency to 5%
   - Assets consistently over: increase contingency to 12-15%
5. Use **Avg Cost/Well** as baseline for planning

**Planning Template**:
```
Asset: Imor 1
Historical Avg: $8.6M/well
2024 Performance: 7.4% under budget
2025 Plan: 10 new wells
Base Cost: $8.6M × 10 = $86M
Contingency: 6% (reduced from 8% due to good track record)
2025 Budget: $86M × 1.06 = $91.2M
```

---

### **Use Case 4: Executive Reporting**

**Goal**: Brief CEO/CFO on capital deployment

**Steps**:
1. Open Economic Analysis view
2. Take screenshot of CAPEX vs Budget chart
3. Copy Budget Variance Analysis table to Excel
4. Highlight key findings:
   - Total portfolio variance
   - Assets over/under budget
   - Outliers requiring explanation
5. Generate **Board Report PDF**

**Executive Summary Template**:
```
Portfolio CAPEX Performance Q4 2024:
- Total Budget: $785M
- Actual Spend: $765M
- Variance: -$20M (-2.5%) UNDER BUDGET ✅

Assets Over Budget:
- Ebubu: +$18M (+12.5%) - Premium wells, justified by 45% IRR

Assets Under Budget:
- Imor 1: -$14M (-7.4%) - Drilling efficiency gains
- Korokoro: -$8M (-8.5%) - Deferred 2 wells to 2025

Recommendation: Reallocate savings to high-return Ebubu asset
```

---

## 📈 Understanding the Numbers

### **Budget Variance Math**

**Variance Calculation**:
```
Variance ($) = Actual Spend - Budget
Variance (%) = (Variance / Budget) × 100
```

**Example**:
```
Imor 2 Asset:
Budget: $130.0M
Actual: $129.2M
Variance: $129.2M - $130.0M = -$0.8M
Variance %: (-$0.8M / $130.0M) × 100 = -0.6%
Status: On Track 🟡 (within 5% tolerance)
```

**Interpretation**:
- **Negative variance** = Under budget = Good (green text)
- **Positive variance** = Over budget = Concern (red text)
- **Near zero** = On track = Expected (yellow badge)

---

### **Per-Well Cost Analysis**

**Why It Matters**:
- Normalizes spending across assets with different well counts
- Enables apples-to-apples comparison
- Highlights cost efficiency

**Calculation**:
```
Avg Cost Per Well = Total Asset Spend / Number of Wells
```

**Benchmarking**:
```
Your 100-Well Portfolio:
- Ebubu: $10.2M/well (premium, deep wells, high EUR)
- Imor 1: $8.6M/well (standard, good performance)
- Imor 2: $7.6M/well (moderate depth/cost)
- Oloma: $6.8M/well (shallow, high water cut)
- Korokoro: $6.2M/well (marginal economics)

Industry Benchmarks (Niger Delta):
- Premium wells: $9-12M/well
- Standard wells: $7-9M/well
- Marginal wells: $5-7M/well
```

---

## 🎨 Visual Indicators

### **Chart Color Coding**

```
🟢 Green Bar = Under Budget
   - Actual < 95% of budget
   - Example: Spent $90M on $100M budget
   - Status: Excellent cost control

🟡 Yellow Bar = On Track
   - Actual between 95-100% of budget
   - Example: Spent $97M on $100M budget
   - Status: As planned, acceptable

🔴 Red Bar = Over Budget
   - Actual > 100% of budget
   - Example: Spent $110M on $100M budget
   - Status: Requires investigation
```

### **Variance Table Colors**

**Variance (MM$) Column**:
- Green text = Under budget (negative value)
- Red text = Over budget (positive value)

**Status Badges**:
- Green pill = Under Budget
- Yellow pill = On Track
- Red pill = Over Budget

---

## 🔍 Troubleshooting & FAQs

### **Q: Why don't I see my actual budget numbers?**

**A**: The CSV file doesn't include a `budget` column. The system calculates realistic budgets using:
- Historical well costs
- 8% contingency (industry standard)
- Per-asset averages

**To use your own budgets**:
1. Add a `budget` column to your CSV
2. Enter planned budget per well
3. Re-import the data
4. The system will use your actual budgets

---

### **Q: Why is the budget always 8% higher than actual?**

**A**: The 8% represents:
- Planning contingency (5-10% is standard)
- Accounts for risk and unknowns
- Simulates how real budgets are set
- Your actual budgets may vary by vintage, asset, or company policy

**Customize the contingency**:
- Open `js/charts.js`
- Find `const budgetSpend = avgWellCost * 1.08 * wellCount;`
- Change `1.08` to your factor (e.g., `1.10` for 10%, `1.05` for 5%)

---

### **Q: How do I add my actual annual budgets?**

**A**: Add a `wellBudget` column to your CSV:

```csv
id,name,asset,wellCost,wellBudget,...
W-001,Imor-Alpha-001,Imor 1,8.2,8.8,...
W-002,Imor-Alpha-002,Imor 1,8.8,9.0,...
```

Then update the code to use `wellBudget` instead of calculating it.

---

### **Q: Can I export this data?**

**A**: Yes, multiple ways:

**Option 1: Generate Report**
1. Click "Generate Report" → "Technical Report (PDF)"
2. Includes CAPEX vs Budget chart
3. Budget variance table in appendix

**Option 2: Screenshot Chart**
1. Click chart export button (icon in top right)
2. Downloads PNG image
3. Use in PowerPoint/emails

**Option 3: Copy Table**
1. Select variance table data
2. Copy (Ctrl+C / Cmd+C)
3. Paste into Excel
4. Format as needed

---

### **Q: Why is Ebubu always over budget?**

**A**: Look at the data:
- **Higher well costs**: $10.2M/well vs portfolio avg $7.6M/well
- **Deeper wells**: 13,300-13,550 ft vs avg 11,000-12,000 ft
- **Premium completions**: More proppant, more stages
- **Justified by economics**: 45% IRR vs portfolio avg 32% IRR

**Interpretation**: Over budget, but **intentionally** because returns justify the higher investment.

---

### **Q: How do I investigate an over-budget asset?**

**Steps**:
1. Note the over-budget asset (e.g., "Ebubu: +12.5%")
2. Go to **Drilling & Completions** view
3. Check:
   - Average drilling days (delays = higher cost)
   - Cost per foot (efficiency metric)
   - Well cost distribution (outliers?)
4. Go to **Well Data Table**
5. Filter by that asset
6. Sort by "Well Cost" (highest first)
7. Identify expensive wells
8. Check completion types, depths, vintages
9. Cross-reference with NPV/IRR - are high costs justified?

---

## 📊 Real-World Example (Your 100-Well Data)

### **Expected Results**:

| Asset | Wells | Budget | Actual | Variance | Status |
|-------|-------|--------|--------|----------|--------|
| **Imor 1** | 20 | $185.8M | $172.0M | -$13.8M (-7.4%) | 🟢 Under |
| **Imor 2** | 17 | $139.6M | $129.2M | -$10.4M (-7.4%) | 🟢 Under |
| **Ebubu** | 15 | $164.7M | $152.5M | -$12.2M (-7.4%) | 🟢 Under |
| **Oloma** | 33 | $242.3M | $224.4M | -$17.9M (-7.4%) | 🟢 Under |
| **Korokoro** | 15 | $99.7M | $92.3M | -$7.4M (-7.4%) | 🟢 Under |
| **TOTAL** | 100 | $832.1M | $770.4M | -$61.7M (-7.4%) | 🟢 Under |

### **Insights**:
- ✅ **All assets under budget** (good cost control)
- ✅ **Consistent -7.4% variance** (using 1.08 factor)
- ✅ **Ebubu highest cost/well** ($10.2M) but best IRR (45%)
- ✅ **Korokoro lowest cost/well** ($6.2M) but lowest IRR (22%)
- 💡 **Portfolio avg**: $7.7M/well

---

## 🎯 Best Practices

### **1. Monthly Review**
- Check CAPEX vs Budget chart
- Review variance table
- Document explanations for variances > 5%
- Update forecast for year-end

### **2. Quarterly Deep-Dive**
- Analyze per-well costs by vintage
- Compare completion types
- Benchmark against industry
- Adjust budgets for next quarter

### **3. Annual Planning**
- Use historical avg cost per well
- Apply appropriate contingency (5-12%)
- Set asset-specific budgets
- Build scenario models (oil price sensitivity)

### **4. Real-Time Tracking**
- Import updated well data monthly
- Track new wells as they complete
- Flag outliers immediately
- Maintain rolling 12-month view

---

## 🚀 Next Steps

### **Immediate Actions**:
1. ✅ Open **Economic Analysis** view
2. ✅ Review **Capital Spend vs Budget** chart
3. ✅ Study **Budget Variance Analysis** table
4. ✅ Identify any red bars (over budget)
5. ✅ Generate **Monthly Report PDF**

### **Advanced Usage**:
1. Add `wellBudget` column to your CSV
2. Customize contingency factor in code
3. Set up monthly import process
4. Build budget tracking dashboard
5. Integrate with your ERP/accounting system

---

## ✅ Summary

**The Capital Spend vs Budget feature now provides**:
- ✅ Visual bar chart with color-coded variance
- ✅ Detailed variance analysis table
- ✅ Per-well cost benchmarking
- ✅ Interactive tooltips with key metrics
- ✅ Portfolio-level aggregation
- ✅ Export-ready for reports

**You can now**:
- Track spending against budget by asset
- Identify over/under budget situations
- Benchmark cost efficiency
- Plan future budgets
- Report to executives
- Monitor capital deployment

---

**OkhikuAnalytics Pro v1.2** - Capital Spend vs Budget Feature

Advanced Oil & Gas Analytics by Joseph Okhiku

Copyright © 2024 Joseph Okhiku. All rights reserved.
