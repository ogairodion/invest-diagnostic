import { Swiper } from 'swiper';

const pricesSlider = new Swiper(".prices__items", {
    slidesPerView: 1,
    spaceBetween: 40,   
    resistance: true,
    resistanceRatio: 0,
    observer: true,
    observeParents: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
    },
    pagination: {
        el: '.prices .slider-pagination',
        type: 'bullets',
        clickable: true,
    },
});