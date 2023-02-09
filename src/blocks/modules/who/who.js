import { Swiper, Pagination } from 'swiper';

Swiper.use(Pagination);

const whoSlider = new Swiper(".who__slider", {
    slidesPerView: 1,
    resistance: true,
    resistanceRatio: 0,
    observer: true,
    observeParents: true,
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: '.who .slider-pagination',
        type: 'bullets',
        clickable: true,
    },
});