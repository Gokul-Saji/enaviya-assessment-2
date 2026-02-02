// ============================================
// Mobile Menu Toggle
// ============================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

if (mobileMenuToggle && sidebar) {
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        this.classList.toggle('active');
        
        // Toggle hamburger animation
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ============================================
// Tab Functionality
// ============================================

const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all tabs
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        
        // In a real application, you would show/hide content here
        console.log('Tab clicked:', this.textContent);
    });
});

// ============================================
// Department Navigation
// ============================================

const departmentButtons = document.querySelectorAll('.department-item');

departmentButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all department buttons
        departmentButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // In a real application, you would filter resources here
        console.log('Department selected:', this.textContent);
    });
});

// ============================================
// Calendar Navigation
// ============================================

const calendarNavButtons = document.querySelectorAll('.calendar-nav-btn');
const calendarMonth = document.querySelector('.calendar-month');

if (calendarNavButtons.length > 0 && calendarMonth) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    let currentMonth = 0; // January
    let currentYear = 2026;
    
    calendarNavButtons[0].addEventListener('click', function() {
        // Previous month
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });
    
    calendarNavButtons[1].addEventListener('click', function() {
        // Next month
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });
    
    function updateCalendar() {
        calendarMonth.textContent = `${months[currentMonth]} ${currentYear}`;
        
        // In a real application, you would regenerate the calendar dates here
        console.log('Calendar updated:', months[currentMonth], currentYear);
    }
}

// ============================================
// Calendar Date Selection
// ============================================

const calendarDates = document.querySelectorAll('.calendar-date:not(.inactive)');

calendarDates.forEach(date => {
    date.addEventListener('click', function() {
        // Remove today class from all dates
        calendarDates.forEach(d => {
            if (!d.textContent.includes('15')) {
                d.classList.remove('today');
            }
        });
        
        // Add selected state (you could use a different class)
        console.log('Date selected:', this.textContent);
    });
});

// ============================================
// Search Functionality
// ============================================

const searchInputs = document.querySelectorAll('input[type="search"], .search-input');

searchInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Searching for:', searchTerm);
        
        // In a real application, you would filter content here
    });
    
    // Handle Enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Search submitted:', this.value);
        }
    });
});

// ============================================
// Document Actions
// ============================================

const documentButtons = document.querySelectorAll('.doc-actions button');

documentButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.getAttribute('aria-label');
        const documentTitle = this.closest('.document-item').querySelector('.doc-title').textContent;
        
        console.log(`${action}:`, documentTitle);
        
        // In a real application, you would handle the action here
        if (action.includes('View')) {
            alert(`Viewing: ${documentTitle}`);
        } else if (action.includes('Download')) {
            alert(`Downloading: ${documentTitle}`);
        }
    });
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just '#'
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        }
    });
});

// ============================================
// Scroll to Top Button Visibility
// ============================================

const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
    // Hide button initially
    scrollToTopBtn.style.display = 'none';
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
}

// ============================================
// Form Validation (if forms are added)
// ============================================

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--color-primary)';
            } else {
                input.style.borderColor = 'var(--color-border)';
            }
        });
        
        if (isValid) {
            console.log('Form submitted successfully');
            // Handle form submission
        } else {
            console.log('Form validation failed');
        }
    });
});

// ============================================
// Card Interactions
// ============================================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    });
});

// ============================================
// App Item Click Handling
// ============================================

const appItems = document.querySelectorAll('.app-item');

appItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // Only prevent default if it's a dummy link
        if (this.getAttribute('href') === '#application' || 
            this.getAttribute('href') === '#directory' ||
            this.getAttribute('href') === '#tweet' ||
            this.getAttribute('href') === '#dashboard' ||
            this.getAttribute('href') === '#holiday' ||
            this.getAttribute('href') === '#events' ||
            this.getAttribute('href') === '#ideas' ||
            this.getAttribute('href') === '#survey' ||
            this.getAttribute('href') === '#birthdays') {
            e.preventDefault();
            const appName = this.querySelector('.app-label').textContent;
            console.log('App clicked:', appName);
            alert(`Opening ${appName}...`);
        }
    });
});

// ============================================
// Gallery Item Interactions
// ============================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const galleryTitle = this.querySelector('.gallery-title').textContent;
        console.log('Gallery clicked:', galleryTitle);
        alert(`Opening gallery: ${galleryTitle}`);
    });
});

// ============================================
// Resource Item Click Handling
// ============================================

const resourceItems = document.querySelectorAll('.resource-item');

resourceItems.forEach(item => {
    item.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#resource') {
            e.preventDefault();
            const resourceName = this.querySelector('.resource-label').textContent;
            console.log('Resource clicked:', resourceName);
            alert(`Opening: ${resourceName}`);
        }
    });
});

// ============================================
// Responsive Utilities
// ============================================

function checkViewport() {
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Mobile view
        console.log('Mobile view active');
    } else if (width <= 1024) {
        // Tablet view
        console.log('Tablet view active');
    } else {
        // Desktop view
        console.log('Desktop view active');
    }
}

// Check on load
checkViewport();

// Check on resize (debounced)
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        checkViewport();
        
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    }, 250);
});

// ============================================
// Keyboard Navigation Enhancements
// ============================================

// Add keyboard support for custom buttons
const customButtons = document.querySelectorAll('[role="button"]');

customButtons.forEach(button => {
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// ============================================
// Loading State Management
// ============================================

function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// ============================================
// Local Storage for User Preferences
// ============================================

// Save user's last selected tab
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        localStorage.setItem('lastSelectedTab', index);
    });
});

// Restore last selected tab on page load
window.addEventListener('DOMContentLoaded', function() {
    const lastTab = localStorage.getItem('lastSelectedTab');
    if (lastTab !== null && tabs[lastTab]) {
        tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tabs[lastTab].classList.add('active');
        tabs[lastTab].setAttribute('aria-selected', 'true');
    }
});

// ============================================
// Performance Optimization
// ============================================

// Lazy load images if implemented
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Console Welcome Message
// ============================================

console.log('%c Mobile Creches Intranet Portal ', 'background: #b91c1c; color: white; padding: 10px; font-size: 16px; font-weight: bold;');
console.log('%c Version 1.0.0 ', 'background: #f3f4f6; color: #111827; padding: 5px; font-size: 12px;');
console.log('Portal loaded successfully! 🎉');

// ============================================
// Error Handling
// ============================================

window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ============================================
// Page Visibility API
// ============================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page is hidden');
        // Pause any animations or auto-refresh
    } else {
        console.log('Page is visible');
        // Resume animations or auto-refresh
    }
});

