let text = document.getElementById('main_text');
let avatar = document.getElementById('avatar');
let maxScroll = window.innerHeight / 2;
let harisPhoto = document.getElementById('haris_photo');
let sihyunPhoto = document.getElementById('sihyun_photo');
let aboutSection = document.getElementById('thr_pg');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value <= maxScroll) {
        let scrollFactor = value / maxScroll;
        text.style.marginTop = scrollFactor * maxScroll * 2.5 + 'px';
        avatar.style.marginLeft = scrollFactor * maxScroll * 2.5 + 'px';

        if (scrollFactor > 0) {
            avatar.src = "avatar_running.png";
        } else {
            avatar.src = "avatar.png";
        }
    } else {
        text.style.marginTop = maxScroll * 2.5 + 'px';
        avatar.style.marginLeft = maxScroll * 2.5 + 'px';
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