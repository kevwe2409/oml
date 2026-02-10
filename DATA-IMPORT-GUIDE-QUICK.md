# Data Import Template - Complete Guide

## 📋 Overview

This guide explains **every column** in the OkhikuAnalytics Pro CSV import template and shows you exactly how to populate your data for import.

---

## 📄 Template Files

### **Files Provided**:
1. **`data-import-template.csv`** - Empty template with header row and one example
2. **`sample-100-wells-full-data.csv`** - Complete example with 100 wells (reference)
3. **This guide** - Column-by-column explanation

---

## 📊 All 47 Columns Explained

### **Legend**:
- ✅ **Required** - Must have for core functionality
- 🔶 **Recommended** - Important for full features
- 🔵 **Optional** - Nice to have, not critical

---

## 🔍 SECTION 1: Basic Well Information (16 columns)

| # | Column | Required | Format | Example | Description |
|---|--------|----------|--------|---------|-------------|
| 1 | **id** | ✅ | Text | W-001 | Unique well identifier (must be unique) |
| 2 | **name** | ✅ | Text | Imor-Alpha-001 | Well name/designation |
| 3 | **asset** | ✅ | Text | Imor 1 | Asset name (CRITICAL for Asset Comparison) |
| 4 | **status** | ✅ | Text | Active | Active, Shut-in, or Drilling |
| 5 | **operator** | 🔶 | Text | Okhiku Energy | Operating company |
| 6 | **vintage** | ✅ | Number | 2024 | Year drilled (for type curves) |
| 7 | **spudDate** | 🔶 | Date | 2024-01-15 | Drilling start date (YYYY-MM-DD) |
| 8 | **completionDate** | 🔶 | Date | 2024-02-28 | Completion date (YYYY-MM-DD) |
| 9 | **firstProductionDate** | 🔵 | Date | 2024-03-05 | First oil date (YYYY-MM-DD) |
| 10 | **fieldName** | 🔵 | Text | Imor Field | Field/reservoir name |
| 11 | **basin** | 🔵 | Text | Niger Delta | Geologic basin |
| 12 | **county** | 🔵 | Text | Rivers | County/district |
| 13 | **state** | 🔵 | Text | Rivers State | State/province |
| 14 | **country** | 🔵 | Text | Nigeria | Country |
| 15 | **api** | 🔵 | Text | API-001 | API number or equivalent |
| 16 | **wellType** | 🔶 | Text | Horizontal | Horizontal, Vertical, or Directional |

---

## 🔧 SECTION 2: Drilling & Completion (10 columns)

| # | Column | Required | Format | Example | Description |
|---|--------|----------|--------|---------|-------------|
| 17 | **lateralLength** | ✅ | Number | 5000 | Horizontal lateral length (feet) |
| 18 | **totalDepth** | 🔶 | Number | 12500 | Total measured depth (feet) |
| 19 | **drillingDays** | ✅ | Number | 22 | Days from spud to completion |
| 20 | **rigCrew** | 🔵 | Text | Crew-A | Rig crew identifier |
| 21 | **wellCost** | ✅ | Number | 8.5 | Total well cost (million $) |
| 22 | **completionType** | ✅ | Text | Slickwater | Slickwater, Hybrid, or Gel |
| 23 | **proppantLoaded** | 🔶 | Number | 3200000 | Total proppant (pounds) |
| 24 | **fluidPumped** | 🔵 | Number | 185000 | Total fluid volume (gallons) |
| 25 | **stages** | 🔶 | Number | 28 | Number of frac stages |
| 26 | **clusterSpacing** | 🔵 | Number | 45 | Cluster spacing (feet) |

---

## 📈 SECTION 3: Production Data (7 columns) ⭐ CRITICAL

| # | Column | Required | Format | Example | Description |
|---|--------|----------|--------|---------|-------------|
| 27 | **currentProduction** | ✅ | Number | 520 | Current oil rate (BBL/day) |
| 28 | **ip30** | ✅ | Number | 750 | 30-day initial production (BBL/day) |
| 29 | **ip90** | 🔶 | Number | 580 | 90-day IP (BBL/day) |
| 30 | **ip180** | 🔶 | Number | 480 | 180-day IP (BBL/day) |
| 31 | **cumulativeOil** | ✅ | Number | 425000 | Total oil produced (barrels) |
| 32 | **cumulativeGas** | 🔶 | Number | 1280000 | Total gas produced (MCF) |
| 33 | **cumulativeWater** | ✅ | Number | 85000 | Total water produced (barrels) |

---

## 💧 SECTION 4: Water & Gas Metrics (2 columns) ⭐ KEY METRICS

| # | Column | Required | Format | Example | Description |
|---|--------|----------|--------|---------|-------------|
| 34 | **waterCut** | ✅ | Number | 16.5 | Water cut percentage (16.5 = 16.5%) |
| 35 | **gor** | 🔶 | Number | 2.46 | Gas-oil ratio (MCF/BBL) |

**⚠️ IMPORTANT**: Water cut is a **percentage** (e.g., enter `16.5` for 16.5%, NOT `0.165`)

---

## 💰 SECTION 5: Economic Metrics (4 columns) ⭐ CRITICAL

| # | Column | Required | Format | Example | Description |
|---|--------|----------|--------|---------|-------------|
| 36 | **npv** | ✅ | Number | 15.8 | Net Present Value (million $) |
| 37 | **irr** | ✅ | Number | 38.5 | Internal Rate of Return (38.5 = 38.5%) |
| 38 | **breakEven** | ✅ | Number | 42.5 | Break-even oil price ($/BBL) |
| 39 | **eur** | ✅ | Number | 625 | Estimated Ultimate Recovery (MBBL) |

---

## 🏔️ SECTION 6: Reservoir Properties (6 columns) 🔵 Optional

| # | Column | Required | Format | Example | Description |
|---|--------|----------|--------|---------|-------------|
| 40 | **reservoirPressure** | 🔵 | Number | 4250 | Initial reservoir pressure (psi) |
| 41 | **bottomholeTemperature** | 🔵 | Number | 215 | Bottom-hole temperature (°F) |
| 42 | **permeability** | 🔵 | Number | 85 | Rock permeability (millidarcies) |
| 43 | **porosity** | 🔵 | Number | 18.5 | Rock porosity (18.5 = 18.5%) |
| 44 | **oilSaturation** | 🔵 | Number | 65 | Oil saturation (65 = 65%) |
| 45 | **payThickness** | 🔵 | Number | 125 | Pay zone thickness (feet) |

---

## 📝 SECTION 7: Notes (1 column)

| # | Column | Required | Format | Example | Description |
|---|--------|----------|--------|---------|-------------|
| 46 | **notes** | 🔵 | Text | High IP well | Any comments or special notes |

---

## ✅ Minimum Required Fields (18 columns)

To use the platform, you **MUST** provide these 18 columns:

1. ✅ id
2. ✅ name
3. ✅ asset (CRITICAL)
4. ✅ status
5. ✅ vintage
6. ✅ lateralLength
7. ✅ drillingDays
8. ✅ wellCost
9. ✅ completionType
10. ✅ currentProduction
11. ✅ ip30
12. ✅ cumulativeOil
13. ✅ cumulativeWater
14. ✅ waterCut (CRITICAL)
15. ✅ npv
16. ✅ irr
17. ✅ breakEven
18. ✅ eur

---

## 📋 Quick Fill-Out Guide

### **Step 1: Basic Info (columns 1-6)**
```
id: Your well ID (W-001, ABC-123, etc.)
name: Well name (Imor-Alpha-001, North Field #5)
asset: Asset name (Imor 1, Eagle Ford, etc.) - MUST BE CONSISTENT!
status: Active, Shut-in, or Drilling
operator: Your company name
vintage: Year (2021, 2022, 2023, 2024)
```

### **Step 2: Drilling Data (columns 17-22)**
```
lateralLength: Horizontal length in feet (5000, 7500)
drillingDays: Days from spud to completion (20, 35, 45)
wellCost: Total cost in million $ (8.5, 12.3, 6.7)
completionType: Slickwater, Hybrid, or Gel
```

### **Step 3: Production (columns 27-33)**
```
currentProduction: Current rate BBL/day (520, 350, 125)
ip30: 30-day IP BBL/day (750, 600, 450)
cumulativeOil: Total oil produced in barrels (425000, 180000)
cumulativeWater: Total water produced in barrels (85000, 42000)
```

### **Step 4: Key Metrics (columns 34-39)**
```
waterCut: Percentage (16.5, 24.8, 45.2) - NOT decimal!
npv: NPV in million $ (15.8, 8.5, 22.3)
irr: IRR in % (38.5, 25.2, 45.8)
breakEven: Break-even price $/BBL (42.5, 35.0, 52.8)
eur: EUR in thousand BBL (625, 450, 850)
```

---

## 💡 Common Calculations

### **Water Cut** (if you don't have it directly):
```
Water Cut (%) = (Current Water Rate / (Current Oil Rate + Current Water Rate)) × 100

Example:
Oil: 400 BBL/day
Water: 80 BBL/day
Water Cut = (80 / (400 + 80)) × 100 = 16.67%
```

### **GOR** (Gas-Oil Ratio):
```
GOR = Total Gas (MCF) / Total Oil (BBL)

Example:
Cumulative Gas: 1,280,000 MCF
Cumulative Oil: 425,000 BBL
GOR = 1,280,000 / 425,000 = 3.01 MCF/BBL
```

### **EUR Estimate** (if unknown):
```
Use decline curve analysis or reserve report
Typical range: 300-1,000 MBBL depending on play
Should be > cumulative oil produced
```

---

## ⚠️ Common Mistakes to Avoid

### **1. Water Cut Format**
❌ Wrong: 0.165 (decimal)
✅ Right: 16.5 (percentage)

### **2. Asset Names**
❌ Wrong: "Imor 1", "imor 1", "Imor-1" (inconsistent)
✅ Right: "Imor 1" (exact same spelling every time)

### **3. Well Cost Units**
❌ Wrong: 8500000 (dollars)
✅ Right: 8.5 (million dollars)

### **4. EUR Units**
❌ Wrong: 625000 (barrels)
✅ Right: 625 (thousand barrels = MBBL)

### **5. Status Values**
❌ Wrong: "active", "ACTIVE", "producing"
✅ Right: "Active" (exact capitalization)

### **6. Completion Types**
❌ Wrong: "slickwater", "water frac"
✅ Right: "Slickwater", "Hybrid", or "Gel" only

---

## 🎯 Your Checklist Before Import

### **Data Quality**:
- [ ] All required fields filled
- [ ] No duplicate well IDs
- [ ] Asset names consistent (exact spelling)
- [ ] Status: Active, Shut-in, or Drilling only
- [ ] Completion: Slickwater, Hybrid, or Gel only
- [ ] Water cut between 0-100
- [ ] IRR positive and < 100%
- [ ] EUR > cumulative oil
- [ ] Dates in YYYY-MM-DD format
- [ ] Numbers only (no $, commas, %)

### **Logic Checks**:
- [ ] IP30 > IP90 > IP180 > current production
- [ ] Shut-in wells have currentProduction = 0
- [ ] Older wells have higher cumulative production
- [ ] Higher EUR correlates with higher NPV

---

## 🚀 Import Steps

### **Step 1: Prepare**
1. Fill out `data-import-template.csv` in Excel
2. Start with required fields (18 columns)
3. Add recommended/optional fields as available
4. Save as **CSV (UTF-8)**

### **Step 2: Import**
1. Open OkhikuAnalytics Pro (`index.html`)
2. Click **"Import Data"** button (top right)
3. Click **"Browse"** or drag-and-drop CSV
4. Wait 20-30 seconds (for 100 wells)
5. Look for success message

### **Step 3: Verify**
1. **Dashboard**: Check total well count matches
2. **Asset Comparison**: Verify all assets appear
3. **Production Performance**: Check water cut values display
4. **Economic Analysis**: Review NPV/IRR distribution
5. **Well Data Table**: Spot-check a few wells

---

## 📊 Example Row (Copy & Modify)

```csv
W-001,North-Alpha-001,North Field,Active,ABC Oil,2023,2023-01-15,2023-02-28,2023-03-05,North Field,Permian Basin,Ward County,Texas,USA,API-001,Horizontal,7500,14000,28,Crew-A,9.2,Hybrid,3800000,220000,32,42,485,680,520,430,385000,1150000,92000,19.3,2.52,14.5,35.8,44.2,580,4180,210,82,68,115,Good performer
```

---

## 🆘 Troubleshooting

### **Issue**: "CSV import failed"
**Solution**: 
- Save as CSV (Comma delimited) NOT CSV (Macintosh)
- Check for extra commas in text fields
- Ensure UTF-8 encoding

### **Issue**: "Asset comparison not showing"
**Solution**: 
- Check asset column for exact spelling
- No extra spaces before/after names
- Same capitalization for all wells in that asset

### **Issue**: "Water cut looks wrong"
**Solution**: 
- Enter as percentage: 16.5 (not 0.165)
- Should be 0-100 range
- Verify calculation: Water / (Oil + Water) × 100

---

## 📞 Need Help?

**See Also**:
- `sample-100-wells-full-data.csv` - Complete 100-well example
- `README.md` - Full platform documentation
- `100-WELL-DATASET-COMPLETE.md` - Dataset overview
- `SAMPLE-DATA-GUIDE.md` - Detailed data guide

---

## 🎉 You're Ready!

**Download**: `data-import-template.csv`
**Fill In**: Your well data (start with 18 required columns)
**Import**: Into OkhikuAnalytics Pro
**Analyze**: All 7 dashboards with your data!

---

**OkhikuAnalytics Pro** - Advanced Oil & Gas Analytics by Joseph Okhiku

Copyright © 2024 Joseph Okhiku. All rights reserved.
