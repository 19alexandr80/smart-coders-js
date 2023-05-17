// import { galleryItems } from './gallery-items.js'; //!!!
import { makeMarkupBook } from './shopping-list.js';
import { createPaginataionBtn, createPaginataion } from './pagination-btn.js';

let subarray = [];
let quantityItems = 0;
let currentPage = 1;
export let quantityPages = 0;

// Кількість карток на сторінці відносно window.screen.width
let cards = 0;
if (window.screen.width < 768) {
  cards = 4;
} else {
  cards = 3;
}

const gallery = document.querySelector('.gallery');

// const STORAGE_KEY = 'test'; //!!!!
const STORAGE_KEY = 'shopingList';
// localStorage.setItem(STORAGE_KEY, JSON.stringify(galleryItems)); //!!!!

getData();

// get data from local storage by key
function getData() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const items = Object.values(storageData);

  quantityItems = items.length;
  quantityPages = Math.ceil(quantityItems / cards);

  let i = 0;
  for (const item of items) {
    if (i <= quantityItems) {
      subarray[i] = item;
      i += 1;
    }
  }

  gallery.innerHTML = makeMarkupBook(subarray.slice(0, cards));

  createPaginataionBtn(quantityPages);
  createPaginataion(currentPage, quantityPages);
}

export function getNewDataBatch(currentPage) {
  const minIndex = currentPage * cards - cards;
  const maxIndex = currentPage * cards;

  gallery.innerHTML = makeMarkupBook(subarray.slice(minIndex, maxIndex));
}

// export function makeImageGallery(galleryItems) {
//   return galleryItems
//     .map(({ id, bookImg, author, title, description, listName, buy_links }) => {
//       return `
//       <li class="shop-list__one-card" data-id="${id}">
//         <img class="shop-list__img" src=${
//           bookImg ? bookImg : './src/images/stopper335@1x.png'
//         } alt="${title}" />
//         <div class="shop-list__text-container">
//           <h4 class="shop-list__title-book">${title ? title : 'No title.'}</h4>
//           <h5 class="shop-list__category-name">
//             ${title ? title : 'No title.'}
//           </h5>
//           <p class="shop-list__descr">
//             ${description ? description : 'No description.'}
//           </p>
//           <h5 class="shop-list__author">${author ? author : 'No author.'}</h5>
//         </div>
//         <ul>
//           <li><a href=""></a></li>
//           <li><a href=""></a></li>
//           <li><a href=""></a></li>
//         </ul>

//         <div>
//           <button
//             class="btn-trash-box"
//             type="button"
//             data-name="btn-trash"
//             data-id="${id}">
//             <span class="btn-icn-wrap">
//               <svg width="18" height="18">
//                 <use href="/icons.adfc4680.svg#trash"></use>
//               </svg>
//             </span>
//           </button>
//         </div>
//       </li>`;
//     })
//     .join('');
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// author
// :
// "Jeannette Walls"
// bookImg
// :
// "https://storage.googleapis.com/du-prd/books/images/9781501117299.jpg"
// buyLinks
// :
// [{name: "Amazon", url: "https://www.amazon.com/dp/1501117297?tag=NYTBSREV-20"},…]
// id
// :
// "643282b1e85766588626a0a0"
// listName
// :
// "Hardcover Fiction"
// title
// :
// "HANG THE MOON"
