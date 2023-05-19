import svgHref from '../images/icons.svg';

const paginationLeft = document.querySelector('.js-pagination-left');
const paginationCenter = document.querySelector('.js-pagination-center');
const paginationRight = document.querySelector('.js-pagination-right');

// Рендерінг керівних кнопок пагінації
export function createPaginataionBtn(totalPages) {
  let markupBtnLeft = '';
  let markupBtnRight = '';

  paginationLeft.innerHTML = markupBtnLeft;
  paginationRight.innerHTML = markupBtnRight;

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

  paginationCenter.innerHTML = markup;

  if (totalPages > 1) {
    if ((currentPage + 2) % 3 == 0) {
      if (currentPage > 1) {
        if (window.innerWidth > 767.99) {
          markup += `<li><button class="btn-pag btn-pag--more-left" type="button">...</button></li>`;
        }
      }

      markup += `<li><button id = "current" class="btn-pag btn-pag--current js-pag-marker"   type="button">${currentPage}</button></li>`;

      if (currentPage !== totalPages) {
        markup += `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage + 1
        }</button></li>`;

        if (currentPage !== totalPages && currentPage < totalPages - 1) {
          markup += `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
            currentPage + 2
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
          currentPage - 1
        }</button></li>` +
        `<li><button id = "current" class="btn-pag btn-pag--current js-pag-marker"  type="button">${currentPage}</button></li>`;

      if (currentPage !== totalPages) {
        markup += `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage + 1
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
          currentPage - 2
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage - 1
        }</button></li>` +
        `<li><button id = "current" class="btn-pag btn-pag--current js-pag-marker"  type="button">${currentPage}</button></li>`;
      if (currentPage <= totalPages - 2 || currentPage === totalPages - 1) {
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! === > == if string
        if (window.innerWidth > 767.99) {
          markup += `<li><button class="btn-pag btn-pag--more-right" type="button">...</button></li>`;
        }
      }
    }

    paginationCenter.innerHTML = markup;
  }
}
