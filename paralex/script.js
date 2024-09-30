// Get the shark, boat, and atlantis text elements
let shark = document.getElementById('shark');
let boat = document.getElementById('boat');
let atlantisText = document.getElementById('atlantis-text');

// Function to detect scrolling and move the shark, boat, and atlantis text
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let scrollFactor = value / maxScroll;

    let sharkMovement = value * -0.3;
    shark.style.transform = `translateX(${sharkMovement}px)`;
    
    let sharkMovementdown = value * 1;
    shark.style.transform = `translateY(${sharkMovementdown}px)`; 

    let boatMovement = scrollFactor * 1000;
    boat.style.transform = `translateY(${boatMovement}px)`; 

    // Show Atlantis text when scrolled into view
    if (value > window.innerHeight * 0.5) { // Adjust threshold as needed
        atlantisText.style.opacity = 1; // Make it visible
        atlantisText.style.transform = `translateX(0)`; // Move it into view
    } else {
        atlantisText.style.opacity = 0; // Hide it
        atlantisText.style.transform = `translateX(50px)`; // Reset position
    }
});
