# 📊 Scenario Analysis Guide - OkhikuAnalytics Pro

**Advanced Oil & Gas Analytics by Joseph Okhiku**  
**Copyright © 2024 Joseph Okhiku. All rights reserved.**

---

## ✅ **Feature Status: FULLY FUNCTIONAL**

Scenario Analysis (Option B: Basic Scenario Switching) has been successfully implemented and is **ready for use**!

---

## 🎯 What This Feature Does

The Scenario Analysis tool enables you to:

1. ✅ **Quickly switch between pre-defined price scenarios** (Bear, Base, Bull)
2. ✅ **Adjust oil and gas prices manually** with real-time recalculation
3. ✅ **Compare portfolio economics** across multiple scenarios side-by-side
4. ✅ **View asset-level scenario impacts** to identify winners and losers
5. ✅ **Calculate price sensitivity** to understand NPV/IRR volatility
6. ✅ **See scenario comparison tables** with variance analysis

---

## 🚀 Quick Start: Using Scenario Analysis

### **Step 1: Navigate to Economic Analysis**
1. Open **index.html** in your browser
2. Click **"Economic Analysis"** in the left sidebar
3. Scroll to the **"Economic Scenario Analysis"** section (at the top)

### **Step 2: Select a Quick Scenario**
You'll see three preset buttons:

- **🔻 Bear Case**: Low prices ($50 oil, $2.50 gas)
- **⚖️ Base Case**: Current market ($70 oil, $3.50 gas) — Default
- **🔺 Bull Case**: High prices ($90 oil, $5.00 gas)

**Action:** Click any button to instantly apply that scenario

### **Step 3: View Results**
After selecting a scenario, you'll see:

1. **Updated price inputs** showing the selected scenario values
2. **Scenario Comparison Summary table** displaying:
   - Portfolio NPV for all three scenarios
   - Average IRR for all three scenarios
   - Wells above 15% IRR hurdle
   - Delta from Base Case ($ and %)
3. **Updated charts** reflecting the new economics

### **Step 4: Manual Adjustment (Optional)**
Fine-tune the scenario by:
1. **Edit the price inputs:**
   - Oil Price ($/BBL)
   - Gas Price ($/MCF)
   - Discount Rate (%)
2. **Click "Recalculate Economics"** button
3. Results update automatically

---

## 📋 Scenario Presets

### **Bear Case (Downside)**
- **Oil Price:** $50/BBL
- **Gas Price:** $2.50/MCF
- **Description:** Low price environment, recession scenario
- **Use Case:** Stress testing, downside risk assessment

### **Base Case (Most Likely)**
- **Oil Price:** $70/BBL
- **Gas Price:** $3.50/MCF
- **Description:** Current market conditions, realistic assumptions
- **Use Case:** Standard planning, budgeting, board presentations

### **Bull Case (Upside)**
- **Oil Price:** $90/BBL
- **Gas Price:** $5.00/MCF
- **Description:** High price environment, supply constraints
- **Use Case:** Upside potential, aggressive growth planning

---

## 📊 Understanding the Scenario Comparison Table

### **Portfolio Economics Summary**

| Metric | Bear Case | Base Case | Bull Case |
|--------|-----------|-----------|-----------|
| **Portfolio NPV (MM$)** | Lower value | Mid value | Higher value |
| **Δ vs Base Case** | Negative | — | Positive |
| **% Change** | -X% | — | +Y% |
| **Average IRR (%)** | Lower | Mid | Higher |
| **Wells Above Hurdle** | Fewer | Mid | More |

### **Asset-Level Comparison**

The table also shows **asset-by-asset impacts**, helping you identify:

- **Most Sensitive Assets:** Large NPV swings between scenarios
- **Resilient Assets:** Stable performance across scenarios
- **High-Risk Assets:** Fall below hurdle rate in Bear Case
- **Opportunity Assets:** Strong performers in Bull Case

---

## 💡 Real-World Use Cases

### **Use Case 1: Budget Stress Testing**
**Scenario:** Your 2025 budget assumes $70 oil. What if prices drop?

**Workflow:**
1. Start with **Base Case** ($70 oil)
2. Note Portfolio NPV = $XX million
3. Switch to **Bear Case** ($50 oil)
4. New Portfolio NPV = $YY million
5. **Risk Exposure:** $(XX - YY) million downside

**Decision:** If downside > 30%, consider hedging or reducing capex

---

### **Use Case 2: Asset Comparison for Divestiture**
**Scenario:** You need to divest 1 of 5 assets. Which performs worst in downturns?

**Workflow:**
1. Switch to **Bear Case** ($50 oil)
2. Review **Asset-Level Comparison Table**
3. Identify assets with:
   - Lowest NPV in Bear Case
   - IRR below hurdle (15%)
   - Highest break-even price
4. **Candidate for Divestiture:** Asset with worst downside performance

**Decision:** Sell asset XYZ (NPV drops 60% in Bear Case, IRR = 12%)

---

### **Use Case 3: Development Prioritization**
**Scenario:** You have $50M to allocate. Which assets benefit most from high prices?

**Workflow:**
1. Switch to **Bull Case** ($90 oil)
2. Review **Asset-Level NPV Gains**
3. Identify assets with:
   - Highest NPV increase ($ and %)
   - IRR > 30% in Bull Case
   - Low break-even price
4. **Top Candidate:** Asset ABC (NPV +$80M in Bull Case, IRR = 45%)

**Decision:** Allocate 70% of budget to Asset ABC drilling

---

### **Use Case 4: Board Presentation**
**Scenario:** Board wants to see upside/downside risks for Q4 2024 portfolio

**Workflow:**
1. Generate **Base Case** metrics (current plan)
2. Switch to **Bear Case** → screenshot → label "Downside Risk"
3. Switch to **Bull Case** → screenshot → label "Upside Potential"
4. Create comparison table in PowerPoint with 3 scenarios
5. Add narrative:
   - "Portfolio NPV ranges from $XXM (Bear) to $YYM (Bull)"
   - "Downside risk = $ZZM (XX% of Base Case)"
   - "Upside opportunity = $AAM (YY% of Base Case)"

**Decision:** Board approves plan with hedging strategy for downside protection

---

## 🔢 How Calculations Work

### **Scenario NPV Calculation**

For each well, the tool:
1. **Retrieves production history** (monthly rates, EUR)
2. **Applies price assumptions** (oil price, gas price)
3. **Calculates revenue** = (Oil Production × Oil Price) + (Gas Production × Gas Price)
4. **Subtracts operating costs** (assumed $15/BBL)
5. **Subtracts capital costs** (well cost, completion cost)
6. **Discounts cash flows** at the specified discount rate
7. **Sums to get NPV**

### **Scenario IRR Calculation**

IRR is the discount rate where NPV = $0, calculated using:
- Newton-Raphson iteration method
- Same revenue and cost assumptions as NPV
- Converges in < 100 iterations

### **Portfolio Aggregation**

- **Portfolio NPV** = Sum of all well NPVs
- **Average IRR** = Mean of all well IRRs (not weighted)
- **Wells Above Hurdle** = Count of wells with IRR ≥ 15%

---

## 🧪 Testing Your Scenario Analysis

### **Verification Steps**

1. **Open test file:** `test-scenario-analysis.html` in browser
2. **Check test results:**
   - ✅ All methods exist (6 tests)
   - ✅ Scenario parameters correct (3 tests)
   - ✅ NPV increases with price (1 test)
   - ✅ Scenario comparison works (1 test)
   - ✅ Asset scenarios work (1 test)
   - ✅ Sensitivity analysis works (1 test)
3. **Expected:** **15/15 tests passing**
4. **View scenario comparison data** at bottom of page

### **Manual Testing**

1. Open **index.html** → **Economic Analysis**
2. Click **Bear Case** → Verify oil price = $50, gas price = $2.50
3. Click **Base Case** → Verify oil price = $70, gas price = $3.50
4. Click **Bull Case** → Verify oil price = $90, gas price = $5.00
5. **Manually adjust** oil price to $60 → Click **Recalculate**
6. **Verify:** Scenario Comparison Table updates with new values

---

## 📈 Interpreting Results

### **NPV Sensitivity**

**Formula:** Sensitivity = (Bull NPV - Base NPV) / Base NPV × 100%

**Interpretation:**
- **< 30% sensitivity:** Low price risk, stable economics
- **30-50% sensitivity:** Moderate price risk, typical for mature assets
- **> 50% sensitivity:** High price risk, consider hedging

**Example:**
- Base Case NPV = $100M
- Bull Case NPV = $140M
- Sensitivity = (140-100)/100 × 100% = **40%**
- **Interpretation:** Portfolio value increases 40% if prices rise to $90 oil

### **IRR Resilience**

**Metric:** % of wells above 15% IRR hurdle in each scenario

**Interpretation:**
- **Bear Case:** If < 50% of wells above hurdle, portfolio is high-risk
- **Base Case:** Target ≥ 70% of wells above hurdle
- **Bull Case:** Target ≥ 90% of wells above hurdle

**Example:**
- Bear: 45 wells / 100 = **45% above hurdle** ⚠️ High Risk
- Base: 72 wells / 100 = **72% above hurdle** ✅ Good
- Bull: 95 wells / 100 = **95% above hurdle** ✅ Excellent

**Action:** In Bear Case, 55 wells below hurdle → consider:
- Divest underperformers
- Reduce opex to improve economics
- Focus capex on best 45 wells

---

## ⚠️ Limitations (What This Tool Doesn't Do)

### **❌ Not Included in Option B**

This tool does **NOT** include:

1. **Tornado Charts** — No visual sensitivity ranking of variables
2. **Monte Carlo Simulation** — No probabilistic P10/P50/P90 analysis
3. **Custom Variable Scenarios** — Limited to oil/gas prices only (no opex, capex, EUR variations)
4. **Automated Hedging Strategies** — No derivative pricing or hedge optimization
5. **Dynamic Type Curves** — Type curves don't update with scenario prices

### **✅ Recommended Workflow for Advanced Scenarios**

For probabilistic analysis:
1. **Export data** from OkhikuAnalytics Pro → JSON
2. **Run Monte Carlo** in Excel with @Risk or Crystal Ball
3. **Import P10/P50/P90 results** back as custom scenarios
4. **Visualize** in OkhikuAnalytics Pro using custom price inputs

For tornado charts:
1. Use scenario analysis to **test 5-7 variables** (prices, opex, EUR, etc.)
2. **Record NPV impact** for each variable
3. **Create tornado chart** in Excel or PowerBI
4. **Present findings** alongside OkhikuAnalytics Pro dashboards

---

## 📁 File Reference

### **Files Created/Modified**

**HTML:**
- `index.html` — Scenario controls UI, comparison table container

**JavaScript:**
- `js/analytics.js` — Scenario calculation methods:
  - `getScenarioParams(scenarioType)`
  - `calculateScenarioNPV(well, oilPrice, gasPrice, discountRate)`
  - `calculateScenarioIRR(well, oilPrice, gasPrice)`
  - `calculateScenarioMetrics(oilPrice, gasPrice, discountRate)`
  - `calculateAssetScenarios(oilPrice, gasPrice, discountRate)`
  - `compareScenarios()`
- `js/app.js` — UI wiring:
  - `setupScenarioControls()`
  - `applyScenario(scenarioType)`
  - `recalculateEconomics()`
  - `renderScenarioComparisonTable()`

**CSS:**
- `css/style.css` — Scenario UI styling:
  - `.scenario-controls`
  - `.scenario-btn`
  - `.scenario-table`
  - `.sensitivity-indicator`

**Testing:**
- `test-scenario-analysis.html` — Automated test suite (15 tests)

**Documentation:**
- `SCENARIO-ANALYSIS-GUIDE.md` — This file

---

## 🎓 Training Recommendations

### **For Portfolio Managers**
**Focus:** Understanding scenario impacts on portfolio NPV and IRR

**Training Steps:**
1. Learn to **quickly switch scenarios** (Bear/Base/Bull)
2. Practice **identifying high-risk assets** in Bear Case
3. Build **monthly scenario dashboards** for leadership

**Time:** 15 minutes

### **For Asset Teams**
**Focus:** Using scenarios to optimize asset-level decisions

**Training Steps:**
1. Learn to **analyze asset-specific sensitivity**
2. Practice **comparing 5+ assets** across scenarios
3. Build **development priority lists** based on Bull Case

**Time:** 30 minutes

### **For Executives**
**Focus:** Presenting scenario analysis to boards and investors

**Training Steps:**
1. Learn to **generate scenario comparison tables**
2. Practice **exporting scenario charts** to PDFs
3. Build **board-ready presentations** with upside/downside

**Time:** 10 minutes

---

## 🆘 Troubleshooting

### **Problem 1: Scenario buttons don't work**

**Symptoms:** Clicking Bear/Base/Bull buttons does nothing

**Solutions:**
1. **Check browser console** for JavaScript errors (F12)
2. **Verify files loaded:**
   - `js/analytics.js` contains `compareScenarios()`
   - `js/app.js` contains `setupScenarioControls()`
3. **Clear browser cache** and reload
4. **Test:** Open `test-scenario-analysis.html` — should show 15/15 tests passing

---

### **Problem 2: Comparison table shows "undefined" or "NaN"**

**Symptoms:** Table displays but values are missing

**Solutions:**
1. **Check data loaded:** Ensure CSV import completed successfully
2. **Verify well data:** At least 1 active well with EUR, npv, irr fields
3. **Check console:** Look for calculation errors
4. **Test:** Run test suite to verify calculations work

---

### **Problem 3: Recalculate button does nothing**

**Symptoms:** Manual price changes don't trigger recalculation

**Solutions:**
1. **Check button ID:** Must be `recalculateEcon` in HTML
2. **Verify event listener:** `setupScenarioControls()` called in `init()`
3. **Console log:** Add `console.log()` in `recalculateEconomics()` to verify function runs
4. **Test:** Click button, check console for "Recalculating economics..." message

---

### **Problem 4: Scenario comparison values seem wrong**

**Symptoms:** NPV doesn't increase with higher prices

**Solutions:**
1. **Check well data:** Ensure wells have `eur`, `cumulativeOil`, `cumulativeGas` fields
2. **Verify price units:** Oil in $/BBL, gas in $/MCF
3. **Check discount rate:** Should be 10% (or 0.10)
4. **Test:** Run `test-scenario-analysis.html` — test "NPV increases with price" should pass

---

## 📞 Support

**Need Help?**

1. **Check documentation:**
   - `README.md` — Overview and getting started
   - `QUICKSTART.md` — 5-minute quick start guide
   - `100-WELL-DATASET-COMPLETE.md` — Sample data documentation

2. **Run tests:**
   - `test-scenario-analysis.html` — Scenario analysis tests
   - `test-asset-comparison.html` — Asset comparison tests
   - `test-reports.html` — Report generation tests

3. **Contact:**
   - **Creator:** Joseph Okhiku
   - **Product:** OkhikuAnalytics Pro
   - **Copyright:** © 2024 Joseph Okhiku. All rights reserved.

---

## ✅ Final Checklist

Before using scenario analysis in production:

- [ ] **Import your data** (CSV with 100+ wells recommended)
- [ ] **Test Bear Case** — Verify NPV decreases
- [ ] **Test Bull Case** — Verify NPV increases
- [ ] **Run test suite** — `test-scenario-analysis.html` shows 15/15 passing
- [ ] **Generate comparison table** — Screenshot for reports
- [ ] **Export to PDF** — Use "Generate Report" → "Executive Summary"
- [ ] **Share with team** — Train users on scenario workflow

---

## 🎉 You're Ready!

**Scenario Analysis (Option B) is fully functional and ready for use.**

**Next Steps:**
1. Open **Economic Analysis** view
2. Click **Bear Case** / **Base Case** / **Bull Case**
3. Review **Scenario Comparison Summary** table
4. Generate **Executive Summary PDF** with scenario results
5. Present to leadership with confidence!

---

**OkhikuAnalytics Pro — Advanced Oil & Gas Analytics by Joseph Okhiku**  
**Copyright © 2024 Joseph Okhiku. All rights reserved.**
