import { supportArr } from './support-arr';

const supportItemsEl = document.querySelector('.support-list');
const makeSupporItems = itemsEl => {
  const { title, url, img } = itemsEl;

  return `<li class="support-item">
  <a class="support-link" href=${url}>
    <span class="support-number">01</span>
    <img
      class="support-image"
      src=${img}
      data-source=${img}
      alt=${title}
    />
  </a>
</li>`;
};
const itemsImages = supportArr.map(makeSupporItems).join('');
supportItemsEl.insertAdjacentHTML('beforeend', itemsImages);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// <button class="btn-user-in" type="button">
//   <span class="btn-icn-wrap">
//     <img
//       srcset="./images/user-@1x.png 1x, ./images/user-@2x.png 2x"
//       src="./images/user-@1x.png"
//       alt="user avatar"
//       loading="lazy"
//     />
//   </span>
//   Stephen
//   <span class="btn-icn-wrap">
//     <svg width="23" height="26">
//       <use href="./images/icons.svg#caret-down"></use>
//     </svg>
//   </span>
// </button>;
