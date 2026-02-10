# Sample 100-Wells Dataset - User Guide

## Overview

This CSV file contains **100 wells** distributed across **5 assets** covering all features of OkhikuAnalytics Pro, including production tracking, water cut monitoring, decline curve analysis, economic metrics, and drilling performance.

---

## 📊 Dataset Summary

### Asset Distribution

| Asset | Well Count | Field Name | Characteristics |
|-------|-----------|------------|-----------------|
| **Imor 1** | 20 wells | Imor Field | Premium asset, high NPV, low water cut (16-23%) |
| **Imor 2** | 17 wells | Ebubu Field | Moderate performer, higher water cut (24-32%) |
| **Ebubu** | 15 wells | Oloma Field | Top performer, excellent EUR, lowest water cut (12-24%) |
| **Oloma** | 33 wells | Korokoro Field | Challenging reservoir, high water cut (33-57%) |
| **Korokoro** | 15 wells | Korokoro Deep | Marginal economics, highest water cut (41-60%) |

### Performance Overview

**Imor 1** (20 wells):
- Average Production: 480 BBL/day
- Average NPV: $14.5M
- Average IRR: 36%
- Water Cut Range: 16-24%
- EUR Range: 552-645 MBBL

**Imor 2** (17 wells):
- Average Production: 405 BBL/day
- Average NPV: $11.5M
- Average IRR: 30%
- Water Cut Range: 24-32%
- EUR Range: 418-525 MBBL

**Ebubu** (15 wells):
- Average Production: 605 BBL/day
- Average NPV: $18.0M
- Average IRR: 45%
- Water Cut Range: 12-24%
- EUR Range: 695-738 MBBL
- **Best performing asset!**

**Oloma** (33 wells):
- Average Production: 315 BBL/day
- Average NPV: $8.8M
- Average IRR: 26%
- Water Cut Range: 33-57%
- EUR Range: 325-445 MBBL

**Korokoro** (15 wells):
- Average Production: 278 BBL/day
- Average NPV: $6.9M
- Average IRR: 22%
- Water Cut Range: 41-60%
- EUR Range: 295-372 MBBL
- **Most challenging asset**

---

## 📋 Data Columns Explained

### Identification & Location (8 columns)
- **id**: Unique well identifier (W-001 to W-100)
- **name**: Well name (e.g., Imor-Alpha-001)
- **asset**: Asset name (Imor 1, Imor 2, Ebubu, Oloma, Korokoro)
- **status**: Active or Shut-in
- **operator**: Okhiku Energy (all wells)
- **vintage**: Year drilled (2021-2024)
- **fieldName**: Field name
- **basin**: Niger Delta

### Drilling & Completion (13 columns)
- **spudDate**: Drilling start date
- **completionDate**: Completion date
- **firstProductionDate**: First oil date
- **lateralLength**: Horizontal length (ft)
- **totalDepth**: Total measured depth (ft)
- **drillingDays**: Days from spud to completion
- **rigCrew**: Crew identifier
- **wellCost**: Total well cost ($MM)
- **completionType**: Slickwater, Hybrid, or Gel
- **proppantLoaded**: Proppant volume (lbs)
- **fluidPumped**: Frac fluid (gallons)
- **stages**: Number of frac stages
- **clusterSpacing**: Cluster spacing (ft)

### Production Metrics (7 columns)
- **currentProduction**: Current rate (BBL/day)
- **ip30**: 30-day initial production (BBL/day)
- **ip90**: 90-day IP (BBL/day)
- **ip180**: 180-day IP (BBL/day)
- **cumulativeOil**: Total oil produced (BBL)
- **cumulativeGas**: Total gas produced (MCF)
- **cumulativeWater**: Total water produced (BBL)

### Water & Gas Metrics (2 columns) ⭐
- **waterCut**: Current water cut (%)
  - Range: 12% (Ebubu) to 60% (Korokoro)
  - Increases over well life
  - Key performance indicator
- **gor**: Gas-oil ratio (MCF/BBL)
  - Range: 2.33 to 3.10
  - Varies by reservoir

### Economic Metrics (4 columns)
- **npv**: Net Present Value ($MM)
- **irr**: Internal Rate of Return (%)
- **breakEven**: Break-even oil price ($/BBL)
- **eur**: Estimated Ultimate Recovery (MBBL)

### Reservoir Properties (6 columns)
- **reservoirPressure**: Initial pressure (psi)
- **bottomholeTemperature**: BHT (°F)
- **permeability**: Rock permeability (mD)
- **porosity**: Rock porosity (%)
- **oilSaturation**: Oil saturation (%)
- **payThickness**: Pay zone thickness (ft)

### Notes (1 column)
- **notes**: Comments on well performance

---

## 🎯 Key Features Demonstrated

### 1. **Water Cut Analysis** ⭐
Each well has realistic water cut values that:
- Increase over time (older wells have higher water cut)
- Vary by asset (Ebubu: 12-24%, Korokoro: 41-60%)
- Affect economics (high water cut = lower NPV)
- Enable water cut trend charts in Production Performance view

### 2. **GOR (Gas-Oil Ratio) Tracking** ⭐
- All wells have GOR values (2.33-3.10 MCF/BBL)
- Enable GOR trend analysis
- Correlate with reservoir pressure

### 3. **Decline Curve Analysis**
- IP30, IP90, IP180 show production decline
- Supports hyperbolic decline fitting
- EUR calculations
- Type curve generation by vintage/completion

### 4. **Asset Comparison** ⭐
Perfect for testing the new Asset Comparison Dashboard:
- 5 distinct assets with different performance profiles
- Clear leaders (Ebubu) and laggards (Korokoro)
- Performance score variation (Ebubu: 80+, Korokoro: 40-50)

### 5. **Economic Analysis**
- NPV range: $4.2M to $18.8M
- IRR range: 22% to 48%
- Break-even range: $35/BBL to $56/BBL
- Portfolio-level aggregation

### 6. **Drilling Performance**
- Drilling days: 13-30 days
- Well costs: $5.8M to $10.4M
- Lateral lengths: 3,800-5,450 ft
- Multiple completion types (Slickwater, Hybrid, Gel)

### 7. **Vintage Analysis**
- Wells from 2021-2024
- Shows learning curve improvements
- Enables type curve comparison by year

### 8. **Well Status**
- 93 Active wells
- 7 Shut-in wells (various reasons: maintenance, water breakthrough, economic limit)

---

## 🚀 How to Use This Dataset

### Step 1: Import into OkhikuAnalytics Pro
1. Open `index.html` in Chrome
2. Click **"Import Data"** button
3. Click **"Browse"** and select `sample-100-wells-full-data.csv`
4. Wait 20-30 seconds for import
5. Click **"X"** to close modal

### Step 2: Explore Dashboards

#### Portfolio Dashboard
- View KPIs for all 100 wells
- Total production: ~40,000 BBL/day
- Portfolio NPV: ~$1,100M
- Average IRR: ~32%

#### Production Performance
- Production vs forecast charts
- Cumulative production curves
- **Water cut trends** (enable with filter)
- **GOR trends** (view gas-oil ratio over time)
- Top 10 underperformers

#### Economic Analysis
- NPV distribution across 5 assets
- IRR comparison
- Break-even histogram
- NPV vs IRR bubble chart (sized by EUR)

#### Drilling & Completions
- Average drilling days by asset
- Cost per foot analysis
- IP30 by completion type
- Rig crew benchmarking

#### Type Curve Analysis
- Normalized decline curves by vintage
- EUR distribution (P10/P50/P90)
- Cumulative oil vs proppant correlation

#### **Asset Comparison** ⭐ NEW!
- Side-by-side comparison of 5 assets
- Performance cards with scores
- 5 interactive charts
- Top 5 rankings
- Detailed metrics table

### Step 3: Generate Reports
1. Click **"Generate Report"** dropdown
2. Select report type:
   - **Executive Summary**: 2-3 pages, high-level
   - **Technical Report**: 3-4 pages, detailed
   - **Board Report**: 4-5 pages, strategic
3. PDF downloads automatically

---

## 📊 Expected Analytics Results

### Asset Performance Scores
Based on composite scoring (NPV 30%, IRR 25%, Production 25%, Break-even 20%):

| Asset | Expected Score | Grade |
|-------|---------------|-------|
| Ebubu | 82-88 | 🟢 Excellent |
| Imor 1 | 72-78 | 🟢 Excellent |
| Imor 2 | 58-64 | 🔵 Good |
| Oloma | 48-54 | 🟡 Average |
| Korokoro | 38-44 | 🟡 Average |

### Top 5 Wells by NPV
1. Oloma-Theta-100: $18.6M
2. Oloma-Epsilon-049: $18.5M
3. Oloma-Delta-048: $18.8M
4. Oloma-Alpha-038: $18.5M
5. Oloma-Gamma-045: $18.6M

### Top 5 Wells by Production
1. Oloma-Theta-100: 622 BBL/day
2. Oloma-Epsilon-050: 620 BBL/day
3. Oloma-Alpha-038: 615 BBL/day
4. Oloma-Epsilon-049: 612 BBL/day
5. Oloma-Gamma-044: 605 BBL/day

### Assets with Highest Water Cut
1. Korokoro: 41-60% (challenging)
2. Oloma: 33-57% (moderate-high)
3. Imor 2: 24-32% (moderate)
4. Imor 1: 16-24% (low)
5. Ebubu: 12-24% (excellent)

---

## 🔍 Data Quality & Realism

### Realistic Features
✅ **Progressive water cut**: Older wells have higher water cut
✅ **Vintage effects**: 2024 wells have less cumulative production
✅ **Asset consistency**: Each asset has characteristic ranges
✅ **Shut-in logic**: 7 wells shut-in for realistic reasons
✅ **Economic correlation**: Higher water cut = lower NPV
✅ **Decline curves**: IP30 > IP90 > IP180 > Current
✅ **Cost variation**: Longer laterals = higher costs
✅ **Reservoir properties**: Consistent within each field

### Data Relationships
- Water cut increases with cumulative production
- EUR correlates with IP30 and proppant loaded
- Break-even inversely relates to EUR
- NPV correlates with production and low water cut
- GOR relatively stable within each field

---

## 💡 Use Case Examples

### Scenario 1: Water Management Analysis
**Goal**: Identify wells with high water production

1. Go to **Production Performance** view
2. Click **"Water Cut"** filter
3. Sort by water cut (highest first)
4. Identify: Korokoro wells (40-60%), Oloma wells (33-57%)
5. **Action**: Prioritize water handling capacity expansion

### Scenario 2: Asset Divestiture Decision
**Goal**: Identify underperforming asset for sale

1. Go to **Asset Comparison** view
2. Review performance scores
3. Check break-even prices
4. Analyze NPV per well
5. **Finding**: Korokoro asset has:
   - Lowest score (38-44)
   - Highest water cut (41-60%)
   - Lowest NPV per well ($6.9M avg)
   - Marginal IRR (22% avg)
6. **Recommendation**: Consider divesting Korokoro

### Scenario 3: Capital Allocation
**Goal**: Decide where to drill next 10 wells

1. Go to **Asset Comparison**
2. Review **Top Assets by IRR**
3. Check **Break-Even Prices**
4. Analyze **EUR per well**
5. **Finding**: Ebubu asset shows:
   - Highest IRR (45% avg)
   - Best NPV per well ($18M)
   - Lowest break-even ($42/BBL)
   - Low water cut (12-24%)
6. **Decision**: Allocate budget to Ebubu

### Scenario 4: Completion Optimization
**Goal**: Determine best completion design

1. Go to **Drilling & Completions**
2. Review **IP30 by Completion Type**
3. Compare **Cost per Foot**
4. **Finding**:
   - Gel: Highest IP30 (avg 220 BBL/day) but most expensive
   - Hybrid: Good IP30 (avg 215 BBL/day), moderate cost
   - Slickwater: Lower IP30 (avg 200 BBL/day) but cheapest
5. **Recommendation**: Use Hybrid for optimal cost-performance

---

## 🔧 Troubleshooting

### Import Issues
**Problem**: CSV import fails
**Solution**: 
- Ensure file is not open in Excel
- Check file encoding (UTF-8)
- Verify no extra commas or line breaks

### Slow Performance
**Problem**: Dashboard slow to load
**Solution**:
- Close other browser tabs
- Use Chrome (best performance)
- Wait 20-30 seconds for initial load
- Asset Comparison may take 5-8 seconds

### Missing Charts
**Problem**: Charts don't appear
**Solution**:
- Wait 5-10 seconds after view switch
- Check internet connection (Chart.js loads from CDN)
- Refresh page (F5)

### Water Cut Not Showing
**Problem**: Can't see water cut trends
**Solution**:
- Go to **Production Performance** view
- Look for water cut column in data table
- Charts show water cut % over time
- Filter by well to see individual trends

---

## 📈 Expected Dashboard Load Times

| View | Load Time | Notes |
|------|-----------|-------|
| Portfolio Dashboard | 3-5 seconds | 100 wells, aggregate KPIs |
| Production Performance | 4-6 seconds | Multiple charts with 100 wells |
| Economic Analysis | 3-5 seconds | NPV/IRR calculations |
| Drilling & Completions | 3-4 seconds | Cost and efficiency metrics |
| Type Curve Analysis | 5-7 seconds | Decline curve fitting |
| **Asset Comparison** | **5-8 seconds** | 5 assets, multiple charts |
| Well Data Table | 2-3 seconds | Sortable/filterable table |

---

## 🎉 What You'll See

### Asset Comparison Dashboard
- **5 performance cards** (one per asset)
  - Ebubu: Green badge (excellent)
  - Imor 1: Green badge (excellent)
  - Imor 2: Blue badge (good)
  - Oloma: Yellow badge (average)
  - Korokoro: Yellow badge (average)

- **5 comparison charts**:
  - Total NPV: Ebubu leads
  - Total Production: Oloma leads (33 wells)
  - Average IRR: Ebubu leads (45%)
  - Well Count: Oloma leads (33 wells)
  - Break-Even: Ebubu best ($42/BBL)

- **4 ranking tables** (Top 5 each):
  - By NPV: Ebubu, Imor 1, Oloma, Imor 2, Korokoro
  - By Production: Oloma, Ebubu, Imor 1, Imor 2, Korokoro
  - By IRR: Ebubu, Imor 1, Imor 2, Oloma, Korokoro
  - By Break-Even: Ebubu, Imor 1, Imor 2, Oloma, Korokoro

- **Detailed metrics table**:
  - All 5 assets with 11 columns
  - Performance scores color-coded
  - Sortable and easy to export

---

## 📞 Support

For questions about this dataset:
- **Well Count**: 100 wells
- **Assets**: 5 (Imor 1, Imor 2, Ebubu, Oloma, Korokoro)
- **Vintages**: 2021-2024 (4 years)
- **Status**: 93 Active, 7 Shut-in
- **Total Columns**: 47 (all features covered)

**Key Features**:
✅ Water cut values (12-60%)
✅ GOR tracking (2.33-3.10)
✅ Production history
✅ Economic metrics
✅ Drilling performance
✅ Reservoir properties
✅ Asset comparison ready

---

**Ready to use!** Import this CSV into OkhikuAnalytics Pro and explore all 7 dashboards with complete, realistic data from your Nigerian operations.

**OkhikuAnalytics Pro** - Advanced Oil & Gas Analytics by Joseph Okhiku
