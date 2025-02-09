// Text to be animated
const text1 = "SO YOU FORGET THIS YEAR ALSO STILL I WAITED WHOLE DAY";
const text2 = "IDK why this happens to me every year still i expect from you. I think you forgot or maybe you were waiting for me to say as i was doing... SO AFTER EVERYTHING ITS ME WHO REMEMBERED... :)";

// Function to animate text letter by letter
function animateText(text, elementId, delay = 50, startDelay = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const element = document.getElementById(elementId);
            let index = 0;

            const interval = setInterval(() => {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, delay);
        }, startDelay);
    });
}

// Create floating particles
function createParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random starting position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Random animation duration
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        document.body.appendChild(particle);
    }
}

// Start animations when page loads
window.onload = async () => {
    createParticles();
    await animateText(text1, 'text1');
    await animateText(text2, 'text2', 50, 1000);
    
    // Wait for 7 seconds after messages complete
    setTimeout(() => {
        window.location.href = 'anniversary.html';
    }, 4000);
}; 