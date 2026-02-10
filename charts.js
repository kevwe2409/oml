/**
 * OkhikuAnalytics Pro - Charts Module
 * Manages all Chart.js visualizations
 * 
 * Advanced Oil & Gas Analytics by Joseph Okhiku
 * Copyright © 2024 Joseph Okhiku. All rights reserved.
 */

class ChartManager {
    constructor() {
        this.charts = {};
        this.colors = {
            primary: '#2563eb',
            success: '#10b981',
            warning: '#f59e0b',
            danger: '#ef4444',
            purple: '#8b5cf6',
            teal: '#14b8a6',
            pink: '#ec4899',
            orange: '#f97316'
        };
        
        // Chart.js default configuration
        Chart.defaults.font.family = 'Inter, sans-serif';
        Chart.defaults.font.size = 12;
        Chart.defaults.color = '#64748b';
    }
    
    // Destroy existing chart if it exists
    destroyChart(chartId) {
        if (this.charts[chartId]) {
            this.charts[chartId].destroy();
            delete this.charts[chartId];
        }
    }
    
    // Create production trend chart (Dashboard)
    createProductionTrendChart() {
        this.destroyChart('productionTrend');
        
        const ctx = document.getElementById('productionTrendChart');
        if (!ctx) return;
        
        // Aggregate production by month
        const monthlyData = new Map();
        const wells = dataStore.getActiveWells();
        
        wells.forEach(well => {
            const history = dataStore.getProductionHistory(well.id);
            history.forEach(h => {
                if (!monthlyData.has(h.date)) {
                    monthlyData.set(h.date, { actual: 0, forecast: 0 });
                }
                const data = monthlyData.get(h.date);
                data.actual += h.rate;
                data.forecast += h.forecast;
            });
        });
        
        const sortedDates = Array.from(monthlyData.keys()).sort();
        const last12Months = sortedDates.slice(-12);
        
        this.charts.productionTrend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: last12Months.map(d => {
                    const date = new Date(d);
                    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
                }),
                datasets: [
                    {
                        label: 'Actual Production',
                        data: last12Months.map(d => monthlyData.get(d).actual),
                        borderColor: this.colors.primary,
                        backgroundColor: this.colors.primary + '20',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Forecast',
                        data: last12Months.map(d => monthlyData.get(d).forecast),
                        borderColor: this.colors.warning,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Production (BBL/day)'
                        }
                    }
                }
            }
        });
    }
    
    // Create economic distribution chart (Dashboard)
    createEconomicDistChart() {
        this.destroyChart('economicDist');
        
        const ctx = document.getElementById('economicDistChart');
        if (!ctx) return;
        
        const wells = dataStore.getActiveWells();
        
        // Group wells by NPV range
        const ranges = [
            { label: '0-5 MM', min: 0, max: 5, count: 0 },
            { label: '5-10 MM', min: 5, max: 10, count: 0 },
            { label: '10-15 MM', min: 10, max: 15, count: 0 },
            { label: '15-20 MM', min: 15, max: 20, count: 0 },
            { label: '20+ MM', min: 20, max: Infinity, count: 0 }
        ];
        
        wells.forEach(well => {
            const npv = well.npv || 0;
            const range = ranges.find(r => npv >= r.min && npv < r.max);
            if (range) range.count++;
        });
        
        this.charts.economicDist = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ranges.map(r => r.label),
                datasets: [{
                    label: 'Number of Wells',
                    data: ranges.map(r => r.count),
                    backgroundColor: [
                        this.colors.danger + '80',
                        this.colors.warning + '80',
                        this.colors.primary + '80',
                        this.colors.success + '80',
                        this.colors.purple + '80'
                    ],
                    borderColor: [
                        this.colors.danger,
                        this.colors.warning,
                        this.colors.primary,
                        this.colors.success,
                        this.colors.purple
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        },
                        title: {
                            display: true,
                            text: 'Well Count'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'NPV Range (USD)'
                        }
                    }
                }
            }
        });
    }
    
    // Create top wells chart (Dashboard)
    createTopWellsChart() {
        this.destroyChart('topWells');
        
        const ctx = document.getElementById('topWellsChart');
        if (!ctx) return;
        
        const topWells = dataStore.getTopProducingWells(10);
        
        this.charts.topWells = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: topWells.map(w => w.name),
                datasets: [{
                    label: 'Current Production',
                    data: topWells.map(w => w.currentProduction),
                    backgroundColor: this.colors.success + '80',
                    borderColor: this.colors.success,
                    borderWidth: 2
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Production (BBL/day)'
                        }
                    }
                }
            }
        });
    }
    
    // Create production vs forecast chart
    createProdVsForecastChart(wellFilter = 'all', timeFilter = '365') {
        this.destroyChart('prodVsForecast');
        
        const ctx = document.getElementById('prodVsForecastChart');
        if (!ctx) return;
        
        const wells = wellFilter === 'all' ? 
            dataStore.getActiveWells() : 
            [dataStore.getWell(wellFilter)].filter(Boolean);
        
        const datasets = [];
        const colors = [this.colors.primary, this.colors.success, this.colors.purple, 
                       this.colors.warning, this.colors.teal];
        
        wells.slice(0, 5).forEach((well, index) => {
            const history = dataStore.getProductionHistory(well.id, timeFilter);
            
            datasets.push({
                label: well.name + ' (Actual)',
                data: history.map(h => ({ x: h.date, y: h.rate })),
                borderColor: colors[index % colors.length],
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.4
            });
            
            datasets.push({
                label: well.name + ' (Forecast)',
                data: history.map(h => ({ x: h.date, y: h.forecast })),
                borderColor: colors[index % colors.length],
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4
            });
        });
        
        this.charts.prodVsForecast = new Chart(ctx, {
            type: 'line',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'month'
                        },
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Production Rate (BBL/day)'
                        }
                    }
                }
            }
        });
    }
    
    // Create cumulative production chart by asset
    createCumulativeProdChart(timeFilter = '365') {
        this.destroyChart('cumulativeProd');
        
        const ctx = document.getElementById('cumulativeProdChart');
        if (!ctx) return;
        
        // Get all assets
        const assets = dataStore.getAssets();
        const colors = [this.colors.primary, this.colors.success, this.colors.purple, 
                       this.colors.warning, this.colors.teal, this.colors.info];
        
        const datasets = assets.map((asset, index) => {
            // Get all wells for this asset
            const assetWells = dataStore.getWells({ asset });
            
            // Aggregate cumulative production by date
            const dateMap = new Map();
            
            assetWells.forEach(well => {
                const history = dataStore.getProductionHistory(well.id, timeFilter);
                history.forEach(h => {
                    const dateKey = h.date;
                    const current = dateMap.get(dateKey) || 0;
                    dateMap.set(dateKey, current + (h.cumulative / 1000)); // Convert to MBBL
                });
            });
            
            // Convert to array and sort by date
            const data = Array.from(dateMap.entries())
                .map(([date, cumulative]) => ({ x: date, y: cumulative }))
                .sort((a, b) => new Date(a.x) - new Date(b.x));
            
            return {
                label: asset,
                data: data,
                borderColor: colors[index % colors.length],
                backgroundColor: colors[index % colors.length] + '20',
                borderWidth: 3,
                fill: false,
                tension: 0.4
            };
        });
        
        this.charts.cumulativeProd = new Chart(ctx, {
            type: 'line',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: 'Cumulative Production by Asset'
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'month'
                        },
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cumulative Production (MBBL)'
                        }
                    }
                }
            }
        });
    }
    
    // Create water cut chart
    createWaterCutChart(timeFilter = '365') {
        this.destroyChart('waterCut');
        
        const ctx = document.getElementById('waterCutChart');
        if (!ctx) return;
        
        const wells = dataStore.getActiveWells().slice(0, 5);
        const colors = [this.colors.primary, this.colors.success, this.colors.purple, 
                       this.colors.warning, this.colors.teal];
        
        const datasets = wells.map((well, index) => {
            const history = dataStore.getProductionHistory(well.id, timeFilter);
            return {
                label: well.name,
                data: history.map(h => ({ x: h.date, y: h.waterCut })),
                borderColor: colors[index % colors.length],
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.4
            };
        });
        
        this.charts.waterCut = new Chart(ctx, {
            type: 'line',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'month'
                        },
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Water Cut (%)'
                        }
                    }
                }
            }
        });
    }
    
    // Create NPV vs IRR bubble chart
    createNPVIRRBubbleChart() {
        this.destroyChart('npvIrrBubble');
        
        const ctx = document.getElementById('npvIrrBubbleChart');
        if (!ctx) return;
        
        const wells = dataStore.getActiveWells();
        
        // Group by asset for coloring
        const assetColors = {
            'Eagle Ford': this.colors.primary,
            'Permian Basin': this.colors.success,
            'Bakken': this.colors.purple
        };
        
        const datasets = Object.keys(assetColors).map(asset => {
            const assetWells = wells.filter(w => w.asset === asset);
            return {
                label: asset,
                data: assetWells.map(w => ({
                    x: w.irr,
                    y: w.npv,
                    r: Math.sqrt(w.eur) / 2 // Bubble size based on EUR
                })),
                backgroundColor: assetColors[asset] + '60',
                borderColor: assetColors[asset],
                borderWidth: 2
            };
        });
        
        this.charts.npvIrrBubble = new Chart(ctx, {
            type: 'bubble',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `IRR: ${context.parsed.x.toFixed(1)}%, NPV: $${context.parsed.y.toFixed(1)}MM`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'IRR (%)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'NPV (MM USD)'
                        }
                    }
                }
            }
        });
    }
    
    // Create break-even histogram
    createBreakEvenHistChart() {
        this.destroyChart('breakEvenHist');
        
        const ctx = document.getElementById('breakEvenHistChart');
        if (!ctx) return;
        
        const wells = dataStore.getActiveWells();
        const breakEvenValues = wells.map(w => w.breakEven);
        
        // Create histogram bins
        const bins = [
            { label: '< $30', min: 0, max: 30, count: 0 },
            { label: '$30-$35', min: 30, max: 35, count: 0 },
            { label: '$35-$40', min: 35, max: 40, count: 0 },
            { label: '$40-$45', min: 40, max: 45, count: 0 },
            { label: '$45-$50', min: 45, max: 50, count: 0 },
            { label: '> $50', min: 50, max: Infinity, count: 0 }
        ];
        
        breakEvenValues.forEach(val => {
            const bin = bins.find(b => val >= b.min && val < b.max);
            if (bin) bin.count++;
        });
        
        this.charts.breakEvenHist = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: bins.map(b => b.label),
                datasets: [{
                    label: 'Number of Wells',
                    data: bins.map(b => b.count),
                    backgroundColor: this.colors.warning + '80',
                    borderColor: this.colors.warning,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        },
                        title: {
                            display: true,
                            text: 'Well Count'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Break-Even Price ($/BBL)'
                        }
                    }
                }
            }
        });
    }
    
    // Create CAPEX vs Budget chart
    createCapexBudgetChart() {
        this.destroyChart('capexBudget');
        
        const ctx = document.getElementById('capexBudgetChart');
        if (!ctx) return;
        
        const assets = dataStore.getAssets();
        
        // Calculate actual spend and realistic budgets per asset
        const assetData = assets.map(asset => {
            const wells = dataStore.getWells({ asset });
            const actualSpend = wells.reduce((sum, w) => sum + (w.wellCost || 0), 0);
            const wellCount = wells.length;
            
            // Calculate budget based on asset characteristics
            // Budget = (Average well cost * 1.08) * well count
            // This simulates planned costs with 8% contingency
            const avgWellCost = actualSpend / wellCount;
            const budgetSpend = avgWellCost * 1.08 * wellCount;
            
            return {
                asset: asset,
                actual: actualSpend,
                budget: budgetSpend,
                variance: ((actualSpend - budgetSpend) / budgetSpend) * 100,
                wellCount: wellCount
            };
        });
        
        const actualCapex = assetData.map(d => d.actual);
        const budgetCapex = assetData.map(d => d.budget);
        
        // Color code bars based on over/under budget
        const actualColors = assetData.map(d => {
            if (d.actual > d.budget) {
                return this.colors.danger + '80'; // Over budget (red)
            } else if (d.actual < d.budget * 0.95) {
                return this.colors.success + '80'; // Under budget (green)
            } else {
                return this.colors.warning + '80'; // Near budget (yellow)
            }
        });
        
        this.charts.capexBudget = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: assets,
                datasets: [
                    {
                        label: 'Budget (Planned)',
                        data: budgetCapex,
                        backgroundColor: this.colors.teal + '40',
                        borderColor: this.colors.teal,
                        borderWidth: 2,
                        borderDash: [5, 5]
                    },
                    {
                        label: 'Actual Spend',
                        data: actualCapex,
                        backgroundColor: actualColors,
                        borderColor: actualColors.map(c => c.replace('80', '')),
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                const index = context.dataIndex;
                                const data = assetData[index];
                                const variance = data.variance;
                                const status = variance > 0 ? 'over budget' : 'under budget';
                                return [
                                    `Wells: ${data.wellCount}`,
                                    `Variance: ${Math.abs(variance).toFixed(1)}% ${status}`,
                                    `Per Well: $${(context.parsed.y / data.wellCount).toFixed(1)}M`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Capital Spend (MM USD)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Asset'
                        }
                    }
                }
            }
        });
    }
    
    // Create drilling days vs depth scatter
    createDrillingDaysChart() {
        this.destroyChart('drillingDays');
        
        const ctx = document.getElementById('drillingDaysChart');
        if (!ctx) return;
        
        const wells = dataStore.wells.filter(w => w.drillingDays && w.totalDepth);
        
        this.charts.drillingDays = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Wells',
                    data: wells.map(w => ({
                        x: w.totalDepth,
                        y: w.drillingDays
                    })),
                    backgroundColor: this.colors.primary + '80',
                    borderColor: this.colors.primary,
                    borderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Total Depth (ft)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Drilling Days'
                        }
                    }
                }
            }
        });
    }
    
    // Create cost per foot chart
    createCostPerFootChart() {
        this.destroyChart('costPerFoot');
        
        const ctx = document.getElementById('costPerFootChart');
        if (!ctx) return;
        
        const wells = dataStore.wells.filter(w => w.wellCost && w.lateralLength);
        
        this.charts.costPerFoot = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Wells',
                    data: wells.map(w => ({
                        x: w.lateralLength,
                        y: (w.wellCost * 1000000) / w.totalDepth // Cost per foot
                    })),
                    backgroundColor: this.colors.success + '80',
                    borderColor: this.colors.success,
                    borderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Lateral Length (ft)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cost per Foot ($/ft)'
                        }
                    }
                }
            }
        });
    }
    
    // Create IP30 comparison by completion design
    createIP30ComparisonChart() {
        this.destroyChart('ip30Comparison');
        
        const ctx = document.getElementById('ip30ComparisonChart');
        if (!ctx) return;
        
        const completionAnalysis = analytics.analyzeCompletionDesign();
        const types = Object.keys(completionAnalysis);
        
        this.charts.ip30Comparison = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: types,
                datasets: [{
                    label: 'Average IP30',
                    data: types.map(t => completionAnalysis[t].avgIP30),
                    backgroundColor: [
                        this.colors.primary + '80',
                        this.colors.success + '80',
                        this.colors.warning + '80'
                    ],
                    borderColor: [
                        this.colors.primary,
                        this.colors.success,
                        this.colors.warning
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '30-Day IP (BBL/day)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Completion Type'
                        }
                    }
                }
            }
        });
    }
    
    // Create decline curve chart
    createDeclineCurveChart(vintage = 'all', completionType = 'all') {
        this.destroyChart('declineCurve');
        
        const ctx = document.getElementById('declineCurveChart');
        if (!ctx) return;
        
        const normalizedCurves = analytics.analyzeTypeCurveByVintage(vintage, completionType);
        
        const colors = [this.colors.primary, this.colors.success, this.colors.purple, 
                       this.colors.warning, this.colors.teal, this.colors.pink];
        
        const datasets = normalizedCurves.slice(0, 6).map((curve, index) => ({
            label: curve.wellName,
            data: curve.normalized.map(d => ({ x: d.month, y: d.normalizedRate })),
            borderColor: colors[index % colors.length],
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4
        }));
        
        this.charts.declineCurve = new Chart(ctx, {
            type: 'line',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months On Production'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Normalized Rate (% of IP)'
                        }
                    }
                }
            }
        });
    }
    
    // Create cumulative oil vs proppant chart
    createCumOilProppantChart() {
        this.destroyChart('cumOilProppant');
        
        const ctx = document.getElementById('cumOilProppantChart');
        if (!ctx) return;
        
        const data = analytics.analyzeProppantVsProduction();
        
        this.charts.cumOilProppant = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Wells',
                    data: data.map(d => ({
                        x: d.proppant,
                        y: d.eur
                    })),
                    backgroundColor: this.colors.purple + '80',
                    borderColor: this.colors.purple,
                    borderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Proppant Loaded (klbs)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'EUR (MBBL)'
                        }
                    }
                }
            }
        });
    }
    
    // Create EUR distribution by vintage
    createEURDistributionChart() {
        this.destroyChart('eurDistribution');
        
        const ctx = document.getElementById('eurDistributionChart');
        if (!ctx) return;
        
        const vintages = [2021, 2022, 2023, 2024];
        
        const datasets = vintages.map((vintage, index) => {
            const wells = dataStore.getWellsByVintage(vintage);
            const eurValues = wells.filter(w => w.eur).map(w => w.eur);
            const stats = analytics.calculateStats(eurValues);
            
            return {
                label: vintage.toString(),
                data: [stats.min, stats.p10, stats.median, stats.p90, stats.max],
                backgroundColor: [
                    this.colors.primary,
                    this.colors.success,
                    this.colors.purple,
                    this.colors.warning
                ][index] + '80',
                borderColor: [
                    this.colors.primary,
                    this.colors.success,
                    this.colors.purple,
                    this.colors.warning
                ][index],
                borderWidth: 2
            };
        });
        
        this.charts.eurDistribution = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Min', 'P10', 'P50', 'P90', 'Max'],
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'EUR (MBBL)'
                        }
                    }
                }
            }
        });
    }
    
    // Asset Comparison Charts
    createAssetNPVChart() {
        this.destroyChart('assetNPV');
        
        const ctx = document.getElementById('assetNPVChart');
        if (!ctx) return;
        
        const assetData = analytics.analyzeAssets();
        const assets = Object.keys(assetData).sort((a, b) => 
            assetData[b].totalNPV - assetData[a].totalNPV
        );
        
        this.charts.assetNPV = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: assets,
                datasets: [{
                    label: 'Total NPV',
                    data: assets.map(a => assetData[a].totalNPV),
                    backgroundColor: this.colors.primary + '80',
                    borderColor: this.colors.primary,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'NPV (MM USD)' }
                    }
                }
            }
        });
    }
    
    createAssetProductionChart() {
        this.destroyChart('assetProduction');
        
        const ctx = document.getElementById('assetProductionChart');
        if (!ctx) return;
        
        const assetData = analytics.analyzeAssets();
        const assets = Object.keys(assetData).sort((a, b) => 
            assetData[b].totalProduction - assetData[a].totalProduction
        );
        
        this.charts.assetProduction = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: assets,
                datasets: [{
                    label: 'Total Production',
                    data: assets.map(a => assetData[a].totalProduction),
                    backgroundColor: this.colors.success + '80',
                    borderColor: this.colors.success,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Production (BBL/day)' }
                    }
                }
            }
        });
    }
    
    createAssetIRRChart() {
        this.destroyChart('assetIRR');
        
        const ctx = document.getElementById('assetIRRChart');
        if (!ctx) return;
        
        const assetData = analytics.analyzeAssets();
        const assets = Object.keys(assetData).sort((a, b) => 
            assetData[b].avgIRR - assetData[a].avgIRR
        );
        
        this.charts.assetIRR = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: assets,
                datasets: [{
                    label: 'Average IRR',
                    data: assets.map(a => assetData[a].avgIRR),
                    backgroundColor: this.colors.purple + '80',
                    borderColor: this.colors.purple,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'IRR (%)' }
                    }
                }
            }
        });
    }
    
    createAssetWellCountChart() {
        this.destroyChart('assetWellCount');
        
        const ctx = document.getElementById('assetWellCountChart');
        if (!ctx) return;
        
        const assetData = analytics.analyzeAssets();
        const assets = Object.keys(assetData).sort((a, b) => 
            assetData[b].wellCount - assetData[a].wellCount
        );
        
        this.charts.assetWellCount = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: assets,
                datasets: [{
                    label: 'Well Count',
                    data: assets.map(a => assetData[a].wellCount),
                    backgroundColor: this.colors.teal + '80',
                    borderColor: this.colors.teal,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1 },
                        title: { display: true, text: 'Number of Wells' }
                    }
                }
            }
        });
    }
    
    createAssetBreakEvenChart() {
        this.destroyChart('assetBreakEven');
        
        const ctx = document.getElementById('assetBreakEvenChart');
        if (!ctx) return;
        
        const assetData = analytics.analyzeAssets();
        const assets = Object.keys(assetData).sort((a, b) => 
            assetData[a].avgBreakEven - assetData[b].avgBreakEven
        );
        
        this.charts.assetBreakEven = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: assets,
                datasets: [{
                    label: 'Avg Break-Even Price',
                    data: assets.map(a => assetData[a].avgBreakEven),
                    backgroundColor: this.colors.warning + '80',
                    borderColor: this.colors.warning,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Break-Even Price ($/BBL)' }
                    }
                }
            }
        });
    }
}

// Create global chart manager instance
const chartManager = new ChartManager();
