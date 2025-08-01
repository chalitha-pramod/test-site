// Hero Slider Data
const heroSlides = [
    {
        image: 'images/work-1.jpg',
        description: 'Embark on a wild adventure amidst pristine landscapes, encountering diverse flora and fauna. Nature\'s wonders await in this immersive journey of discovery and awe.',
        button: 'Explore the Sri Lankan wild',
        title: 'WILD LIFE',
        subtitle: 'Minneriya National Park, Dambulla'
    },
    {
        image: 'images/work-2.jpg',
        description: 'Discover the misty hills and tea estates of Nuwara Eliya. Experience the serene beauty of Sri Lanka\'s hill country with its cool climate and breathtaking vistas.',
        button: 'Visit Tea Country',
        title: 'TEA COUNTRY',
        subtitle: 'Nuwara Eliya, Hill Country'
    },
    {
        image: 'images/work-3.jpg',
        description: 'Relax on pristine beaches with crystal clear waters. Experience the perfect blend of sun, sand, and sea in Sri Lanka\'s coastal paradise.',
        button: 'Explore Beaches',
        title: 'BEACH PARADISE',
        subtitle: 'Southern Coast, Sri Lanka'
    },
    {
        image: 'images/work-4.jpg',
        description: 'Immerse yourself in ancient temples and rich traditions. Discover the spiritual heritage and cultural wonders that make Sri Lanka truly unique.',
        button: 'Discover Culture',
        title: 'CULTURAL HERITAGE',
        subtitle: 'Ancient Cities, Sri Lanka'
    },
    {
        image: 'images/work-5.jpg',
        description: 'Thrilling activities from white water rafting to hiking. Push your limits and create unforgettable memories with exciting adventure sports.',
        button: 'Start Adventure',
        title: 'ADVENTURE SPORTS',
        subtitle: 'Kithulgala, Sri Lanka'
    }
];

let currentSlideIndex = 0;
let autoSlideInterval;

// Global function for onclick attributes
function changeHeroSlide(direction) {
    console.log('changeHeroSlide called with direction:', direction);
    
    // Clear auto-slide interval
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
    
    currentSlideIndex += direction;
    
    // Loop through slides
    if (currentSlideIndex >= heroSlides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = heroSlides.length - 1;
    }
    
    updateHeroSlide();
    
    // Restart auto-slide
    startAutoSlide();
}

       function updateHeroSlide() {
           const slide = heroSlides[currentSlideIndex];
           
           console.log('Updating slide to index:', currentSlideIndex, 'with data:', slide);
           
           const mainSlide = document.getElementById('heroMainSlide');
           const overlay = document.getElementById('heroMainOverlay');
           
           if (!mainSlide || !overlay) {
               console.error('Required elements not found!');
               return;
           }
           
           // Update main slide
           mainSlide.style.backgroundImage = `url('${slide.image}')`;
           
           // Update main slide content
           overlay.innerHTML = `
               <div class="hero-slide-bottom">
                   <div class="hero-slide-content">
                       <p class="hero-slide-description">
                           ${slide.description}
                       </p>
                       <a href="#" class="btn btn-explore-wild">${slide.button}</a>
                   </div>
                   <div class="hero-slide-title">
                       <h2>${slide.title}</h2>
                       <p>${slide.subtitle}</p>
                   </div>
               </div>
           `;
       }

function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        changeHeroSlide(1);
    }, 5000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing hero slider');
    
    // Initialize the slider
    updateHeroSlide();
    
    // Start auto-slide
    startAutoSlide();
    
    // Add click event listeners for buttons
    const prevBtn = document.querySelector('.hero-nav-prev');
    const nextBtn = document.querySelector('.hero-nav-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            changeHeroSlide(-1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            changeHeroSlide(1);
        });
    }
    
    console.log('Hero slider initialized successfully');
});

// Also initialize when jQuery is ready (backup)
if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(function() {
        console.log('jQuery ready, initializing hero slider');
        
        // Initialize the slider
        updateHeroSlide();
        
        // Start auto-slide
        startAutoSlide();
        
        // Add jQuery click handlers as backup
        jQuery('.hero-nav-btn').on('click', function() {
            const direction = jQuery(this).hasClass('hero-nav-prev') ? -1 : 1;
            console.log('jQuery button clicked, direction:', direction);
            changeHeroSlide(direction);
        });
        
        console.log('jQuery hero slider initialized successfully');
    });
} 