import { supportArr } from './support-arr';
import Swiper from 'swiper';

const supportItemsEl = document.querySelector('.support-list');

const makeSupporItems = supportArr
  .map(
    ({ title, url, img }, idx) =>
      `<li class="support-item swiper-slide">
  <a class="support-link" href=${url} target="_blank" rel="nofollow noopener noreferrer">
    <span class="support-number">${addLeadingZero(idx + 1)}</span>
    <img
      class="support-image"
      srcset=${img}
      src=${img}
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

const swiper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-btn-next',
    // prevEl: '.swiper-btn-next',
  },
});
