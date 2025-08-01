// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add loading animation for the hero section
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Carousel functionality
let currentSlide = 1;
const totalSlides = 3;
let autoPlayInterval;

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    startAutoPlay();
});

function initializeCarousel() {
    updateSlideIndicators();
    updateSlideLayout();
}

function updateSlideLayout() {
    const mainSlides = document.querySelectorAll('.carousel-slide.main-slide');
    const sideSlides = document.querySelectorAll('.carousel-slide.side-slide');
    const hiddenSlides = document.querySelectorAll('.carousel-slide.hidden-slide');
    
    // Reset all slides
    mainSlides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.transform = 'translateX(-100%)';
        slide.style.opacity = '0';
    });
    
    sideSlides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.transform = 'translateX(100%)';
        slide.style.opacity = '0';
    });
    
    hiddenSlides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
    });
    
    // Set current slide as main slide
    if (mainSlides[currentSlide - 1]) {
        mainSlides[currentSlide - 1].classList.add('active');
        mainSlides[currentSlide - 1].style.transform = 'translateX(0)';
        mainSlides[currentSlide - 1].style.opacity = '1';
    }
    
    // Set next slide as side slide
    const nextSlideIndex = currentSlide % totalSlides;
    if (sideSlides[nextSlideIndex]) {
        sideSlides[nextSlideIndex].classList.add('active');
        sideSlides[nextSlideIndex].style.transform = 'translateX(0)';
        sideSlides[nextSlideIndex].style.opacity = '1';
    }
}

function changeSlide(direction) {
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from current indicator
    indicators[currentSlide - 1].classList.remove('active');
    
    // Calculate new slide index
    currentSlide += direction;
    
    // Handle wrap-around
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    } else if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    
    // Add active class to new indicator
    indicators[currentSlide - 1].classList.add('active');
    
    // Update slide layout
    updateSlideLayout();
    
    // Reset auto-play timer
    resetAutoPlay();
}

function goToSlide(slideNumber) {
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from current indicator
    indicators[currentSlide - 1].classList.remove('active');
    
    // Set new slide
    currentSlide = slideNumber;
    
    // Add active class to new indicator
    indicators[currentSlide - 1].classList.add('active');
    
    // Update slide layout
    updateSlideLayout();
    
    // Reset auto-play timer
    resetAutoPlay();
}

function updateSlideIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide - 1) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Pause auto-play when hovering over carousel
document.addEventListener('DOMContentLoaded', function() {
    const carouselSection = document.querySelector('.carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', function() {
            clearInterval(autoPlayInterval);
        });
        
        carouselSection.addEventListener('mouseleave', function() {
            startAutoPlay();
        });
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
    const carouselSection = document.querySelector('.carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carouselSection.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Excursions Carousel functionality
let currentExcursionSlide = 1;
const totalExcursionSlides = 3;
let excursionAutoPlayInterval;

// Initialize excursions carousel
document.addEventListener('DOMContentLoaded', function() {
    initializeExcursionCarousel();
    startExcursionAutoPlay();
});

function initializeExcursionCarousel() {
    // Initial setup
}

function changeExcursionSlide(direction) {
    const slides = document.querySelectorAll('.excursions-slide');
    
    // Remove active class from current slide
    slides[currentExcursionSlide - 1].classList.remove('active');
    
    // Calculate new slide index
    currentExcursionSlide += direction;
    
    // Handle wrap-around
    if (currentExcursionSlide > totalExcursionSlides) {
        currentExcursionSlide = 1;
    } else if (currentExcursionSlide < 1) {
        currentExcursionSlide = totalExcursionSlides;
    }
    
    // Add active class to new slide
    slides[currentExcursionSlide - 1].classList.add('active');
    
    // Reset auto-play timer
    resetExcursionAutoPlay();
}

function startExcursionAutoPlay() {
    excursionAutoPlayInterval = setInterval(() => {
        changeExcursionSlide(1);
    }, 6000); // Change slide every 6 seconds
}

function resetExcursionAutoPlay() {
    clearInterval(excursionAutoPlayInterval);
    startExcursionAutoPlay();
}

// Pause excursions auto-play when hovering
document.addEventListener('DOMContentLoaded', function() {
    const excursionsCarousel = document.querySelector('.excursions-carousel');
    if (excursionsCarousel) {
        excursionsCarousel.addEventListener('mouseenter', function() {
            clearInterval(excursionAutoPlayInterval);
        });
        
        excursionsCarousel.addEventListener('mouseleave', function() {
            startExcursionAutoPlay();
        });
    }
});

// Touch/swipe support for excursions carousel
let excursionTouchStartX = 0;
let excursionTouchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
    const excursionsCarousel = document.querySelector('.excursions-carousel');
    if (excursionsCarousel) {
        excursionsCarousel.addEventListener('touchstart', function(e) {
            excursionTouchStartX = e.changedTouches[0].screenX;
        });
        
        excursionsCarousel.addEventListener('touchend', function(e) {
            excursionTouchEndX = e.changedTouches[0].screenX;
            handleExcursionSwipe();
        });
    }
});

function handleExcursionSwipe() {
    const swipeThreshold = 50;
    const diff = excursionTouchStartX - excursionTouchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeExcursionSlide(1);
        } else {
            // Swipe right - previous slide
            changeExcursionSlide(-1);
        }
    }
}

// Newsletter form functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('.newsletter-input');
            const email = emailInput.value.trim();
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email) {
                showNewsletterMessage('Please enter your email address.', 'error');
                return;
            }
            
            if (!emailRegex.test(email)) {
                showNewsletterMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.newsletter-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Signing up...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNewsletterMessage('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});

function showNewsletterMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.newsletter-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `newsletter-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 300);
    }, 5000);
}

// Add CSS animations for newsletter messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 