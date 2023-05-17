import { supportArr } from './support-arr';
// import Swiper from 'swiper/swiper-bundle';
import Swiper, { Navigation } from 'swiper';

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
// Через особливості роботи опції "loop", загальна кількість слайдів має бути >= slidesPerView * 2
// тому повторно рендеримо той же список фондів (бо у нас slidesPerView = 6 на таблет та десктопі, а фондів всього 9шт.)
supportItemsEl.insertAdjacentHTML('beforeend', makeSupporItems);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 6,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-btn-next',
  },
});
