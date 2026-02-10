# 📊 GOOGLE SHEETS DATABASE - COMPLETE SETUP GUIDE

**OkhikuAnalytics Pro - Google Sheets Integration**  
**By Joseph Okhiku © 2024**

---

## 🎯 **WHAT YOU'RE GETTING**

✅ Google Sheets as your production database  
✅ Auto-load data when opening OkhikuAnalytics  
✅ Daily updates: Just edit Google Sheet  
✅ Multiple people can collaborate  
✅ Free forever, no limits for your use case

---

## 🚀 **SETUP INSTRUCTIONS (15 MINUTES)**

### **STEP 1: Create Your Google Sheet (5 minutes)**

**1.1 Go to Google Sheets:**
```
Open: https://sheets.google.com
Click: + Blank spreadsheet
```

**1.2 Name Your Sheet:**
```
Click "Untitled spreadsheet" at top
Type: "OkhikuAnalytics Production Database"
Press Enter
```

**1.3 Add Your Data:**

**Option A: Copy from CSV**
```
1. Open sample-100-wells-full-data.csv in Excel or text editor
2. Select all (Ctrl+A)
3. Copy (Ctrl+C)
4. Go to Google Sheet, click cell A1
5. Paste (Ctrl+V)
6. Done! Headers and 100 wells imported
```

**Option B: Manual Setup**
```
Row 1 - Add these column headers:
id, name, asset, status, operator, vintage, spudDate, completionDate, 
firstProductionDate, lateralLength, totalDepth, drillingDays, wellCost, 
completionType, proppantLoaded, fluidPumped, stages, clusterSpacing, 
ip30, ip90, ip180, currentProduction, cumulativeOil, cumulativeGas, 
cumulativeWater, waterCut, gor, npv, irr, breakEven, eur, 
reservoirPressure, bottomholeTemperature, permeability, porosity, 
oilSaturation, payThickness, field, state, country, latitude, 
longitude, apiNumber, surfaceLocation, bottomholeLocation, rigName, 
completionDesign, notes

Row 2+ - Add your well data
```

---

### **STEP 2: Make Sheet Public (2 minutes)**

**2.1 Share the Sheet:**
```
1. Click "Share" button (top right, blue button)
2. Under "General access", click "Restricted"
3. Select "Anyone with the link"
4. Make sure it says "Viewer" (not Editor)
5. Click "Done"
```

**2.2 Copy the Sheet URL:**
```
Your URL looks like this:
https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit#gid=0

Copy the entire URL!
```

---

### **STEP 3: Get Your Sheet ID (1 minute)**

**From your URL:**
```
https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit#gid=0
                                      ^^^^^^^^^^^^^^^^^^^^
                                      This is your SHEET ID
```

**Example:**
- Full URL: `https://docs.google.com/spreadsheets/d/1pQxYz3BvK8mN9rTuWs4Xa/edit#gid=0`
- Sheet ID: `1pQxYz3BvK8mN9rTuWs4Xa`

**Write down your Sheet ID!**

---

### **STEP 4: Configure OkhikuAnalytics (5 minutes)**

**4.1 Open Configuration File:**

I've created a new file: `config.js`

Open it and replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID.

**4.2 Example:**
```javascript
// Before:
const GOOGLE_SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';

// After (with your ID):
const GOOGLE_SHEET_ID = '1pQxYz3BvK8mN9rTuWs4Xa';
```

**4.3 Save the file**

---

### **STEP 5: Test It (2 minutes)**

**5.1 Open OkhikuAnalytics:**
```
1. Open index.html in your browser
2. You should see a notification: "Loading data from Google Sheets..."
3. Wait 2-3 seconds
4. Notification: "✓ 100 wells loaded from Google Sheets"
5. Dashboard updates with your data!
```

**5.2 Verify:**
```
Check Dashboard:
✓ Total Production shows correct value
✓ Active Wells count matches your data
✓ Charts display data

Check Asset Comparison:
✓ Shows your 5 assets
✓ All metrics populated
```

---

## 📝 **DAILY WORKFLOW**

### **How to Update Production Data Daily:**

**Morning Routine (5 minutes):**

**1. Open Google Sheet:**
```
Go to: https://sheets.google.com
Click: "OkhikuAnalytics Production Database"
```

**2. Update Today's Production:**
```
Find today's wells in the sheet
Update these columns:
- currentProduction (BBL/day)
- cumulativeOil (BBL total)
- cumulativeWater (BBL total)
- waterCut (% calculated: water/total)

Example:
Well W-001:
- currentProduction: 520 → 518 (down 2 BBL/day)
- cumulativeOil: 425000 → 425518 (added today's production)
- cumulativeWater: 85000 → 85100 (water produced today)
- waterCut: 16.3% → 16.4% (calculated)
```

**3. Add New Wells (if drilled):**
```
Go to next empty row
Fill in:
- id (e.g., W-101)
- name (e.g., "Imor-Alpha-101")
- asset (e.g., "Imor 1")
- status (Active/Drilling/Shut-in)
- spudDate (YYYY-MM-DD)
- All other available data

Leave blanks for unknown values
```

**4. Change Well Status (if needed):**
```
Find well in sheet
Update status column:
- Active → Shut-in (if stopped producing)
- Drilling → Active (if completed and producing)
- Active → P&A (if permanently abandoned)
```

**5. Save (Automatic):**
```
Google Sheets auto-saves every few seconds
No need to click Save
```

**6. View in OkhikuAnalytics:**
```
1. Open index.html (or refresh if already open)
2. Data loads automatically from Google Sheets
3. See updated production numbers immediately
```

---

## 🔄 **AUTO-REFRESH FEATURE**

The app now checks Google Sheets every time you:
- Open index.html
- Refresh the page (F5 or Ctrl+R)
- Switch views

**Manual Refresh Button:**
- Click "🔄 Refresh Data" button in header
- Data reloads from Google Sheets instantly

---

## 👥 **MULTIPLE USERS**

**Allow Team Members to Edit:**

**1. Give Edit Access:**
```
1. Open Google Sheet
2. Click "Share" button
3. Add team member email
4. Select "Editor" permission
5. Click "Send"
```

**2. Team Members Can:**
```
✓ Update production data daily
✓ Add new wells
✓ Change well statuses
✓ Add notes
✓ View revision history
```

**3. Track Changes:**
```
File → Version history → See version history
- See who made changes
- When changes were made
- Restore previous versions if needed
```

---

## 📊 **GOOGLE SHEETS TIPS**

### **Tip 1: Data Validation**
```
Prevent errors by setting rules:

1. Select "status" column
2. Data → Data validation
3. Criteria: "List of items"
4. Items: Active, Shut-in, Drilling, P&A
5. On invalid data: Reject input
6. Save

Now only valid statuses can be entered!
```

### **Tip 2: Conditional Formatting**
```
Highlight underperformers:

1. Select "waterCut" column
2. Format → Conditional formatting
3. Format cells if: Greater than
4. Value: 50
5. Formatting: Red background
6. Done

Now high water cut wells are highlighted red!
```

### **Tip 3: Formulas for Auto-Calculation**
```
Auto-calculate water cut:

In waterCut column (let's say column Z):
=IF(W2+X2=0, 0, (X2/(W2+X2))*100)

Where:
- W2 = cumulativeOil
- X2 = cumulativeWater

Drag formula down to all rows
Now waterCut calculates automatically!
```

### **Tip 4: Freeze Header Row**
```
1. Click row 2 (first data row)
2. View → Freeze → 1 row
3. Now header stays visible when scrolling
```

### **Tip 5: Filter Views**
```
Create custom filters without affecting others:

1. Click Data → Filter views → Create new filter view
2. Name: "Active Wells Only"
3. Filter status = Active
4. Save

Others can still see all data, you see filtered view!
```

---

## 🔧 **TROUBLESHOOTING**

### **Problem 1: "Failed to load from Google Sheets"**

**Cause:** Sheet is not public

**Solution:**
```
1. Open Google Sheet
2. Click Share button
3. Change "Restricted" to "Anyone with the link"
4. Permission: Viewer
5. Try loading OkhikuAnalytics again
```

---

### **Problem 2: "0 wells loaded"**

**Cause:** Wrong Sheet ID in config.js

**Solution:**
```
1. Open Google Sheet
2. Copy URL from address bar
3. Extract Sheet ID (the long alphanumeric string)
4. Open config.js
5. Replace GOOGLE_SHEET_ID value
6. Save file
7. Refresh OkhikuAnalytics
```

---

### **Problem 3: Data not updating**

**Cause:** Browser cached old data

**Solution:**
```
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Or clear cache: Ctrl+Shift+Delete
3. Or click "🔄 Refresh Data" button in app
```

---

### **Problem 4: CORS error in console**

**Cause:** Google Sheets CORS policy

**Solution:**
```
This is normal! The proxy automatically handles it.
The data loads through a CORS proxy.

If it still fails:
1. Check internet connection
2. Make sure Sheet is public ("Anyone with link")
3. Try different browser
```

---

## 📱 **MOBILE ACCESS**

**Edit on Phone/Tablet:**

**1. Install Google Sheets App:**
```
iOS: App Store → "Google Sheets"
Android: Play Store → "Google Sheets"
```

**2. Open Your Sheet:**
```
1. Open Google Sheets app
2. Find "OkhikuAnalytics Production Database"
3. Tap to open
```

**3. Edit Production Data:**
```
1. Tap any cell
2. Type new value
3. Tap checkmark
4. Auto-saves immediately
```

**4. View in OkhikuAnalytics:**
```
Open OkhikuAnalytics on desktop
Refresh page
See mobile updates immediately!
```

---

## 💾 **BACKUP & EXPORT**

### **Automatic Backup:**
```
Google Sheets auto-saves to Google Drive
Your data is backed up continuously
Can restore from version history
```

### **Manual Backup:**
```
File → Download → Microsoft Excel (.xlsx)
Save to your computer as backup
Do this weekly or monthly
```

### **Export to CSV:**
```
File → Download → Comma Separated Values (.csv)
This gives you the exact format for offline use
Can import to Excel or other tools
```

---

## 📊 **EXAMPLE: DAILY UPDATE ROUTINE**

**Scenario:** It's 9 AM, you got yesterday's production numbers

**Step-by-Step:**

**1. Open Google Sheet (30 seconds)**
```
Go to sheets.google.com
Click "OkhikuAnalytics Production Database"
```

**2. Find Yesterday's Date Row (optional)**
```
Or just update each well's current data
```

**3. Update Production (3 minutes)**
```
Well W-001: currentProduction = 520
Well W-002: currentProduction = 485
Well W-003: currentProduction = 445
... (update all 100 wells)

Pro tip: Use Tab key to move to next cell quickly
```

**4. Update Cumulative (2 minutes)**
```
Well W-001:
- cumulativeOil = 425000 + 520 = 425520
- cumulativeWater = 85000 + 100 = 85100

Or use formula:
=PREVIOUS_VALUE + TODAY_PRODUCTION
```

**5. Note Any Issues (1 minute)**
```
In "notes" column:
- "Water cut increasing" 
- "Pump issue, production down"
- "Well shut-in for workover"
```

**6. Save & Close**
```
Google auto-saves
Close tab
```

**7. View in OkhikuAnalytics**
```
Open index.html
Wait 2 seconds for auto-load
See updated dashboard!
```

**Total time: 5-7 minutes/day for 100 wells**

---

## ✅ **WHAT YOU NOW HAVE**

**Database System:**
✅ Google Sheets as central database  
✅ Auto-loads to OkhikuAnalytics  
✅ Update anywhere (web, mobile, tablet)  
✅ Multiple users can edit  
✅ Free forever  

**Features:**
✅ Daily production updates  
✅ Real-time sync  
✅ Version history  
✅ Data validation  
✅ Mobile access  
✅ Automatic backup  

**Workflow:**
✅ Morning: Update Google Sheet (5 min)  
✅ View: Open OkhikuAnalytics  
✅ Analyze: All dashboards updated  
✅ Report: Generate PDFs  
✅ Share: Email to team  

---

## 📞 **SUPPORT**

**Files Created:**
- ✅ `config.js` - Configuration file (set your Sheet ID here)
- ✅ `js/google-sheets-loader.js` - Auto-load functionality
- ✅ `GOOGLE-SHEETS-DATABASE-GUIDE.md` - This guide

**Need Help:**
1. Check troubleshooting section above
2. Open browser console (F12) for error messages
3. Verify Sheet is public
4. Confirm Sheet ID is correct in config.js

---

## 🎉 **YOU'RE READY!**

**Next Steps:**
1. ✅ Set up Google Sheet (follow Step 1-3)
2. ✅ Add your Sheet ID to config.js (Step 4)
3. ✅ Open index.html and test (Step 5)
4. ✅ Start daily updates!

**Tomorrow Morning:**
1. Open Google Sheet
2. Update production data
3. Refresh OkhikuAnalytics
4. See updated analytics!

---

**OkhikuAnalytics Pro — Advanced Oil & Gas Analytics by Joseph Okhiku**  
**Copyright © 2024 Joseph Okhiku. All rights reserved.**

**YOUR DATABASE IS READY! 🚀**
