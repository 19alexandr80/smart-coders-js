import { refs } from './shop-list-make-markup.js';
import { makeMarkupBook } from './shop-list-make-markup.js';
// import { onOpenPage } from './shop-list-make-markup.js'; //!!!!!!!!!!!!!!!!!!!!????
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
export let storageData = {};

getData();

// get data from local storage by key
export function getData() {
  storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const items = Object.values(storageData);

  if (!items.length) {
    refs.cards.classList.add('visually-hidden');
    refs.container.classList.remove('visually-hidden');
    // refs.container.innerHTML = `
    //   <p class="textEmptyPage">
    //     This page is empty, add some books and proceed to order.
    //   </p>
    //   <img class="imgEmptyPage" src="../images/is-empty@2x.png" alt="books" />
    //   `;

    return;
  }

  // refs.container.remove();

  quantityItems = items.length;
  quantityPages = Math.ceil(quantityItems / cards);

  let i = 0;
  subarray = [];
  for (const item of items) {
    if (i <= quantityItems) {
      subarray[i] = item;
      i += 1;
    }
  }

  // onOpenPage(storageData);
  refs.cards.innerHTML = makeMarkupBook(subarray.slice(0, cards));

  createPaginataionBtn(quantityPages);
  createPaginataion(currentPage, quantityPages);

  // getNewQuantityPages(quantityPages);

  return quantityPages;
}

getNewQuantityPages(); //!!!!!!!!!!!!!!!!!!!!!!!!!
export function getNewQuantityPages(quantityPages) {
  const newLastPage = getData();

  return newLastPage;
}

export function getNewDataBatch(currentPage) {
  const minIndex = currentPage * cards - cards;
  const maxIndex = currentPage * cards;

  refs.cards.innerHTML = makeMarkupBook(subarray.slice(minIndex, maxIndex));
}

const trashBtn = document.querySelector('.shop-list__cards');
trashBtn.addEventListener('click', onBtnTrashClick);

function onBtnTrashClick(e) {
  if (!e.target.closest('.btn-trash-box')) {
    return;
  }
  const id = e.target.closest('button').dataset.id;

  getData();
  //  dataFirebase.deleteBook(id);
  // window.location.reload();
}
