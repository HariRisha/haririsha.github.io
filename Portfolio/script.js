document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-slider img');
    const header = document.querySelector('header');
    const aboutContent = document.querySelector('.about-content');

    let index = 0;

    // Photo Slider Functionality
    setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 3000);

    // Add Scroll Effect for the Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show About Content when scrolled into view
        const aboutSection = document.querySelector('#about');
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (aboutPosition < screenHeight) {
            aboutContent.classList.add('visible');
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset(); 
    });
});
