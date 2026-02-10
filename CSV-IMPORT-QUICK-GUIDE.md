# CSV Data Import - Quick Reference Guide

## 🚀 Quick Start (3 Steps)

### **Step 1: Choose Your Template**

Download one of these templates:

| Template | Columns | Best For |
|----------|---------|----------|
| **data-template-minimal.csv** | 15 | Quick start, basic analysis |
| **data-template-recommended.csv** | 27 | Full functionality, most features |
| **data-template-complete.csv** | 47 | Complete analysis, all features |

### **Step 2: Fill Your Data**

Open the template in Excel/Google Sheets and fill in your well data.

### **Step 3: Import**

1. Open OkhikuAnalytics Pro (index.html)
2. Click "Import Data" button
3. Select your CSV file
4. Wait 20-30 seconds
5. Start analyzing!

---

## 📋 Column Reference (Quick Lookup)

### **MUST HAVE (15 Required Columns)**

| Column | Type | Example | Description |
|--------|------|---------|-------------|
| id | Text | W-001 | Unique well ID |
| name | Text | Imor-Alpha-001 | Well name |
| asset | Text | Imor 1 | Asset name (for grouping) |
| status | Text | Active | Active/Shut-in/Drilling |
| vintage | Year | 2023 | Year drilled |
| currentProduction | Number | 450 | Current rate (BBL/day) |
| cumulativeOil | Number | 325000 | Total oil produced (BBL) |
| wellCost | Number | 8.5 | Total cost ($MM) |
| npv | Number | 14.2 | Net Present Value ($MM) |
| irr | Number | 35.5 | Internal Rate of Return (%) |
| breakEven | Number | 42.0 | Break-even price ($/BBL) |
| eur | Number | 550 | Est. Ultimate Recovery (MBBL) |
| waterCut | Number | 18.5 | Water cut (%) |
| gor | Number | 2.45 | Gas-Oil Ratio (MCF/BBL) |
| completionType | Text | Slickwater | Completion type |

### **SHOULD HAVE (12 Recommended Columns)**

| Column | Type | Example | Why Important |
|--------|------|---------|---------------|
| operator | Text | Okhiku Energy | Operator tracking |
| spudDate | Date | 2023-01-15 | Drilling timeline |
| completionDate | Date | 2023-02-28 | Completion tracking |
| firstProductionDate | Date | 2023-03-05 | Production start |
| lateralLength | Number | 4850 | Horizontal length (ft) |
| totalDepth | Number | 12500 | Total depth (ft) |
| drillingDays | Number | 22 | Drilling efficiency |
| ip30 | Number | 720 | 30-day IP (BBL/day) |
| ip90 | Number | 560 | 90-day IP (BBL/day) |
| ip180 | Number | 480 | 180-day IP (BBL/day) |
| cumulativeGas | Number | 975000 | Total gas (MCF) |
| cumulativeWater | Number | 75000 | Total water (BBL) |

---

## 💡 Common Mistakes to Avoid

### ❌ **Mistake 1: Inconsistent Asset Names**
```csv
Wrong:
W-001,Well-001,imor 1,Active,...
W-002,Well-002,Imor 1,Active,...
W-003,Well-003,IMOR 1,Active,...

✅ Correct (pick one and stick with it):
W-001,Well-001,Imor 1,Active,...
W-002,Well-002,Imor 1,Active,...
W-003,Well-003,Imor 1,Active,...
```

### ❌ **Mistake 2: Wrong Date Format**
```csv
Wrong: 01/15/2023, 15-Jan-2023, Jan 15 2023

✅ Correct: 2023-01-15
```

### ❌ **Mistake 3: Wrong Status Values**
```csv
Wrong: active, ACTIVE, producing, online

✅ Correct: Active, Shut-in, Drilling
```

### ❌ **Mistake 4: Missing Required Columns**
```csv
Wrong: Only 10 of 15 required columns

✅ Correct: All 15 required columns present
```

### ❌ **Mistake 5: Illogical Production Decline**
```csv
Wrong: ip30=720, ip90=850, ip180=900 (increasing!)

✅ Correct: ip30=720, ip90=560, ip180=480 (declining)
```

---

## 📊 Data Examples

### **Example 1: Minimal Data (15 Columns)**

```csv
id,name,asset,status,vintage,currentProduction,cumulativeOil,wellCost,npv,irr,breakEven,eur,waterCut,gor,completionType
W-001,Imor-A-001,Imor 1,Active,2021,450,325000,8.5,14.2,35.5,42.0,550,18.5,2.45,Slickwater
W-002,Imor-A-002,Imor 1,Active,2021,420,298000,8.2,13.5,33.2,44.5,525,20.2,2.52,Hybrid
W-003,Imor-B-003,Imor 1,Shut-in,2022,0,185000,8.8,9.2,28.5,48.2,465,22.8,2.58,Gel
W-004,Ebubu-A-001,Ebubu,Active,2023,605,245000,10.2,18.5,45.2,38.5,725,12.5,2.35,Hybrid
W-005,Ebubu-A-002,Ebubu,Active,2023,588,228000,9.8,17.2,42.8,40.2,695,13.8,2.38,Slickwater
```

### **Example 2: Full Data (27 Columns)**

```csv
id,name,asset,status,operator,vintage,spudDate,completionDate,firstProductionDate,lateralLength,totalDepth,drillingDays,wellCost,completionType,currentProduction,ip30,ip90,ip180,cumulativeOil,cumulativeGas,cumulativeWater,waterCut,gor,npv,irr,breakEven,eur
W-001,Imor-A-001,Imor 1,Active,Okhiku Energy,2021,2021-01-15,2021-02-28,2021-03-05,4850,12500,22,8.5,Slickwater,450,720,560,480,325000,975000,75000,18.5,3.0,14.2,35.5,42.0,550
W-002,Ebubu-A-001,Ebubu,Active,Okhiku Energy,2023,2023-06-01,2023-07-20,2023-07-27,5350,13450,28,10.2,Hybrid,605,880,678,570,245000,760000,35000,12.5,3.1,18.5,45.2,38.5,725
```

---

## 🎯 What Each Template Enables

### **Minimal Template (15 Columns)**
✅ Portfolio Dashboard  
✅ Economic Analysis (NPV, IRR, Break-even)  
✅ Asset Comparison  
✅ Well Data Table  
✅ Basic production tracking  
✅ Water cut analysis  
✅ GOR monitoring  

❌ Type curve analysis (needs IP values)  
❌ Drilling efficiency analysis (needs drilling data)  
❌ Decline curve fitting (needs IP values)  

### **Recommended Template (27 Columns)**
✅ Everything in Minimal, PLUS:  
✅ Production Performance dashboard  
✅ Type Curve Analysis  
✅ Decline curve analysis  
✅ Drilling & Completions dashboard  
✅ Full timeline tracking  
✅ IP comparison by completion type  
✅ Drilling efficiency benchmarking  

### **Complete Template (47 Columns)**
✅ Everything in Recommended, PLUS:  
✅ Reservoir property analysis  
✅ Geological correlations  
✅ Detailed completion metrics  
✅ Custom budget tracking (wellBudget column)  
✅ Well notes and comments  
✅ Full regulatory data  

---

## 🔢 Units Reference

| Column | Unit | Format |
|--------|------|--------|
| currentProduction | BBL/day | 450 |
| ip30, ip90, ip180 | BBL/day | 720 |
| cumulativeOil | BBL | 325000 |
| cumulativeGas | MCF | 975000 |
| cumulativeWater | BBL | 75000 |
| wellCost | $MM | 8.5 |
| npv | $MM | 14.2 |
| irr | % | 35.5 |
| breakEven | $/BBL | 42.0 |
| eur | MBBL | 550 |
| waterCut | % | 18.5 |
| gor | MCF/BBL | 2.45 |
| lateralLength | feet | 4850 |
| totalDepth | feet | 12500 |
| drillingDays | days | 22 |
| proppantLoaded | lbs | 3200000 |
| fluidPumped | gallons | 185000 |
| stages | count | 28 |
| clusterSpacing | feet | 45 |
| reservoirPressure | psi | 4250 |
| bottomholeTemperature | °F | 215 |
| permeability | mD | 85 |
| porosity | % | 18.5 |
| oilSaturation | % | 65 |
| payThickness | feet | 125 |

---

## ✅ Pre-Import Checklist

Before importing your CSV, verify:

### **File Format**:
- [ ] File saved as .csv (not .xlsx or .xls)
- [ ] UTF-8 encoding (if special characters)
- [ ] Column headers in first row

### **Data Quality**:
- [ ] No empty rows
- [ ] No duplicate well IDs
- [ ] All required columns present
- [ ] Consistent asset naming
- [ ] Valid status values
- [ ] Dates in YYYY-MM-DD format

### **Data Logic**:
- [ ] Production decline: ip30 > ip90 > ip180 > current
- [ ] Dates in order: spud < completion < first production
- [ ] Water cut between 0-100%
- [ ] Positive values for costs and production
- [ ] EUR > cumulative oil (still producing)

### **Asset Grouping**:
- [ ] Asset names exactly consistent
- [ ] All wells assigned to an asset
- [ ] Asset names meaningful (used in charts!)

---

## 🚨 Troubleshooting

### **Problem: "Import failed"**
✅ Check file format (.csv not .xlsx)  
✅ Verify all 15 required columns present  
✅ Check for special characters in headers  
✅ Ensure no empty ID values  

### **Problem: "Assets not showing in Asset Comparison"**
✅ Verify asset column has consistent values  
✅ Check spelling and case (case-sensitive!)  
✅ Ensure asset column not empty  

### **Problem: "Charts not rendering"**
✅ Wait 5-10 seconds after import  
✅ Check browser console (F12) for errors  
✅ Verify required numeric columns have valid numbers  
✅ Refresh page and try again  

### **Problem: "Water cut seems wrong"**
✅ Verify waterCut column is percentage (18.5, not 0.185)  
✅ Check calculation: (water / total fluid) × 100  
✅ Ensure 0-100 range  

### **Problem: "Budget chart not working"**
✅ Verify wellCost column has values  
✅ Check all wells have positive costs  
✅ If using wellBudget column, ensure it's populated  

---

## 💾 Save Your Template

After filling your data:

1. **Save As** → CSV format (.csv)
2. **Name it descriptively**: `MyCompany_Wells_2024-01-25.csv`
3. **Keep a backup**: Save a copy in OneDrive/Google Drive
4. **Version control**: Add date to filename for tracking

---

## 📞 Need Help?

### **Documentation Files**:
- `DATA-REQUIREMENTS-GUIDE.md` - Full column specifications (17,700+ words)
- `QUICKSTART.md` - Application quick start
- `README.md` - Complete platform documentation
- `100-WELL-DATASET-COMPLETE.md` - Sample data guide

### **Template Files**:
- `data-template-minimal.csv` - 15 columns
- `data-template-recommended.csv` - 27 columns
- `data-template-complete.csv` - 47 columns
- `sample-100-wells-full-data.csv` - Example with 100 wells

### **Example Data**:
See `sample-100-wells-full-data.csv` for real-world example with:
- 100 wells
- 5 assets
- All 47 columns filled
- Realistic values and relationships

---

## 🎉 You're Ready!

1. ✅ Choose your template (minimal/recommended/complete)
2. ✅ Fill in your well data
3. ✅ Validate using checklist
4. ✅ Save as CSV
5. ✅ Import into OkhikuAnalytics Pro
6. ✅ Start analyzing!

---

**OkhikuAnalytics Pro** - CSV Import Quick Reference

Advanced Oil & Gas Analytics by Joseph Okhiku

Copyright © 2024 Joseph Okhiku. All rights reserved.
