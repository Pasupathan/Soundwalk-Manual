// Interactive Soundwalk Manual - JavaScript

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCodeToggle();
    initializeScrollEffects();
});

// Navigation between sections
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Scroll to top of content
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// Code container toggle functionality
function toggleCode(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.classList.toggle('hidden');
    }
}

function initializeCodeToggle() {
    // Already handled by onclick in HTML
    console.log('Code toggle initialized');
}

// Copy code to clipboard
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    if (codeElement) {
        const code = codeElement.textContent;
        
        navigator.clipboard.writeText(code).then(function() {
            // Show success feedback
            const copyBtn = event.target;
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓ Copied!';
            copyBtn.style.background = '#27AE60';
            
            setTimeout(function() {
                copyBtn.textContent = originalText;
                copyBtn.style.background = '';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy code:', err);
            alert('Failed to copy code. Please try selecting and copying manually.');
        });
    }
}

// Smooth scroll effects
function initializeScrollEffects() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Mobile menu toggle (for responsive design)
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
}

// Search functionality (optional enhancement)
function searchManual(query) {
    // Implementation for searching through manual content
    console.log('Searching for:', query);
}

// Progress tracking
function updateProgress() {
    const totalSteps = document.querySelectorAll('.nav-link').length;
    const completedSteps = document.querySelectorAll('.nav-link.completed').length;
    const progress = (completedSteps / totalSteps) * 100;
    
    console.log('Progress:', progress + '%');
    return progress;
}

// Mark section as completed
function markCompleted(sectionId) {
    const navLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (navLink) {
        navLink.classList.add('completed');
        updateProgress();
    }
}

// Export functionality
function exportSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const content = section.innerHTML;
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${sectionId}_section.html`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Print section
function printSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Section</title>');
        printWindow.document.write('<link rel="stylesheet" href="styles.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(section.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}

// Initialize checklist functionality
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        // Load saved state from localStorage
        const checkboxId = checkbox.id || checkbox.parentElement.textContent.trim();
        const saved = localStorage.getItem(`checkbox_${checkboxId}`);
        if (saved === 'true') {
            checkbox.checked = true;
        }
        
        // Save state on change
        checkbox.addEventListener('change', function() {
            localStorage.setItem(`checkbox_${checkboxId}`, this.checked);
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const activeSection = document.querySelector('.section.active');
    
    if (e.altKey && e.key === 'ArrowRight') {
        // Next section
        const nextLink = document.querySelector('.nav-link.active').parentElement.nextElementSibling;
        if (nextLink) {
            nextLink.querySelector('.nav-link').click();
        }
    } else if (e.altKey && e.key === 'ArrowLeft') {
        // Previous section
        const prevLink = document.querySelector('.nav-link.active').parentElement.previousElementSibling;
        if (prevLink) {
            prevLink.querySelector('.nav-link').click();
        }
    }
});