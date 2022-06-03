const carIntroAnimation = document.querySelector('.intro__picture_type_picture-car');
const tentAnimation = document.querySelector('.intro__picture_type_picture-tent');
const suitcaseAnimation = document.querySelector('.intro__picture_type_picture-suitcase');
const dryingAnimation = document.querySelector('.intro__picture_type_picture-drying');
const boardAnimation = document.querySelector('.intro__picture_type_picture-board');
const ballAnimation = document.querySelector('.intro__picture_type_picture-ball');
const likeAnimation = document.querySelector('.intro__picture_type_picture-like');

const carNewsletterAnimation = document.querySelector('.newsletter__car');


function scroll() {
    let scrollY = window.pageYOffset;
    console.log(scrollY)

    if (scrollY > 550) {
        carIntroAnimation.classList.add('animation-car-intro_active');
        tentAnimation.classList.add('animation-intro_active');
        suitcaseAnimation.classList.add('animation-intro_active');
        dryingAnimation.classList.add('animation-intro_active');
        boardAnimation.classList.add('animation-intro_active');
        ballAnimation.classList.add('animation-ball_active');
        likeAnimation.classList.add('animation-intro_active');
    }
    if (scrollY > 1800 || scrollY < 550) {
        carIntroAnimation.classList.remove('animation-car-intro_active');
        tentAnimation.classList.remove('animation-intro_active');
        suitcaseAnimation.classList.remove('animation-intro_active');
        dryingAnimation.classList.remove('animation-intro_active');
        boardAnimation.classList.remove('animation-intro_active');
        ballAnimation.classList.remove('animation-ball_active');
        likeAnimation.classList.remove('animation-intro_active');
    }
    if (scrollY > 5300) {
        carNewsletterAnimation.classList.add('animation-car-newsletter_active');
    }
    if (scrollY === 6287 || scrollY < 5300) {
        carNewsletterAnimation.classList.remove('animation-car-newsletter_active');
    }
}

document.addEventListener('scroll', scroll);