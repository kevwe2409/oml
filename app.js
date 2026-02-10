/**
 * OkhikuAnalytics Pro - Main Application Controller
 * Handles UI interactions, navigation, and data flow
 * 
 * Advanced Oil & Gas Analytics by Joseph Okhiku
 * Copyright © 2024 Joseph Okhiku. All rights reserved.
 */

class PetroAnalyticsApp {
    constructor() {
        this.currentView = 'dashboard';
        this.currentFilters = {
            wellFilter: 'all',
            timeFilter: '365',
            vintage: 'all',
            completionType: 'all'
        };
        
        this.init();
    }
    
    init() {
        console.log('Initializing OkhikuAnalytics Pro...');
        
        // Setup navigation
        this.setupNavigation();
        
        // Setup modal controls
        this.setupModal();
        
        // Setup filter controls
        this.setupFilters();
        
        // Setup table controls
        this.setupTableControls();
        
        // Setup scenario controls
        this.setupScenarioControls();
        
        // Load initial data and render dashboard
        this.loadDashboard();
        
        console.log('Application initialized successfully');
    }
    
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const viewName = item.getAttribute('data-view');
                this.switchView(viewName);
            });
        });
    }
    
    switchView(viewName) {
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
        
        // Update active view
        document.querySelectorAll('.view-container').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`${viewName}View`).classList.add('active');
        
        this.currentView = viewName;
        
        // Load view-specific content
        switch(viewName) {
            case 'dashboard':
                this.loadDashboard();
                break;
            case 'production':
                this.loadProductionView();
                break;
            case 'economics':
                this.loadEconomicsView();
                break;
            case 'drilling':
                this.loadDrillingView();
                break;
            case 'typecurve':
                this.loadTypeCurveView();
                break;
            case 'assetcomparison':
                this.loadAssetComparisonView();
                break;
            case 'wells':
                this.loadWellsView();
                break;
        }
    }
    
    setupModal() {
        const importBtn = document.getElementById('importDataBtn');
        const modal = document.getElementById('importModal');
        const closeBtn = modal.querySelector('.close-modal');
        const loadSampleBtn = document.getElementById('loadSampleData');
        const browseBtn = document.getElementById('browseFile');
        const fileInput = document.getElementById('csvFileInput');
        
        importBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
        
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
        
        loadSampleBtn.addEventListener('click', () => {
            this.loadSampleData();
        });
        
        browseBtn.addEventListener('click', () => {
            fileInput.click();
        });
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.importCSVFile(file);
            }
        });
        
        // Refresh Data button (Google Sheets)
        const refreshBtn = document.getElementById('refreshDataBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', async () => {
                refreshBtn.disabled = true;
                refreshBtn.innerHTML = '<i class=\"fas fa-spinner fa-spin\"></i> Refreshing...';
                
                const success = await refreshDataFromGoogleSheets();
                
                refreshBtn.disabled = false;
                refreshBtn.innerHTML = '<i class=\"fas fa-sync\"></i> Refresh Data';
                
                if (success) {
                    this.switchView(this.currentView);
                }
            });
        }
        
        // Export report button
        document.getElementById('exportReportBtn').addEventListener('click', () => {
            this.exportReport();
        });
        
        // Report generation dropdown
        const generateReportBtn = document.getElementById('generateReportBtn');
        const reportMenu = document.getElementById('reportMenu');
        
        generateReportBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            reportMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            reportMenu.classList.remove('show');
        });
        
        // Report menu items
        reportMenu.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const reportType = item.getAttribute('data-report');
                this.generateReport(reportType);
                reportMenu.classList.remove('show');
            });
        });
        
        // Chart export modal
        this.setupChartExportModal();
    }
    
    setupChartExportModal() {
        const modal = document.getElementById('chartExportModal');
        const closeBtn = modal.querySelector('.close-modal');
        
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
        
        // Chart export buttons
        modal.querySelectorAll('.chart-export-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const chartId = btn.getAttribute('data-chart');
                const statusDiv = document.getElementById('chartExportStatus');
                
                statusDiv.className = 'import-status';
                statusDiv.textContent = 'Exporting chart...';
                
                const result = await reportGenerator.exportChartAsPNG(chartId);
                
                if (result.success) {
                    statusDiv.className = 'import-status success';
                    statusDiv.textContent = `✓ Chart exported: ${result.fileName}`;
                } else {
                    statusDiv.className = 'import-status error';
                    statusDiv.textContent = `✗ Error: ${result.error}`;
                }
                
                setTimeout(() => {
                    modal.classList.remove('active');
                    statusDiv.textContent = '';
                }, 2000);
            });
        });
    }
    
    async generateReport(reportType) {
        const progressModal = document.getElementById('reportProgressModal');
        const progressText = document.getElementById('reportProgressText');
        
        // Show progress modal
        progressModal.classList.add('active');
        
        try {
            let result;
            
            switch(reportType) {
                case 'executive':
                    progressText.textContent = 'Generating Executive Summary...';
                    result = await reportGenerator.generateExecutiveSummary();
                    break;
                    
                case 'technical':
                    progressText.textContent = 'Generating Technical Report...';
                    result = await reportGenerator.generateTechnicalReport();
                    break;
                    
                case 'monthly':
                    progressText.textContent = 'Generating Monthly Report...';
                    result = await reportGenerator.generateMonthlyReport();
                    break;
                    
                case 'board':
                    progressText.textContent = 'Generating Board Report...';
                    result = await reportGenerator.generateBoardReport();
                    break;
                    
                case 'dashboard-png':
                    progressText.textContent = 'Exporting Dashboard as PNG...';
                    result = await reportGenerator.exportDashboardAsPNG();
                    break;
                    
                case 'chart-png':
                    progressModal.classList.remove('active');
                    document.getElementById('chartExportModal').classList.add('active');
                    return;
                    
                default:
                    result = { success: false, error: 'Unknown report type' };
            }
            
            // Hide progress modal
            setTimeout(() => {
                progressModal.classList.remove('active');
                
                if (result.success) {
                    this.showNotification(`Report generated: ${result.fileName}`, 'success');
                } else {
                    this.showNotification(`Error: ${result.error}`, 'error');
                }
            }, 500);
            
        } catch (error) {
            console.error('Error generating report:', error);
            progressModal.classList.remove('active');
            this.showNotification('Error generating report', 'error');
        }
    }
    
    loadSampleData() {
        const statusDiv = document.getElementById('importStatus');
        statusDiv.className = 'import-status success';
        statusDiv.textContent = '✓ Sample data loaded successfully! ' + 
                               `${dataStore.wells.length} wells loaded.`;
        
        // Reload current view
        setTimeout(() => {
            document.getElementById('importModal').classList.remove('active');
            this.switchView(this.currentView);
        }, 1500);
    }
    
    importCSVFile(file) {
        const reader = new FileReader();
        const statusDiv = document.getElementById('importStatus');
        
        statusDiv.className = 'import-status';
        statusDiv.textContent = 'Reading file...';
        
        reader.onload = (e) => {
            try {
                const csvText = e.target.result;
                
                // Validate CSV has content
                if (!csvText || csvText.trim().length === 0) {
                    throw new Error('CSV file is empty');
                }
                
                statusDiv.textContent = 'Parsing CSV data...';
                const imported = dataStore.importCSV(csvText);
                
                if (imported.length === 0) {
                    throw new Error('No valid data rows found in CSV');
                }
                
                statusDiv.className = 'import-status success';
                statusDiv.innerHTML = `
                    <strong>✓ Successfully imported ${imported.length} wells from ${file.name}</strong><br>
                    <small>Data loaded and ready for analysis</small>
                `;
                
                console.log('✓ Import successful:');
                console.log('- Total wells:', imported.length);
                console.log('- Assets:', dataStore.getAssets());
                console.log('- Active wells:', dataStore.getActiveWells().length);
                
                // Reload current view to show new data
                setTimeout(() => {
                    document.getElementById('importModal').classList.remove('active');
                    this.switchView(this.currentView);
                    this.showNotification(`${imported.length} wells imported successfully`, 'success');
                }, 2000);
            } catch (error) {
                console.error('Import error:', error);
                statusDiv.className = 'import-status error';
                statusDiv.innerHTML = `
                    <strong>✗ Error importing file: ${error.message}</strong><br>
                    <small>Please check the CSV format and try again</small>
                `;
            }
        };
        
        reader.onerror = () => {
            statusDiv.className = 'import-status error';
            statusDiv.textContent = '✗ Error reading file. Please try again.';
        };
        
        reader.readAsText(file);
    }
    
    setupFilters() {
        // Production view filters
        const prodWellFilter = document.getElementById('prodWellFilter');
        const prodTimeFilter = document.getElementById('prodTimeFilter');
        
        if (prodWellFilter) {
            prodWellFilter.addEventListener('change', (e) => {
                this.currentFilters.wellFilter = e.target.value;
                this.loadProductionView();
            });
        }
        
        if (prodTimeFilter) {
            prodTimeFilter.addEventListener('change', (e) => {
                this.currentFilters.timeFilter = e.target.value;
                this.loadProductionView();
            });
        }
        
        // Economics recalculation
        const recalcBtn = document.getElementById('recalculateEcon');
        if (recalcBtn) {
            recalcBtn.addEventListener('click', () => {
                const oilPrice = parseFloat(document.getElementById('oilPrice').value);
                const gasPrice = parseFloat(document.getElementById('gasPrice').value);
                const discountRate = parseFloat(document.getElementById('discountRate').value);
                
                dataStore.recalculateEconomics(oilPrice, gasPrice, discountRate);
                this.loadEconomicsView();
            });
        }
        
        // Type curve filters
        const updateTypeCurveBtn = document.getElementById('updateTypeCurve');
        if (updateTypeCurveBtn) {
            updateTypeCurveBtn.addEventListener('click', () => {
                this.currentFilters.vintage = document.getElementById('typecurveVintage').value;
                this.currentFilters.completionType = document.getElementById('typecurveCompletion').value;
                this.loadTypeCurveView();
            });
        }
    }
    
    setupTableControls() {
        const searchInput = document.getElementById('wellSearch');
        const statusFilter = document.getElementById('wellStatusFilter');
        const assetFilter = document.getElementById('wellAssetFilter');
        
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.loadWellsView();
            });
        }
        
        if (statusFilter) {
            statusFilter.addEventListener('change', () => {
                this.loadWellsView();
            });
        }
        
        if (assetFilter) {
            assetFilter.addEventListener('change', () => {
                this.loadWellsView();
            });
        }
    }
    
    setupScenarioControls() {
        // Scenario preset buttons
        const scenarioBtns = document.querySelectorAll('.scenario-btn');
        scenarioBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const scenario = btn.getAttribute('data-scenario');
                this.applyScenario(scenario);
                
                // Update active button
                scenarioBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Recalculate button
        const recalcBtn = document.getElementById('recalculateEcon');
        if (recalcBtn) {
            recalcBtn.addEventListener('click', () => {
                this.recalculateEconomics();
            });
        }
    }
    
    applyScenario(scenarioType) {
        const params = analytics.getScenarioParams(scenarioType);
        
        // Update input fields
        document.getElementById('oilPrice').value = params.oilPrice;
        document.getElementById('gasPrice').value = params.gasPrice;
        
        // Update labels
        document.getElementById('oilScenarioLabel').textContent = params.name;
        document.getElementById('gasScenarioLabel').textContent = params.name;
        
        // Recalculate
        this.recalculateEconomics();
    }
    
    recalculateEconomics() {
        const oilPrice = parseFloat(document.getElementById('oilPrice').value) || 70;
        const gasPrice = parseFloat(document.getElementById('gasPrice').value) || 3.5;
        const discountRate = parseFloat(document.getElementById('discountRate').value) || 10;
        
        console.log(`Recalculating economics: Oil=$${oilPrice}, Gas=$${gasPrice}, Discount=${discountRate}%`);
        
        // Store current scenario for chart updates
        this.currentScenario = {
            oilPrice,
            gasPrice,
            discountRate
        };
        
        // Update scenario comparison table
        this.renderScenarioComparisonTable();
        
        // Show notification
        this.showNotification(`Economics recalculated at $${oilPrice}/BBL oil, $${gasPrice}/MCF gas`, 'success');
    }
    
    renderScenarioComparisonTable() {
        const container = document.getElementById('scenarioComparisonTable');
        if (!container) return;
        
        const comparison = analytics.compareScenarios();
        const scenarios = comparison.scenarios;
        
        // Portfolio-level comparison
        let html = '<div class="scenario-tables">';
        
        // Table 1: Portfolio Summary
        html += '<div class="scenario-table-section">';
        html += '<h4>Portfolio Economics Summary</h4>';
        html += '<table class="scenario-table"><thead><tr>';
        html += '<th>Metric</th>';
        html += '<th>Bear Case<br/>($50 oil, $2.50 gas)</th>';
        html += '<th>Base Case<br/>($70 oil, $3.50 gas)</th>';
        html += '<th>Bull Case<br/>($90 oil, $5.00 gas)</th>';
        html += '</tr></thead><tbody>';
        
        // Portfolio NPV
        html += '<tr>';
        html += '<td><strong>Portfolio NPV (MM$)</strong></td>';
        html += `<td>$${analytics.formatNumber(scenarios.bear.metrics.totalNPV, 1)}</td>`;
        html += `<td>$${analytics.formatNumber(scenarios.base.metrics.totalNPV, 1)}</td>`;
        html += `<td>$${analytics.formatNumber(scenarios.bull.metrics.totalNPV, 1)}</td>`;
        html += '</tr>';
        
        // Change vs Base
        const bearDelta = scenarios.bear.metrics.totalNPV - scenarios.base.metrics.totalNPV;
        const bullDelta = scenarios.bull.metrics.totalNPV - scenarios.base.metrics.totalNPV;
        const bearPct = (bearDelta / scenarios.base.metrics.totalNPV) * 100;
        const bullPct = (bullDelta / scenarios.base.metrics.totalNPV) * 100;
        
        html += '<tr class="delta-row">';
        html += '<td><em>Change vs Base</em></td>';
        html += `<td class="variance-value negative">${bearDelta > 0 ? '+' : ''}$${analytics.formatNumber(bearDelta, 1)} (${bearPct.toFixed(1)}%)</td>`;
        html += '<td class="variance-value">—</td>';
        html += `<td class="variance-value positive">+$${analytics.formatNumber(bullDelta, 1)} (+${bullPct.toFixed(1)}%)</td>`;
        html += '</tr>';
        
        // Average IRR
        html += '<tr>';
        html += '<td><strong>Average IRR (%)</strong></td>';
        html += `<td>${scenarios.bear.metrics.avgIRR.toFixed(1)}%</td>`;
        html += `<td>${scenarios.base.metrics.avgIRR.toFixed(1)}%</td>`;
        html += `<td>${scenarios.bull.metrics.avgIRR.toFixed(1)}%</td>`;
        html += '</tr>';
        
        // Wells above hurdle
        html += '<tr>';
        html += '<td><strong>Wells Above 15% IRR Hurdle</strong></td>';
        html += `<td>${scenarios.bear.metrics.wellsAboveHurdle} (${scenarios.bear.metrics.percentAboveHurdle.toFixed(0)}%)</td>`;
        html += `<td>${scenarios.base.metrics.wellsAboveHurdle} (${scenarios.base.metrics.percentAboveHurdle.toFixed(0)}%)</td>`;
        html += `<td>${scenarios.bull.metrics.wellsAboveHurdle} (${scenarios.bull.metrics.percentAboveHurdle.toFixed(0)}%)</td>`;
        html += '</tr>';
        
        html += '</tbody></table>';
        html += '</div>';
        
        // Table 2: Asset-level comparison
        html += '<div class="scenario-table-section">';
        html += '<h4>NPV by Asset (MM$)</h4>';
        html += '<table class="scenario-table"><thead><tr>';
        html += '<th>Asset</th>';
        html += '<th>Bear Case</th>';
        html += '<th>Base Case</th>';
        html += '<th>Bull Case</th>';
        html += '<th>Sensitivity</th>';
        html += '</tr></thead><tbody>';
        
        const assets = Object.keys(scenarios.base.assets);
        assets.forEach(asset => {
            const bearNPV = scenarios.bear.assets[asset].npv;
            const baseNPV = scenarios.base.assets[asset].npv;
            const bullNPV = scenarios.bull.assets[asset].npv;
            const sensitivity = ((bullNPV - bearNPV) / baseNPV) * 100;
            
            html += '<tr>';
            html += `<td><strong>${asset}</strong></td>`;
            html += `<td>$${analytics.formatNumber(bearNPV, 1)}</td>`;
            html += `<td>$${analytics.formatNumber(baseNPV, 1)}</td>`;
            html += `<td>$${analytics.formatNumber(bullNPV, 1)}</td>`;
            html += `<td><span class="sensitivity-indicator">${sensitivity.toFixed(0)}%</span></td>`;
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        html += '<p class="scenario-note"><i class="fas fa-info-circle"></i> <strong>Sensitivity</strong> shows NPV range (Bull - Bear) as % of Base Case. Higher = more sensitive to price changes.</p>';
        html += '</div>';
        
        html += '</div>'; // Close scenario-tables
        
        container.innerHTML = html;
    }
    
    // Dashboard View
    loadDashboard() {
        console.log('Loading dashboard...');
        
        // Update KPIs
        const totalProd = dataStore.getTotalProduction();
        const activeWells = dataStore.getActiveWells().length;
        const portfolioNPV = dataStore.getPortfolioNPV();
        const avgIRR = dataStore.getAverageIRR();
        
        document.getElementById('totalProduction').textContent = 
            analytics.formatNumber(totalProd, 0);
        document.getElementById('activeWells').textContent = activeWells;
        document.getElementById('portfolioNPV').textContent = 
            analytics.formatCurrency(portfolioNPV, 1);
        document.getElementById('avgIRR').textContent = 
            analytics.formatNumber(avgIRR, 1);
        
        // Create charts
        setTimeout(() => {
            chartManager.createProductionTrendChart();
            chartManager.createEconomicDistChart();
            chartManager.createTopWellsChart();
        }, 100);
    }
    
    // Production View
    loadProductionView() {
        console.log('Loading production view...');
        
        // Populate well filter dropdown
        const wellFilter = document.getElementById('prodWellFilter');
        if (wellFilter && wellFilter.options.length === 1) {
            const wells = dataStore.getActiveWells();
            wells.forEach(well => {
                const option = document.createElement('option');
                option.value = well.id;
                option.textContent = well.name;
                wellFilter.appendChild(option);
            });
        }
        
        // Setup toggle buttons
        this.setupPerformanceToggle();
        
        // Create charts
        setTimeout(() => {
            chartManager.createProdVsForecastChart(
                this.currentFilters.wellFilter, 
                this.currentFilters.timeFilter
            );
            chartManager.createCumulativeProdChart(this.currentFilters.timeFilter);
            chartManager.createWaterCutChart(this.currentFilters.timeFilter);
        }, 100);
        
        // Load performance table (default: underperforming)
        this.loadPerformanceTable('underperforming');
    }
    
    setupPerformanceToggle() {
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = btn.getAttribute('data-type');
                
                // Update active button
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Load appropriate table
                this.loadPerformanceTable(type);
            });
        });
    }
    
    loadPerformanceTable(type = 'underperforming') {
        const container = document.getElementById('performanceTable');
        const title = document.getElementById('performanceTableTitle');
        
        let wells;
        if (type === 'top') {
            wells = dataStore.getTopPerformingWells(10);
            title.innerHTML = '<i class="fas fa-star"></i> Top 10 Performing Wells';
        } else {
            wells = dataStore.getUnderperformingWells(10);
            title.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Top 10 Underperforming Wells';
        }
        
        let html = '<table class="data-table"><thead><tr>';
        html += '<th>#</th><th>Well Name</th><th>Asset</th><th>Current (BBL/day)</th>';
        html += '<th>Forecast (BBL/day)</th><th>Performance %</th><th>EUR (MBBL)</th><th>Status</th>';
        html += '</tr></thead><tbody>';
        
        wells.forEach((well, index) => {
            const perfPct = (well.performanceRatio * 100).toFixed(1);
            let perfClass = 'neutral';
            if (type === 'top') {
                perfClass = well.performanceRatio >= 1.0 ? 'positive' : 'neutral';
            } else {
                perfClass = well.performanceRatio < 0.8 ? 'negative' : 'neutral';
            }
            
            html += '<tr>';
            html += `<td><strong>${index + 1}</strong></td>`;
            html += `<td>${well.name}</td>`;
            html += `<td>${well.asset}</td>`;
            html += `<td>${analytics.formatNumber(well.currentProduction)}</td>`;
            html += `<td>${analytics.formatNumber(well.forecast)}</td>`;
            html += `<td class="${perfClass}">${perfPct}%</td>`;
            html += `<td>${analytics.formatNumber(well.eur || 0)}</td>`;
            html += `<td><span class="status-badge ${well.status.toLowerCase()}">${well.status}</span></td>`;
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        container.innerHTML = html;
    }
    
    // Economics View
    loadEconomicsView() {
        console.log('Loading economics view...');
        
        setTimeout(() => {
            chartManager.createNPVIRRBubbleChart();
            chartManager.createBreakEvenHistChart();
            chartManager.createCapexBudgetChart();
        }, 100);
        
        this.loadEconomicsTable();
        this.renderBudgetVarianceTable();
        this.renderScenarioComparisonTable();
    }
    
    renderBudgetVarianceTable() {
        const container = document.getElementById('budgetVarianceTable');
        if (!container) return;
        
        const assets = dataStore.getAssets();
        
        // Calculate budget data for each asset
        const budgetData = assets.map(asset => {
            const wells = dataStore.getWells({ asset });
            const actualSpend = wells.reduce((sum, w) => sum + (w.wellCost || 0), 0);
            const wellCount = wells.length;
            
            // Budget calculation (avg well cost * 1.08 * well count)
            const avgWellCost = actualSpend / wellCount;
            const budgetSpend = avgWellCost * 1.08 * wellCount;
            
            const variance = actualSpend - budgetSpend;
            const variancePercent = (variance / budgetSpend) * 100;
            
            let status, statusClass;
            if (actualSpend > budgetSpend) {
                status = 'Over Budget';
                statusClass = 'over';
            } else if (actualSpend < budgetSpend * 0.95) {
                status = 'Under Budget';
                statusClass = 'under';
            } else {
                status = 'On Track';
                statusClass = 'on-track';
            }
            
            return {
                asset,
                wellCount,
                budget: budgetSpend,
                actual: actualSpend,
                variance,
                variancePercent,
                status,
                statusClass,
                avgCostPerWell: actualSpend / wellCount
            };
        });
        
        // Calculate totals
        const totalBudget = budgetData.reduce((sum, d) => sum + d.budget, 0);
        const totalActual = budgetData.reduce((sum, d) => sum + d.actual, 0);
        const totalVariance = totalActual - totalBudget;
        const totalVariancePercent = (totalVariance / totalBudget) * 100;
        
        // Render table
        let html = '<table><thead><tr>';
        html += '<th>Asset</th>';
        html += '<th>Wells</th>';
        html += '<th>Budget (MM$)</th>';
        html += '<th>Actual (MM$)</th>';
        html += '<th>Variance (MM$)</th>';
        html += '<th>Variance %</th>';
        html += '<th>Avg Cost/Well (MM$)</th>';
        html += '<th>Status</th>';
        html += '</tr></thead><tbody>';
        
        budgetData.forEach(data => {
            const varianceClass = data.variance < 0 ? 'positive' : 'negative';
            html += '<tr>';
            html += `<td><strong>${data.asset}</strong></td>`;
            html += `<td>${data.wellCount}</td>`;
            html += `<td>$${data.budget.toFixed(1)}</td>`;
            html += `<td>$${data.actual.toFixed(1)}</td>`;
            html += `<td class="variance-value ${varianceClass}">${data.variance > 0 ? '+' : ''}$${data.variance.toFixed(1)}</td>`;
            html += `<td class="variance-value ${varianceClass}">${data.variancePercent > 0 ? '+' : ''}${data.variancePercent.toFixed(1)}%</td>`;
            html += `<td>$${data.avgCostPerWell.toFixed(1)}</td>`;
            html += `<td><span class="variance-status ${data.statusClass}">${data.status}</span></td>`;
            html += '</tr>';
        });
        
        // Add totals row
        const totalVarianceClass = totalVariance < 0 ? 'positive' : 'negative';
        html += '<tr style="font-weight: 600; background-color: var(--bg-color);">';
        html += '<td><strong>TOTAL PORTFOLIO</strong></td>';
        html += `<td>${budgetData.reduce((sum, d) => sum + d.wellCount, 0)}</td>`;
        html += `<td>$${totalBudget.toFixed(1)}</td>`;
        html += `<td>$${totalActual.toFixed(1)}</td>`;
        html += `<td class="variance-value ${totalVarianceClass}">${totalVariance > 0 ? '+' : ''}$${totalVariance.toFixed(1)}</td>`;
        html += `<td class="variance-value ${totalVarianceClass}">${totalVariancePercent > 0 ? '+' : ''}${totalVariancePercent.toFixed(1)}%</td>`;
        html += `<td>$${(totalActual / budgetData.reduce((sum, d) => sum + d.wellCount, 0)).toFixed(1)}</td>`;
        html += `<td><span class="variance-status ${totalVariance > 0 ? 'over' : 'under'}">${totalVariance > 0 ? 'Over Budget' : 'Under Budget'}</span></td>`;
        html += '</tr>';
        
        html += '</tbody></table>';
        container.innerHTML = html;
    }
    
    loadEconomicsTable() {
        const container = document.getElementById('economicsTable');
        const wells = dataStore.getActiveWells();
        
        let html = '<table class="data-table"><thead><tr>';
        html += '<th>Well Name</th><th>Asset</th><th>EUR (MBBL)</th>';
        html += '<th>NPV (MM$)</th><th>IRR (%)</th><th>Break-Even ($/BBL)</th>';
        html += '</tr></thead><tbody>';
        
        wells.forEach(well => {
            html += '<tr>';
            html += `<td>${well.name}</td>`;
            html += `<td>${well.asset}</td>`;
            html += `<td>${analytics.formatNumber(well.eur)}</td>`;
            html += `<td>${analytics.formatCurrency(well.npv, 1)}</td>`;
            html += `<td>${analytics.formatPercent(well.irr, 1)}</td>`;
            html += `<td>${analytics.formatCurrency(well.breakEven, 0)}</td>`;
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        container.innerHTML = html;
    }
    
    // Drilling View
    loadDrillingView() {
        console.log('Loading drilling view...');
        
        const drillingStats = analytics.analyzeDrillingPerformance();
        
        // Update KPIs
        document.getElementById('avgDrillingDays').textContent = 
            analytics.formatNumber(drillingStats.avgDrillingDays, 1);
        document.getElementById('avgWellCost').textContent = 
            analytics.formatCurrency(drillingStats.avgWellCost, 1);
        document.getElementById('avgLateralLength').textContent = 
            analytics.formatNumber(drillingStats.avgLateralLength, 0);
        document.getElementById('avgIP30').textContent = 
            analytics.formatNumber(drillingStats.avgIP30, 0);
        
        // Create charts
        setTimeout(() => {
            chartManager.createDrillingDaysChart();
            chartManager.createCostPerFootChart();
            chartManager.createIP30ComparisonChart();
        }, 100);
    }
    
    // Type Curve View
    loadTypeCurveView() {
        console.log('Loading type curve view...');
        
        setTimeout(() => {
            chartManager.createDeclineCurveChart(
                this.currentFilters.vintage,
                this.currentFilters.completionType
            );
            chartManager.createCumOilProppantChart();
            chartManager.createEURDistributionChart();
        }, 100);
        
        // Update decline parameters
        this.updateDeclineParameters();
    }
    
    updateDeclineParameters() {
        // Use first active well for demo
        const well = dataStore.getActiveWells()[0];
        if (!well) return;
        
        const history = dataStore.getProductionHistory(well.id);
        const params = analytics.fitDeclineCurve(history);
        
        document.getElementById('paramQi').textContent = 
            analytics.formatNumber(params.qi, 0) + ' BBL/day';
        document.getElementById('paramDi').textContent = 
            analytics.formatPercent(params.Di * 100, 1) + '/year';
        document.getElementById('paramB').textContent = 
            params.b.toFixed(2);
        document.getElementById('paramEUR').textContent = 
            analytics.formatNumber(params.eur / 1000, 2);
    }
    
    // Asset Comparison View
    loadAssetComparisonView() {
        console.log('Loading asset comparison view...');
        
        // Get asset analytics
        const assetData = analytics.analyzeAssets();
        const assetsArray = Object.values(assetData);
        
        // Render asset summary cards
        this.renderAssetCards(assetsArray);
        
        // Render comparison charts
        setTimeout(() => {
            chartManager.createAssetNPVChart();
            chartManager.createAssetProductionChart();
            chartManager.createAssetIRRChart();
            chartManager.createAssetWellCountChart();
            chartManager.createAssetBreakEvenChart();
        }, 100);
        
        // Render rankings
        this.renderAssetRankings(assetData);
        
        // Render detailed comparison table
        this.renderAssetComparisonTable(assetsArray);
    }
    
    renderAssetCards(assetsArray) {
        const container = document.getElementById('assetCardsGrid');
        if (!container) return;
        
        let html = '';
        
        // Sort by NPV descending
        const sortedAssets = [...assetsArray].sort((a, b) => b.totalNPV - a.totalNPV);
        
        sortedAssets.forEach(asset => {
            const performanceScore = analytics.getAssetPerformanceScore(asset.name);
            const scoreClass = performanceScore >= 70 ? 'excellent' : performanceScore >= 50 ? 'good' : 'average';
            
            html += `
                <div class="asset-card">
                    <div class="asset-card-header">
                        <h3>${asset.name}</h3>
                        <span class="performance-badge ${scoreClass}">
                            Score: ${performanceScore.toFixed(0)}
                        </span>
                    </div>
                    <div class="asset-card-body">
                        <div class="asset-metric">
                            <span class="metric-label">Wells</span>
                            <span class="metric-value">${asset.wellCount} (${asset.activeWells} active)</span>
                        </div>
                        <div class="asset-metric">
                            <span class="metric-label">Total Production</span>
                            <span class="metric-value">${analytics.formatNumber(asset.totalProduction, 0)} BBL/day</span>
                        </div>
                        <div class="asset-metric">
                            <span class="metric-label">Portfolio NPV</span>
                            <span class="metric-value">$${analytics.formatNumber(asset.totalNPV, 1)}M</span>
                        </div>
                        <div class="asset-metric">
                            <span class="metric-label">Average IRR</span>
                            <span class="metric-value">${analytics.formatPercent(asset.avgIRR, 1)}</span>
                        </div>
                        <div class="asset-metric">
                            <span class="metric-label">Break-Even Price</span>
                            <span class="metric-value">$${asset.avgBreakEven.toFixed(2)}/BBL</span>
                        </div>
                        <div class="asset-metric">
                            <span class="metric-label">Total EUR</span>
                            <span class="metric-value">${analytics.formatNumber(asset.totalEUR / 1000, 1)} MBBL</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
    
    renderAssetRankings(assetData) {
        // Top by NPV
        const topByNPV = analytics.rankAssetsByMetric('totalNPV');
        this.renderRankingList('topAssetsByNPV', topByNPV.slice(0, 5), 'totalNPV', 'M', '$');
        
        // Top by Production
        const topByProd = analytics.rankAssetsByMetric('totalProduction');
        this.renderRankingList('topAssetsByProduction', topByProd.slice(0, 5), 'totalProduction', ' BBL/day');
        
        // Top by IRR
        const topByIRR = analytics.rankAssetsByMetric('avgIRR');
        this.renderRankingList('topAssetsByIRR', topByIRR.slice(0, 5), 'avgIRR', '%');
        
        // Lowest break-even
        const topByBreakEven = analytics.rankAssetsByMetric('breakEven');
        this.renderRankingList('topAssetsByBreakEven', topByBreakEven.slice(0, 5), 'avgBreakEven', '/BBL', '$');
    }
    
    renderRankingList(containerId, assets, metric, unit, prefix = '') {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let html = '<div class="ranking-items">';
        
        assets.forEach((asset, index) => {
            const value = asset[metric];
            const formattedValue = metric.includes('NPV') || metric.includes('Production') ? 
                analytics.formatNumber(value, 0) : 
                value.toFixed(1);
            
            html += `
                <div class="ranking-item">
                    <span class="rank">#${index + 1}</span>
                    <span class="asset-name">${asset.name}</span>
                    <span class="value">${prefix}${formattedValue}${unit}</span>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    }
    
    renderAssetComparisonTable(assetsArray) {
        const container = document.getElementById('assetComparisonTable');
        if (!container) return;
        
        // Sort by NPV descending
        const sortedAssets = [...assetsArray].sort((a, b) => b.totalNPV - a.totalNPV);
        
        let html = '<table class="data-table"><thead><tr>';
        html += '<th>Asset</th>';
        html += '<th>Wells</th>';
        html += '<th>Total Production<br/>(BBL/day)</th>';
        html += '<th>Avg Prod/Well<br/>(BBL/day)</th>';
        html += '<th>Total NPV<br/>(MM$)</th>';
        html += '<th>Avg IRR<br/>(%)</th>';
        html += '<th>Break-Even<br/>($/BBL)</th>';
        html += '<th>Total EUR<br/>(MBBL)</th>';
        html += '<th>Avg Drilling Days</th>';
        html += '<th>Avg Well Cost<br/>(MM$)</th>';
        html += '<th>Performance Score</th>';
        html += '</tr></thead><tbody>';
        
        sortedAssets.forEach(asset => {
            const score = analytics.getAssetPerformanceScore(asset.name);
            const scoreClass = score >= 70 ? 'excellent' : score >= 50 ? 'good' : 'average';
            
            html += '<tr>';
            html += `<td><strong>${asset.name}</strong></td>`;
            html += `<td>${asset.wellCount} (${asset.activeWells} active)</td>`;
            html += `<td>${analytics.formatNumber(asset.totalProduction, 0)}</td>`;
            html += `<td>${analytics.formatNumber(asset.avgProductionPerWell, 0)}</td>`;
            html += `<td>$${analytics.formatNumber(asset.totalNPV, 1)}</td>`;
            html += `<td>${analytics.formatPercent(asset.avgIRR, 1)}</td>`;
            html += `<td>$${asset.avgBreakEven.toFixed(2)}</td>`;
            html += `<td>${analytics.formatNumber(asset.totalEUR / 1000, 1)}</td>`;
            html += `<td>${asset.avgDrillingDays ? asset.avgDrillingDays.toFixed(0) : 'N/A'}</td>`;
            html += `<td>$${analytics.formatNumber(asset.avgWellCost, 1)}</td>`;
            html += `<td><span class="performance-badge ${scoreClass}">${score.toFixed(0)}</span></td>`;
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        container.innerHTML = html;
    }
    
    // Wells View
    loadWellsView() {
        console.log('Loading wells view...');
        
        // Populate asset filter
        const assetFilter = document.getElementById('wellAssetFilter');
        if (assetFilter && assetFilter.options.length === 1) {
            const assets = dataStore.getAssets();
            assets.forEach(asset => {
                const option = document.createElement('option');
                option.value = asset;
                option.textContent = asset;
                assetFilter.appendChild(option);
            });
        }
        
        // Get filtered wells
        const filters = {
            search: document.getElementById('wellSearch')?.value || '',
            status: document.getElementById('wellStatusFilter')?.value || 'all',
            asset: document.getElementById('wellAssetFilter')?.value || 'all'
        };
        
        const wells = dataStore.getWells(filters);
        
        this.renderWellsTable(wells);
    }
    
    renderWellsTable(wells) {
        const container = document.getElementById('wellDataTable');
        
        let html = '<table class="data-table"><thead><tr>';
        html += '<th>Well ID</th><th>Well Name</th><th>Asset</th><th>Status</th>';
        html += '<th>Vintage</th><th>Operator</th><th>Spud Date</th>';
        html += '<th>Current Prod (BBL/day)</th><th>EUR (MBBL)</th>';
        html += '<th>NPV (MM$)</th><th>IRR (%)</th>';
        html += '</tr></thead><tbody>';
        
        wells.forEach(well => {
            html += '<tr>';
            html += `<td>${well.id}</td>`;
            html += `<td><strong>${well.name}</strong></td>`;
            html += `<td>${well.asset}</td>`;
            html += `<td><span class="status-badge ${well.status.toLowerCase()}">${well.status}</span></td>`;
            html += `<td>${well.vintage}</td>`;
            html += `<td>${well.operator}</td>`;
            html += `<td>${well.spudDate}</td>`;
            html += `<td>${analytics.formatNumber(well.currentProduction || 0)}</td>`;
            html += `<td>${analytics.formatNumber(well.eur || 0)}</td>`;
            html += `<td>${analytics.formatCurrency(well.npv || 0, 1)}</td>`;
            html += `<td>${analytics.formatPercent(well.irr || 0, 1)}</td>`;
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        container.innerHTML = html;
        
        // Update page info
        const pageInfo = document.getElementById('pageInfo');
        if (pageInfo) {
            pageInfo.textContent = `Showing ${wells.length} wells`;
        }
    }
    
    // Export functionality
    exportReport() {
        const data = dataStore.exportData();
        const portfolioAnalysis = analytics.analyzePortfolio();
        
        const report = {
            exportDate: new Date().toISOString(),
            summary: {
                totalWells: data.wells.length,
                activeWells: dataStore.getActiveWells().length,
                totalProduction: dataStore.getTotalProduction(),
                portfolioNPV: dataStore.getPortfolioNPV(),
                averageIRR: dataStore.getAverageIRR()
            },
            economics: data.economics,
            portfolioAnalysis: portfolioAnalysis,
            wells: data.wells
        };
        
        // Create downloadable JSON file
        const blob = new Blob([JSON.stringify(report, null, 2)], 
                             { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `OkhikuAnalytics_Data_Export_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('Report exported successfully');
    }
    
    // Notification system
    showNotification(message, type = 'success') {
        // Remove any existing notifications
        const existingNotif = document.querySelector('.notification');
        if (existingNotif) {
            existingNotif.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide and remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PetroAnalyticsApp();
});
