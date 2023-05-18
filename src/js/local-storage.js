import { refs } from './shopping-list.js';
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

const STORAGE_KEY = 'shopingList';

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

  refs.cards.innerHTML = makeMarkupBook(subarray.slice(0, cards));

  createPaginataionBtn(quantityPages);
  createPaginataion(currentPage, quantityPages);
}

export function getNewDataBatch(currentPage) {
  const minIndex = currentPage * cards - cards;
  const maxIndex = currentPage * cards;

  refs.cards.innerHTML = makeMarkupBook(subarray.slice(minIndex, maxIndex));
}
