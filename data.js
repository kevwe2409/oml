/**
 * OkhikuAnalytics Pro - Sample Data Module
 * Generates realistic oil & gas production and economic data
 * 
 * Advanced Oil & Gas Analytics by Joseph Okhiku
 * Copyright © 2024 Joseph Okhiku. All rights reserved.
 */

// Sample well data with production, drilling, and economic information
const SAMPLE_WELLS = [
    {
        id: 'W-001',
        name: 'Eagle Ford 1H',
        asset: 'Eagle Ford',
        status: 'Active',
        spudDate: '2022-03-15',
        completionDate: '2022-05-20',
        vintage: 2022,
        operator: 'ABC Energy',
        field: 'South Block',
        latitude: 28.5,
        longitude: -98.5,
        totalDepth: 18500,
        lateralLength: 9500,
        completionType: 'Slickwater',
        proppantLoaded: 7500, // klbs
        stages: 45,
        drillingDays: 18,
        wellCost: 8.5, // MM USD
        ip30: 1250, // BBL/day
        eur: 580, // MBBL
        breakEven: 38, // $/BBL
        npv: 12.5, // MM USD @ 10%
        irr: 45, // %
        currentProduction: 425,
        forecast: 450,
        waterCut: 15, // %
        gor: 850 // SCF/BBL
    },
    {
        id: 'W-002',
        name: 'Permian 2H',
        asset: 'Permian Basin',
        status: 'Active',
        spudDate: '2023-01-10',
        completionDate: '2023-03-05',
        vintage: 2023,
        operator: 'XYZ Oil',
        field: 'West Field',
        latitude: 31.8,
        longitude: -102.3,
        totalDepth: 20000,
        lateralLength: 10500,
        completionType: 'Hybrid',
        proppantLoaded: 8200,
        stages: 50,
        drillingDays: 16,
        wellCost: 9.2,
        ip30: 1450,
        eur: 720,
        breakEven: 35,
        npv: 18.3,
        irr: 52,
        currentProduction: 680,
        forecast: 720,
        waterCut: 8,
        gor: 920
    },
    {
        id: 'W-003',
        name: 'Bakken 3H',
        asset: 'Bakken',
        status: 'Active',
        spudDate: '2021-08-20',
        completionDate: '2021-10-15',
        vintage: 2021,
        operator: 'North Energy',
        field: 'Central Area',
        latitude: 47.9,
        longitude: -103.4,
        totalDepth: 19800,
        lateralLength: 9800,
        completionType: 'Slickwater',
        proppantLoaded: 7800,
        stages: 48,
        drillingDays: 20,
        wellCost: 8.8,
        ip30: 980,
        eur: 480,
        breakEven: 42,
        npv: 8.7,
        irr: 38,
        currentProduction: 210,
        forecast: 280,
        waterCut: 25,
        gor: 780
    },
    {
        id: 'W-004',
        name: 'Eagle Ford 4H',
        asset: 'Eagle Ford',
        status: 'Active',
        spudDate: '2023-06-01',
        completionDate: '2023-07-25',
        vintage: 2023,
        operator: 'ABC Energy',
        field: 'South Block',
        latitude: 28.6,
        longitude: -98.4,
        totalDepth: 18200,
        lateralLength: 10200,
        completionType: 'Hybrid',
        proppantLoaded: 8500,
        stages: 52,
        drillingDays: 15,
        wellCost: 9.5,
        ip30: 1580,
        eur: 780,
        breakEven: 33,
        npv: 21.5,
        irr: 58,
        currentProduction: 890,
        forecast: 850,
        waterCut: 5,
        gor: 950
    },
    {
        id: 'W-005',
        name: 'Permian 5H',
        asset: 'Permian Basin',
        status: 'Active',
        spudDate: '2022-09-15',
        completionDate: '2022-11-10',
        vintage: 2022,
        operator: 'XYZ Oil',
        field: 'East Field',
        latitude: 31.9,
        longitude: -102.1,
        totalDepth: 19500,
        lateralLength: 9200,
        completionType: 'Slickwater',
        proppantLoaded: 7200,
        stages: 42,
        drillingDays: 17,
        wellCost: 8.2,
        ip30: 1150,
        eur: 550,
        breakEven: 40,
        npv: 10.8,
        irr: 42,
        currentProduction: 380,
        forecast: 420,
        waterCut: 18,
        gor: 880
    },
    {
        id: 'W-006',
        name: 'Bakken 6H',
        asset: 'Bakken',
        status: 'Shut-in',
        spudDate: '2021-03-10',
        completionDate: '2021-05-05',
        vintage: 2021,
        operator: 'North Energy',
        field: 'North Area',
        latitude: 48.1,
        longitude: -103.2,
        totalDepth: 19200,
        lateralLength: 8800,
        completionType: 'Gel',
        proppantLoaded: 6800,
        stages: 40,
        drillingDays: 22,
        wellCost: 8.0,
        ip30: 850,
        eur: 420,
        breakEven: 48,
        npv: 5.2,
        irr: 28,
        currentProduction: 0,
        forecast: 180,
        waterCut: 35,
        gor: 720
    },
    {
        id: 'W-007',
        name: 'Eagle Ford 7H',
        asset: 'Eagle Ford',
        status: 'Active',
        spudDate: '2024-01-05',
        completionDate: '2024-02-20',
        vintage: 2024,
        operator: 'ABC Energy',
        field: 'North Block',
        latitude: 28.7,
        longitude: -98.3,
        totalDepth: 18800,
        lateralLength: 10800,
        completionType: 'Slickwater',
        proppantLoaded: 9000,
        stages: 55,
        drillingDays: 14,
        wellCost: 10.2,
        ip30: 1720,
        eur: 850,
        breakEven: 31,
        npv: 25.8,
        irr: 62,
        currentProduction: 1350,
        forecast: 1200,
        waterCut: 3,
        gor: 980
    },
    {
        id: 'W-008',
        name: 'Permian 8H',
        asset: 'Permian Basin',
        status: 'Active',
        spudDate: '2023-08-20',
        completionDate: '2023-10-15',
        vintage: 2023,
        operator: 'XYZ Oil',
        field: 'Central Field',
        latitude: 31.7,
        longitude: -102.5,
        totalDepth: 20500,
        lateralLength: 11000,
        completionType: 'Hybrid',
        proppantLoaded: 8800,
        stages: 58,
        drillingDays: 15,
        wellCost: 10.5,
        ip30: 1650,
        eur: 820,
        breakEven: 32,
        npv: 23.5,
        irr: 60,
        currentProduction: 920,
        forecast: 880,
        waterCut: 6,
        gor: 940
    },
    {
        id: 'W-009',
        name: 'Bakken 9H',
        asset: 'Bakken',
        status: 'Active',
        spudDate: '2022-05-15',
        completionDate: '2022-07-10',
        vintage: 2022,
        operator: 'North Energy',
        field: 'South Area',
        latitude: 47.8,
        longitude: -103.6,
        totalDepth: 19500,
        lateralLength: 9500,
        completionType: 'Slickwater',
        proppantLoaded: 7600,
        stages: 46,
        drillingDays: 19,
        wellCost: 8.6,
        ip30: 1050,
        eur: 520,
        breakEven: 41,
        npv: 9.5,
        irr: 40,
        currentProduction: 315,
        forecast: 350,
        waterCut: 20,
        gor: 810
    },
    {
        id: 'W-010',
        name: 'Eagle Ford 10H',
        asset: 'Eagle Ford',
        status: 'Drilling',
        spudDate: '2024-11-01',
        completionDate: null,
        vintage: 2024,
        operator: 'ABC Energy',
        field: 'West Block',
        latitude: 28.4,
        longitude: -98.6,
        totalDepth: 18600,
        lateralLength: 10000,
        completionType: 'Hybrid',
        proppantLoaded: 8000,
        stages: 50,
        drillingDays: 16,
        wellCost: 9.8,
        ip30: null,
        eur: 720,
        breakEven: 34,
        npv: 19.2,
        irr: 55,
        currentProduction: 0,
        forecast: 0,
        waterCut: null,
        gor: null
    },
    {
        id: 'W-011',
        name: 'Permian 11H',
        asset: 'Permian Basin',
        status: 'Active',
        spudDate: '2021-11-10',
        completionDate: '2022-01-05',
        vintage: 2022,
        operator: 'XYZ Oil',
        field: 'South Field',
        latitude: 31.6,
        longitude: -102.7,
        totalDepth: 19800,
        lateralLength: 9600,
        completionType: 'Slickwater',
        proppantLoaded: 7400,
        stages: 44,
        drillingDays: 18,
        wellCost: 8.4,
        ip30: 1180,
        eur: 570,
        breakEven: 39,
        npv: 11.2,
        irr: 43,
        currentProduction: 295,
        forecast: 320,
        waterCut: 22,
        gor: 860
    },
    {
        id: 'W-012',
        name: 'Bakken 12H',
        asset: 'Bakken',
        status: 'Active',
        spudDate: '2023-03-20',
        completionDate: '2023-05-15',
        vintage: 2023,
        operator: 'North Energy',
        field: 'East Area',
        latitude: 48.0,
        longitude: -103.1,
        totalDepth: 19600,
        lateralLength: 10200,
        completionType: 'Hybrid',
        proppantLoaded: 8300,
        stages: 51,
        drillingDays: 17,
        wellCost: 9.4,
        ip30: 1380,
        eur: 680,
        breakEven: 36,
        npv: 16.5,
        irr: 50,
        currentProduction: 720,
        forecast: 680,
        waterCut: 10,
        gor: 900
    }
];

// Generate time series production data for each well
function generateProductionHistory(well, months = 24) {
    const history = [];
    const startDate = new Date(well.completionDate || well.spudDate);
    
    if (!well.ip30 || well.status === 'Drilling') {
        return history;
    }
    
    // Hyperbolic decline parameters
    const qi = well.ip30; // Initial production rate
    const Di = 0.70; // Initial decline rate (70% per year = typical for shale)
    const b = 0.8; // Hyperbolic b-factor
    
    for (let i = 0; i < months; i++) {
        const date = new Date(startDate);
        date.setMonth(date.getMonth() + i);
        
        // Hyperbolic decline formula: q(t) = qi / (1 + b*Di*t)^(1/b)
        const t = i / 12; // Time in years
        const rate = qi / Math.pow(1 + b * Di * t, 1 / b);
        
        // Add some random variation (±5%)
        const variation = 0.95 + Math.random() * 0.1;
        const actualRate = rate * variation;
        
        // Forecast is slightly higher (optimistic)
        const forecastRate = rate * 1.05;
        
        // Calculate cumulative
        const cumulative = i === 0 ? actualRate * 30 : 
            history[i-1].cumulative + actualRate * 30;
        
        history.push({
            date: date.toISOString().split('T')[0],
            month: i + 1,
            rate: Math.round(actualRate),
            forecast: Math.round(forecastRate),
            cumulative: Math.round(cumulative),
            waterCut: well.waterCut ? well.waterCut + (i * 0.5) : null, // Water cut increases over time
            gor: well.gor ? well.gor + (i * 5) : null // GOR increases slightly over time
        });
    }
    
    return history;
}

// Data storage
class DataStore {
    constructor() {
        this.wells = [];
        this.productionHistory = new Map();
        this.economics = {
            oilPrice: 75,
            gasPrice: 3.5,
            discountRate: 10
        };
        this.loadSampleData();
    }
    
    loadSampleData() {
        this.wells = JSON.parse(JSON.stringify(SAMPLE_WELLS));
        
        // Generate production history for each well
        this.wells.forEach(well => {
            const history = generateProductionHistory(well);
            this.productionHistory.set(well.id, history);
        });
        
        console.log('Sample data loaded successfully');
        console.log(`Total wells: ${this.wells.length}`);
    }
    
    getWells(filters = {}) {
        let filtered = [...this.wells];
        
        if (filters.status && filters.status !== 'all') {
            filtered = filtered.filter(w => w.status === filters.status);
        }
        
        if (filters.asset && filters.asset !== 'all') {
            filtered = filtered.filter(w => w.asset === filters.asset);
        }
        
        if (filters.search) {
            const search = filters.search.toLowerCase();
            filtered = filtered.filter(w => 
                w.name.toLowerCase().includes(search) ||
                w.id.toLowerCase().includes(search) ||
                w.asset.toLowerCase().includes(search)
            );
        }
        
        return filtered;
    }
    
    getWell(id) {
        return this.wells.find(w => w.id === id);
    }
    
    getProductionHistory(wellId, days = null) {
        const history = this.productionHistory.get(wellId) || [];
        if (days && days !== 'all') {
            const months = Math.ceil(parseInt(days) / 30);
            return history.slice(-months);
        }
        return history;
    }
    
    getActiveWells() {
        return this.wells.filter(w => w.status === 'Active');
    }
    
    getTotalProduction() {
        return this.getActiveWells().reduce((sum, w) => sum + (w.currentProduction || 0), 0);
    }
    
    getPortfolioNPV() {
        return this.getActiveWells().reduce((sum, w) => sum + (w.npv || 0), 0);
    }
    
    getAverageIRR() {
        const active = this.getActiveWells();
        if (active.length === 0) return 0;
        const totalIRR = active.reduce((sum, w) => sum + (w.irr || 0), 0);
        return totalIRR / active.length;
    }
    
    getUnderperformingWells(limit = 10) {
        return this.getActiveWells()
            .map(w => ({
                ...w,
                performanceRatio: w.forecast > 0 ? w.currentProduction / w.forecast : 0
            }))
            .sort((a, b) => a.performanceRatio - b.performanceRatio)
            .slice(0, limit);
    }
    
    getTopPerformingWells(limit = 10) {
        return this.getActiveWells()
            .map(w => ({
                ...w,
                performanceRatio: w.forecast > 0 ? w.currentProduction / w.forecast : 0
            }))
            .sort((a, b) => b.performanceRatio - a.performanceRatio)
            .slice(0, limit);
    }
    
    getTopProducingWells(limit = 10) {
        return this.getActiveWells()
            .sort((a, b) => b.currentProduction - a.currentProduction)
            .slice(0, limit);
    }
    
    getAssets() {
        return [...new Set(this.wells.map(w => w.asset))];
    }
    
    getWellsByVintage(vintage) {
        if (vintage === 'all') return this.wells;
        return this.wells.filter(w => w.vintage === parseInt(vintage));
    }
    
    getWellsByCompletionType(type) {
        if (type === 'all') return this.wells;
        return this.wells.filter(w => w.completionType === type);
    }
    
    recalculateEconomics(oilPrice, gasPrice, discountRate) {
        this.economics = { oilPrice, gasPrice, discountRate };
        
        // Simplified NPV recalculation based on price changes
        const priceChangeFactor = oilPrice / 75; // Original price was $75
        
        this.wells.forEach(well => {
            if (well.npv) {
                well.npv = parseFloat((well.npv * priceChangeFactor).toFixed(2));
                // Adjust break-even proportionally
                well.breakEven = Math.round(well.breakEven / priceChangeFactor);
            }
        });
        
        console.log('Economics recalculated', this.economics);
    }
    
    importCSV(csvText) {
        // Robust CSV parser that handles quoted fields and commas
        const lines = csvText.trim().split('\n');
        
        // Parse CSV line handling quoted fields
        const parseCSVLine = (line) => {
            const values = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    values.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            values.push(current.trim());
            return values;
        };
        
        const headers = parseCSVLine(lines[0]);
        const imported = [];
        
        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue; // Skip empty lines
            
            const values = parseCSVLine(lines[i]);
            const well = {};
            
            headers.forEach((header, index) => {
                let value = values[index]?.trim() || '';
                
                // Remove quotes if present
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                
                // Convert numeric fields
                const numericFields = ['vintage', 'totalDepth', 'lateralLength', 'drillingDays', 
                    'wellCost', 'ip30', 'ip90', 'ip180', 'eur', 'currentProduction', 
                    'cumulativeOil', 'cumulativeGas', 'cumulativeWater', 'waterCut', 'gor',
                    'npv', 'irr', 'breakEven', 'proppantLoaded', 'fluidPumped', 'stages',
                    'clusterSpacing', 'reservoirPressure', 'bottomholeTemperature',
                    'permeability', 'porosity', 'oilSaturation', 'payThickness'];
                
                if (numericFields.includes(header)) {
                    const num = parseFloat(value);
                    well[header] = isNaN(num) ? 0 : num;
                } else {
                    well[header] = value;
                }
            });
            
            // Generate production history if not present
            try {
                if (!well.productionHistory && well.ip30 && well.status !== 'Drilling') {
                    well.productionHistory = generateProductionHistory(well);
                } else if (!well.productionHistory) {
                    well.productionHistory = []; // Empty array if can't generate
                }
            } catch (error) {
                console.warn(`Could not generate production history for well ${well.id}:`, error.message);
                well.productionHistory = [];
            }
            
            imported.push(well);
        }
        
        // Validate we have some wells
        if (imported.length === 0) {
            throw new Error('No valid wells found in CSV file');
        }
        
        // Replace existing wells with imported data
        this.wells = imported;
        console.log(`✓ Successfully imported ${imported.length} wells from CSV`);
        console.log('Sample well:', imported[0]);
        console.log('Assets found:', [...new Set(imported.map(w => w.asset))]);
        
        return imported;
    }
    
    exportData() {
        return {
            wells: this.wells,
            economics: this.economics,
            exportDate: new Date().toISOString()
        };
    }
}

// Create global data store instance
const dataStore = new DataStore();
