import svgHref from '../images/icons.svg';

const paginationLeft = document.querySelector('.js-pagination-left');
const paginationCenter = document.querySelector('.js-pagination-center');
const paginationRight = document.querySelector('.js-pagination-right');

let pageCurrent = 0;
let pageLast = 0;

async function getHero(page = 1) {
  const TOKEN = '18aEQHs2_l3sCMmPg1yk';
  const options = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  const resp = await fetch(
    `https://the-one-api.dev/v2/character?page=${page}&limit=40`,
    options
  );
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  const data = await resp.json();

  return data;
}

getHero()
  .then(data => {
    pageCurrent = data.page;
    pageLast = data.pages;

    createPaginataionBtn(data.pages);
    createPaginataion(data.page, data.pages);
  })
  .catch(err => console.log(err));

function createPaginataionBtn(lastPage) {
  let markupBtnLeft = '';
  let markupBtnRight = '';

  if (lastPage > 1) {
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

function createPaginataion(currentPage, lastPage) {
  let markup = '';

  if (lastPage > 1) {
    if ((currentPage + 2) % 3 == 0) {
      if (currentPage > 1) {
        markup += `<li><button class="btn-pag btn-pag--more-left" type="button">...</button></li>`;
      }
      markup +=
        `<li><button class="btn-pag btn-pag--current js-pag-marker" type="button">${currentPage}</button></li>` +
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage + 1
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage + 2
        }</button></li>`;
      if (currentPage < lastPage - 2) {
        markup += `<li><button class="btn-pag btn-pag--more-right" type="button">...</button></li>`;
      }
    }

    if ((currentPage + 1) % 3 == 0) {
      if (currentPage > 3) {
        markup += `<li><button class="btn-pag btn-pag--more-left" type="button">...</button></li>`;
      }
      markup +=
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage - 1
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--current js-pag-marker" type="button">${currentPage}</button></li>` +
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage + 1
        }</button></li>`;
      if (currentPage < lastPage - 2) {
        markup += `<li><button class="btn-pag btn-pag--more-right" type="button">...</button></li>`;
      }
    }

    if (currentPage % 3 == 0) {
      if (currentPage > 3) {
        markup += `<li><button class="btn-pag btn-pag--more-left" type="button">...</button></li>`;
      }
      markup +=
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage - 2
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--not-current js-pag-marker" type="button">${
          currentPage - 1
        }</button></li>` +
        `<li><button class="btn-pag btn-pag--current js-pag-marker" type="button">${currentPage}</button></li>`;
      if (currentPage < lastPage - 2) {
        markup += `<li><button class="btn-pag btn-pag--more-right" type="button">...</button></li>`;
      }
    }

    paginationCenter.innerHTML = markup;
  }
}

// const currentElement = document.getElementById('.btn-pag--current');//!!
// console.log(currentElement);//!!
// document.getElementById('.btn-pag--current').style.color = 'red';//!!

paginationCenter.addEventListener('click', handlerPaginationCenter);

function handlerPaginationCenter(evt) {
  if (!evt.target.classList.contains('js-pag-marker')) {
    if (evt.target.classList.contains('btn-pag--more-left')) {
      const page = Number(pageCurrent) - 3;
      getHero(page)
        .then(data => {
          createPaginataion(data.page, data.pages);
        })
        .catch(err => console.log(err));

      pageCurrent = page;
    }

    if (evt.target.classList.contains('btn-pag--more-right')) {
      const page = Number(pageCurrent) + 3;
      getHero(page)
        .then(data => {
          createPaginataion(data.page, data.pages);
        })
        .catch(err => console.log(err));

      pageCurrent = page;
    }

    return;
  }

  const page = evt.target.textContent;
  getHero(page)
    .then(data => {
      createPaginataion(data.page, data.pages);
    })
    .catch(err => console.log(err));

  pageCurrent = page;
}

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
    getHero(page)
      .then(data => {
        createPaginataion(data.page, data.pages);
      })
      .catch(err => console.log(err));

    pageCurrent = 1;
  }

  if (evt.target.closest('.js-pag-prev')) {
    if (pageCurrent === 1) {
      return;
    }

    const page = Number(pageCurrent) - 1;
    getHero(page)
      .then(data => {
        createPaginataion(data.page, data.pages);
      })
      .catch(err => console.log(err));

    pageCurrent = page;
  }
}

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
    getHero(page)
      .then(data => {
        createPaginataion(data.page, data.pages);
      })
      .catch(err => console.log(err));

    pageCurrent = page;
  }

  if (evt.target.closest('.js-pag-next')) {
    if (pageCurrent === pageLast) {
      return;
    }

    const page = Number(pageCurrent) + 1;
    getHero(page)
      .then(data => {
        createPaginataion(data.page, data.pages);
      })
      .catch(err => console.log(err));

    pageCurrent = page;
  }
}
