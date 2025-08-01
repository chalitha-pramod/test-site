// Adventure Activities Slider - Independent JavaScript
let currentAdventureSlideIndex = 1;
const totalAdventureSlidesCount = 6;

// Adventure slides data with unique structure
const adventureSlidesData = [
    {
        mainImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
        mainTitle: 'WHITE WATER RAFTING',
        mainSubtitle: 'Kithulgala, Sri Lanka',
        mainDescription: 'Navigate through challenging rapids and experience the thrill of white water rafting in the pristine waters of Kithulgala. Perfect for adventure enthusiasts seeking an unforgettable experience.',
        nextTitle: 'ROCK CLIMBING',
        nextSubtitle: 'Sigiriya, Cultural Triangle'
    },
    {
        mainImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
        mainTitle: 'ROCK CLIMBING',
        mainSubtitle: 'Sigiriya, Cultural Triangle',
        mainDescription: 'Scale the ancient rock fortress and experience the thrill of rock climbing with breathtaking views of the surrounding landscape. Challenge yourself on various difficulty levels.',
        nextTitle: 'HIKING',
        nextSubtitle: 'Ella, Hill Country'
    },
    {
        mainImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        mainTitle: 'HIKING',
        mainSubtitle: 'Ella, Hill Country',
        mainDescription: 'Trek through scenic mountain trails and discover hidden waterfalls, tea plantations, and panoramic viewpoints. Experience the natural beauty of Sri Lanka\'s hill country.',
        nextTitle: 'SURFING',
        nextSubtitle: 'Arugam Bay, East Coast'
    },
    {
        mainImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
        mainTitle: 'SURFING',
        mainSubtitle: 'Arugam Bay, East Coast',
        mainDescription: 'Ride the perfect waves at Arugam Bay, one of the world\'s top surfing destinations. Experience the thrill of surfing in crystal clear waters with consistent waves year-round.',
        nextTitle: 'SCUBA DIVING',
        nextSubtitle: 'Hikkaduwa, South Coast'
    },
    {
        mainImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
        mainTitle: 'SCUBA DIVING',
        mainSubtitle: 'Hikkaduwa, South Coast',
        mainDescription: 'Explore the underwater world of Sri Lanka\'s coral reefs. Discover colorful marine life, shipwrecks, and pristine coral formations in the warm waters of the Indian Ocean.',
        nextTitle: 'HOT AIR BALLOON',
        nextSubtitle: 'Sigiriya, Cultural Triangle'
    },
    {
        mainImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        mainTitle: 'HOT AIR BALLOON',
        mainSubtitle: 'Sigiriya, Cultural Triangle',
        mainDescription: 'Soar above the ancient landscapes in a hot air balloon. Witness breathtaking sunrise views over Sigiriya Rock, wildlife sanctuaries, and the stunning countryside from above.',
        nextTitle: 'WHITE WATER RAFTING',
        nextSubtitle: 'Kithulgala, Sri Lanka'
    }
];

// Main function to change adventure slides
function changeAdventureSlideDirection(direction) {
    // Calculate new slide number
    currentAdventureSlideIndex += direction;
    
    // Handle wrap-around
    if (currentAdventureSlideIndex > totalAdventureSlidesCount) {
        currentAdventureSlideIndex = 1;
    } else if (currentAdventureSlideIndex < 1) {
        currentAdventureSlideIndex = totalAdventureSlidesCount;
    }
    
    // Get current slide data
    const currentSlideData = adventureSlidesData[currentAdventureSlideIndex - 1];
    const nextSlideData = adventureSlidesData[currentAdventureSlideIndex % totalAdventureSlidesCount];
    
    // Update main slide
    const adventureMainSlideElement = document.getElementById('adventureMainSlideElement');
    const adventureMainOverlayElement = document.getElementById('adventureMainOverlayElement');
    
    if (adventureMainSlideElement && adventureMainOverlayElement) {
        adventureMainSlideElement.style.backgroundImage = `url('${currentSlideData.mainImage}')`;
        adventureMainOverlayElement.querySelector('.adventure-slide-description').textContent = currentSlideData.mainDescription;
        adventureMainOverlayElement.querySelector('.adventure-slide-title h2').textContent = currentSlideData.mainTitle;
        adventureMainOverlayElement.querySelector('.adventure-slide-title p').textContent = currentSlideData.mainSubtitle;
    }
    
    // Update next slide preview
    const adventureNextSlideElement = document.getElementById('adventureNextSlideElement');
    const adventureNextOverlayElement = document.getElementById('adventureNextOverlayElement');
    
    if (adventureNextSlideElement && adventureNextOverlayElement) {
        adventureNextSlideElement.style.backgroundImage = `url('${nextSlideData.mainImage}')`;
        adventureNextOverlayElement.querySelector('#adventureNextTitleElement').textContent = nextSlideData.nextTitle;
        adventureNextOverlayElement.querySelector('#adventureNextSubtitleElement').textContent = nextSlideData.nextSubtitle;
    }
}

// Initialize adventure slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Auto-advance adventure slides every 7 seconds (different from other sliders)
    setInterval(() => {
        changeAdventureSlideDirection(1);
    }, 7000);
    
    // Initialize first slide
    changeAdventureSlideDirection(0);
    
    // Add hover effect to make next slide more prominent on hover
    const nextSlideElement = document.getElementById('adventureNextSlideElement');
    if (nextSlideElement) {
        nextSlideElement.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
        });
        
        nextSlideElement.addEventListener('mouseleave', function() {
            this.style.opacity = '0.7';
        });
    }
}); 