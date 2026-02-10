# PetroAnalytics Pro - Deployment & Distribution Guide

## 📦 Package Contents

Your PetroAnalytics Pro installation includes:

```
PetroAnalytics-Pro/
├── index.html                      # Main application file (OPEN THIS)
├── README.md                       # Complete documentation
├── QUICKSTART.md                   # 5-minute quick start guide
├── DEPLOYMENT.md                   # This file
├── sample-import-template.csv      # CSV template for importing data
├── css/
│   └── style.css                  # Application styling
└── js/
    ├── data.js                    # Data management & sample data
    ├── analytics.js               # Analytics engine (NPV, IRR, decline curves)
    ├── charts.js                  # Chart.js visualizations
    └── app.js                     # Main application controller
```

**Total Size**: ~150 KB (extremely lightweight!)

---

## 🚀 Installation Options

### Option 1: Local Desktop Use (Recommended)
**Best for**: Individual analysts, offline use, data privacy

1. **Extract the files** to any folder on your computer
   - Example: `C:\Users\YourName\Documents\PetroAnalytics-Pro\`
   - Or: `~/Documents/PetroAnalytics-Pro/` on Mac

2. **Create a desktop shortcut** (Optional but convenient)
   - Right-click `index.html`
   - Select "Send to" → "Desktop (create shortcut)" on Windows
   - Or drag to Desktop while holding Option+Command on Mac

3. **Open the application**
   - Double-click `index.html` or the desktop shortcut
   - The application will open in your default web browser

4. **Bookmark it** (Optional)
   - Once open, bookmark the page (Ctrl+D / Cmd+D)
   - Name it "PetroAnalytics Pro" for quick access

**Advantages**:
- ✅ No installation required
- ✅ Works offline (after first load)
- ✅ Complete data privacy (nothing leaves your computer)
- ✅ Can be used on multiple computers (just copy the folder)

### Option 2: Network Share (Team Use)
**Best for**: Small teams sharing the same dataset

1. **Copy the entire folder** to a network drive
   - Example: `\\CompanyServer\Shared\PetroAnalytics-Pro\`

2. **Set read/write permissions** for your team

3. **Each user opens** `index.html` from the network location

4. **Share data files** via the network folder
   - Users can export their reports to the shared folder
   - Others can import these reports for collaboration

**Note**: Each user maintains their own session. For true multi-user collaboration, a more advanced setup would be needed.

### Option 3: Internal Web Server (Advanced)
**Best for**: IT-managed deployment, company intranet

1. **Copy files to web server** document root
   - Example: `/var/www/html/petroanalytics/`

2. **Configure web server** (Apache, Nginx, IIS)
   - Ensure `.html`, `.css`, `.js` MIME types are correct
   - Enable directory listing if desired

3. **Access via URL**
   - Example: `http://intranet.company.com/petroanalytics/`

4. **Users bookmark the URL** for easy access

**Advantages**:
- ✅ Central access point
- ✅ Easy updates (update files once, everyone gets them)
- ✅ Can integrate with company SSO (requires customization)

---

## 🖥️ System Requirements

### Minimum Requirements
- **Operating System**: Windows 7+, macOS 10.12+, Linux (any modern distro)
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **RAM**: 4 GB
- **Storage**: 1 MB for application files
- **Screen Resolution**: 1280x720 (1920x1080 recommended)
- **Internet**: Required for initial load only (to load Chart.js library)

### Recommended Setup
- **OS**: Windows 10/11 or macOS 12+
- **Browser**: Chrome 120+ (best performance)
- **RAM**: 8 GB
- **Screen**: 1920x1080 or higher
- **Dual monitors**: Ideal for comparing multiple dashboards

---

## 🔒 Security & Privacy

### Data Security
- **100% client-side**: All data processing happens in your browser
- **No external servers**: No data is sent to any external server
- **No tracking**: No analytics, cookies, or tracking scripts
- **No login required**: No passwords to manage
- **Local storage only**: Data stays on your computer

### Network Security
- **No outbound connections** (except Chart.js CDN on first load)
- **Can run offline** after libraries are cached
- **Safe for sensitive data**: Suitable for confidential oil & gas data
- **No API keys required**: No credentials to secure

### Best Practices
✅ Store the application folder in a secure location  
✅ Export backups regularly to a separate secure location  
✅ Do not share exported JSON files over unsecured channels  
✅ Use company file sharing for team collaboration  
✅ Consider encrypting the folder if storing on portable media  

---

## 📊 Data Management

### Importing Data
1. **Prepare your CSV file** using the `sample-import-template.csv` format
2. **Required columns** (all must be present):
   - Well identifiers: `id`, `name`, `asset`, `status`
   - Dates: `spudDate`, `completionDate`, `vintage`
   - Drilling data: `operator`, `field`, `totalDepth`, `lateralLength`
   - Completion data: `completionType`, `proppantLoaded`, `stages`, `drillingDays`
   - Economics: `wellCost`, `ip30`, `eur`, `breakEven`, `npv`, `irr`
   - Production: `currentProduction`, `forecast`, `waterCut`, `gor`
   - Location: `latitude`, `longitude`

3. **Data formats**:
   - Dates: `YYYY-MM-DD` (e.g., 2024-03-15)
   - Numbers: No commas (e.g., 1250 not 1,250)
   - Decimals: Use period (e.g., 8.5 not 8,5)
   - Status: `Active`, `Shut-in`, or `Drilling`

4. **Import process**:
   - Click "Import Data" button
   - Select "Browse Files"
   - Choose your CSV file
   - Wait for confirmation
   - All dashboards update automatically

### Exporting Data
1. **Click "Export Report"** in top-right corner
2. **File is downloaded** as `petroanalytics-report-YYYY-MM-DD.json`
3. **Contains**:
   - All well data
   - Production histories
   - Current economic parameters
   - Portfolio summary statistics
   - Timestamp

4. **Uses for exports**:
   - Backup before making changes
   - Share with colleagues
   - Monthly archive for trending
   - Audit trail
   - Import into other tools

### Data Backup Strategy
**Daily**: Use "Export Report" at end of each session  
**Weekly**: Save exports to network drive or cloud storage  
**Monthly**: Archive monthly snapshot for year-over-year comparison  
**Before imports**: Always export current data before importing new data  

---

## 🔄 Updates & Versioning

### Checking Your Version
- Open `README.md` and look at the bottom for version number
- Current version: **1.0** (2024)

### Applying Updates
1. **Backup your data**: Export all reports first
2. **Download new version**: Obtain updated files
3. **Replace files**: Copy new files over old ones (keep your exported data)
4. **Re-import data**: Use your exported JSON files
5. **Test**: Verify all dashboards work correctly

### What NOT to Overwrite
- Keep your exported `.json` report files
- Keep any custom `.csv` import files you've created

---

## 🛠️ Troubleshooting

### Application Won't Load
**Problem**: Page is blank or shows errors  
**Solutions**:
1. Check that all files are present (use `ls` or `dir` command)
2. Verify folder structure matches the one shown above
3. Ensure `index.html` is at the root level
4. Check internet connection (needed for Chart.js library)
5. Try a different browser
6. Clear browser cache (Ctrl+Shift+Delete)

### Charts Not Displaying
**Problem**: Charts are empty or not rendering  
**Solutions**:
1. Refresh the page (F5)
2. Check browser console for errors (F12 key)
3. Verify internet connection for Chart.js CDN
4. Ensure JavaScript is enabled in browser
5. Try loading in Chrome (best compatibility)

### Performance Issues
**Problem**: Application is slow or unresponsive  
**Solutions**:
1. Close unnecessary browser tabs
2. Clear browser cache
3. Restart browser
4. Check RAM usage (close other programs)
5. If using >100 wells, consider splitting into multiple datasets

### Import Failures
**Problem**: CSV import doesn't work  
**Solutions**:
1. Verify file format matches `sample-import-template.csv`
2. Check for special characters in well names
3. Ensure all required columns are present
4. Verify dates are in YYYY-MM-DD format
5. Remove commas from numeric values
6. Save CSV as UTF-8 encoding

### Export Not Working
**Problem**: Export button doesn't download file  
**Solutions**:
1. Check browser pop-up blocker settings
2. Allow pop-ups for this site
3. Try right-click → "Save Link As"
4. Check browser download settings
5. Ensure sufficient disk space

---

## 📱 Mobile & Tablet Use

### Current Support
- **Desktop browsers**: ✅ Full support
- **Tablet (landscape)**: ✅ Works, but cramped
- **Phone**: ⚠️ Not optimized (use desktop)

### Tablet Tips
1. Use landscape orientation
2. Increase browser zoom if text is small
3. Use external keyboard for data entry
4. Some charts may require horizontal scrolling

**Note**: Full mobile optimization is planned for future versions.

---

## 🌐 Offline Use

### Initial Setup
1. Open the application while **connected to internet**
2. Let all charts load fully (wait 10 seconds)
3. Browser will cache Chart.js library

### Offline Usage
After initial load, the application works **completely offline**:
- ✅ All dashboards function normally
- ✅ Import/export works
- ✅ Charts render correctly
- ✅ Calculations are accurate

**Perfect for**:
- Field offices without reliable internet
- Secure environments with restricted network access
- Airplane/remote work

---

## 👥 Multi-User Scenarios

### Option A: Individual Use
Each user has their own copy:
- Copy folder to each user's computer
- Each maintains their own dataset
- Share via exported reports

### Option B: Shared Network Drive
Team shares one copy:
- Place folder on network drive
- Each user opens same `index.html`
- Users export/import to collaborate
- **Note**: No real-time sync

### Option C: Git Repository (Advanced)
For tech-savvy teams:
- Store application in Git repo
- Each user clones the repo
- Share data via Git commits
- Track changes over time

---

## 🎯 Production Deployment Checklist

Before deploying to your team:

- [ ] Test application with sample data
- [ ] Import your actual well data successfully
- [ ] Verify all dashboards load correctly
- [ ] Test export functionality
- [ ] Document any custom CSV column mappings
- [ ] Create team-specific user guide (if needed)
- [ ] Set up backup/archive location for exports
- [ ] Train initial users (recommend 30-minute session)
- [ ] Establish data update frequency (daily/weekly)
- [ ] Create support contact for questions

---

## 📞 Support & Maintenance

### Self-Help Resources
1. **README.md**: Complete documentation
2. **QUICKSTART.md**: 5-minute guide
3. **This file (DEPLOYMENT.md)**: Setup instructions
4. **Browser console (F12)**: Check for error messages

### Common Maintenance Tasks
- **Monthly**: Export archive for backup
- **Quarterly**: Review data quality and accuracy
- **Annually**: Check for application updates
- **As needed**: Re-import fresh data from production systems

### Creating a Support System
For organizational deployment:

1. **Designate a "champion"**: One person who knows the tool well
2. **Create internal wiki page**: Document your specific workflows
3. **Set up shared folder**: For exports and data sharing
4. **Schedule monthly reviews**: Discuss findings as a team
5. **Track feature requests**: Note what users want improved

---

## 🎓 Training Recommendations

### For New Users (30-minute session)
1. **Demo with sample data** (10 min)
   - Show each dashboard view
   - Demonstrate filtering
   - Explain key metrics

2. **Hands-on practice** (15 min)
   - User navigates the interface
   - Try different filters
   - Practice importing/exporting

3. **Q&A and resources** (5 min)
   - Share QUICKSTART.md
   - Demonstrate where to get help
   - Discuss use cases

### For Power Users (1-hour session)
- Advanced filtering techniques
- Custom data import from your systems
- Economic sensitivity analysis
- Type curve fitting and forecasting
- Report generation workflows

---

## 🔮 Future Roadmap

### Planned Enhancements
- PDF report generation
- Excel export functionality
- Advanced filtering and grouping
- Custom dashboard builder
- API integration for live data
- Multi-user collaboration features

### Request Features
Document feature requests for future versions:
- What workflows could be improved?
- What calculations are missing?
- What integrations would be valuable?

---

## ✅ Quick Reference

### File Locations
- **Application**: `index.html`
- **Documentation**: `README.md`, `QUICKSTART.md`
- **Import template**: `sample-import-template.csv`
- **Exports**: Download folder (default browser location)

### Key Shortcuts
- **F5**: Refresh page
- **F12**: Open browser console (for debugging)
- **Ctrl+D**: Bookmark page
- **Ctrl+F**: Search within page

### Important URLs (CDN)
- Chart.js: https://cdn.jsdelivr.net/npm/chart.js@4.4.0
- Font Awesome: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0
- Google Fonts: https://fonts.googleapis.com/css2?family=Inter

---

**Need Help?** Review README.md for complete documentation.

**Ready to Deploy!** 🚀
