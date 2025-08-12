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
    currentSlide += direction;
    
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    } else if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    
    updateSlideLayout();
    updateSlideIndicators();
    
    // Restart auto-play
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }
}

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    updateSlideLayout();
    updateSlideIndicators();
    
    // Restart auto-play
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }
}

function updateSlideIndicators() {
    const indicators = document.querySelectorAll('.slide-indicator');
    indicators.forEach((indicator, index) => {
        if (index + 1 === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Excursion carousel functionality
let currentExcursionSlide = 1;
const totalExcursionSlides = 3;

// Excursion slides data
const excursionSlides = [
    {
        mainImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
        mainTitle: 'RAFTING',
        mainSubtitle: 'Kithulgala, Sri Lanka',
        mainDescription: 'Ride the rapids of adventure in Kithulgala, Sri Lanka. Experience adrenaline-pumping white water rafting like never before.',
        nextTitle: 'WATERFALL',
        nextSubtitle: 'Ella, Hill Country'
    },
    {
        mainImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
        mainTitle: 'WATERFALL',
        nextSubtitle: 'Ella, Hill Country',
        mainDescription: 'Discover hidden waterfalls and natural wonders. Trek through pristine landscapes and experience the raw beauty of Sri Lanka\'s wilderness.',
        nextTitle: 'SAFARI',
        nextSubtitle: 'Yala National Park'
    },
    {
        mainImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        mainTitle: 'SAFARI',
        nextSubtitle: 'Yala National Park',
        mainDescription: 'Embark on an exciting wildlife safari through national parks. Spot elephants, leopards, and exotic birds in their natural habitat.',
        nextTitle: 'RAFTING',
        nextSubtitle: 'Kithulgala, Sri Lanka'
    }
];

function changeExcursionSlide(direction) {
    // Calculate new slide number
    currentExcursionSlide += direction;
    
    // Handle wrap-around
    if (currentExcursionSlide > totalExcursionSlides) {
        currentExcursionSlide = 1;
    } else if (currentExcursionSlide < 1) {
        currentExcursionSlide = totalExcursionSlides;
    }
    
    // Get current slide data
    const currentSlide = excursionSlides[currentExcursionSlide - 1];
    const nextSlide = excursionSlides[currentExcursionSlide % totalExcursionSlides];
    
    // Update main slide
    const mainSlide = document.getElementById('excursionMainSlide');
    const mainOverlay = document.getElementById('excursionMainOverlay');
    
    if (mainSlide && mainOverlay) {
        mainSlide.style.backgroundImage = `url('${currentSlide.mainImage}')`;
        mainOverlay.querySelector('.excursion-slide-description').textContent = currentSlide.mainDescription;
        mainOverlay.querySelector('.excursion-slide-title h2').textContent = currentSlide.mainTitle;
        mainOverlay.querySelector('.excursion-slide-title p').textContent = currentSlide.mainSubtitle;
    }
    
    // Update next slide preview
    const nextSlideElement = document.getElementById('excursionNextSlide');
    const nextOverlay = document.getElementById('excursionNextOverlay');
    
    if (nextSlideElement && nextOverlay) {
        nextSlideElement.style.backgroundImage = `url('${nextSlide.mainImage}')`;
        nextOverlay.querySelector('#excursionNextTitle').textContent = nextSlide.nextTitle;
        nextOverlay.querySelector('#excursionNextSubtitle').textContent = nextSlide.nextSubtitle;
    }
}

// Newsletter functionality
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

// Services Slider Functionality
let currentServicesSlide = 0;
const totalServicesSlides = 6;
let servicesAutoPlayInterval;

// Initialize services slider
document.addEventListener('DOMContentLoaded', function() {
    initializeServicesSlider();
    startServicesAutoPlay();
    generateServicesDots();
});

function initializeServicesSlider() {
    updateServicesSlide();
}

function servicesMoveSlide(direction) {
    // Clear auto-play interval
    if (servicesAutoPlayInterval) {
        clearInterval(servicesAutoPlayInterval);
    }
    
    currentServicesSlide += direction;
    
    // Loop through slides
    if (currentServicesSlide >= totalServicesSlides) {
        currentServicesSlide = 0;
    } else if (currentServicesSlide < 0) {
        currentServicesSlide = totalServicesSlides - 1;
    }
    
    updateServicesSlide();
    
    // Restart auto-play
    startServicesAutoPlay();
}

function updateServicesSlide() {
    const slider = document.getElementById('servicesSlider');
    if (slider) {
        const slideWidth = 100 / 3; // Show 3 slides at once
        const translateX = -(currentServicesSlide * slideWidth);
        slider.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        updateServicesDots();
    }
}

function generateServicesDots() {
    const dotsContainer = document.getElementById('servicesSliderDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < totalServicesSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `services-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                currentServicesSlide = i;
                updateServicesSlide();
                
                // Clear and restart auto-play
                if (servicesAutoPlayInterval) {
                    clearInterval(servicesAutoPlayInterval);
                }
                startServicesAutoPlay();
            });
            dotsContainer.appendChild(dot);
        }
    }
}

function updateServicesDots() {
    const dots = document.querySelectorAll('.services-dot');
    dots.forEach((dot, index) => {
        if (index === currentServicesSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startServicesAutoPlay() {
    servicesAutoPlayInterval = setInterval(function() {
        servicesMoveSlide(1);
    }, 4000);
}

// Pause auto-play on hover
document.addEventListener('DOMContentLoaded', function() {
    const servicesSlider = document.querySelector('.services-slider-container');
    if (servicesSlider) {
        servicesSlider.addEventListener('mouseenter', function() {
            if (servicesAutoPlayInterval) {
                clearInterval(servicesAutoPlayInterval);
            }
        });
        
        servicesSlider.addEventListener('mouseleave', function() {
            startServicesAutoPlay();
        });
    }
});

// Adventure Activities Slider Functionality
let currentAdventureSlide = 0;
const totalAdventureSlides = 6;
let adventureAutoPlayInterval;

// Initialize adventure activities slider
document.addEventListener('DOMContentLoaded', function() {
    initializeAdventureSlider();
    startAdventureAutoPlay();
    generateAdventureDots();
});

function initializeAdventureSlider() {
    updateAdventureSlide();
}

function adventureMoveSlide(direction) {
    // Clear auto-play interval
    if (adventureAutoPlayInterval) {
        clearInterval(adventureAutoPlayInterval);
    }
    
    currentAdventureSlide += direction;
    
    // Loop through slides
    if (currentAdventureSlide >= totalAdventureSlides) {
        currentAdventureSlide = 0;
    } else if (currentAdventureSlide < 0) {
        currentAdventureSlide = totalAdventureSlides - 1;
    }
    
    updateAdventureSlide();
    
    // Restart auto-play
    startAdventureAutoPlay();
}

function updateAdventureSlide() {
    const slider = document.getElementById('adventureSlider');
    if (slider) {
        const slideWidth = 100 / 3; // Show 3 slides at once
        const translateX = -(currentAdventureSlide * slideWidth);
        slider.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        updateAdventureDots();
    }
}

function generateAdventureDots() {
    const dotsContainer = document.getElementById('adventureSliderDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < totalAdventureSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `adventure-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                currentAdventureSlide = i;
                updateAdventureSlide();
                
                // Clear and restart auto-play
                if (adventureAutoPlayInterval) {
                    clearInterval(adventureAutoPlayInterval);
                }
                startAdventureAutoPlay();
            });
            dotsContainer.appendChild(dot);
        }
    }
}

function updateAdventureDots() {
    const dots = document.querySelectorAll('.adventure-dot');
    dots.forEach((dot, index) => {
        if (index === currentAdventureSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startAdventureAutoPlay() {
    adventureAutoPlayInterval = setInterval(function() {
        adventureMoveSlide(1);
    }, 4000);
}

// Pause auto-play on hover for adventure activities
document.addEventListener('DOMContentLoaded', function() {
    const adventureSlider = document.querySelector('.adventure-slider-container');
    if (adventureSlider) {
        adventureSlider.addEventListener('mouseenter', function() {
            if (adventureAutoPlayInterval) {
                clearInterval(adventureAutoPlayInterval);
            }
        });
        
        adventureSlider.addEventListener('mouseleave', function() {
            startAdventureAutoPlay();
        });
    }
});

// More Like These Adventures Slider Functionality
let currentMoreAdventuresSlide = 0;
const totalMoreAdventuresSlides = 6;
let moreAdventuresAutoPlayInterval;

// Initialize more adventures slider
document.addEventListener('DOMContentLoaded', function() {
    initializeMoreAdventuresSlider();
    startMoreAdventuresAutoPlay();
});

function initializeMoreAdventuresSlider() {
    updateMoreAdventuresSlide();
}

function moreAdventuresMoveSlide(direction) {
    // Clear auto-play interval
    if (moreAdventuresAutoPlayInterval) {
        clearInterval(moreAdventuresAutoPlayInterval);
    }
    
    currentMoreAdventuresSlide += direction;
    
    // Loop through slides
    if (currentMoreAdventuresSlide >= totalMoreAdventuresSlides) {
        currentMoreAdventuresSlide = 0;
    } else if (currentMoreAdventuresSlide < 0) {
        currentMoreAdventuresSlide = totalMoreAdventuresSlides - 1;
    }
    
    updateMoreAdventuresSlide();
    
    // Restart auto-play
    startMoreAdventuresAutoPlay();
}

function updateMoreAdventuresSlide() {
    const slider = document.querySelector('.more-adventures-slider');
    if (slider) {
        const slideWidth = 100 / 3; // Show 3 slides at once
        const translateX = -(currentMoreAdventuresSlide * slideWidth);
        slider.style.transform = `translateX(${translateX}%)`;
    }
}

function startMoreAdventuresAutoPlay() {
    moreAdventuresAutoPlayInterval = setInterval(function() {
        moreAdventuresMoveSlide(1);
    }, 4000);
}

// Pause auto-play on hover for more adventures
document.addEventListener('DOMContentLoaded', function() {
    const moreAdventuresSlider = document.querySelector('.more-adventures-slider-container');
    if (moreAdventuresSlider) {
        moreAdventuresSlider.addEventListener('mouseenter', function() {
            if (moreAdventuresAutoPlayInterval) {
                clearInterval(moreAdventuresAutoPlayInterval);
            }
        });
        
        moreAdventuresSlider.addEventListener('mouseleave', function() {
            startMoreAdventuresAutoPlay();
        });
    }
});

// More Packages Slider Functionality
let currentMorePackagesSlide = 0;
const totalMorePackagesSlides = 6;
let morePackagesAutoPlayInterval;

// Initialize more packages slider
document.addEventListener('DOMContentLoaded', function() {
    initializeMorePackagesSlider();
    startMorePackagesAutoPlay();
});

function initializeMorePackagesSlider() {
    updateMorePackagesSlide();
}

function morePackagesMoveSlide(direction) {
    // Clear auto-play interval
    if (morePackagesAutoPlayInterval) {
        clearInterval(morePackagesAutoPlayInterval);
    }
    
    // Move one slide at a time
    currentMorePackagesSlide += direction;
    
    // Loop through slides
    if (currentMorePackagesSlide >= totalMorePackagesSlides) {
        currentMorePackagesSlide = 0;
    } else if (currentMorePackagesSlide < 0) {
        currentMorePackagesSlide = totalMorePackagesSlides - 1;
    }
    
    updateMorePackagesSlide();
    
    // Restart auto-play
    startMorePackagesAutoPlay();
}

function updateMorePackagesSlide() {
    const slider = document.querySelector('.more-packages-slider');
    if (slider) {
        // Move one slide at a time instead of 3
        const slideWidth = 100 / 3; // Each slide takes 1/3 of the container
        const translateX = -(currentMorePackagesSlide * slideWidth);
        slider.style.transform = `translateX(${translateX}%)`;
    }
}

function startMorePackagesAutoPlay() {
    morePackagesAutoPlayInterval = setInterval(function() {
        morePackagesMoveSlide(1); // Move one slide at a time
    }, 4000);
}

// Pause auto-play on hover for more packages
document.addEventListener('DOMContentLoaded', function() {
    const morePackagesSlider = document.querySelector('.more-packages-slider-container');
    if (morePackagesSlider) {
        morePackagesSlider.addEventListener('mouseenter', function() {
            if (morePackagesAutoPlayInterval) {
                clearInterval(morePackagesAutoPlayInterval);
            }
        });
        
        morePackagesSlider.addEventListener('mouseleave', function() {
            startMorePackagesAutoPlay();
        });
    }
});

// Hero Slider Functionality
let currentHeroSlide = 0;
const totalHeroSlides = 6;
let heroAutoPlayInterval;

// Initialize hero slider
document.addEventListener('DOMContentLoaded', function() {
    initializeHeroSlider();
    startHeroAutoPlay();
});

function initializeHeroSlider() {
    updateHeroSlide();
}

function changeHeroSlide(direction) {
    // Clear auto-play interval
    if (heroAutoPlayInterval) {
        clearInterval(heroAutoPlayInterval);
    }
    
    currentHeroSlide += direction;
    
    // Loop through slides
    if (currentHeroSlide >= totalHeroSlides) {
        currentHeroSlide = 0;
    } else if (currentHeroSlide < 0) {
        currentHeroSlide = totalHeroSlides - 1;
    }
    
    updateHeroSlide();
    
    // Restart auto-play
    startHeroAutoPlay();
}

function updateHeroSlide() {
    // Update hero slide content here
    // This function can be customized based on your hero slider structure
}

function startHeroAutoPlay() {
    heroAutoPlayInterval = setInterval(function() {
        changeHeroSlide(1);
    }, 5000);
}

// Pause auto-play on hover for hero slider
document.addEventListener('DOMContentLoaded', function() {
    const heroSlider = document.querySelector('.hero-slider-wrapper');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', function() {
            if (heroAutoPlayInterval) {
                clearInterval(heroAutoPlayInterval);
            }
        });
        
        heroSlider.addEventListener('mouseleave', function() {
            startHeroAutoPlay();
        });
    }
});

// Global error handling for undefined functions
window.addEventListener('error', function(e) {
    if (e.message.includes('is not defined')) {
        console.warn('Function not defined, this is normal during development:', e.message);
    }
});

// Ensure all functions are available globally
window.morePackagesMoveSlide = morePackagesMoveSlide;
window.moreAdventuresMoveSlide = moreAdventuresMoveSlide;
window.servicesMoveSlide = servicesMoveSlide;
window.adventureMoveSlide = adventureMoveSlide;
window.changeHeroSlide = changeHeroSlide;
window.changeExcursionSlide = changeExcursionSlide;
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;