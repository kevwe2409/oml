/**
 * OkhikuAnalytics Pro - Configuration
 * Google Sheets Database Integration
 * 
 * Advanced Oil & Gas Analytics by Joseph Okhiku
 * Copyright © 2024 Joseph Okhiku. All rights reserved.
 */

// ======================================
// GOOGLE SHEETS CONFIGURATION
// ======================================

/**
 * INSTRUCTIONS:
 * 
 * 1. Create your Google Sheet with well data
 * 2. Make it public: Share → "Anyone with the link" → Viewer
 * 3. Copy your Google Sheet URL
 * 4. Extract the Sheet ID from the URL
 * 5. Paste your Sheet ID below
 * 
 * EXAMPLE:
 * Your URL: https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit#gid=0
 * Sheet ID: 1ABC123XYZ456
 */

const GOOGLE_SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';

/**
 * Auto-load settings
 * Change these if needed
 */
const CONFIG = {
    // Google Sheets settings
    googleSheets: {
        enabled: true,  // Set to false to disable auto-load
        sheetId: GOOGLE_SHEET_ID,
        autoLoadOnStart: true,  // Load data when app opens
        showNotifications: true,  // Show loading notifications
    },
    
    // Fallback to sample data if Google Sheets fails
    useSampleDataOnError: true,
    
    // Refresh settings
    autoRefreshInterval: 0,  // 0 = disabled, or set minutes (e.g., 5 for every 5 minutes)
    
    // App settings
    appName: 'OkhikuAnalytics Pro',
    version: '1.2',
    author: 'Joseph Okhiku',
    copyright: '© 2024 Joseph Okhiku. All rights reserved.'
};

/**
 * NOTES:
 * 
 * - Make sure your Google Sheet has the same column headers as the sample CSV
 * - Sheet must be public ("Anyone with the link" access)
 * - Data loads automatically when you open index.html
 * - Click "Refresh Data" button to reload from Google Sheets
 * - Changes in Google Sheet appear after refresh
 */
