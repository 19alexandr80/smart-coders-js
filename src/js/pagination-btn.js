import svgHref from '../images/icons.svg';

import { quantityPages, getNewDataBatch } from './local-storage';

const paginationLeft = document.querySelector('.js-pagination-left');
const paginationCenter = document.querySelector('.js-pagination-center');
const paginationRight = document.querySelector('.js-pagination-right');

let pageCurrent = 1; //!!!!!!!!!!!!!!
const pageLast = 7; //!!!!!!!!!!!!!!

// console.log('zxcvbnm', quantityPages); //!!

// Запит на бекенд
// async function getHero(page = 1) {
//   const TOKEN = '18aEQHs2_l3sCMmPg1yk';
//   const options = {
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   };
//   const resp = await fetch(
//     `https://the-one-api.dev/v2/character?page=${page}&limit=200`,
//     options
//   );
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   const data = await resp.json();

//   return data;
// }

// Обробка запиту на бекенд за замовчуванням (при рендерінгу сторінки)
// getHero();
// .then(data => {
//   pageCurrent = data.page;
//   pageLast = data.pages;

//   createPaginataionBtn(data.pages);
//   createPaginataion(data.page, data.pages);
// })
// .catch(err => console.log(err));

// Рендерінг керівних кнопок пагінації
export function createPaginataionBtn(totalPages) {
  let markupBtnLeft = '';
  let markupBtnRight = '';

  if (totalPages > 1) {
    markupBtnLeft = `<button class="btn-pag btn-pag--left js-pag-first" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="${svgHref}#pag-double-left"></use>
            </svg>
          </span>
        </button>
        <button class="btn-pag btn-pag--left js-pag-prev" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="${svgHref}#pag-left"></use>
            </svg>
          </span>
        </button>`;

    markupBtnRight = `<button class="btn-pag btn-pag--right js-pag-next" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="${svgHref}#pag-right"></use>
            </svg>
          </span>
        </button>
        <button class="btn-pag btn-pag--right js-pag-last" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="${svgHref}#pag-double-right"></use>
            </svg>
          </span>
        </button>`;
  }

  paginationLeft.innerHTML = markupBtnLeft;
  paginationRight.innerHTML = markupBtnRight;
}

// Рендерінг маркерів пагінації і додаткових (не статичних) кнопок
export function createPaginataion(currentPage, totalPages) {
  let markup = '';

  if (totalPages > 1) {
    if ((currentPage + 2) % 3 == 0) {
      if (currentPage > 1) {
        if (window.innerWidth > 767.99) {
          markup += `<li><button class="btn-pag btn-pag--more-left" type="button">...</button></li>`;
        }
      }

      markup += `<li><button class="btn-pag btn-pag--current js-pag-marker"  data-marker = "current" type="button">${currentPage}</button></li>`;

      if (currentPage !== totalPages) {
        markup += `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          Number(currentPage) + 1
        }</button></li>`;

        if (currentPage !== totalPages && currentPage < totalPages - 1) {
          markup += `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
            Number(currentPage) + 2
          }</button></li>`;
        }
        if (currentPage < totalPages - 2) {
          if (window.innerWidth > 767.99) {
            markup += `<li><button class="btn-pag btn-pag--more-right" type="button">...</button></li>`;
          }
        }
      }
    }

    if ((currentPage + 1) % 3 == 0) {
      if (currentPage > 3) {
        if (window.innerWidth > 767.99) {
          markup += `<li><button class="btn-pag btn-pag--more-left" type="button">...</button></li>`;
        }
      }

      markup +=
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          Number(currentPage) - 1
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--current js-pag-marker" data-marker = "current" type="button">${currentPage}</button></li>`;

      if (currentPage !== totalPages) {
        markup += `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          Number(currentPage) + 1
        }</button></li>`;
        if (currentPage <= totalPages - 2) {
          if (window.innerWidth > 767.99) {
            markup += `<li><button class="btn-pag btn-pag--more-right" type="button">...</button></li>`;
          }
        }
      }
    }

    if (currentPage % 3 == 0) {
      if (currentPage > 3) {
        if (window.innerWidth > 767.99) {
          markup += `<li><button class="btn-pag btn-pag--more-left" type="button">...</button></li>`;
        }
      }
      markup +=
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          Number(currentPage) - 2
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          Number(currentPage) - 1
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--current js-pag-marker" data-marker = "current" type="button">${currentPage}</button></li>`;
      if (currentPage <= totalPages - 2 || currentPage === totalPages - 1) {
        if (window.innerWidth > 767.99) {
          markup += `<li><button class="btn-pag btn-pag--more-right" type="button">...</button></li>`;
        }
      }
    }

    paginationCenter.innerHTML = markup;
  }
}
//! =====================================================
// const currentElement = document.querySelector(
//   'button[data-marker = "current"]'
// ); //!!
// console.log(currentElement.dataset.marker); //!!
// document.getElementById('.btn-pag--current').style.color = 'red';//!!
//! =====================================================

// Прослуховувач маркерів пагінації і додаткових (не статичних) кнопок
paginationCenter.addEventListener('click', handlerPaginationCenter);

function handlerPaginationCenter(evt) {
  if (!evt.target.classList.contains('js-pag-marker')) {
    if (evt.target.classList.contains('btn-pag--more-left')) {
      const page = Number(pageCurrent) - 3; //! textContent ?
      getPaginationPages(page);
    }

    if (evt.target.classList.contains('btn-pag--more-right')) {
      if (pageCurrent <= pageLast - 3) {
        const page = Number(pageCurrent) + 3; //! textContent ?
        getPaginationPages(page);
      } else {
        const page = pageLast;
        getPaginationPages(page);
      }
    }

    return;
  }

  const page = evt.target.textContent;
  getPaginationPages(page);
}

// Прослуховувач лівих керівних кнопок пагінації
paginationLeft.addEventListener('click', handlerPaginationLeft);

function handlerPaginationLeft(evt) {
  if (!evt.target.closest('.js-pagination-left')) {
    return;
  }

  if (evt.target.closest('.js-pag-first')) {
    if (pageCurrent === 1) {
      return;
    }

    const page = 1;
    getPaginationPages(page);
  }

  if (evt.target.closest('.js-pag-prev')) {
    if (pageCurrent === 1) {
      return;
    }

    const page = Number(pageCurrent) - 1; //! textContent ?
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
    if (pageCurrent === pageLast) {
      return;
    }

    const page = pageLast;
    getPaginationPages(page);
  }

  if (evt.target.closest('.js-pag-next')) {
    if (pageCurrent === pageLast) {
      return;
    }

    const page = Number(pageCurrent) + 1; //! textContent ?
    getPaginationPages(page);
  }
}

// Обробка запиту на бекенд від пагінації
// function getPaginationPages(page) {
//   getHero(page)
//     .then(data => {
//       createPaginataion(data.page, data.pages);
//     })
//     .catch(err => console.log(err));

//   pageCurrent = page;
// }

function getPaginationPages(page) {
  getNewDataBatch(page);
  createPaginataion(page, pageLast);

  pageCurrent = page;
}
