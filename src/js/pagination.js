// import svgHref from '../images/icons.svg';
import { createPaginataion } from './pagination-btn.js';
import { quantityPages, getNewDataBatch } from './local-storage';

export const paginationLeft = document.querySelector('.js-pagination-left');
export const paginationCenter = document.querySelector('.js-pagination-center');
export const paginationRight = document.querySelector('.js-pagination-right');

let currentPage = 1; //!!!!!!!!!!!!!!
const lastPage = quantityPages; //!!!!!!!!!!!!!!
let page = 1;

//! =====================================================
const currentPageElement = document.getElementById('current');
// const myDataValue = element.getAttribute('data-mydata');
const textContent = element.textContent;

console.log(textContent);

// const currentPageElement = document.querySelector(
//   'button[data-marker = "current"]'
// ); //!!
console.log(currentPageElement); //!!
// document.getElementById('.btn-pag--current').style.color = 'red';//!!
//! =====================================================

// Прослуховувач маркерів пагінації і додаткових (не статичних) кнопок
paginationCenter.addEventListener('click', handlerPaginationCenter);

function handlerPaginationCenter(evt) {
  // let page = 1;

  if (!evt.target.classList.contains('js-pag-marker')) {
    if (evt.target.classList.contains('btn-pag--more-left')) {
      page = currentPage - 3; //! textContent ?

      getPaginationPages(page);
    }

    if (evt.target.classList.contains('btn-pag--more-right')) {
      if (currentPage <= lastPage - 3) {
        page = currentPage + 3; //! textContent ?
        getPaginationPages(page);
      } else {
        page = lastPage;
        getPaginationPages(page);
      }
    }

    return;
  }

  page = Number(evt.target.textContent);
  getPaginationPages(page);
}

// Прослуховувач лівих керівних кнопок пагінації
paginationLeft.addEventListener('click', handlerPaginationLeft);

function handlerPaginationLeft(evt) {
  if (!evt.target.closest('.js-pagination-left')) {
    return;
  }

  if (evt.target.closest('.js-pag-first')) {
    if (currentPage === 1) {
      return;
    }

    page = 1;
    getPaginationPages(page);
  }

  if (evt.target.closest('.js-pag-prev')) {
    if (currentPage === 1) {
      return;
    }

    page = currentPage - 1; //! textContent ?
    getPaginationPages(page);
  }
}

// Прослуховувач правих керівних кнопок пагінації
paginationRight.addEventListener('click', handlerPaginationRight);

function handlerPaginationRight(evt) {
  if (!evt.target.closest('.js-pagination-right')) {
    return;
  }

  if (evt.target.closest('.js-pag-last')) {
    if (currentPage === lastPage) {
      return;
    }

    page = lastPage;
    getPaginationPages(page);
  }

  if (evt.target.closest('.js-pag-next')) {
    if (currentPage === lastPage) {
      return;
    }

    page = currentPage + 1; //! textContent ?
    getPaginationPages(page);
  }
}

function getPaginationPages(page) {
  getNewDataBatch(page);
  createPaginataion(page, lastPage);

  currentPage = page;
}
