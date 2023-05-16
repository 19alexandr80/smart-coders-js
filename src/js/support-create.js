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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 6,
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-btn-next',
  },
});
