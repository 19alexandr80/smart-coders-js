//---------------------------------------------
// https://www.npmjs.com/package/tui-pagination
const paginationLeft = document.querySelector('.js-pagination-left');
const paginationCenter = document.querySelector('.js-pagination-center');
const paginationRight = document.querySelector('.js-pagination-right');

console.log(paginationLeft);
console.log(paginationCenter);
console.log(paginationRight);

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
    createPaginataionBtn(data.pages);
    createPaginataion(data.page, data.pages);
  })
  .catch(err => console.log(err));

// import svgLinkdUrl from '../images/linkedin.svg';
// <a
//   href="https://www.linkedin.com/in/nataliia-valko-951501212/"
//   target="_blank"
//   class="team-linkd"
// >
//   <svg width="24" height="24">
//     <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
//   </svg>
// </a>;

function createPaginataionBtn(lastPage) {
  let markupBtnLeft = '';
  if (lastPage > 1) {
    markupBtnLeft = `<button class="btn-pag btn-pag--left" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="./images/icons.svg#pag-double-left"></use>
            </svg>
          </span>
        </button>
        <button class="btn-pag btn-pag--left" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="./images/icons.svg#pag-left"></use>
            </svg>
          </span>
        </button>`;

    markupBtnRight = `<button class="btn-pag btn-pag--right" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="./images/icons.svg#pag-right"></use>
            </svg>
          </span>
        </button>
        <button class="btn-pag btn-pag--right" type="button">
          <span class="btn-icn-wrap">
            <svg width="24" height="24">
              <use href="./images/icons.svg#pag-double-right"></use>
            </svg>
          </span>
        </button>`;
  }

  paginationLeft.innerHTML = markupBtnLeft;
  paginationRight.innerHTML = markupBtnLeft;
}

function createPaginataion(currentPage, lastPage) {
  let markup = '';

  if (currentPage > 1) {
    markup = `<li class="js-pagination-item"><button class="btn-pag btn-pag--not-current" type="button">1</button></li>`;
  }

  if (currentPage > 4) {
    markup += `<li><button class="btn-pag btn-pag--not-current" type="button">...</button></li>`;
  }

  if (currentPage > 3) {
    markup += `<li class="js-pagination-item"><button class="btn-pag btn-pag--not-current" type="button">${
      currentPage - 2
    }</button></li>`;
  }
  if (currentPage > 2) {
    markup += `<li class="js-pagination-item"><button class="btn-pag btn-pag--not-current" type="button">${
      currentPage - 1
    }</button></li>`;
  }

  markup += `<li class="js-pagination-item"><button class="btn-pag btn-pag--current" type="button">${currentPage}</button></li>`;

  if (currentPage <= lastPage - 3 || currentPage === lastPage - 2) {
    markup += `<li class="js-pagination-item"><button class="btn-pag btn-pag--not-current" type="button">${
      currentPage + 1
    }</button></li>`;
  }
  if (currentPage < lastPage - 2) {
    markup += `<li class="js-pagination-item"><button class="btn-pag btn-pag--not-current" type="button">${
      currentPage + 2
    }</button></li>`;
  }

  if (currentPage < lastPage - 3) {
    markup += `<li><button class="btn-pag btn-pag--not-current" type="button">...</button></li>`;
  }

  if (currentPage < lastPage) {
    markup += `<li class="js-pagination-item"><button class="btn-pag btn-pag--not-current" type="button">${lastPage}</button></li>`;
  }

  paginationCenter.innerHTML = markup;
}

paginationCenter.addEventListener('click', handlerPagination);

function handlerPagination(evt) {
  if (!evt.target.classList.contains('js-pagination-item')) {
    return;
  } else {
    console.log(evt.target);
  }

  const page = evt.target.textContent;
  getHero(page)
    .then(data => {
      createPaginataion(data.page, data.pages);
    })
    .catch(err => console.log(err));
}
