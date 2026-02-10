# PetroAnalytics Pro - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Open the Application
1. Locate the `index.html` file in the PetroAnalytics Pro folder
2. Double-click to open it in your default web browser
3. Wait 2-3 seconds for the application to load
4. You should see the dashboard with sample data already loaded

### Step 2: Explore the Dashboard
The dashboard shows you four key metrics at the top:
- **Total Production**: Combined daily production from all active wells
- **Active Wells**: Number of currently producing wells
- **Portfolio NPV**: Total net present value of all wells
- **Avg IRR**: Average internal rate of return across the portfolio

Below the metrics, you'll see three charts:
- **Production Trends**: Shows actual vs. forecast production over the last 12 months
- **Economic Distribution**: Groups wells by NPV ranges
- **Top 10 Producing Wells**: Bar chart of your highest producers

### Step 3: Navigate to Different Views
Use the left sidebar to access different analysis tools:

#### 📊 **Dashboard** (Home)
Your portfolio overview - start here every day

#### 🏭 **Production Performance**
Click to see detailed production analysis:
- Production vs. forecast comparison
- Cumulative production curves
- Water cut trends
- List of underperforming wells

**Try this**: Use the time filter dropdown to change from "Last Year" to "Last 90 Days" and watch the charts update.

#### 💰 **Economic Analysis**
Click to analyze well economics:
- NPV vs. IRR bubble chart (bigger bubbles = higher EUR)
- Break-even price distribution
- Capital spend tracking

**Try this**: Change the oil price from $75 to $65, then click "Recalculate" to see how economics change.

#### ⛏️ **Drilling & Completions**
Click to review drilling performance:
- Average drilling metrics (days, costs, IP30)
- Drilling days vs. depth scatter plot
- Cost efficiency analysis
- IP30 comparison by completion type

**What to look for**: Wells that took fewer drilling days typically have better economics.

#### 📈 **Type Curve Analysis**
Click to analyze decline curves:
- Normalized production curves
- Cumulative oil vs. proppant relationship
- EUR distribution by vintage

**Try this**: Filter by vintage (e.g., "2023") to see only wells from that year.

#### 📋 **Well Data Table**
Click to browse all well information:
- Searchable, filterable table
- Complete well details
- Export functionality

**Try this**: Type "Eagle" in the search box to find all Eagle Ford wells.

### Step 4: Import Your Own Data (Optional)
1. Click the **"Import Data"** button in the top-right corner
2. Click **"Browse Files"** and select your CSV file
3. Wait for the confirmation message
4. All dashboards will automatically update with your data

**CSV Format Required**: Your file must include these columns:
```
id, name, asset, status, spudDate, completionDate, vintage, 
operator, totalDepth, lateralLength, completionType, 
proppantLoaded, stages, drillingDays, wellCost, ip30, eur, 
breakEven, npv, irr, currentProduction, forecast, waterCut, gor
```

### Step 5: Export Reports
1. Click the **"Export Report"** button in the top-right corner
2. A JSON file will download with all your data and analytics
3. Save this file for backup or sharing with colleagues

---

## 💡 Tips for Daily Use

### Morning Routine
1. **Check Dashboard**: Review total production and active wells count
2. **Production Performance**: Look at production vs. forecast - any major variances?
3. **Underperforming Wells**: Check the list at bottom of Production view - investigate these wells

### Weekly Review
1. **Economic Analysis**: Recalculate with current oil/gas prices
2. **Drilling Performance**: Review recent well completions and IP30 results
3. **Type Curves**: Update decline parameters with new production data

### Monthly Planning
1. **Portfolio Analysis**: Review NPV distribution and IRR trends
2. **Capital Efficiency**: Analyze cost per foot and drilling days trends
3. **Forecast Updates**: Adjust EUR estimates based on actual performance

---

## 🎯 Common Tasks

### How to Find a Specific Well
1. Go to **Well Data Table** view
2. Type the well name or ID in the search box
3. The table will filter automatically

### How to Compare Completion Types
1. Go to **Drilling & Completions** view
2. Scroll to the "30-Day IP Comparison" chart
3. Compare average IP30 across Slickwater, Hybrid, and Gel completions

### How to Identify Economic Outliers
1. Go to **Economic Analysis** view
2. Look at the NPV vs. IRR bubble chart
3. Wells in the upper-right quadrant are your best performers
4. Wells in the lower-left need attention

### How to Track Production Decline
1. Go to **Type Curve Analysis** view
2. View the "Normalized Decline Curves" chart
3. Compare your wells to see which are declining faster/slower

### How to Evaluate New Completion Designs
1. Go to **Type Curve Analysis** view
2. Filter by completion type (e.g., "Hybrid")
3. Compare EUR and cumulative oil vs. proppant loaded
4. Identify optimal proppant loading for maximum EUR

---

## ⚠️ Important Notes

### Data Persistence
- **Your data is not automatically saved**
- Use the "Export Report" button regularly to backup your data
- When you close the browser, data will reset to sample data

### Browser Compatibility
- Works best in **Google Chrome** or **Microsoft Edge**
- Make sure JavaScript is enabled
- Pop-up blockers may prevent export - allow pop-ups for this site

### Performance
- Application works smoothly with up to 100 wells
- If using more wells, charts may take a few seconds to render
- Close other browser tabs if performance is slow

---

## 🆘 Need Help?

### Application Not Loading?
1. Check that JavaScript is enabled in your browser
2. Try a different browser (Chrome recommended)
3. Clear your browser cache (Ctrl+Shift+Delete)
4. Ensure the `css/` and `js/` folders are in the same directory as `index.html`

### Charts Not Showing?
1. Refresh the page (F5 or Ctrl+R)
2. Check browser console for errors (press F12)
3. Ensure you have an active internet connection (for Chart.js library)

### Import Failed?
1. Verify your CSV file format matches the required columns
2. Check that dates are in YYYY-MM-DD format (e.g., 2024-03-15)
3. Ensure numeric values don't have commas or text
4. Try importing the sample CSV template first

### Calculations Look Wrong?
1. Check the oil price and discount rate settings in Economic Analysis
2. Click "Recalculate" after changing parameters
3. Verify your well data has complete EUR and cost information
4. Remember: NPV and IRR are estimates based on simplified models

---

## 📚 Glossary

**Asset**: A field or geographic area containing multiple wells (e.g., "Eagle Ford", "Permian Basin")

**Completion Type**: The hydraulic fracturing fluid system used (Slickwater, Hybrid, or Gel)

**EUR**: Estimated Ultimate Recovery - total oil expected over the well's life (in thousands of barrels)

**IP30**: Initial Production in the first 30 days (barrels per day)

**IRR**: Internal Rate of Return - the discount rate at which NPV equals zero (shown as %)

**Lateral Length**: Length of the horizontal section of the wellbore (in feet)

**NPV**: Net Present Value - present value of future cash flows (in millions of dollars)

**Proppant**: Sand or ceramic particles pumped during fracking to keep fractures open (in thousands of pounds)

**Stages**: Number of frac stages completed in the well

**Vintage**: The year the well was completed

**Water Cut**: Percentage of produced fluid that is water (increases over time)

---

## 🎓 Best Practices

### Data Quality
✅ Always verify imported data before making decisions  
✅ Update production data monthly for accurate decline curves  
✅ Cross-check calculated metrics with your corporate systems  
✅ Export reports before making major data changes  

### Analysis Workflow
✅ Start with the Dashboard for high-level overview  
✅ Drill down into specific views for detailed analysis  
✅ Use filters to focus on specific assets or time periods  
✅ Compare multiple completion types before deciding on future designs  

### Reporting
✅ Export monthly snapshots for trending over time  
✅ Use screenshots of charts for presentations (Alt+PrintScreen)  
✅ Document any assumptions used in economic calculations  
✅ Share findings with operations team for well optimization  

---

**Happy Analyzing! 🚀**

For full documentation, see README.md
