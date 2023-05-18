import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { createPaginataion } from './pagination-btn.js';
import { quantityPages, getNewDataBatch } from './local-storage';

Notify.init({
  fontSize: '24px',
});
Report.init({
  titleFontSize: '24px',
  messageFontSize: '18px',
});
export const paginationLeft = document.querySelector('.js-pagination-left');
export const paginationCenter = document.querySelector('.js-pagination-center');
export const paginationRight = document.querySelector('.js-pagination-right');
const currentPageElement = document.getElementById('current');
console.log(currentPageElement);
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

      getPaginationPage(page);
    }

    if (evt.target.classList.contains('btn-pag--more-right')) {
      if (currentPage <= lastPage - 3) {
        page = currentPage + 3; //! textContent ?
        getPaginationPage(page);
      } else {
        page = lastPage;
        getPaginationPage(page);
      }
    }

    return;
  }

  page = Number(evt.target.textContent);
  getPaginationPage(page);
}

// Прослуховувач лівих керівних кнопок пагінації
paginationLeft.addEventListener('click', handlerPaginationLeft);

function handlerPaginationLeft(evt) {
  if (!evt.target.closest('.js-pagination-left')) {
    return;
  }

  if (evt.target.closest('.js-pag-first')) {
    if (currentPage === 1) {
      Notify.info(
        'Congratulations! You are at the very beginning of the list!'
      );

      return;
    }

    page = 1;
    getPaginationPage(page);
  }

  if (evt.target.closest('.js-pag-prev')) {
    if (currentPage === 1) {
      Notify.info(
        'Congratulations! You are at the very beginning of the list!'
      );

      return;
    }

    page = currentPage - 1; //! textContent ?
    getPaginationPage(page);
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
      Report.info('SORRY', 'This is the last page.', 'Ok');

      return;
    }

    page = lastPage;
    getPaginationPage(page);
  }

  if (evt.target.closest('.js-pag-next')) {
    if (currentPage === lastPage) {
      Report.info('SORRY', 'This is the last page.', 'Ok');

      return;
    }

    page = currentPage + 1; //! textContent ?
    getPaginationPage(page);
  }
}

function getPaginationPage(page) {
  getNewDataBatch(page);
  createPaginataion(page, lastPage);

  // currentPage = page; //застаріле (необхідне без MutationObserver)
}
