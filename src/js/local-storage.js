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
    .map(({ bookImg, author, listName, title }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="#">
            <img
                class="gallery__image"
                src="${bookImg}"
                data-source="${listName}"
                alt="${title}" width=800px height=800px
            />
        </a>
        <p>${author}</p>
        <p>${title}</p>
        <p>${listName}</p>
      </li>`;
    })
    .join('');
}

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
