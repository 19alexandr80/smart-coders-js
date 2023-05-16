import { galleryItems } from './gallery-items.js';

import { createPaginataionBtn, createPaginataion } from './pagination-btn.js';

let subarray = [];
let quantityItems = 0;
let currentPage = 1;
export let quantityPages = 0;

if (window.screen.width <= 375) {
  //!!!!
  // options = paginOptionsLess;
  // pagination.setItemsPerPage(4);
} else {
  // options = paginOptions;
  // pagination.setItemsPerPage(3);
}

const gallery = document.querySelector('.gallery');

const STORAGE_KEY = 'test'; //!!!!
localStorage.setItem(STORAGE_KEY, JSON.stringify(galleryItems)); //!!!!

getData();

// get data from local storage by key
function getData() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // console.log(typeof storageData); //!!!!

  const items = Object.values(storageData);
  // console.log('Items:', items); //!!!!

  quantityItems = items.length;
  quantityPages = Math.ceil(quantityItems / 3); // кол-во страниц

  // console.log('Total items:', quantityItems); //!!!
  // console.log('Total Pages:', quantityPages); //!!!

  let i = 0;
  for (const item of items) {
    if (i <= quantityItems) {
      subarray[i] = item;
      i += 1;
    }
  }

  // gallery.insertAdjacentHTML(
  //   'beforeend',
  //   makeImageGallery(subarray.slice(0, 3))
  // ); //!

  gallery.innerHTML = makeImageGallery(subarray.slice(0, 3));

  createPaginataionBtn(quantityPages);
  createPaginataion(currentPage, quantityPages);
}

export function getNewDataBatch(currentPage) {
  // const currentPage = page; //10
  // console.log('Current page', currentPage); //!!!

  const minIndex = currentPage * 3 - 3; // 0 27
  const maxIndex = currentPage * 3; // 2 //???
  // console.log('Min index', minIndex); //!!!!
  // console.log('Max index', maxIndex); //!!!!

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
