/**
 * OkhikuAnalytics Pro - Google Sheets Loader
 * Automatically load well data from Google Sheets
 * 
 * Advanced Oil & Gas Analytics by Joseph Okhiku
 * Copyright © 2024 Joseph Okhiku. All rights reserved.
 */

class GoogleSheetsLoader {
    constructor(config) {
        this.config = config;
        this.loading = false;
    }
    
    /**
     * Build the Google Sheets CSV export URL
     */
    getSheetURL() {
        const sheetId = this.config.googleSheets.sheetId;
        
        if (!sheetId || sheetId === 'YOUR_GOOGLE_SHEET_ID_HERE') {
            throw new Error('Google Sheet ID not configured. Please set your Sheet ID in config.js');
        }
        
        // Google Sheets CSV export URL
        return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
    }
    
    /**
     * Load data from Google Sheets
     */
    async loadData() {
        if (this.loading) {
            console.log('Already loading data...');
            return false;
        }
        
        this.loading = true;
        
        try {
            const url = this.getSheetURL();
            
            if (this.config.googleSheets.showNotifications) {
                this.showNotification('Loading data from Google Sheets...', 'info');
            }
            
            console.log('📊 Loading from Google Sheets:', url);
            
            // Use CORS proxy to avoid CORS issues
            const corsProxy = 'https://api.allorigins.win/raw?url=';
            const response = await fetch(corsProxy + encodeURIComponent(url));
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const csvText = await response.text();
            
            if (!csvText || csvText.trim().length === 0) {
                throw new Error('Empty response from Google Sheets');
            }
            
            console.log('✓ Google Sheets data received:', csvText.length, 'characters');
            
            // Import the CSV data
            const imported = dataStore.importCSV(csvText);
            
            if (imported.length === 0) {
                throw new Error('No wells found in Google Sheets');
            }
            
            console.log(`✓ Successfully loaded ${imported.length} wells from Google Sheets`);
            
            if (this.config.googleSheets.showNotifications) {
                this.showNotification(
                    `✓ ${imported.length} wells loaded from Google Sheets`, 
                    'success'
                );
            }
            
            this.loading = false;
            return true;
            
        } catch (error) {
            console.error('❌ Error loading from Google Sheets:', error);
            
            if (this.config.googleSheets.showNotifications) {
                this.showNotification(
                    '⚠️ Could not load from Google Sheets. Using sample data.', 
                    'warning'
                );
            }
            
            // Fall back to sample data if configured
            if (this.config.useSampleDataOnError) {
                console.log('Using sample data as fallback');
            }
            
            this.loading = false;
            return false;
        }
    }
    
    /**
     * Show notification to user
     */
    showNotification(message, type = 'info') {
        // Create notification element if it doesn't exist
        let notification = document.getElementById('sheetsNotification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'sheetsNotification';
            notification.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 0.9rem;
                z-index: 10000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: slideIn 0.3s ease-out;
                max-width: 400px;
            `;
            document.body.appendChild(notification);
        }
        
        // Set color based on type
        const colors = {
            info: { bg: '#dbeafe', color: '#1e40af', border: '#3b82f6' },
            success: { bg: '#dcfce7', color: '#166534', border: '#22c55e' },
            warning: { bg: '#fef3c7', color: '#92400e', border: '#f59e0b' },
            error: { bg: '#fee2e2', color: '#991b1b', border: '#ef4444' }
        };
        
        const style = colors[type] || colors.info;
        notification.style.backgroundColor = style.bg;
        notification.style.color = style.color;
        notification.style.borderLeft = `4px solid ${style.border}`;
        notification.textContent = message;
        notification.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }, 5000);
    }
}

// Create global loader instance
let googleSheetsLoader = null;

/**
 * Initialize Google Sheets auto-load
 */
function initGoogleSheetsLoader() {
    if (!CONFIG.googleSheets.enabled) {
        console.log('Google Sheets auto-load is disabled in config');
        return;
    }
    
    googleSheetsLoader = new GoogleSheetsLoader(CONFIG);
    
    // Load data on startup if configured
    if (CONFIG.googleSheets.autoLoadOnStart) {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                googleSheetsLoader.loadData();
            });
        } else {
            googleSheetsLoader.loadData();
        }
    }
    
    // Setup auto-refresh if configured
    if (CONFIG.autoRefreshInterval > 0) {
        setInterval(() => {
            console.log('Auto-refreshing data from Google Sheets...');
            googleSheetsLoader.loadData();
        }, CONFIG.autoRefreshInterval * 60 * 1000);
    }
}

/**
 * Manual refresh function (called by refresh button)
 */
async function refreshDataFromGoogleSheets() {
    if (!googleSheetsLoader) {
        console.error('Google Sheets loader not initialized');
        return false;
    }
    
    const success = await googleSheetsLoader.loadData();
    
    // Reload current view if data loaded successfully
    if (success && window.app) {
        app.switchView(app.currentView);
    }
    
    return success;
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize when script loads
initGoogleSheetsLoader();

console.log('📊 Google Sheets Loader initialized');
console.log('Configuration:', CONFIG.googleSheets);
