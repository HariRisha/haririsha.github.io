let text = document.getElementById('main_text');
let avatar = document.getElementById('avatar');
let maxScroll = window.innerHeight / 2;
let harisPhoto = document.getElementById('haris_photo');
let sihyunPhoto = document.getElementById('sihyun_photo');
let aboutSection = document.getElementById('thr_pg');
const maxMarginLeft = 476;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value <= maxScroll) {
        let scrollFactor = value / maxScroll;
        text.style.marginTop = scrollFactor * maxScroll * 2.5 + 'px';
        let calculatedMarginLeft = scrollFactor * maxScroll * 2.5;
        avatar.style.marginLeft = Math.min(calculatedMarginLeft, maxMarginLeft) + 'px'; // Limit marginLeft to max 476px
        console.log(avatar.style.marginLeft)
        if (scrollFactor > 0) {
            avatar.src = "avatar_running.png";
        } else {
            avatar.src = "avatar.png";
        }
    } else {
        text.style.marginTop = maxScroll * 2.5 + 'px';
        avatar.style.marginLeft = maxMarginLeft + 'px';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                harisPhoto.style.animation = "harisSlide 3s forwards";
                sihyunPhoto.style.animation = "sihyunSlide 3s forwards";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(aboutSection);
});