# OkhikuAnalytics Pro

## 🛢️ Advanced Oil & Gas Analytics by Joseph Okhiku

**OkhikuAnalytics Pro** is a comprehensive, user-friendly analytics platform designed specifically for asset and economics analysts in the oil & gas industry. Built as a simplified alternative to TIBCO Spotfire, it provides powerful production surveillance, economic analysis, and drilling performance tracking capabilities without the complexity of geospatial features.

**Created by Joseph Okhiku** - Professional oil & gas analytics solutions.

---

## ✨ Key Features

### 📊 **Portfolio Dashboard**
- Real-time KPI monitoring (Total Production, Active Wells, Portfolio NPV, Average IRR)
- Production trend analysis with actual vs. forecast comparisons
- Economic distribution visualizations
- Top 10 producing wells ranking
- At-a-glance portfolio health metrics

### 🏭 **Production Performance & Surveillance**
- Production vs. forecast tracking for all wells
- Cumulative production curves
- Water cut trend analysis
- GOR (Gas-Oil Ratio) monitoring over time
- Top 10 underperforming wells identification
- Customizable time period filters (30, 90, 180, 365 days, or all-time)
- Well-specific performance drill-down

### 💰 **Economic Analysis**
- NPV (Net Present Value) calculations at customizable discount rates
- IRR (Internal Rate of Return) analysis
- Break-even price distribution histograms
- NPV vs. IRR bubble charts with EUR sizing
- Capital spend vs. budget tracking by asset
- Dynamic economic recalculation with adjustable oil/gas prices
- Portfolio-level economic aggregation

### 📊 **Scenario Analysis** ⭐ NEW!
- Quick scenario switching: Bear Case ($50 oil), Base Case ($70 oil), Bull Case ($90 oil)
- Real-time NPV and IRR recalculation based on price assumptions
- Side-by-side scenario comparison tables (Bear/Base/Bull)
- Asset-level scenario impacts to identify high-risk and opportunity assets
- Price sensitivity analysis to understand portfolio volatility
- Wells above hurdle rate (15% IRR) tracking across scenarios
- Manual price adjustments with instant recalculation
- Scenario variance reporting ($ and %) vs. Base Case

👉 **[Complete Scenario Analysis Guide](SCENARIO-ANALYSIS-GUIDE.md)**

### ⛏️ **Drilling & Completions Performance**
- Average drilling days, well costs, and lateral lengths
- Drilling days vs. depth scatter analysis
- Cost per foot vs. lateral length optimization
- 30-day Initial Production (IP30) comparisons by completion design
- Rig crew and completion design benchmarking
- Cost efficiency metrics

### 📈 **Type Curve Analysis**
- Normalized decline curves grouped by vintage and completion type
- Hyperbolic decline curve fitting (qi, Di, b-factor)
- EUR (Estimated Ultimate Recovery) calculations
- Cumulative oil vs. proppant loaded correlation
- EUR distribution analysis by vintage (P10, P50, P90)
- Real-time type curve updates as new well data is added

### 🏢 **Asset Comparison Dashboard** ⭐ NEW!
- Side-by-side comparison of all assets in your portfolio
- Asset summary cards with performance scores (0-100)
- Interactive charts: NPV, Production, IRR, Break-Even, and Well Count by asset
- Performance rankings: Top 5 assets by NPV, Production, IRR, and Break-Even
- Detailed comparison table with 11 key metrics per asset
- Composite performance scoring based on NPV, IRR, production, and economics
- Perfect for portfolios with 400+ wells distributed across 10+ assets
- Monthly operations review and CAPEX allocation support

👉 **[Complete Asset Comparison Guide](ASSET-COMPARISON-GUIDE.md)**

### 📋 **Interactive Well Data Table**
- Comprehensive well information in sortable, filterable table format
- Search functionality across well names, IDs, and assets
- Filter by status (Active, Shut-in, Drilling) and asset
- Complete well details including drilling, completion, and economic data
- Export capabilities for further analysis

### 📥 **Data Management**
- Pre-loaded sample data with 12 realistic wells across Eagle Ford, Permian Basin, and Bakken
- **100-well comprehensive dataset** available (`sample-100-wells-full-data.csv`)
  - 5 Nigerian assets: Imor 1, Imor 2, Ebubu, Oloma, Korokoro
  - Complete water cut tracking (12-60% range)
  - GOR monitoring (2.33-3.10 MCF/BBL)
  - 4-year vintage history (2021-2024)
  - Perfect for testing asset comparison features
- **✅ FIXED: CSV import functionality** for custom well data
  - Robust CSV parser handles quoted fields and commas
  - Automatic data type conversion for numeric fields
  - Better error messages and validation
  - Test page included: `test-csv-import.html`
- JSON export for reports and external analysis
- Automatic production history generation using hyperbolic decline models

👉 **[100-Well Dataset Guide](100-WELL-DATASET-COMPLETE.md)** | **[Sample Data Documentation](SAMPLE-DATA-GUIDE.md)** | **[CSV Import Troubleshooting](CSV-IMPORT-TROUBLESHOOTING.md)**

### 📄 **Professional Report Generation** ⭐ NEW!
- **Executive Summary (PDF)**: C-suite ready, 2-3 page portfolio overview
- **Technical Report (PDF)**: Engineering-focused, detailed analysis with charts
- **Monthly Report (PDF)**: Operations review with underperforming wells list
- **Board Report (PDF)**: Presentation-style landscape format for directors
- **Dashboard Export (PNG)**: High-resolution screenshots of any view
- **Individual Chart Export (PNG)**: Export any of 15+ charts for presentations
- Auto-generated insights and strategic recommendations
- Professional styling with branding and page numbers
- One-click generation in 3-10 seconds

👉 **[Complete Report Generation Guide](REPORT-GENERATION-GUIDE.md)**

---

## 🚀 Getting Started

### **No Installation Required!**
OkhikuAnalytics Pro is a web-based application that runs directly in your browser. Simply open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).

### **Immediate Usage**
1. **Open the application**: Double-click `index.html`
2. **Explore sample data**: The application comes pre-loaded with 12 realistic oil & gas wells
3. **Navigate dashboards**: Use the left sidebar to switch between different analysis views
4. **Interact with charts**: Hover over charts for detailed tooltips, click legends to show/hide data

### **Quick Navigation**
- **📊 Dashboard**: Portfolio overview and key metrics
- **🏭 Production Performance**: Detailed production surveillance
- **💰 Economic Analysis**: NPV, IRR, and break-even analysis
- **⛏️ Drilling & Completions**: D&C performance tracking
- **📈 Type Curve Analysis**: Decline curve modeling and forecasting
- **🏢 Asset Comparison**: Compare performance across all assets
- **📋 Well Data Table**: Comprehensive well information browser

---

## 📖 User Guide

### For Non-Technical Users

#### **Viewing Your Portfolio**
1. Start on the **Dashboard** view (default)
2. Review the four KPI cards at the top showing your portfolio summary
3. Scroll down to see production trends and economic distribution charts
4. Identify top-producing wells in the horizontal bar chart

#### **Analyzing Production Performance**
1. Click **Production Performance** in the left sidebar
2. Use the dropdown filters to:
   - Select specific wells or view all wells
   - Change the time period (last 30/90/180/365 days)
3. Review the **Production vs Forecast** chart to identify variances
4. Check **Cumulative Production** and **Water Cut Trends** for well health indicators
5. Examine the **Underperforming Wells** table at the bottom

#### **Evaluating Economics**
1. Navigate to **Economic Analysis**
2. Adjust commodity prices and discount rates in the control panel
3. Click **Recalculate** to update all economic metrics
4. Review the **NPV vs IRR Bubble Chart** - larger bubbles = higher EUR
5. Check **Break-Even Price Distribution** to understand portfolio risk
6. Compare **Capital Spend vs Budget** by asset

#### **Tracking Drilling Performance**
1. Go to **Drilling & Completions**
2. Review KPI cards showing average drilling metrics
3. Analyze **Drilling Days vs Depth** to identify efficiency opportunities
4. Check **Cost per Foot** trends to optimize future wells
5. Compare **IP30 by Completion Design** to determine best practices

#### **Type Curve Analysis**
1. Click **Type Curve Analysis**
2. Filter by vintage (year) and completion type using the dropdowns
3. Click **Update** to refresh the decline curves
4. Review normalized decline curves to compare well performance
5. Check **Cumulative Oil vs Proppant** correlation
6. Examine **EUR Distribution** statistics by vintage

#### **Browsing Well Data**
1. Navigate to **Well Data Table**
2. Use the search box to find specific wells by name or ID
3. Apply status filters (Active, Shut-in, Drilling)
4. Filter by asset to focus on specific fields
5. Scroll through the comprehensive well data table

### **Importing Your Own Data**

#### **Using CSV Files**
1. Click **Import Data** button in the top-right header
2. Choose **Browse Files** to select your CSV file
3. Ensure your CSV has the following column headers:
   - `id`, `name`, `asset`, `status`, `spudDate`, `completionDate`
   - `vintage`, `operator`, `totalDepth`, `lateralLength`, `completionType`
   - `proppantLoaded`, `stages`, `drillingDays`, `wellCost`
   - `ip30`, `eur`, `breakEven`, `npv`, `irr`
   - `currentProduction`, `forecast`, `waterCut`, `gor`
4. Wait for confirmation message
5. Your data will be loaded and all dashboards will update automatically

#### **Using Sample Data**
1. Click **Import Data** button
2. Click **Load Sample Data**
3. Sample data with 12 wells will be loaded instantly

### **Exporting Reports**
1. Click **Export Report** button in the top-right header
2. A JSON file will be downloaded containing:
   - All well data
   - Portfolio summary statistics
   - Current economic parameters
   - Timestamp of export
3. Use this file for:
   - Backup purposes
   - Sharing with colleagues
   - Further analysis in other tools
   - Record-keeping and audit trails

---

## 🔧 Technical Details

### **Technology Stack**
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charting**: Chart.js 4.4.0 for all visualizations
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter)
- **Architecture**: Modular JavaScript with separation of concerns

### **File Structure**
```
PetroAnalytics-Pro/
├── index.html              # Main application HTML
├── css/
│   └── style.css          # All styling and responsive design
├── js/
│   ├── data.js            # Data storage and sample data generation
│   ├── analytics.js       # Analytics engine (NPV, IRR, decline curves)
│   ├── charts.js          # Chart.js visualization management
│   └── app.js             # Main application controller
└── README.md              # This documentation file
```

### **Core Modules**

#### **DataStore (`data.js`)**
- Manages well data and production history
- Generates realistic production profiles using hyperbolic decline
- Provides filtering and querying capabilities
- Handles CSV import/export
- Stores 12 pre-loaded sample wells with 24 months of production history

#### **AnalyticsEngine (`analytics.js`)**
- NPV calculation with customizable discount rates
- IRR calculation using Newton-Raphson method
- Hyperbolic decline curve modeling (qi, Di, b-factor)
- EUR estimation and forecasting
- Statistical analysis (mean, median, P10/P50/P90)
- Portfolio aggregation and analysis
- Completion design optimization

#### **ChartManager (`charts.js`)**
- 15+ different chart types across all views
- Dynamic data binding and real-time updates
- Responsive chart sizing
- Interactive tooltips and legends
- Color-coded by asset or completion type
- Time-series and scatter plot support

#### **PetroAnalyticsApp (`app.js`)**
- Navigation and view switching
- User interaction handling
- Filter management
- Data import/export orchestration
- KPI calculation and display updates

### **Analytics Calculations**

#### **Hyperbolic Decline Formula**
```
q(t) = qi / (1 + b * Di * t)^(1/b)

Where:
- q(t) = production rate at time t
- qi = initial production rate (IP)
- Di = initial decline rate (typically 0.7 or 70%/year for shale)
- b = hyperbolic b-factor (typically 0.8 for unconventional wells)
- t = time in years
```

#### **NPV Calculation**
```
NPV = Σ [CFt / (1 + r)^t]

Where:
- CFt = cash flow in period t
- r = discount rate
- t = time period
```

#### **Break-Even Price**
```
Break-Even = (Well Cost / EUR) + Operating Cost per Barrel

Where:
- Well Cost in MM$
- EUR in MBBL
- Operating cost typically $15/BBL
```

### **Browser Compatibility**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer not supported

### **Performance**
- Loads 12 wells with 24 months of production history instantly
- All charts render in < 200ms
- Smooth filtering and navigation
- Supports up to 100+ wells without performance degradation

---

## 📊 Sample Data Overview

### **Included Wells**
The application comes with 12 pre-configured wells across three major U.S. shale plays:

1. **Eagle Ford (4 wells)**
   - Vintages: 2022, 2023, 2024
   - Completion types: Slickwater, Hybrid
   - IP30 range: 1,250 - 1,720 BBL/day
   - Avg NPV: $19.6 MM

2. **Permian Basin (4 wells)**
   - Vintages: 2022, 2023
   - Completion types: Slickwater, Hybrid
   - IP30 range: 1,150 - 1,650 BBL/day
   - Avg NPV: $16.0 MM

3. **Bakken (4 wells)**
   - Vintages: 2021, 2022, 2023
   - Completion types: Slickwater, Hybrid, Gel
   - IP30 range: 850 - 1,380 BBL/day
   - Avg NPV: $10.0 MM

### **Well Status Distribution**
- **Active**: 10 wells (83%)
- **Shut-in**: 1 well (8%)
- **Drilling**: 1 well (8%)

### **Production History**
Each active well includes 24 months of production data with:
- Daily production rates (BBL/day)
- Forecast values
- Cumulative production
- Water cut percentages (increasing over time)
- GOR values (increasing slightly over time)
- Realistic hyperbolic decline behavior

---

## 🎯 Use Cases

### **Daily Operations**
- **Morning Review**: Check dashboard KPIs and production trends
- **Well Surveillance**: Identify underperforming wells requiring attention
- **Anomaly Detection**: Spot sudden production drops or water cut increases

### **Economic Planning**
- **Price Sensitivity**: Recalculate economics with different commodity prices
- **Capital Allocation**: Identify highest NPV/IRR opportunities
- **Risk Assessment**: Review break-even price distribution

### **Drilling Optimization**
- **Completion Design**: Compare IP30 performance across completion types
- **Cost Management**: Track drilling days and cost per foot metrics
- **Benchmarking**: Identify best-performing rig crews and designs

### **Forecasting & Planning**
- **Type Curves**: Update decline parameters with new well data
- **EUR Estimation**: Refine ultimate recovery estimates by vintage
- **Budget Planning**: Analyze capital spend vs. budget variances

### **Reporting & Presentations**
- **Executive Summaries**: Export portfolio snapshots
- **Board Meetings**: Present economic distribution and top wells
- **Partner Updates**: Share production performance and drilling metrics

---

## 🔐 Data Privacy & Security

- **All data stays local**: No data is sent to external servers
- **Browser-based**: Runs entirely in your web browser
- **No login required**: No accounts, passwords, or authentication
- **Your data, your control**: Import and export as needed
- **Offline capable**: Works without internet connection after initial load

---

## 🆘 Troubleshooting

### **Charts Not Displaying**
- Ensure JavaScript is enabled in your browser
- Try refreshing the page (F5 or Ctrl+R)
- Clear browser cache and reload
- Check browser console for errors (F12)

### **Slow Performance**
- Close unnecessary browser tabs
- Try a different browser (Chrome recommended)
- Clear browser cache
- Reduce number of wells if using large dataset (>100 wells)

### **Import Not Working**
- Verify CSV file format matches required columns
- Check that file is UTF-8 encoded
- Ensure dates are in YYYY-MM-DD format
- Verify numeric fields don't contain text

### **Calculations Seem Wrong**
- Check economic input parameters (oil price, discount rate)
- Verify well data completeness (EUR, well cost, etc.)
- Review production history for anomalies
- Try recalculating economics with "Recalculate" button

---

## 🚧 Limitations

### **What This Platform Does NOT Include**
- ❌ **Geospatial mapping**: No map visualizations or GIS features
- ❌ **Real-time data feeds**: No direct connection to SCADA or production systems
- ❌ **Multi-user collaboration**: Single-user application
- ❌ **Database backend**: All data stored in browser memory
- ❌ **Cloud sync**: No automatic backup or cloud storage
- ❌ **Mobile app**: Optimized for desktop browsers (responsive design included)

### **Current Constraints**
- Designed for up to 100 wells (larger datasets may impact performance)
- Production history generated using simplified hyperbolic decline
- Economic calculations use simplified cash flow models
- No gas production tracking (oil-focused)
- Break-even calculation doesn't include full lifecycle costs

### **Scenario Analysis Scope**
**✅ Included:** Basic scenario switching (Bear/Base/Bull), price sensitivity, scenario comparison tables  
**❌ NOT Included:** Tornado charts, Monte Carlo simulation, probabilistic P10/P50/P90 analysis  
👉 **[See SCENARIO-ANALYSIS-GUIDE.md for details and workarounds](SCENARIO-ANALYSIS-GUIDE.md)**

---

## 🔮 Future Enhancements (Potential Roadmap)

### **Phase 2 Features**
- Gas production tracking and economics
- Multi-phase production (oil, gas, water)
- Custom type curve fitting with multiple decline models
- ✅ ~~PDF report generation with embedded charts~~ **COMPLETED**
- Excel export functionality
- Advanced filtering and well grouping

### **Phase 3 Features**
- Probabilistic forecasting (P10/P50/P90)
- Monte Carlo simulation for economic uncertainty
- Tornado charts for sensitivity analysis
- Completion design optimizer
- Automated decline curve analysis
- Well spacing and interference analysis
- Custom dashboard builder

### **Phase 4 Features**
- API integration for live data feeds
- Multi-user support with data sharing
- Cloud backup and synchronization
- Mobile-responsive tablet interface
- Advanced statistical analysis tools
- Machine learning-based production forecasting

---

## 📞 Support & Feedback

### **Getting Help**
- Review this README thoroughly
- Check the Troubleshooting section
- Test with sample data first before importing custom data
- Verify browser compatibility

### **Providing Feedback**
This platform was built with care to serve asset and economics analysts. Your feedback helps improve it!

---

## 📄 License & Credits

### **Open Source Components**
- **Chart.js**: MIT License - https://www.chartjs.org/
- **Font Awesome**: Free License - https://fontawesome.com/
- **Google Fonts (Inter)**: Open Font License - https://fonts.google.com/

### **Application**
Built with expertise in oil & gas analytics and software development. Designed specifically for analysts who need powerful tools without complexity.

---

## 🎓 Learning Resources

### **Understanding Oil & Gas Metrics**

#### **IP30 (30-Day Initial Production)**
The average production rate during the first 30 days after completion. Key indicator of well productivity and completion effectiveness.

#### **EUR (Estimated Ultimate Recovery)**
Total expected oil production over the life of the well (in MBBL). Calculated by integrating the decline curve to economic limit.

#### **NPV (Net Present Value)**
Present value of all future cash flows discounted to today. Positive NPV = economically viable project.

#### **IRR (Internal Rate of Return)**
Discount rate at which NPV = 0. Higher IRR = better investment. Typical target: > 20-30% for oil & gas.

#### **Break-Even Price**
Oil price at which NPV = 0. Wells with break-even < $40/BBL are generally considered low-risk.

#### **Decline Curves**
Mathematical models describing production decrease over time. Hyperbolic decline is most common for unconventional wells.

#### **Water Cut**
Percentage of produced fluid that is water. Increases over well life. High water cut (>80%) may indicate well maturity.

#### **GOR (Gas-Oil Ratio)**
Volume of gas produced per barrel of oil (SCF/BBL). Increasing GOR may indicate pressure depletion.

---

## ✅ System Requirements

### **Minimum Requirements**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 4 GB RAM
- 1280x720 screen resolution
- JavaScript enabled

### **Recommended**
- Chrome 120+ or Firefox 120+
- 8 GB RAM
- 1920x1080 screen resolution or higher
- High-speed internet (for initial load only)

---

## 🎉 Conclusion

**PetroAnalytics Pro** brings professional-grade oil & gas analytics to your fingertips without the complexity and cost of enterprise platforms. Whether you're monitoring daily production, evaluating economics, or optimizing drilling programs, this tool provides the insights you need in a clean, intuitive interface.

**Get started now** by opening `index.html` and exploring the sample data!

---

*Built for oil & gas professionals, by someone who understands your needs.*
*Version 1.0 | 2024*
