// import { paginOptions, paginOptionsLess } from './pagination-options.js';
import { galleryItems } from './gallery-items.js';

import { createPaginataionBtn, createPaginataion } from './pagination-btn.js';

// let options = null;
let subarray = [];
let quantityItems = 0;
export let quantityPages = 0;
// let quantityPages = 0;
let pageCurrent = 1;

// const paginOptions = {
//   totalItems: 0,
//   itemsPerPage: 3,
//   visiblePages: 3,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   usageStatistics: false,
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// const paginOptionsLess = {
//   totalItems: 0,
//   itemsPerPage: 4,
//   visiblePages: 3,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   usageStatistics: false,
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

if (window.screen.width <= 375) {
  //!!!!
  // options = paginOptionsLess;
  // pagination.setItemsPerPage(4);
} else {
  // options = paginOptions;
  // pagination.setItemsPerPage(3);
}

// const Pagination = tui.Pagination;
// const container = document.getElementById('tui-pagination-container');
// const pagination = new Pagination(container, options);
// const page = pagination.getCurrentPage();

const gallery = document.querySelector('.gallery');

// pagination.on('beforeMove', getNewDataBatch);

const STORAGE_KEY = 'test';
localStorage.setItem(STORAGE_KEY, JSON.stringify(galleryItems));

// if (window.screen.width <= 375) {
//   // options = paginOptionsLess;
//   // pagination.setItemsPerPage(4);
// } else {
//   // options = paginOptions;
//   // pagination.setItemsPerPage(3);
// }

getData();

// get data from local storage by key
export function getData() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(typeof storageData); //!!!!

  const items = Object.values(storageData);
  console.log('Items:', items);

  quantityItems = items.length;
  quantityPages = Math.ceil(quantityItems / 3); // кол-во страниц
  // pagination.reset(quantityItems);
  console.log('Total items:', quantityItems); //!!!
  console.log('Total Pages:', quantityPages); //!!!

  let i = 0;
  for (const item of items) {
    if (i <= quantityItems) {
      // console.log(item);
      subarray[i] = item;
      i += 1;
    }
  }

  // for (let i = 0; i < Math.ceil(items.length / 3); i++) {
  //   subarray[i] = items.slice(i * 3, i * 3 + 3);
  // }
  // console.log(subarray.slice(0, 3));

  gallery.insertAdjacentHTML(
    'beforeend',
    makeImageGallery(subarray.slice(0, 3))
  );

  createPaginataionBtn(quantityPages);
  createPaginataion(pageCurrent, quantityPages);

  console.log('zxcvbnm-11', quantityPages); //!!!
}
console.log('zxcvbnm-12', quantityPages); //!!!

export function getNewDataBatch(page) {
  const currentPage = page; //10
  console.log('Current page', currentPage); //!!!

  let minIndex = currentPage * 3 - 3; // 0 27
  let maxIndex = currentPage * 3; // 2 //???
  console.log('Min index', minIndex);
  console.log('Max index', maxIndex);

  gallery.innerHTML = makeImageGallery(subarray.slice(minIndex, maxIndex));
}

export function makeImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}" width=800px height=800px
            />
        </a>
      </li>`;
    })
    .join('');
}

// export { quantityPages };
