// Get elements
let shark = document.getElementById('shark');
let boat = document.getElementById('boat');
let atlantisText = document.getElementById('atlantis-text');

let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave1_2 = document.getElementById('wave1-2');
let wave2_2 = document.getElementById('wave2-2');
let wave1_3 = document.getElementById('wave1-3');
let wave2_3 = document.getElementById('wave2-3');
let wave1_4 = document.getElementById('wave1-4');
let wave2_4 = document.getElementById('wave2-4');

// Function to detect scrolling and move the elements
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let scrollFactor = value / maxScroll;

    // Shark and boat movement
    let sharkMovement = value * -0.3;
    let boatMovement = scrollFactor * 1000;
    shark.style.transform = `translateX(${sharkMovement}px) translateY(${value}px)`;
    boat.style.transform = `translateY(${boatMovement}px)`;

    // Move waves for parallax effect
    wave1.style.transform = `translateX(${value * 0.3}px)`;
    wave2.style.transform = `translateX(${value * -0.3}px)`;
    wave1_2.style.transform = `translateX(${value * 0.5}px)`;
    wave2_2.style.transform = `translateX(${value * -0.5}px)`;
    wave1_3.style.transform = `translateX(${value * 0.4}px)`;
    wave2_3.style.transform = `translateX(${value * -0.4}px)`;
    wave1_4.style.transform = `translateX(${value * 0.6}px)`;
    wave2_4.style.transform = `translateX(${value * -0.6}px)`;

    // Show Atlantis text when scrolled into view
    if (value > window.innerHeight * 0.5) {
        atlantisText.style.opacity = 1;
        atlantisText.style.transform = `translateX(0)`;
    } else {
        atlantisText.style.opacity = 0;
        atlantisText.style.transform = `translateX(50px)`;
    }
});
