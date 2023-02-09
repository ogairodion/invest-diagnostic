import { Swiper, Pagination } from 'swiper';

Swiper.use(Pagination);

const whatSlider = new Swiper(".what__items", {
    slidesPerView: 1,
    spaceBetween: 20,   
    resistance: true,
    resistanceRatio: 0,
    observer: true,
    observeParents: true,
    breakpoints: {
        600: {
            allowTouchMove: false,
        },
    },
    pagination: {
        el: '.what .slider-pagination',
        type: 'bullets',
        clickable: true,
    },
});