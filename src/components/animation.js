import {
    carIntroAnimation,
    tentAnimation,
    suitcaseAnimation,
    dryingAnimation,
    boardAnimation,
    ballAnimation,
    likeAnimation,
    carNewsletterAnimation
} from '../utils/constants';

export function startingAnimation() {
    let scrollY = window.pageYOffset;    

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