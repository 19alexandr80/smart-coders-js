import { createPaginataion } from './pagination-btn.js';
import { quantityPages, getNewDataBatch } from './local-storage';

export const paginationLeft = document.querySelector('.js-pagination-left');
export const paginationCenter = document.querySelector('.js-pagination-center');
export const paginationRight = document.querySelector('.js-pagination-right');
const currentPageElement = document.getElementById('current');

let currentPage = Number(currentPageElement.textContent);
const lastPage = quantityPages;
let page = 1;

//! =====================================================
// Mutation Observer для відслідковування зміни currentPageElement
const callback = function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Получение текстового содержимого измененного элемента
      const element = document.getElementById('current');

      currentPage = Number(element.textContent);
    }
  }
};

const observer = new MutationObserver(callback);

const config = { childList: true, subtree: true };
observer.observe(paginationCenter, config);
//! =====================================================

// Прослуховувач маркерів пагінації і додаткових (не статичних) кнопок
paginationCenter.addEventListener('click', handlerPaginationCenter);

function handlerPaginationCenter(evt) {
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

  // currentPage = page; //застаріле (необхідне без MutationObserver)
}
