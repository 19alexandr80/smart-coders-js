import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { createPaginataion } from './pagination-btn.js';
import {
  quantityPages,
  getNewDataBatch,
  getNewQuantityPages,
  newLastPage,
} from './local-storage';

Notify.init({
  fontSize: '20px',
  info: {
    background: 'rgba(79, 46, 232, 0.8)',
    textColor: '#fff',
    notiflixIconColor: '#fff',
  },
});
Report.init({
  backgroundColor: 'rgba(79, 46, 232, 0.8)',
  titleFontSize: '24px',
  messageFontSize: '18px',
  info: {
    svgColor: '#fff',
    titleColor: '#fff',
    messageColor: '#fff',
    buttonBackground: '#2f0fbc',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(79, 46, 232, 0.2)',
  },
});

export const paginationLeft = document.querySelector('.js-pagination-left');
export const paginationCenter = document.querySelector('.js-pagination-center');
export const paginationRight = document.querySelector('.js-pagination-right');
const currentPageElement = document.getElementById('current');

let currentPage = 1;
if (quantityPages > 1) {
  currentPage = Number(currentPageElement.textContent);
}

// getNewQuantityPages();
// console.log('getNewQuantityPages(x)', NewQuantityPages); //!!!!!!!!!!!!!!!!!!!!!!!!!

let lastPage = quantityPages; //!!! const -> let
let page = 1;
console.log('let lastPage = quantityPages', lastPage); //!!!!!!!!!!!!!!!!!!!!!!!!!

//! =====================================================
// // Mutation Observer для відслідковування зміни currentPageElement
// const callback = function (mutationsList) {
//   for (const mutation of mutationsList) {
//     if (mutation.type === 'childList') {
//       const element = document.getElementById('current');

//       currentPage = Number(element.textContent);
//     }
//   }
// };

// export const observer = new MutationObserver(callback);

// const config = { childList: true, subtree: true };
// observer.observe(paginationCenter, config);

//! =====================================================

// lastPage = getNewQuantityPages();
// if (lastPage === 1) {
//   observer.disconnect();
// } //!!!!!!!!!!!!!!!!!!!!!!!!!

// Прослуховувач маркерів пагінації і додаткових (не статичних) кнопок
paginationCenter.addEventListener('click', handlerPaginationCenter);

function handlerPaginationCenter(evt) {
  console.log('getNewQuantityPages(2)', lastPage); //!!!!!!!!!!!!!!!!!!!!!!!!!

  if (!evt.target.classList.contains('js-pag-marker')) {
    if (evt.target.classList.contains('btn-pag--more-left')) {
      // lastPage = getNewQuantityPages();
      // if (lastPage < 2) {
      //   observer.disconnect();
      // } //!!!!!!!!!!!!!!!!!!!!!!!!!
      page = currentPage - 3;

      getPaginationPage(page, lastPage);
    }

    if (evt.target.classList.contains('btn-pag--more-right')) {
      if (currentPage <= lastPage - 3) {
        page = currentPage + 3;
        getPaginationPage(page, lastPage);
      } else {
        page = lastPage;
        getPaginationPage(page, lastPage);
      }
    }

    return;
  }

  // let lastPage = newLastPage;
  page = Number(evt.target.textContent);

  getPaginationPage(page, lastPage);

  console.log('handlerPaginationCenter(lastPage)', lastPage); //!!!!!!!!!!!!!!!!!!!!!!!!!
}

// Прослуховувач лівих керівних кнопок пагінації
paginationLeft.addEventListener('click', handlerPaginationLeft);

function handlerPaginationLeft(evt) {
  // lastPage = getNewQuantityPages();
  // console.log('from handlerPaginationLeft', lastPage); //!!!!!!

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
    getPaginationPage(page, lastPage);
  }

  if (evt.target.closest('.js-pag-prev')) {
    if (currentPage === 1) {
      Notify.info(
        'Congratulations! You are at the very beginning of the list!'
      );

      return;
    }

    page = currentPage - 1;
    getPaginationPage(page, lastPage);
  }
}

// Прослуховувач правих керівних кнопок пагінації
paginationRight.addEventListener('click', handlerPaginationRight);

function handlerPaginationRight(evt) {
  // lastPage = getNewQuantityPages();
  // console.log('from handlerPaginationRight', lastPage); //!!!!!!

  if (!evt.target.closest('.js-pagination-right')) {
    return;
  }

  if (evt.target.closest('.js-pag-last')) {
    if (currentPage === lastPage) {
      Report.info('SORRY', 'This is the last page.', 'Ok');

      return;
    }

    page = lastPage;
    getPaginationPage(page, lastPage);
  }

  if (evt.target.closest('.js-pag-next')) {
    if (currentPage === lastPage) {
      Report.info('SORRY', 'This is the last page.', 'Ok');

      return;
    }

    page = currentPage + 1;
    getPaginationPage(page, lastPage);
  }
}

function getPaginationPage(page, lastPage) {
  getNewDataBatch(page);

  createPaginataion(page, lastPage);
  console.log('createPaginataion(page)', page); //!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log('createPaginataion(lastPage)', lastPage); //!!!!!!!!!!!!!!!!!!!!!!!!!
  currentPage = page; //застаріле (необхідне без MutationObserver)
}
