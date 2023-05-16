import { galleryItems } from './gallery-items.js';

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

const STORAGE_KEY = 'test'; //!!!!
localStorage.setItem(STORAGE_KEY, JSON.stringify(galleryItems)); //!!!!

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

  gallery.innerHTML = makeImageGallery(subarray.slice(0, cards));

  createPaginataionBtn(quantityPages);
  createPaginataion(currentPage, quantityPages);
}

export function getNewDataBatch(currentPage) {
  const minIndex = currentPage * cards - cards;
  const maxIndex = currentPage * cards;

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
