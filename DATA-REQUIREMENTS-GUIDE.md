# OkhikuAnalytics Pro - Data Requirements Template

## Overview

This document explains every column required for the CSV import file. Use this as a guide to prepare your data for import into OkhikuAnalytics Pro.

---

## 📋 Complete Column List (47 Columns)

### **REQUIRED COLUMNS** (Must Have - 15 columns)
These columns are essential for core functionality:

1. **id** - Unique well identifier
2. **name** - Well name
3. **asset** - Asset name
4. **status** - Well status
5. **vintage** - Year drilled
6. **currentProduction** - Current production rate
7. **cumulativeOil** - Total oil produced to date
8. **wellCost** - Total well cost
9. **npv** - Net Present Value
10. **irr** - Internal Rate of Return
11. **breakEven** - Break-even oil price
12. **eur** - Estimated Ultimate Recovery
13. **waterCut** - Current water cut percentage
14. **gor** - Gas-Oil Ratio
15. **completionType** - Type of completion

### **HIGHLY RECOMMENDED COLUMNS** (Should Have - 12 columns)
These enable key features:

16. **operator** - Operating company
17. **spudDate** - Drilling start date
18. **completionDate** - Completion date
19. **firstProductionDate** - First production date
20. **lateralLength** - Horizontal lateral length
21. **totalDepth** - Total measured depth
22. **drillingDays** - Days to drill
23. **ip30** - 30-day initial production
24. **ip90** - 90-day initial production
25. **ip180** - 180-day initial production
26. **cumulativeGas** - Total gas produced
27. **cumulativeWater** - Total water produced

### **OPTIONAL COLUMNS** (Nice to Have - 20 columns)
These provide additional analysis capabilities:

28. **fieldName** - Field name
29. **basin** - Basin name
30. **county** - County
31. **state** - State/Province
32. **country** - Country
33. **api** - API number or well ID
34. **wellType** - Well type (Horizontal/Vertical)
35. **rigCrew** - Rig crew identifier
36. **proppantLoaded** - Total proppant (lbs)
37. **fluidPumped** - Total fluid (gallons)
38. **stages** - Number of frac stages
39. **clusterSpacing** - Cluster spacing (ft)
40. **reservoirPressure** - Initial reservoir pressure (psi)
41. **bottomholeTemperature** - Bottom-hole temperature (°F)
42. **permeability** - Permeability (mD)
43. **porosity** - Porosity (%)
44. **oilSaturation** - Oil saturation (%)
45. **payThickness** - Pay zone thickness (ft)
46. **notes** - Comments or notes
47. **wellBudget** - Planned budget per well (optional, for CAPEX tracking)

---

## 📊 Column Specifications

### 1. **id** (REQUIRED)
- **Type**: Text/String
- **Description**: Unique identifier for each well
- **Format**: Any unique format (W-001, WELL001, API123456, etc.)
- **Example**: `W-001`, `IMOR-001`, `API-12345`
- **Rules**: 
  - Must be unique for each well
  - No duplicates allowed
  - Cannot be empty

---

### 2. **name** (REQUIRED)
- **Type**: Text/String
- **Description**: Human-readable well name
- **Format**: Any naming convention
- **Example**: `Imor-Alpha-001`, `Eagle Ford 1H`, `Bakken East 23-14H`
- **Rules**: 
  - Should be descriptive
  - Can include spaces and hyphens
  - Recommended: Include asset/field reference

---

### 3. **asset** (REQUIRED)
- **Type**: Text/String
- **Description**: Asset name for grouping and comparison
- **Format**: Short, consistent asset names
- **Example**: `Imor 1`, `Eagle Ford`, `Permian Basin`
- **Rules**: 
  - Use consistent naming (case-sensitive)
  - Same asset name for all wells in that asset
  - Used for Asset Comparison Dashboard
- **Important**: This is how wells are grouped in Asset Comparison!

---

### 4. **status** (REQUIRED)
- **Type**: Text/String
- **Description**: Current operational status of the well
- **Allowed Values**: 
  - `Active` - Currently producing
  - `Shut-in` - Temporarily shut down
  - `Drilling` - Currently drilling
  - `Completed` - Drilled but not yet producing
  - `Abandoned` - Permanently shut down
- **Example**: `Active`, `Shut-in`
- **Rules**: Must use one of the allowed values (case-sensitive)

---

### 5. **operator** (RECOMMENDED)
- **Type**: Text/String
- **Description**: Operating company name
- **Example**: `Okhiku Energy`, `XTO Energy`, `EOG Resources`
- **Use**: Operator benchmarking, partner analysis

---

### 6. **vintage** (REQUIRED)
- **Type**: Integer (Year)
- **Description**: Year the well was drilled/completed
- **Format**: 4-digit year
- **Example**: `2021`, `2022`, `2023`, `2024`
- **Rules**: 
  - Must be 4 digits
  - Typically 2010-2024 range
- **Use**: Type curve analysis by vintage, learning curve tracking

---

### 7. **spudDate** (RECOMMENDED)
- **Type**: Date
- **Description**: Date drilling began
- **Format**: YYYY-MM-DD
- **Example**: `2021-01-15`, `2023-06-20`
- **Rules**: Must be valid date format
- **Use**: Timeline analysis, drilling scheduling

---

### 8. **completionDate** (RECOMMENDED)
- **Type**: Date
- **Description**: Date well completion finished
- **Format**: YYYY-MM-DD
- **Example**: `2021-02-28`, `2023-08-10`
- **Rules**: Should be after spudDate
- **Use**: Calculate drilling days, completion efficiency

---

### 9. **firstProductionDate** (RECOMMENDED)
- **Type**: Date
- **Description**: Date well started producing
- **Format**: YYYY-MM-DD
- **Example**: `2021-03-05`, `2023-08-20`
- **Rules**: Should be after completionDate
- **Use**: Production history tracking, decline curve analysis

---

### 10. **fieldName** (OPTIONAL)
- **Type**: Text/String
- **Description**: Field or lease name
- **Example**: `Imor Field`, `Eagle Ford South`, `Bakken North`

---

### 11. **basin** (OPTIONAL)
- **Type**: Text/String
- **Description**: Geological basin
- **Example**: `Niger Delta`, `Permian Basin`, `Williston Basin`

---

### 12. **county** (OPTIONAL)
- **Type**: Text/String
- **Description**: County or local administrative area
- **Example**: `Rivers`, `Reeves County`, `McKenzie County`

---

### 13. **state** (OPTIONAL)
- **Type**: Text/String
- **Description**: State or province
- **Example**: `Rivers State`, `Texas`, `North Dakota`

---

### 14. **country** (OPTIONAL)
- **Type**: Text/String
- **Description**: Country
- **Example**: `Nigeria`, `United States`, `Canada`

---

### 15. **api** (OPTIONAL)
- **Type**: Text/String
- **Description**: API number or regulatory well identifier
- **Example**: `API-001`, `42-389-12345`, `05-123-45678`

---

### 16. **wellType** (OPTIONAL)
- **Type**: Text/String
- **Description**: Well type
- **Allowed Values**: `Horizontal`, `Vertical`, `Directional`
- **Example**: `Horizontal`

---

### 17. **lateralLength** (RECOMMENDED)
- **Type**: Number (feet)
- **Description**: Length of horizontal lateral section
- **Format**: Integer
- **Example**: `4850`, `5200`, `7500`
- **Range**: Typically 3,000-15,000 ft
- **Use**: Cost efficiency analysis (cost per foot)

---

### 18. **totalDepth** (RECOMMENDED)
- **Type**: Number (feet)
- **Description**: Total measured depth of well
- **Format**: Integer
- **Example**: `12500`, `13000`, `18500`
- **Range**: Typically 8,000-20,000 ft
- **Use**: Drilling performance, cost correlation

---

### 19. **drillingDays** (RECOMMENDED)
- **Type**: Number (days)
- **Description**: Days from spud to completion
- **Format**: Integer
- **Example**: `22`, `25`, `30`
- **Range**: Typically 10-45 days
- **Use**: Drilling efficiency benchmarking
- **Calculation**: If blank, can calculate from spudDate and completionDate

---

### 20. **rigCrew** (OPTIONAL)
- **Type**: Text/String
- **Description**: Rig crew identifier
- **Example**: `Crew-A`, `Rig-123`, `Patterson 45`
- **Use**: Crew performance benchmarking

---

### 21. **wellCost** (REQUIRED)
- **Type**: Number ($ millions)
- **Description**: Total well cost (drilling + completion)
- **Format**: Decimal number
- **Example**: `8.2`, `9.5`, `12.3`
- **Range**: Typically $3M-$15M
- **Unit**: Million dollars (MM$)
- **Use**: Economic analysis, CAPEX tracking, cost efficiency

---

### 22. **completionType** (REQUIRED)
- **Type**: Text/String
- **Description**: Type of well completion/frac design
- **Allowed Values**: 
  - `Slickwater` - Water-based frac
  - `Hybrid` - Mixed system
  - `Gel` - Gel-based frac
  - Or your custom types
- **Example**: `Slickwater`, `Hybrid`, `Gel`
- **Use**: Completion design analysis, IP30 comparison

---

### 23. **proppantLoaded** (OPTIONAL)
- **Type**: Number (pounds)
- **Description**: Total proppant pumped
- **Format**: Integer
- **Example**: `3200000` (3.2M lbs), `4500000` (4.5M lbs)
- **Range**: Typically 2M-8M lbs
- **Use**: Completion intensity analysis, EUR correlation

---

### 24. **fluidPumped** (OPTIONAL)
- **Type**: Number (gallons)
- **Description**: Total frac fluid pumped
- **Format**: Integer
- **Example**: `185000`, `250000`
- **Range**: Typically 100,000-400,000 gallons

---

### 25. **stages** (OPTIONAL)
- **Type**: Integer
- **Description**: Number of frac stages
- **Format**: Integer
- **Example**: `28`, `35`, `42`
- **Range**: Typically 20-60 stages

---

### 26. **clusterSpacing** (OPTIONAL)
- **Type**: Number (feet)
- **Description**: Spacing between frac clusters
- **Format**: Integer
- **Example**: `45`, `40`, `35`
- **Range**: Typically 25-60 ft

---

### 27. **currentProduction** (REQUIRED)
- **Type**: Number (BBL/day)
- **Description**: Current oil production rate
- **Format**: Integer or decimal
- **Example**: `520`, `485`, `0` (if shut-in)
- **Range**: 0-2000+ BBL/day
- **Unit**: Barrels of oil per day
- **Use**: Production performance tracking, decline analysis
- **Note**: Set to `0` for shut-in wells

---

### 28. **ip30** (RECOMMENDED)
- **Type**: Number (BBL/day)
- **Description**: 30-day initial production rate
- **Format**: Integer
- **Example**: `750`, `850`, `650`
- **Range**: Typically 300-1500 BBL/day
- **Use**: Well performance comparison, type curve analysis

---

### 29. **ip90** (RECOMMENDED)
- **Type**: Number (BBL/day)
- **Description**: 90-day initial production rate
- **Format**: Integer
- **Example**: `580`, `650`, `500`
- **Rules**: Should be less than ip30 (production declines)

---

### 30. **ip180** (RECOMMENDED)
- **Type**: Number (BBL/day)
- **Description**: 180-day initial production rate
- **Format**: Integer
- **Example**: `480`, `550`, `420`
- **Rules**: Should be less than ip90

---

### 31. **cumulativeOil** (REQUIRED)
- **Type**: Number (barrels)
- **Description**: Total oil produced to date
- **Format**: Integer
- **Example**: `425000`, `312000`, `185000`
- **Range**: 0-2,000,000+ BBL
- **Unit**: Barrels of oil
- **Use**: Cumulative production curves, EUR tracking

---

### 32. **cumulativeGas** (RECOMMENDED)
- **Type**: Number (MCF)
- **Description**: Total gas produced to date
- **Format**: Integer
- **Example**: `1280000`, `968000`, `574000`
- **Unit**: Thousand cubic feet (MCF)
- **Use**: Gas production tracking, GOR calculation

---

### 33. **cumulativeWater** (RECOMMENDED)
- **Type**: Number (barrels)
- **Description**: Total water produced to date
- **Format**: Integer
- **Example**: `85000`, `102000`, `48000`
- **Unit**: Barrels of water
- **Use**: Water cut calculation, water management planning

---

### 34. **waterCut** (REQUIRED) ⭐
- **Type**: Number (percentage)
- **Description**: Current water cut (% water in total fluid)
- **Format**: Decimal percentage
- **Example**: `16.3`, `24.5`, `42.8`
- **Range**: 0-100%
- **Calculation**: (Water BBL / Total Fluid BBL) × 100
- **Use**: Water production tracking, well performance monitoring
- **Note**: Higher water cut = more challenging economics

---

### 35. **gor** (REQUIRED) ⭐
- **Type**: Number (MCF/BBL)
- **Description**: Gas-Oil Ratio
- **Format**: Decimal number
- **Example**: `2.46`, `2.75`, `3.10`
- **Range**: Typically 1.0-5.0 MCF/BBL
- **Calculation**: Cumulative Gas (MCF) / Cumulative Oil (BBL)
- **Use**: Reservoir performance tracking, gas sales revenue

---

### 36. **npv** (REQUIRED)
- **Type**: Number ($ millions)
- **Description**: Net Present Value at standard discount rate
- **Format**: Decimal number
- **Example**: `15.8`, `11.2`, `8.5`
- **Range**: Can be negative for poor wells, typically $2M-$30M
- **Unit**: Million dollars (MM$)
- **Use**: Economic analysis, investment decisions

---

### 37. **irr** (REQUIRED)
- **Type**: Number (percentage)
- **Description**: Internal Rate of Return
- **Format**: Decimal percentage
- **Example**: `38.5`, `28.2`, `16.5`
- **Range**: -10% to 100%+ (can be negative for poor wells)
- **Use**: Economic ranking, capital allocation

---

### 38. **breakEven** (REQUIRED)
- **Type**: Number ($/BBL)
- **Description**: Break-even oil price (NPV = 0)
- **Format**: Decimal number
- **Example**: `42.5`, `38.2`, `52.8`
- **Range**: Typically $25-$75/BBL
- **Unit**: Dollars per barrel
- **Use**: Risk assessment, portfolio resilience

---

### 39. **eur** (REQUIRED)
- **Type**: Number (MBBL)
- **Description**: Estimated Ultimate Recovery
- **Format**: Integer
- **Example**: `625`, `498`, `352`
- **Range**: Typically 200-1500 MBBL
- **Unit**: Thousand barrels (MBBL)
- **Use**: Reserve estimation, type curve analysis

---

### 40. **reservoirPressure** (OPTIONAL)
- **Type**: Number (psi)
- **Description**: Initial reservoir pressure
- **Format**: Integer
- **Example**: `4250`, `3850`, `5200`
- **Range**: Typically 2000-8000 psi

---

### 41. **bottomholeTemperature** (OPTIONAL)
- **Type**: Number (°F)
- **Description**: Bottom-hole temperature
- **Format**: Integer
- **Example**: `215`, `198`, `245`
- **Range**: Typically 150-350°F

---

### 42. **permeability** (OPTIONAL)
- **Type**: Number (mD)
- **Description**: Rock permeability
- **Format**: Integer
- **Example**: `85`, `120`, `65`
- **Range**: Typically 0.001-500 mD (tight formations: 0.001-1)

---

### 43. **porosity** (OPTIONAL)
- **Type**: Number (%)
- **Description**: Rock porosity
- **Format**: Decimal percentage
- **Example**: `18.5`, `22.8`, `15.2`
- **Range**: Typically 5-30%

---

### 44. **oilSaturation** (OPTIONAL)
- **Type**: Number (%)
- **Description**: Oil saturation in pore space
- **Format**: Decimal percentage
- **Example**: `65`, `70`, `58`
- **Range**: Typically 40-90%

---

### 45. **payThickness** (OPTIONAL)
- **Type**: Number (feet)
- **Description**: Pay zone thickness
- **Format**: Integer
- **Example**: `125`, `98`, `156`
- **Range**: Typically 20-300 ft

---

### 46. **notes** (OPTIONAL)
- **Type**: Text/String
- **Description**: Any comments or notes about the well
- **Format**: Free text
- **Example**: `High IP well`, `Water breakthrough`, `Equipment failure`
- **Use**: Contextual information, issue tracking

---

### 47. **wellBudget** (OPTIONAL)
- **Type**: Number ($ millions)
- **Description**: Planned/budgeted well cost
- **Format**: Decimal number
- **Example**: `8.8`, `9.2`, `12.5`
- **Unit**: Million dollars (MM$)
- **Use**: If provided, CAPEX vs Budget feature will use actual budgets instead of calculated ones

---

## 📝 Minimal Data Template (15 Required Columns Only)

If you only want to start with the minimum:

```csv
id,name,asset,status,vintage,currentProduction,cumulativeOil,wellCost,npv,irr,breakEven,eur,waterCut,gor,completionType
W-001,Well-001,Asset-A,Active,2023,450,325000,8.5,14.2,35.5,42.0,550,18.5,2.45,Slickwater
W-002,Well-002,Asset-A,Active,2023,420,298000,8.2,13.5,33.2,44.5,525,20.2,2.52,Hybrid
W-003,Well-003,Asset-B,Active,2024,485,165000,9.1,15.8,38.5,39.8,605,15.8,2.38,Gel
```

---

## 📊 Recommended Data Template (27 Columns)

For full functionality with most features:

```csv
id,name,asset,status,operator,vintage,spudDate,completionDate,firstProductionDate,lateralLength,totalDepth,drillingDays,wellCost,completionType,currentProduction,ip30,ip90,ip180,cumulativeOil,cumulativeGas,cumulativeWater,waterCut,gor,npv,irr,breakEven,eur
W-001,Well-001,Asset-A,Active,YourCompany,2023,2023-01-15,2023-02-28,2023-03-05,4850,12500,22,8.5,Slickwater,450,720,560,480,325000,975000,75000,18.5,2.45,14.2,35.5,42.0,550
```

---

## ✅ Data Quality Checklist

Before importing, verify:

### **Completeness**:
- [ ] All 15 required columns present
- [ ] No empty cells in required columns
- [ ] Each well has unique ID

### **Consistency**:
- [ ] Asset names consistent (exact spelling, case)
- [ ] Status values use allowed values
- [ ] Date format consistent (YYYY-MM-DD)
- [ ] Units consistent across all wells

### **Validity**:
- [ ] Dates in logical order (spud < completion < first production)
- [ ] Production decline logical (ip30 > ip90 > ip180 > current)
- [ ] Water cut between 0-100%
- [ ] Positive values for costs, EUR, cumulative production
- [ ] IRR values realistic (-10% to 100%)

### **Relationships**:
- [ ] Water cut = (cumulativeWater / (cumulativeOil + cumulativeWater)) × 100
- [ ] GOR = cumulativeGas / cumulativeOil
- [ ] Well cost realistic for lateral length and depth
- [ ] EUR > cumulative oil (still producing)

---

## 🔢 Sample Calculations

### **Water Cut**:
```
Cumulative Oil: 325,000 BBL
Cumulative Water: 75,000 BBL
Total Fluid: 400,000 BBL
Water Cut: (75,000 / 400,000) × 100 = 18.75%
```

### **GOR**:
```
Cumulative Gas: 975,000 MCF
Cumulative Oil: 325,000 BBL
GOR: 975,000 / 325,000 = 3.0 MCF/BBL
```

### **Drilling Days** (if dates provided):
```
Spud Date: 2023-01-15
Completion Date: 2023-02-28
Drilling Days: 44 days
```

---

## 📁 Next Steps

1. **Choose your template**:
   - Minimal (15 columns)
   - Recommended (27 columns)
   - Complete (47 columns)

2. **Use the blank template CSV** (next file)

3. **Fill in your data**

4. **Validate against checklist**

5. **Import into OkhikuAnalytics Pro**

---

**See the next file `data-import-template-blank.csv` for a ready-to-use template!**

**OkhikuAnalytics Pro** - Data Requirements Guide

Advanced Oil & Gas Analytics by Joseph Okhiku

Copyright © 2024 Joseph Okhiku. All rights reserved.
