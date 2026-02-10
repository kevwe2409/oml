/**
 * OkhikuAnalytics Pro - Report Generation Module
 * Professional PDF and PNG export for executive reporting
 * 
 * Advanced Oil & Gas Analytics by Joseph Okhiku
 * Copyright © 2024 Joseph Okhiku. All rights reserved.
 */

class ReportGenerator {
    constructor() {
        this.reportDate = new Date();
        this.loadLibraries();
    }
    
    async loadLibraries() {
        // Libraries will be loaded from CDN via script tags in HTML
        console.log('Report generator initialized');
    }
    
    // Generate Executive Summary Report (PDF)
    async generateExecutiveSummary() {
        // Check if jsPDF is loaded
        if (!window.jspdf) {
            console.error('jsPDF library not loaded');
            return { success: false, error: 'PDF library not loaded. Please check internet connection.' };
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        // Page dimensions
        const pageWidth = 210;
        const pageHeight = 297;
        const margin = 20;
        let yPosition = margin;
        
        // Header
        this.addReportHeader(doc, 'Executive Summary Report', yPosition);
        yPosition += 25;
        
        // Key Metrics Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Portfolio Overview', margin, yPosition);
        yPosition += 8;
        
        const metrics = this.getExecutiveMetrics();
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        // Create metrics table
        const metricsData = [
            ['Total Production', `${metrics.totalProduction.toLocaleString()} BBL/day`],
            ['Active Wells', metrics.activeWells.toString()],
            ['Portfolio NPV', `$${metrics.portfolioNPV.toFixed(1)} MM`],
            ['Average IRR', `${metrics.avgIRR.toFixed(1)}%`],
            ['Total EUR', `${metrics.totalEUR.toFixed(0)} MBBL`],
            ['Total Capital Invested', `$${metrics.totalCapex.toFixed(1)} MM`]
        ];
        
        metricsData.forEach(([label, value]) => {
            doc.setFont('helvetica', 'bold');
            doc.text(label + ':', margin, yPosition);
            doc.setFont('helvetica', 'normal');
            doc.text(value, margin + 70, yPosition);
            yPosition += 6;
        });
        
        yPosition += 10;
        
        // Production Trend Chart
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Production Trends', margin, yPosition);
        yPosition += 8;
        
        const prodChart = await this.captureChart('productionTrendChart');
        if (prodChart) {
            doc.addImage(prodChart, 'PNG', margin, yPosition, 170, 80);
            yPosition += 90;
        }
        
        // New page for economic analysis
        if (yPosition > pageHeight - 100) {
            doc.addPage();
            yPosition = margin;
        }
        
        // Economic Distribution
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Economic Analysis', margin, yPosition);
        yPosition += 8;
        
        const econChart = await this.captureChart('npvIrrBubbleChart');
        if (econChart) {
            doc.addImage(econChart, 'PNG', margin, yPosition, 170, 80);
            yPosition += 90;
        }
        
        // Top Wells
        if (yPosition > pageHeight - 100) {
            doc.addPage();
            yPosition = margin;
        }
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Top 5 Producing Wells', margin, yPosition);
        yPosition += 8;
        
        const topWells = dataStore.getTopProducingWells(5);
        doc.setFontSize(9);
        topWells.forEach((well, index) => {
            doc.setFont('helvetica', 'bold');
            doc.text(`${index + 1}. ${well.name}`, margin, yPosition);
            doc.setFont('helvetica', 'normal');
            doc.text(`${well.currentProduction.toLocaleString()} BBL/day`, margin + 70, yPosition);
            doc.text(`NPV: $${well.npv.toFixed(1)}MM`, margin + 120, yPosition);
            yPosition += 6;
        });
        
        // Footer
        this.addReportFooter(doc);
        
        // Save PDF
        const fileName = `OkhikuAnalytics_Executive_Summary_${this.formatDateForFilename()}.pdf`;
        doc.save(fileName);
        
        return { success: true, fileName };
    }
    
    // Generate Technical Report (PDF)
    async generateTechnicalReport() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        const pageWidth = 210;
        const margin = 20;
        let yPosition = margin;
        
        // Header
        this.addReportHeader(doc, 'Technical Analysis Report', yPosition);
        yPosition += 25;
        
        // Production Performance Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Production Performance Analysis', margin, yPosition);
        yPosition += 10;
        
        const prodChart = await this.captureChart('prodVsForecastChart');
        if (prodChart) {
            doc.addImage(prodChart, 'PNG', margin, yPosition, 170, 80);
            yPosition += 90;
        }
        
        const cumChart = await this.captureChart('cumulativeProdChart');
        if (cumChart) {
            doc.addImage(cumChart, 'PNG', margin, yPosition, 170, 80);
            yPosition += 90;
        }
        
        // New page for drilling analysis
        doc.addPage();
        yPosition = margin;
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Drilling & Completions Performance', margin, yPosition);
        yPosition += 10;
        
        const drillingStats = analytics.analyzeDrillingPerformance();
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const drillingData = [
            ['Average Drilling Days', drillingStats.avgDrillingDays.toFixed(1)],
            ['Average Well Cost', `$${drillingStats.avgWellCost.toFixed(1)} MM`],
            ['Average Lateral Length', `${drillingStats.avgLateralLength.toFixed(0)} ft`],
            ['Average IP30', `${drillingStats.avgIP30.toFixed(0)} BBL/day`],
            ['Average Cost per Foot', `$${drillingStats.avgCostPerFoot.toFixed(0)}`]
        ];
        
        drillingData.forEach(([label, value]) => {
            doc.setFont('helvetica', 'bold');
            doc.text(label + ':', margin, yPosition);
            doc.setFont('helvetica', 'normal');
            doc.text(value, margin + 70, yPosition);
            yPosition += 6;
        });
        
        yPosition += 10;
        
        const drillingChart = await this.captureChart('drillingDaysChart');
        if (drillingChart) {
            doc.addImage(drillingChart, 'PNG', margin, yPosition, 170, 80);
            yPosition += 90;
        }
        
        // New page for type curves
        doc.addPage();
        yPosition = margin;
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Type Curve Analysis', margin, yPosition);
        yPosition += 10;
        
        const declineChart = await this.captureChart('declineCurveChart');
        if (declineChart) {
            doc.addImage(declineChart, 'PNG', margin, yPosition, 170, 80);
            yPosition += 90;
        }
        
        const eurChart = await this.captureChart('eurDistributionChart');
        if (eurChart) {
            doc.addImage(eurChart, 'PNG', margin, yPosition, 170, 80);
        }
        
        // Footer
        this.addReportFooter(doc);
        
        const fileName = `OkhikuAnalytics_Technical_Report_${this.formatDateForFilename()}.pdf`;
        doc.save(fileName);
        
        return { success: true, fileName };
    }
    
    // Generate Monthly Performance Report (PDF)
    async generateMonthlyReport() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        const pageWidth = 210;
        const margin = 20;
        let yPosition = margin;
        
        // Header
        this.addReportHeader(doc, 'Monthly Performance Report', yPosition);
        yPosition += 25;
        
        // Summary metrics
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Month-End Summary', margin, yPosition);
        yPosition += 10;
        
        const metrics = this.getExecutiveMetrics();
        const portfolioAnalysis = analytics.analyzePortfolio();
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        const monthlyData = [
            ['Total Production', `${metrics.totalProduction.toLocaleString()} BBL/day`],
            ['Portfolio NPV', `$${metrics.portfolioNPV.toFixed(1)} MM`],
            ['Average Production per Well', `${portfolioAnalysis.productionStats.mean.toFixed(0)} BBL/day`],
            ['Median NPV', `$${portfolioAnalysis.npvStats.median.toFixed(1)} MM`],
            ['P90 Break-Even Price', `$${portfolioAnalysis.breakEvenStats.p90.toFixed(0)}/BBL`]
        ];
        
        monthlyData.forEach(([label, value]) => {
            doc.setFont('helvetica', 'bold');
            doc.text(label + ':', margin, yPosition);
            doc.setFont('helvetica', 'normal');
            doc.text(value, margin + 80, yPosition);
            yPosition += 6;
        });
        
        yPosition += 10;
        
        // Production trends
        const prodChart = await this.captureChart('productionTrendChart');
        if (prodChart) {
            doc.addImage(prodChart, 'PNG', margin, yPosition, 170, 70);
            yPosition += 80;
        }
        
        // Economic distribution
        const econDistChart = await this.captureChart('economicDistChart');
        if (econDistChart) {
            doc.addImage(econDistChart, 'PNG', margin, yPosition, 170, 70);
            yPosition += 80;
        }
        
        // New page for underperforming wells
        doc.addPage();
        yPosition = margin;
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Wells Requiring Attention', margin, yPosition);
        yPosition += 10;
        
        const underperformers = dataStore.getUnderperformingWells(10);
        
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text('Well Name', margin, yPosition);
        doc.text('Current', margin + 60, yPosition);
        doc.text('Forecast', margin + 90, yPosition);
        doc.text('Performance', margin + 120, yPosition);
        doc.text('Status', margin + 160, yPosition);
        yPosition += 6;
        
        doc.setFont('helvetica', 'normal');
        underperformers.forEach(well => {
            doc.text(well.name, margin, yPosition);
            doc.text(well.currentProduction.toFixed(0), margin + 60, yPosition);
            doc.text(well.forecast.toFixed(0), margin + 90, yPosition);
            doc.text((well.performanceRatio * 100).toFixed(1) + '%', margin + 120, yPosition);
            doc.text(well.status, margin + 160, yPosition);
            yPosition += 5;
            
            if (yPosition > 270) {
                doc.addPage();
                yPosition = margin;
            }
        });
        
        // Footer
        this.addReportFooter(doc);
        
        const fileName = `OkhikuAnalytics_Monthly_Report_${this.formatDateForFilename()}.pdf`;
        doc.save(fileName);
        
        return { success: true, fileName };
    }
    
    // Generate Board-Level Report (PDF)
    async generateBoardReport() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('l', 'mm', 'a4'); // Landscape for board presentations
        
        const pageWidth = 297;
        const pageHeight = 210;
        const margin = 20;
        let yPosition = margin;
        
        // Cover page
        this.addReportHeader(doc, 'Board of Directors Report', yPosition);
        yPosition += 20;
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('Portfolio Performance & Strategic Overview', margin, yPosition);
        yPosition += 10;
        
        doc.setFontSize(10);
        doc.text(`Reporting Period: ${this.formatDate(this.reportDate)}`, margin, yPosition);
        yPosition += 6;
        doc.text(`Total Wells: ${dataStore.wells.length}`, margin, yPosition);
        yPosition += 6;
        doc.text(`Active Production: ${dataStore.getActiveWells().length} wells`, margin, yPosition);
        
        // Strategic Metrics Page
        doc.addPage();
        yPosition = margin;
        
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Strategic Metrics Dashboard', margin, yPosition);
        yPosition += 15;
        
        const metrics = this.getExecutiveMetrics();
        const portfolioAnalysis = analytics.analyzePortfolio();
        
        // Create 2x3 grid of key metrics
        const boxWidth = (pageWidth - 3 * margin) / 3;
        const boxHeight = 30;
        let xPos = margin;
        let yPos = yPosition;
        
        const keyMetrics = [
            { label: 'Portfolio NPV', value: `$${metrics.portfolioNPV.toFixed(1)}M`, color: [37, 99, 235] },
            { label: 'Avg IRR', value: `${metrics.avgIRR.toFixed(1)}%`, color: [16, 185, 129] },
            { label: 'Total Production', value: `${metrics.totalProduction.toLocaleString()} BBL/d`, color: [245, 158, 11] },
            { label: 'Active Wells', value: metrics.activeWells.toString(), color: [139, 92, 246] },
            { label: 'Total EUR', value: `${metrics.totalEUR.toFixed(0)} MBBL`, color: [239, 68, 68] },
            { label: 'Capital Invested', value: `$${metrics.totalCapex.toFixed(1)}M`, color: [20, 184, 166] }
        ];
        
        keyMetrics.forEach((metric, index) => {
            if (index % 3 === 0 && index > 0) {
                xPos = margin;
                yPos += boxHeight + 10;
            }
            
            // Draw box
            doc.setDrawColor(200, 200, 200);
            doc.setFillColor(metric.color[0], metric.color[1], metric.color[2]);
            doc.rect(xPos, yPos, boxWidth - 5, boxHeight, 'F');
            
            // Add text
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(metric.label, xPos + 5, yPos + 10);
            
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text(metric.value, xPos + 5, yPos + 22);
            
            doc.setTextColor(0, 0, 0);
            xPos += boxWidth;
        });
        
        yPosition = yPos + boxHeight + 20;
        
        // Charts page
        doc.addPage();
        yPosition = margin;
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Production & Economic Performance', margin, yPosition);
        yPosition += 10;
        
        // Two charts side by side
        const prodChart = await this.captureChart('productionTrendChart');
        if (prodChart) {
            doc.addImage(prodChart, 'PNG', margin, yPosition, 120, 70);
        }
        
        const npvChart = await this.captureChart('npvIrrBubbleChart');
        if (npvChart) {
            doc.addImage(npvChart, 'PNG', margin + 130, yPosition, 120, 70);
        }
        
        yPosition += 80;
        
        const topWellsChart = await this.captureChart('topWellsChart');
        if (topWellsChart) {
            doc.addImage(topWellsChart, 'PNG', margin, yPosition, 120, 70);
        }
        
        const breakEvenChart = await this.captureChart('breakEvenHistChart');
        if (breakEvenChart) {
            doc.addImage(breakEvenChart, 'PNG', margin + 130, yPosition, 120, 70);
        }
        
        // Recommendations page
        doc.addPage();
        yPosition = margin;
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Key Observations & Recommendations', margin, yPosition);
        yPosition += 12;
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        const observations = this.generateObservations(portfolioAnalysis);
        observations.forEach(obs => {
            doc.setFont('helvetica', 'bold');
            doc.text('• ' + obs.title + ':', margin, yPosition);
            yPosition += 6;
            doc.setFont('helvetica', 'normal');
            const lines = doc.splitTextToSize(obs.text, pageWidth - 2 * margin - 10);
            lines.forEach(line => {
                doc.text(line, margin + 10, yPosition);
                yPosition += 5;
            });
            yPosition += 3;
        });
        
        // Footer
        this.addReportFooter(doc);
        
        const fileName = `OkhikuAnalytics_Board_Report_${this.formatDateForFilename()}.pdf`;
        doc.save(fileName);
        
        return { success: true, fileName };
    }
    
    // Export individual chart as PNG
    async exportChartAsPNG(chartId) {
        const canvas = document.getElementById(chartId);
        if (!canvas) {
            console.error('Chart not found:', chartId);
            return { success: false, error: 'Chart not found' };
        }
        
        // Get the chart canvas
        const chartCanvas = canvas;
        
        // Create download link
        const link = document.createElement('a');
        link.download = `OkhikuAnalytics_${chartId}_${this.formatDateForFilename()}.png`;
        link.href = chartCanvas.toDataURL('image/png');
        link.click();
        
        return { success: true, fileName: link.download };
    }
    
    // Export current dashboard view as PNG
    async exportDashboardAsPNG() {
        // Check if html2canvas is loaded
        if (!window.html2canvas) {
            console.error('html2canvas library not loaded');
            return { success: false, error: 'Screenshot library not loaded. Please check internet connection.' };
        }
        
        const activeView = document.querySelector('.view-container.active');
        if (!activeView) {
            return { success: false, error: 'No active view' };
        }
        
        try {
            const canvas = await html2canvas(activeView, {
                scale: 2,
                backgroundColor: '#f8fafc',
                logging: false,
                useCORS: true
            });
            
            const link = document.createElement('a');
            link.download = `OkhikuAnalytics_Dashboard_${this.formatDateForFilename()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            return { success: true, fileName: link.download };
        } catch (error) {
            console.error('Error capturing dashboard:', error);
            return { success: false, error: error.message };
        }
    }
    
    // Helper: Capture chart as base64 image
    async captureChart(chartId) {
        // Wait a bit for chart to be fully rendered
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const canvas = document.getElementById(chartId);
        if (!canvas) {
            console.warn('Chart not found:', chartId);
            return null;
        }
        
        try {
            return canvas.toDataURL('image/png');
        } catch (error) {
            console.error('Error capturing chart:', chartId, error);
            return null;
        }
    }
    
    // Helper: Add report header
    addReportHeader(doc, title, yPosition) {
        const pageWidth = doc.internal.pageSize.getWidth();
        
        // Company header
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(37, 99, 235);
        doc.text('OkhikuAnalytics Pro', 20, yPosition);
        
        // Report title
        yPosition += 8;
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text(title, 20, yPosition);
        
        // Date and report info
        yPosition += 6;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated: ${this.formatDate(this.reportDate)}`, 20, yPosition);
        
        // Attribution
        yPosition += 4;
        doc.setFontSize(8);
        doc.text('Advanced Oil & Gas Analytics by Joseph Okhiku', 20, yPosition);
        
        // Horizontal line
        yPosition += 3;
        doc.setDrawColor(200, 200, 200);
        doc.line(20, yPosition, pageWidth - 20, yPosition);
    }
    
    // Helper: Add report footer
    addReportFooter(doc) {
        const pageCount = doc.internal.getNumberOfPages();
        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(
                `Page ${i} of ${pageCount}`,
                pageWidth / 2,
                pageHeight - 10,
                { align: 'center' }
            );
            doc.text(
                'Confidential - For Internal Use Only',
                20,
                pageHeight - 10
            );
            doc.text(
                '© 2024 Joseph Okhiku',
                pageWidth - 20,
                pageHeight - 10,
                { align: 'right' }
            );
        }
    }
    
    // Helper: Get executive metrics
    getExecutiveMetrics() {
        return {
            totalProduction: dataStore.getTotalProduction(),
            activeWells: dataStore.getActiveWells().length,
            portfolioNPV: dataStore.getPortfolioNPV(),
            avgIRR: dataStore.getAverageIRR(),
            totalEUR: dataStore.wells.reduce((sum, w) => sum + (w.eur || 0), 0),
            totalCapex: dataStore.wells.reduce((sum, w) => sum + (w.wellCost || 0), 0)
        };
    }
    
    // Helper: Generate observations and recommendations
    generateObservations(portfolioAnalysis) {
        const observations = [];
        
        // Production observation
        if (portfolioAnalysis.productionStats.mean > 400) {
            observations.push({
                title: 'Strong Production Performance',
                text: `Average well production of ${portfolioAnalysis.productionStats.mean.toFixed(0)} BBL/day demonstrates strong portfolio performance. Top quartile wells are significantly outperforming baseline expectations.`
            });
        }
        
        // Economic observation
        if (portfolioAnalysis.npvStats.median > 10) {
            observations.push({
                title: 'Robust Economic Returns',
                text: `Median NPV of $${portfolioAnalysis.npvStats.median.toFixed(1)}MM indicates healthy project economics. The portfolio demonstrates strong value creation potential at current commodity prices.`
            });
        } else {
            observations.push({
                title: 'Economic Optimization Opportunity',
                text: `Median NPV suggests opportunity for optimization. Consider focusing capital on higher-return prospects and evaluating completion designs for underperforming assets.`
            });
        }
        
        // Break-even observation
        if (portfolioAnalysis.breakEvenStats.p90 < 45) {
            observations.push({
                title: 'Low Break-Even Risk Profile',
                text: `P90 break-even price of $${portfolioAnalysis.breakEvenStats.p90.toFixed(0)}/BBL indicates a resilient portfolio with downside protection. Majority of wells remain economic even in low-price environments.`
            });
        }
        
        // IRR observation
        if (portfolioAnalysis.irrStats.mean > 40) {
            observations.push({
                title: 'Exceptional Return Profile',
                text: `Average IRR of ${portfolioAnalysis.irrStats.mean.toFixed(1)}% significantly exceeds industry benchmarks. Continue investing in similar well designs and completion strategies.`
            });
        }
        
        // Recommendation
        observations.push({
            title: 'Strategic Recommendation',
            text: 'Maintain focus on high-performing assets while optimizing underperformers. Consider accelerating development in proven areas and applying learnings from top-quartile wells to future drilling programs.'
        });
        
        return observations;
    }
    
    // Helper: Format date for display
    formatDate(date) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Helper: Format date for filename
    formatDateForFilename() {
        return this.reportDate.toISOString().split('T')[0];
    }
}

// Create global report generator instance
const reportGenerator = new ReportGenerator();
