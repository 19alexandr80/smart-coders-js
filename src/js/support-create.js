import { supportArr } from './support-arr';

const supportItemsEl = document.querySelector('.support-list');
const makeSupporItems = itemsEl => {
  const { title, url, img } = itemsEl;
  return `<li class="support-item">
  <a class="support-link" href=${url}>
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

// const imageUrl = new URL('image.jpeg?as=webp&width=250', import.meta.url);

// const imageUrl = new URL(
//   '../images/support-logo/supp1@1x.png?as=webp&width=250',
//   import.meta.url
// );

// let img = document.createElement('img');
// img.src = new URL('../images/user-@1x.png', import.meta.url);
// document.body.appendChild(img);

// import svgLinkdUrl from '../images/linkedin.svg';
// <a
//   href="https://www.linkedin.com/in/nataliia-valko-951501212/"
//   target="_blank"
//   class="team-linkd"
// >
//   <svg width="24" height="24">
//     <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
//   </svg>
// </a>;

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
