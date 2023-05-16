import { supportArr } from './support-arr';
// import Swiper from 'swiper';
import Swiper, { Navigation } from 'swiper';

// import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const supportItemsEl = document.querySelector('.support-list');

const makeSupporItems = supportArr
  .map(
    ({ title, url, img }, idx) =>
      `<li class="support-item swiper-slide">
  <a class="support-link" href=${url} target="_blank" rel="nofollow noopener noreferrer">
    <span class="support-number">${addLeadingZero(idx + 1)}</span>
    <img
      class="support-image"
      srcset="${img.normal} 1x, ${img.retina} 2x"
      src=${img.normal}
      alt=${title}
    />
  </a>
</li>`
  )
  .join('');

supportItemsEl.insertAdjacentHTML('beforeend', makeSupporItems);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// const swiper = new Swiper('.mySwiper', {
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-btn-next',
//     // prevEl: '.swiper-btn-next',
//   },
// });

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 6,
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
  },
  modules: [Navigation],
  navigation: {
    // nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-next',
  },
});
