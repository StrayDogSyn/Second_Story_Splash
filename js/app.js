// Second Story - Main JavaScript Module
class SecondStoryApp {
    constructor() {
        this.init();
    }

    init() {
        this.initMobileMenu();
        this.initScrollEffects();
        this.initAnimatedStats();
        this.initCharts();
        this.initTabs();
        this.initBudgetChart();
        this.initSmoothScrolling();
        this.initIntersectionObserver();
    }

    // Mobile Menu Management
    initMobileMenu() {
        const menuButton = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                const isOpen = mobileMenu.classList.contains('active');
                
                if (isOpen) {
                    this.closeMobileMenu();
                } else {
                    this.openMobileMenu();
                }
            });

            // Close menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    openMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = document.getElementById('menu-btn');
        
        mobileMenu.classList.add('active');
        menuButton.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    closeMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = document.getElementById('menu-btn');
        
        mobileMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // Scroll Effects
    initScrollEffects() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class for styling
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', this.throttle(handleScroll, 16));
    }

    // Animated Statistics
    initAnimatedStats() {
        const stats = [
            { id: 'unemployment-stat', target: 27, suffix: '%' },
            { id: 'rearrest-stat', target: 83, suffix: '%' },
            { id: 'cost-stat', target: 48, suffix: 'B', prefix: '$' }
        ];

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = stats.find(s => s.id === entry.target.id);
                    if (stat) {
                        this.animateValue(entry.target, 0, stat.target, 1500, stat);
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        stats.forEach(stat => {
            const element = document.getElementById(stat.id);
            if (element) {
                observer.observe(element);
            }
        });
    }

    animateValue(element, start, end, duration, config) {
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeOutCubic * (end - start) + start);
            
            let displayValue = '';
            if (config.prefix) displayValue += config.prefix;
            displayValue += currentValue;
            if (config.suffix) displayValue += config.suffix;
            
            element.textContent = displayValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    // Chart Configuration and Creation
    initCharts() {
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded. Charts will not be rendered.');
            return;
        }

        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.font.size = 12;
        Chart.defaults.color = '#3F3F3F';

        this.createEmploymentChart();
        this.createPlacementChart();
        this.createSalaryChart();
        this.createRecidivismChart();
    }

    getChartConfig() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#355E3B',
                        font: { size: 12, family: "'Inter', sans-serif" },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(53, 94, 59, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    cornerRadius: 8,
                    displayColors: false,
                    titleFont: { size: 14, weight: '600' },
                    bodyFont: { size: 13 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#C2C2C2',
                        lineWidth: 1
                    },
                    ticks: {
                        color: '#3F3F3F',
                        font: { size: 11 }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#3F3F3F',
                        font: { size: 11 }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutCubic'
            }
        };
    }

    createEmploymentChart() {
        const ctx = document.getElementById('employmentRecidivismChart');
        if (!ctx) return;

        const config = this.getChartConfig();
        config.plugins.tooltip.callbacks = {
            label: (context) => `${context.label}: ${context.raw}%`
        };

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Unemployed', 'Employed for 1 Year'],
                datasets: [{
                    label: '3-Year Recidivism Rate',
                    data: [52, 16],
                    backgroundColor: ['#ef4444', '#355E3B'],
                    borderColor: ['#dc2626', '#2a4a30'],
                    borderWidth: 2,
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: config
        });
    }

    createPlacementChart() {
        const ctx = document.getElementById('placementRateChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Placed in Tech Role', 'Seeking Placement'],
                datasets: [{
                    data: [90, 10],
                    backgroundColor: ['#355E3B', '#C2C2C2'],
                    borderColor: '#fff',
                    borderWidth: 4,
                    hoverBackgroundColor: ['#4a7c52', '#A3B9A4']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(53, 94, 59, 0.95)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                            label: (context) => `${context.label}: ${context.raw}%`
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutCubic'
                }
            }
        });
    }

    createSalaryChart() {
        const ctx = document.getElementById('salaryChart');
        if (!ctx) return;

        const config = this.getChartConfig();
        config.plugins.legend.display = false;
        config.plugins.tooltip.callbacks = {
            label: (context) => `${context.label}: $${context.raw.toLocaleString()}`
        };
        config.scales.y.ticks.callback = (value) => `$${(value / 1000)}k`;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Average U.S. Salary', 'Second Story Graduate'],
                datasets: [{
                    label: 'Average Starting Salary',
                    data: [56000, 85000],
                    backgroundColor: ['#3F3F3F', '#355E3B'],
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: config
        });
    }

    createRecidivismChart() {
        const ctx = document.getElementById('recidivismReductionChart');
        if (!ctx) return;

        const config = this.getChartConfig();
        config.plugins.legend.display = false;
        config.plugins.tooltip.callbacks = {
            label: (context) => `${context.label}: ${context.raw}%`
        };

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['National Average (3-year)', 'Second Story Goal'],
                datasets: [{
                    label: 'Recidivism Rate',
                    data: [68, 5],
                    backgroundColor: ['#ef4444', '#355E3B'],
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: config
        });
    }

    // Tab Management
    initTabs() {
        const tabButtons = document.querySelectorAll('.tabs__button');
        const tabPanels = document.querySelectorAll('.tabs__panel');

        if (tabButtons.length === 0 || tabPanels.length === 0) return;

        const activateTab = (targetTab) => {
            // Remove active state from all tabs
            tabButtons.forEach(button => {
                button.classList.remove('active');
                button.setAttribute('aria-selected', 'false');
            });

            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.setAttribute('aria-hidden', 'true');
            });

            // Activate target tab
            const targetButton = document.querySelector(`[data-tab="${targetTab}"]`);
            const targetPanel = document.getElementById(targetTab);

            if (targetButton && targetPanel) {
                targetButton.classList.add('active');
                targetButton.setAttribute('aria-selected', 'true');
                targetPanel.classList.add('active');
                targetPanel.setAttribute('aria-hidden', 'false');
            }
        };

        // Add click handlers
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                activateTab(targetTab);
            });

            // Add keyboard navigation
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });

        // Activate first tab by default
        if (tabButtons[0]) {
            const firstTab = tabButtons[0].getAttribute('data-tab');
            activateTab(firstTab);
        }
    }

    // Budget Chart Management
    initBudgetChart() {
        if (typeof Chart === 'undefined') return;

        const budgetData = {
            year1: {
                labels: ['Program Services', 'Administration', 'Fundraising'],
                data: [229875, 71000, 16000],
                total: 316875
            },
            year2: {
                labels: ['Program Services', 'Administration', 'Fundraising'],
                data: [523163, 74300, 17270],
                total: 614733
            }
        };

        const ctx = document.getElementById('budgetChart');
        if (!ctx) return;

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: budgetData.year1.labels,
                datasets: [{
                    label: 'Expenses',
                    data: budgetData.year1.data,
                    backgroundColor: ['#355E3B', '#3F3F3F', '#A3B9A4'],
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(53, 94, 59, 0.95)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                            label: (context) => `${context.label}: $${context.raw.toLocaleString()}`
                        }
                    }
                },
                scales: {
                    y: {
                        grid: { display: false },
                        ticks: { color: '#3F3F3F' }
                    },
                    x: {
                        grid: { color: '#C2C2C2' },
                        ticks: {
                            color: '#3F3F3F',
                            callback: (value) => `$${(value / 1000)}k`
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutCubic'
                }
            }
        });

        // Button handlers
        const year1Btn = document.getElementById('year1-btn');
        const year2Btn = document.getElementById('year2-btn');
        const budgetDetails = document.getElementById('budget-details');

        const updateBudgetChart = (year) => {
            const data = budgetData[year];
            chart.data.datasets[0].data = data.data;
            chart.update('active');

            // Update button states
            const isYear1 = year === 'year1';
            year1Btn.classList.toggle('active', isYear1);
            year2Btn.classList.toggle('active', !isYear1);

            // Update details
            if (budgetDetails) {
                budgetDetails.innerHTML = `
                    <p class="budget-details__text">
                        Total Projected Expenses for ${year.replace('year', 'Year ')}: 
                        <span class="budget-details__total">$${data.total.toLocaleString()}</span>
                    </p>
                `;
            }
        };

        if (year1Btn && year2Btn) {
            year1Btn.addEventListener('click', () => updateBudgetChart('year1'));
            year2Btn.addEventListener('click', () => updateBudgetChart('year2'));
        }

        // Initialize with year 1
        updateBudgetChart('year1');
    }

    // Smooth Scrolling for Navigation
    initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    this.closeMobileMenu();
                }
            });
        });
    }

    // Intersection Observer for Animations
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe cards and sections for fade-in animation
        const animatedElements = document.querySelectorAll('.card, .stat-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Utility function for throttling
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance monitoring
    logPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.timing;
                    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log(`Page load time: ${loadTime}ms`);
                }, 0);
            });
        }
    }

    // Error handling
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);
        
        // In production, you might want to send this to an error tracking service
        if (process.env.NODE_ENV === 'production') {
            // Send to error tracking service
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    try {
        new SecondStoryApp();
    } catch (error) {
        console.error('Failed to initialize SecondStoryApp:', error);
    }
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SecondStoryApp;
}
