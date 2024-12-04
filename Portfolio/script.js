// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-slider img');
    let index = 0;

    setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 3000);
});
