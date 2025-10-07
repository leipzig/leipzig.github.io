// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-links a[href^="#"]');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Loading screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
    
    if (loadingScreen && mainContent) {
        // Hide loading screen after a short delay
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.opacity = '1';
            }, 500);
        }, 1000);
    }
});

// Publication search and filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('publication-search');
    const sortSelect = document.getElementById('sort-by');
    const publicationsContainer = document.getElementById('publications-container');
    
    if (searchInput && publicationsContainer) {
        const publicationItems = Array.from(publicationsContainer.querySelectorAll('.publication-item'));
        
        function filterPublications() {
            const searchTerm = searchInput.value.toLowerCase();
            const sortBy = sortSelect ? sortSelect.value : 'year-desc';
            
            // Filter publications
            const filteredItems = publicationItems.filter(item => {
                const title = item.querySelector('.publication-title')?.textContent.toLowerCase() || '';
                const authors = item.querySelector('.publication-authors')?.textContent.toLowerCase() || '';
                const venue = item.querySelector('.publication-venue')?.textContent.toLowerCase() || '';
                
                return title.includes(searchTerm) || authors.includes(searchTerm) || venue.includes(searchTerm);
            });
            
            // Sort publications
            filteredItems.sort((a, b) => {
                switch (sortBy) {
                    case 'year-asc':
                        return parseInt(a.dataset.year || '0') - parseInt(b.dataset.year || '0');
                    case 'year-desc':
                        return parseInt(b.dataset.year || '0') - parseInt(a.dataset.year || '0');
                    case 'title':
                        return (a.dataset.title || '').localeCompare(b.dataset.title || '');
                    case 'journal':
                        return (a.dataset.journal || '').localeCompare(b.dataset.journal || '');
                    default:
                        return 0;
                }
            });
            
            // Clear container and add filtered/sorted items
            publicationsContainer.innerHTML = '';
            filteredItems.forEach(item => {
                publicationsContainer.appendChild(item);
            });
            
            // Show message if no results
            if (filteredItems.length === 0) {
                publicationsContainer.innerHTML = '<p class="no-results">No publications found matching your search.</p>';
            }
        }
        
        searchInput.addEventListener('input', filterPublications);
        if (sortSelect) {
            sortSelect.addEventListener('change', filterPublications);
        }
    }
});

// Read more functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const aboutPreview = document.querySelector('.about-preview');
    const aboutFull = document.querySelector('.about-full');
    
    if (readMoreBtn && aboutPreview && aboutFull) {
        readMoreBtn.textContent = 'Read More';
        let isExpanded = false;
        
        readMoreBtn.addEventListener('click', function() {
            if (isExpanded) {
                aboutFull.style.display = 'none';
                aboutPreview.style.display = 'block';
                readMoreBtn.textContent = 'Read More';
            } else {
                aboutFull.style.display = 'block';
                aboutPreview.style.display = 'none';
                readMoreBtn.textContent = 'Read Less';
            }
            isExpanded = !isExpanded;
        });
    }
});

// Add some animation effects
document.addEventListener('DOMContentLoaded', function() {
    // Fade in sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Make hero section visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});