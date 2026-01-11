// ===========================
// Main JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initHero();
    initFeaturedVideo();
    initCarousel();
    initCategories();
    initProgress();
    initTestimonials();
    initModal();
    initSmoothScroll();
});

// ===========================
// Header Component
// ===========================

function initHeader() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close menu when clicking nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
    });
}

// ===========================
// Hero Component
// ===========================

function initHero() {
    const btnGetStarted = document.getElementById('btnGetStarted');
    const emailInput = document.getElementById('emailInput');
    
    if (btnGetStarted) {
        btnGetStarted.addEventListener('click', function() {
            const email = emailInput.value;
            if (email && isValidEmail(email)) {
                alert('Thank you for your interest! We\'ll be in touch soon.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===========================
// Featured Video Component
// ===========================

function initFeaturedVideo() {
    const btnPlay = document.getElementById('btnPlay');
    const btnInfo = document.getElementById('btnInfo');
    const btnCloseInfo = document.getElementById('btnCloseInfo');
    const videoInfo = document.getElementById('videoInfo');
    
    if (btnPlay) {
        btnPlay.addEventListener('click', function() {
            alert('Video player would open here. In a full implementation, this would start the course video.');
        });
    }
    
    if (btnInfo) {
        btnInfo.addEventListener('click', function() {
            videoInfo.style.display = 'block';
            videoInfo.classList.add('animate-fade-in');
        });
    }
    
    if (btnCloseInfo) {
        btnCloseInfo.addEventListener('click', function() {
            videoInfo.style.display = 'none';
        });
    }
}

// ===========================
// Carousel Component
// ===========================

function initCarousel() {
    const carousel = document.getElementById('carousel');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    
    if (!carousel) return;
    
    // Render video cards
    renderVideoCards();
    
    // Carousel navigation
    if (btnPrev) {
        btnPrev.addEventListener('click', function() {
            carousel.scrollBy({
                left: -340,
                behavior: 'smooth'
            });
        });
    }
    
    if (btnNext) {
        btnNext.addEventListener('click', function() {
            carousel.scrollBy({
                left: 340,
                behavior: 'smooth'
            });
        });
    }
}

function renderVideoCards() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;
    
    carousel.innerHTML = videoCardsData.map(card => `
        <div class="video-card">
            <img src="${card.image}" alt="${card.title}" class="video-card-image">
            <div class="video-card-number">${card.id}</div>
            ${card.progress > 0 ? `
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${card.progress}%"></div>
                </div>
            ` : ''}
            <div class="video-card-overlay">
                <h3 class="video-card-title">${card.title}</h3>
                <p class="video-card-description">${card.description}</p>
                <div class="video-card-meta">
                    <span>${card.duration}</span>
                    <span>•</span>
                    <span class="border">HD</span>
                    ${card.progress > 0 ? `
                        <span>•</span>
                        <span style="color: #d8b4fe">${card.progress}% complete</span>
                    ` : ''}
                </div>
                <div class="video-card-buttons">
                    <button class="video-card-btn primary" onclick="playVideo('${card.title}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        Play
                    </button>
                    <button class="video-card-btn secondary" onclick="addToList('${card.title}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function playVideo(title) {
    alert(`Playing: ${title}`);
}

function addToList(title) {
    alert(`Added "${title}" to your list!`);
}

// ===========================
// Categories Component
// ===========================

function initCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = categoriesData.map(category => `
        <div class="category-card">
            <img src="${category.image}" alt="${category.title}" class="category-image">
            <div class="category-overlay" style="background: ${category.gradient}"></div>
            <div class="category-content">
                <div class="category-icon">${category.icon}</div>
                <div>
                    <h3 class="category-title">${category.title}</h3>
                    <p class="category-count">${category.count}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ===========================
// Progress Component
// ===========================

function initProgress() {
    const progressList = document.getElementById('progressList');
    if (!progressList) return;
    
    progressList.innerHTML = progressCoursesData.map(course => `
        <div class="progress-item animate-fade-in">
            <div class="progress-item-header">
                <h4 class="progress-item-title">${course.title}</h4>
                <span class="progress-item-percent">${course.progress}%</span>
            </div>
            <div class="progress-item-bar">
                <div class="progress-item-fill" style="width: ${course.progress}%"></div>
            </div>
            <div class="progress-item-actions">
                <button class="btn-continue" onclick="continueCourse('${course.title}')">
                    Continue Learning
                </button>
            </div>
        </div>
    `).join('');
    
    // Animate progress bars on load
    setTimeout(() => {
        document.querySelectorAll('.progress-item-fill').forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
        });
    }, 100);
}

function continueCourse(title) {
    alert(`Continuing: ${title}`);
}

// ===========================
// Testimonials Component
// ===========================

let currentTestimonialIndex = 0;

function initTestimonials() {
    const testimonialCard = document.getElementById('testimonialCard');
    const testimonialDots = document.getElementById('testimonialDots');
    const btnPrevTestimonial = document.getElementById('btnPrevTestimonial');
    const btnNextTestimonial = document.getElementById('btnNextTestimonial');
    
    if (!testimonialCard) return;
    
    // Render initial testimonial
    renderTestimonial();
    
    // Render dots
    if (testimonialDots) {
        testimonialDots.innerHTML = testimonialsData.map((_, index) => `
            <div class="dot ${index === 0 ? 'active' : ''}" onclick="goToTestimonial(${index})"></div>
        `).join('');
    }
    
    // Navigation
    if (btnPrevTestimonial) {
        btnPrevTestimonial.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
            renderTestimonial();
            updateDots();
        });
    }
    
    if (btnNextTestimonial) {
        btnNextTestimonial.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
            renderTestimonial();
            updateDots();
        });
    }
    
    // Auto-rotate every 5 seconds
    setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
        renderTestimonial();
        updateDots();
    }, 5000);
}

function renderTestimonial() {
    const testimonialCard = document.getElementById('testimonialCard');
    if (!testimonialCard) return;
    
    const testimonial = testimonialsData[currentTestimonialIndex];
    const stars = '★'.repeat(testimonial.rating);
    
    testimonialCard.innerHTML = `
        <div class="testimonial-quote">"</div>
        <div class="testimonial-header">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
            <div class="testimonial-info">
                <h3>${testimonial.name}</h3>
                <p class="testimonial-role">${testimonial.role}</p>
                <div class="testimonial-rating">
                    <span class="star">${stars}</span>
                </div>
            </div>
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
    `;
    
    testimonialCard.classList.remove('animate-fade-in');
    void testimonialCard.offsetWidth; // Trigger reflow
    testimonialCard.classList.add('animate-fade-in');
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialIndex);
    });
}

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    renderTestimonial();
    updateDots();
}

// ===========================
// Modal Component
// ===========================

function initModal() {
    const btnSignIn = document.getElementById('btnSignIn');
    const modal = document.getElementById('signInModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const signInForm = document.getElementById('signInForm');
    
    // Open modal
    if (btnSignIn) {
        btnSignIn.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Form submission
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signInEmail').value;
            const password = document.getElementById('signInPassword').value;
            
            if (email && password) {
                alert('Sign in successful! (Demo only)');
                closeModal();
                signInForm.reset();
            }
        });
    }
}

// ===========================
// Smooth Scroll
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===========================
// Utility Functions
// ===========================

// Add entrance animations on scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.video-card, .category-card, .stat-card, .reason-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations after DOM is ready
setTimeout(initScrollAnimations, 100);

// Console message
console.log('%c🧠 StrokeAware Education Platform', 'font-size: 20px; font-weight: bold; color: #9333ea;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #2563eb;');
