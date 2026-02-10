/**
 * OkhikuAnalytics Pro - Analytics Engine
 * Core analytics and calculation functions
 * 
 * Advanced Oil & Gas Analytics by Joseph Okhiku
 * Copyright © 2024 Joseph Okhiku. All rights reserved.
 */

class AnalyticsEngine {
    constructor(dataStore) {
        this.dataStore = dataStore;
    }
    
    // Calculate NPV (Net Present Value)
    calculateNPV(cashFlows, discountRate) {
        let npv = 0;
        for (let i = 0; i < cashFlows.length; i++) {
            npv += cashFlows[i] / Math.pow(1 + discountRate / 100, i);
        }
        return npv;
    }
    
    // Calculate IRR (Internal Rate of Return) using Newton-Raphson method
    calculateIRR(cashFlows, initialGuess = 0.1) {
        const maxIterations = 100;
        const tolerance = 0.0001;
        let rate = initialGuess;
        
        for (let i = 0; i < maxIterations; i++) {
            let npv = 0;
            let dnpv = 0;
            
            for (let t = 0; t < cashFlows.length; t++) {
                const discountFactor = Math.pow(1 + rate, t);
                npv += cashFlows[t] / discountFactor;
                dnpv -= t * cashFlows[t] / (discountFactor * (1 + rate));
            }
            
            if (Math.abs(npv) < tolerance) {
                return rate * 100; // Return as percentage
            }
            
            rate = rate - npv / dnpv;
            
            if (rate < -0.99) rate = -0.99; // Prevent invalid rates
        }
        
        return rate * 100;
    }
    
    // Hyperbolic decline curve analysis
    hyperbolicDecline(qi, Di, b, t) {
        // q(t) = qi / (1 + b*Di*t)^(1/b)
        return qi / Math.pow(1 + b * Di * t, 1 / b);
    }
    
    // Calculate EUR (Estimated Ultimate Recovery)
    calculateEUR(qi, Di, b, economicLimit = 10) {
        // Integrate hyperbolic decline to economic limit
        let eur = 0;
        const dt = 1 / 365; // Daily time step
        let t = 0;
        let rate = qi;
        
        while (rate > economicLimit && t < 50) { // Max 50 years
            rate = this.hyperbolicDecline(qi, Di, b, t);
            eur += rate * dt * 365; // Convert to barrels
            t += dt;
        }
        
        return eur;
    }
    
    // Fit decline curve to production data
    fitDeclineCurve(productionData) {
        if (productionData.length < 3) {
            return { qi: 0, Di: 0, b: 0, r2: 0 };
        }
        
        // Use first data point as qi
        const qi = productionData[0].rate;
        
        // Estimate Di and b using regression
        // For simplicity, use typical shale values
        const Di = 0.70; // 70% per year
        const b = 0.8;
        
        // Calculate R-squared
        let ssRes = 0;
        let ssTot = 0;
        const meanRate = productionData.reduce((sum, d) => sum + d.rate, 0) / productionData.length;
        
        productionData.forEach((data, i) => {
            const t = i / 12; // Time in years
            const predicted = this.hyperbolicDecline(qi, Di, b, t);
            ssRes += Math.pow(data.rate - predicted, 2);
            ssTot += Math.pow(data.rate - meanRate, 2);
        });
        
        const r2 = 1 - (ssRes / ssTot);
        
        return { qi, Di, b, r2, eur: this.calculateEUR(qi, Di, b) };
    }
    
    // Calculate break-even oil price
    calculateBreakEven(wellCost, eur, opex = 15) {
        // Break-even = (Well Cost + OPEX * EUR) / EUR
        // Simplified: Break-even = Well Cost (MM$) / EUR (MBBL) + OPEX ($/BBL)
        const breakEven = (wellCost * 1000 / eur) + opex;
        return breakEven;
    }
    
    // Statistical analysis
    calculateStats(values) {
        if (values.length === 0) return { mean: 0, median: 0, std: 0, min: 0, max: 0 };
        
        const sorted = [...values].sort((a, b) => a - b);
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const median = sorted[Math.floor(sorted.length / 2)];
        
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        const std = Math.sqrt(variance);
        
        return {
            mean: mean,
            median: median,
            std: std,
            min: sorted[0],
            max: sorted[sorted.length - 1],
            p10: sorted[Math.floor(sorted.length * 0.1)],
            p50: median,
            p90: sorted[Math.floor(sorted.length * 0.9)]
        };
    }
    
    // Portfolio analysis
    analyzePortfolio() {
        const wells = this.dataStore.getActiveWells();
        
        const analysis = {
            totalWells: wells.length,
            totalProduction: wells.reduce((sum, w) => sum + (w.currentProduction || 0), 0),
            totalNPV: wells.reduce((sum, w) => sum + (w.npv || 0), 0),
            avgIRR: wells.reduce((sum, w) => sum + (w.irr || 0), 0) / wells.length,
            totalEUR: wells.reduce((sum, w) => sum + (w.eur || 0), 0),
            totalCapex: wells.reduce((sum, w) => sum + (w.wellCost || 0), 0)
        };
        
        // Production stats
        const prodRates = wells.map(w => w.currentProduction || 0);
        analysis.productionStats = this.calculateStats(prodRates);
        
        // Economic stats
        const npvValues = wells.map(w => w.npv || 0);
        const irrValues = wells.map(w => w.irr || 0);
        analysis.npvStats = this.calculateStats(npvValues);
        analysis.irrStats = this.calculateStats(irrValues);
        
        // Break-even stats
        const breakEvenValues = wells.map(w => w.breakEven || 0);
        analysis.breakEvenStats = this.calculateStats(breakEvenValues);
        
        return analysis;
    }
    
    // Drilling performance analysis
    analyzeDrillingPerformance() {
        const wells = this.dataStore.wells.filter(w => w.drillingDays && w.totalDepth);
        
        return {
            avgDrillingDays: wells.reduce((sum, w) => sum + w.drillingDays, 0) / wells.length,
            avgTotalDepth: wells.reduce((sum, w) => sum + w.totalDepth, 0) / wells.length,
            avgLateralLength: wells.reduce((sum, w) => sum + w.lateralLength, 0) / wells.length,
            avgWellCost: wells.reduce((sum, w) => sum + w.wellCost, 0) / wells.length,
            avgCostPerFoot: wells.reduce((sum, w) => 
                sum + (w.wellCost * 1000000 / w.totalDepth), 0
            ) / wells.length,
            avgIP30: wells.filter(w => w.ip30).reduce((sum, w) => 
                sum + w.ip30, 0
            ) / wells.filter(w => w.ip30).length
        };
    }
    
    // Type curve analysis by vintage
    analyzeTypeCurveByVintage(vintage, completionType) {
        let wells = this.dataStore.wells;
        
        if (vintage !== 'all') {
            wells = wells.filter(w => w.vintage === parseInt(vintage));
        }
        
        if (completionType !== 'all') {
            wells = wells.filter(w => w.completionType === completionType);
        }
        
        // Get production histories and normalize
        const normalizedCurves = wells
            .filter(w => w.ip30)
            .map(well => {
                const history = this.dataStore.getProductionHistory(well.id);
                return {
                    wellId: well.id,
                    wellName: well.name,
                    vintage: well.vintage,
                    completionType: well.completionType,
                    normalized: history.map(h => ({
                        month: h.month,
                        rate: h.rate,
                        normalizedRate: (h.rate / well.ip30) * 100 // As percentage of IP
                    }))
                };
            });
        
        return normalizedCurves;
    }
    
    // Completion design analysis
    analyzeCompletionDesign() {
        const wells = this.dataStore.wells.filter(w => w.completionType && w.ip30);
        
        // Group by completion type
        const byType = {};
        wells.forEach(well => {
            if (!byType[well.completionType]) {
                byType[well.completionType] = [];
            }
            byType[well.completionType].push(well);
        });
        
        // Calculate stats for each type
        const analysis = {};
        Object.keys(byType).forEach(type => {
            const typeWells = byType[type];
            analysis[type] = {
                count: typeWells.length,
                avgIP30: typeWells.reduce((sum, w) => sum + w.ip30, 0) / typeWells.length,
                avgEUR: typeWells.reduce((sum, w) => sum + w.eur, 0) / typeWells.length,
                avgProppant: typeWells.reduce((sum, w) => sum + w.proppantLoaded, 0) / typeWells.length,
                avgCost: typeWells.reduce((sum, w) => sum + w.wellCost, 0) / typeWells.length,
                avgNPV: typeWells.reduce((sum, w) => sum + w.npv, 0) / typeWells.length
            };
        });
        
        return analysis;
    }
    
    // Proppant loading vs production analysis
    analyzeProppantVsProduction() {
        const wells = this.dataStore.wells.filter(w => 
            w.proppantLoaded && w.currentProduction
        );
        
        return wells.map(w => ({
            wellId: w.id,
            wellName: w.name,
            proppant: w.proppantLoaded,
            cumProduction: this.dataStore.getProductionHistory(w.id)
                .reduce((sum, h) => sum + (h.cumulative || 0), 0),
            eur: w.eur,
            lateralLength: w.lateralLength,
            proppantPerFoot: w.proppantLoaded / (w.lateralLength / 1000)
        }));
    }
    
    // Capital efficiency analysis
    analyzeCapitalEfficiency() {
        const wells = this.dataStore.getActiveWells().filter(w => w.wellCost && w.eur);
        
        return wells.map(w => ({
            wellId: w.id,
            wellName: w.name,
            asset: w.asset,
            capex: w.wellCost,
            eur: w.eur,
            capexPerBOE: (w.wellCost * 1000) / w.eur, // $/BOE
            npv: w.npv,
            irr: w.irr,
            roiRatio: w.npv / w.wellCost
        })).sort((a, b) => b.roiRatio - a.roiRatio);
    }
    
    // Forecast production for next 12 months
    forecastProduction(wellId) {
        const well = this.dataStore.getWell(wellId);
        const history = this.dataStore.getProductionHistory(wellId);
        
        if (!history || history.length === 0) {
            return [];
        }
        
        // Fit decline curve to historical data
        const params = this.fitDeclineCurve(history);
        
        // Generate forecast
        const forecast = [];
        const currentMonth = history.length;
        
        for (let i = 0; i < 12; i++) {
            const month = currentMonth + i;
            const t = month / 12; // Time in years
            const rate = this.hyperbolicDecline(params.qi, params.Di, params.b, t);
            
            forecast.push({
                month: month,
                forecastRate: Math.round(rate),
                confidence: 95 - (i * 5) // Confidence decreases with time
            });
        }
        
        return forecast;
    }
    
    // Format numbers for display
    formatNumber(num, decimals = 0) {
        if (num === null || num === undefined) return '-';
        return num.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }
    
    formatCurrency(num, decimals = 2) {
        if (num === null || num === undefined) return '$0';
        return '$' + this.formatNumber(num, decimals);
    }
    
    formatPercent(num, decimals = 1) {
        if (num === null || num === undefined) return '0%';
        return this.formatNumber(num, decimals) + '%';
    }
    
    // Asset comparison analytics
    analyzeAssets() {
        const assets = this.dataStore.getAssets();
        const assetData = {};
        
        assets.forEach(asset => {
            const assetWells = this.dataStore.getWells({ asset });
            const activeWells = assetWells.filter(w => w.status === 'Active');
            
            assetData[asset] = {
                name: asset,
                wellCount: assetWells.length,
                activeWells: activeWells.length,
                totalProduction: activeWells.reduce((sum, w) => sum + (w.currentProduction || 0), 0),
                totalNPV: assetWells.reduce((sum, w) => sum + (w.npv || 0), 0),
                avgIRR: assetWells.reduce((sum, w) => sum + (w.irr || 0), 0) / assetWells.length,
                avgBreakEven: assetWells.reduce((sum, w) => sum + (w.breakEven || 0), 0) / assetWells.length,
                totalEUR: assetWells.reduce((sum, w) => sum + (w.eur || 0), 0),
                totalCapex: assetWells.reduce((sum, w) => sum + (w.wellCost || 0), 0),
                avgProductionPerWell: activeWells.length > 0 ? 
                    activeWells.reduce((sum, w) => sum + (w.currentProduction || 0), 0) / activeWells.length : 0,
                avgNPVPerWell: assetWells.length > 0 ?
                    assetWells.reduce((sum, w) => sum + (w.npv || 0), 0) / assetWells.length : 0,
                avgDrillingDays: assetWells.filter(w => w.drillingDays).reduce((sum, w) => sum + w.drillingDays, 0) / 
                    assetWells.filter(w => w.drillingDays).length || 0,
                avgWellCost: assetWells.filter(w => w.wellCost).reduce((sum, w) => sum + w.wellCost, 0) / 
                    assetWells.filter(w => w.wellCost).length || 0,
                avgIP30: assetWells.filter(w => w.ip30).reduce((sum, w) => sum + w.ip30, 0) / 
                    assetWells.filter(w => w.ip30).length || 0
            };
        });
        
        return assetData;
    }
    
    rankAssetsByMetric(metric) {
        const assetData = this.analyzeAssets();
        const ranked = Object.values(assetData)
            .sort((a, b) => {
                if (metric === 'breakEven') {
                    return a.avgBreakEven - b.avgBreakEven; // Lower is better
                }
                return b[metric] - a[metric]; // Higher is better
            });
        
        return ranked;
    }
    
    getAssetPerformanceScore(asset) {
        // Calculate a composite performance score for an asset
        const assetData = this.analyzeAssets()[asset];
        if (!assetData) return 0;
        
        // Normalize metrics to 0-100 scale
        const allAssets = Object.values(this.analyzeAssets());
        
        const maxNPV = Math.max(...allAssets.map(a => a.totalNPV));
        const maxIRR = Math.max(...allAssets.map(a => a.avgIRR));
        const maxProd = Math.max(...allAssets.map(a => a.totalProduction));
        const minBreakEven = Math.min(...allAssets.map(a => a.avgBreakEven));
        const maxBreakEven = Math.max(...allAssets.map(a => a.avgBreakEven));
        
        const npvScore = (assetData.totalNPV / maxNPV) * 100;
        const irrScore = (assetData.avgIRR / maxIRR) * 100;
        const prodScore = (assetData.totalProduction / maxProd) * 100;
        const breakEvenScore = ((maxBreakEven - assetData.avgBreakEven) / (maxBreakEven - minBreakEven)) * 100;
        
        // Weighted average: NPV 30%, IRR 25%, Production 25%, Break-even 20%
        const compositeScore = (npvScore * 0.30) + (irrScore * 0.25) + (prodScore * 0.25) + (breakEvenScore * 0.20);
        
        return compositeScore;
    }
    
    // Scenario Analysis Methods
    
    // Calculate NPV for a given well at specific oil/gas prices
    calculateScenarioNPV(well, oilPrice, gasPrice, discountRate = 10) {
        // Simplified NPV calculation based on EUR and prices
        // This is an approximation - real calculation would use monthly cash flows
        
        const eurOil = well.eur * 1000; // Convert MBBL to BBL
        const eurGas = eurOil * (well.gor || 2.5) * 1000; // MCF
        
        // Revenue
        const oilRevenue = eurOil * oilPrice;
        const gasRevenue = eurGas * gasPrice;
        const totalRevenue = oilRevenue + gasRevenue;
        
        // Costs
        const capex = (well.wellCost || 0) * 1000000; // Convert MM$ to $
        const opexPerBBL = 15; // Assume $15/BBL OPEX
        const totalOpex = eurOil * opexPerBBL;
        
        // Simple NPV = (Revenue - OPEX - CAPEX) / discount factor
        // Using average time to recovery (assume 10 years)
        const avgYear = 5; // Midpoint of production life
        const discountFactor = Math.pow(1 + discountRate / 100, avgYear);
        
        const npv = ((totalRevenue - totalOpex - capex) / discountFactor) / 1000000; // Convert to MM$
        
        return npv;
    }
    
    // Calculate IRR for scenario (simplified)
    calculateScenarioIRR(well, oilPrice, gasPrice) {
        // IRR approximation based on payback
        const npv = this.calculateScenarioNPV(well, oilPrice, gasPrice, 0);
        const capex = (well.wellCost || 0);
        
        if (capex === 0) return 0;
        
        const paybackYears = capex / (npv / 10); // Assume 10 year production life
        
        if (paybackYears <= 0) return 0;
        
        // Simple IRR approximation
        const irr = (100 / paybackYears) * 1.5; // Rough approximation
        
        return Math.max(0, Math.min(100, irr)); // Cap between 0-100%
    }
    
    // Get predefined scenario parameters
    getScenarioParams(scenarioType) {
        const scenarios = {
            bear: {
                name: 'Bear Case',
                oilPrice: 50,
                gasPrice: 2.5,
                description: 'Low price environment'
            },
            base: {
                name: 'Base Case',
                oilPrice: 70,
                gasPrice: 3.5,
                description: 'Current market conditions'
            },
            bull: {
                name: 'Bull Case',
                oilPrice: 90,
                gasPrice: 5.0,
                description: 'High price environment'
            }
        };
        
        return scenarios[scenarioType] || scenarios.base;
    }
    
    // Calculate portfolio metrics for a scenario
    calculateScenarioMetrics(oilPrice, gasPrice, discountRate = 10) {
        const wells = this.dataStore.wells;
        
        let totalNPV = 0;
        let avgIRR = 0;
        let wellsAboveHurdle = 0;
        const hurdleRate = 15; // 15% IRR hurdle
        
        wells.forEach(well => {
            const scenarioNPV = this.calculateScenarioNPV(well, oilPrice, gasPrice, discountRate);
            const scenarioIRR = this.calculateScenarioIRR(well, oilPrice, gasPrice);
            
            totalNPV += scenarioNPV;
            avgIRR += scenarioIRR;
            
            if (scenarioIRR >= hurdleRate) {
                wellsAboveHurdle++;
            }
        });
        
        avgIRR = wells.length > 0 ? avgIRR / wells.length : 0;
        
        return {
            totalNPV: totalNPV,
            avgIRR: avgIRR,
            wellCount: wells.length,
            wellsAboveHurdle: wellsAboveHurdle,
            percentAboveHurdle: (wellsAboveHurdle / wells.length) * 100
        };
    }
    
    // Calculate asset-level scenario metrics
    calculateAssetScenarios(oilPrice, gasPrice, discountRate = 10) {
        const assets = this.dataStore.getAssets();
        const assetScenarios = {};
        
        assets.forEach(asset => {
            const assetWells = this.dataStore.getWells({ asset });
            
            let totalNPV = 0;
            let avgIRR = 0;
            
            assetWells.forEach(well => {
                totalNPV += this.calculateScenarioNPV(well, oilPrice, gasPrice, discountRate);
                avgIRR += this.calculateScenarioIRR(well, oilPrice, gasPrice);
            });
            
            avgIRR = assetWells.length > 0 ? avgIRR / assetWells.length : 0;
            
            assetScenarios[asset] = {
                npv: totalNPV,
                irr: avgIRR,
                wellCount: assetWells.length
            };
        });
        
        return assetScenarios;
    }
    
    // Compare three scenarios side-by-side
    compareScenarios() {
        const bear = this.getScenarioParams('bear');
        const base = this.getScenarioParams('base');
        const bull = this.getScenarioParams('bull');
        
        const bearMetrics = this.calculateScenarioMetrics(bear.oilPrice, bear.gasPrice);
        const baseMetrics = this.calculateScenarioMetrics(base.oilPrice, base.gasPrice);
        const bullMetrics = this.calculateScenarioMetrics(bull.oilPrice, bull.gasPrice);
        
        const bearAssets = this.calculateAssetScenarios(bear.oilPrice, bear.gasPrice);
        const baseAssets = this.calculateAssetScenarios(base.oilPrice, base.gasPrice);
        const bullAssets = this.calculateAssetScenarios(bull.oilPrice, bull.gasPrice);
        
        return {
            scenarios: {
                bear: { ...bear, metrics: bearMetrics, assets: bearAssets },
                base: { ...base, metrics: baseMetrics, assets: baseAssets },
                bull: { ...bull, metrics: bullMetrics, assets: bullAssets }
            }
        };
    }
}

// Create global analytics engine instance
const analytics = new AnalyticsEngine(dataStore);
