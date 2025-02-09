const anniversaryText = "HAPPY 4TH ANNIVERSARY TO US";

// Function to animate text letter by letter
function animateText(text, elementId, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 0;

    const interval = setInterval(() => {
        if (index < text.length) {
            const span = document.createElement('span');
            span.textContent = text.charAt(index);
            span.style.opacity = '0';
            span.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
            element.appendChild(span);
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Function to create hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Random position and size
    const size = Math.random() * 20 + 20; // Random size between 20px and 40px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    
    // Position from bottom of screen
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random color variations
    const brightness = 50 + Math.random() * 30; // Varying brightness
    heart.style.background = `hsl(350, 100%, ${brightness}%)`; // Varying shades of red
    
    // Random animation duration
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

let isAnimating = false;

// Smooth scroll handling
window.addEventListener('scroll', () => {
    const envelopeSection = document.querySelector('.envelope-section');
    const rect = envelopeSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight * 0.8) {
        envelopeSection.classList.add('visible');
    }
});

// Enhanced envelope click handler
document.querySelector('.envelope').addEventListener('click', function(e) {
    if (isAnimating) return;
    isAnimating = true;
    
    const envelope = this;
    envelope.classList.add('opening');
    
    // First animation phase - opening
    setTimeout(() => {
        envelope.classList.add('open');
        
        // Second animation phase - letter coming out
        setTimeout(() => {
            envelope.classList.add('closing');
            
            // Final phase - redirect
            setTimeout(() => {
                // Create transition overlay
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    opacity: 0;
                    transition: opacity 1s ease;
                    z-index: 1000;
                `;
                document.body.appendChild(overlay);
                
                // Fade to white then redirect
                setTimeout(() => {
                    overlay.style.opacity = '1';
                    setTimeout(() => {
                        window.location.href = 'letter.html';
                    }, 1000);
                }, 50);
                
            }, 1000); // Time before redirect transition
        }, 1000); // Time letter is visible
    }, 500); // Initial opening time
});

// Smooth scroll function for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const envelopeSection = document.querySelector('.envelope-section');
    envelopeSection.scrollIntoView({ behavior: 'smooth' });
});

// Update window.onload
window.onload = () => {
    // Existing animations
    animateText(anniversaryText, 'anniversary-text');
    
    // Hearts animation
    setInterval(() => {
        for(let i = 0; i < 3; i++) {
            setTimeout(() => createHeart(), i * 100);
        }
    }, 300);
    
    // Background music
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5;
};

// Add this to your CSS file
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style); 