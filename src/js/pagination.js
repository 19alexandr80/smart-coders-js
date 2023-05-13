//---------------------------------------------
// https://www.npmjs.com/package/tui-pagination
const pagination = document.querySelector('.js-pagination');

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
    createPaginataion(data.page, data.pages);
  })
  .catch(err => console.log(err));

function createPaginataion(currentPage, lastPage) {
  let markup = '';

  if (currentPage > 1) {
    markup = `<li class="js-pagination-item">1</li>`;
  }

  if (currentPage > 4) {
    markup += `<li>...</li>`;
  }

  if (currentPage > 3) {
    markup += `<li class="js-pagination-item">${currentPage - 2}</li>`;
  }
  if (currentPage > 2) {
    markup += `<li class="js-pagination-item">${currentPage - 1}</li>`;
  }

  markup += `<li class="current js-pagination-item">${currentPage}</li>`;

  if (currentPage < lastPage - 3) {
    markup += `<li class="js-pagination-item">${currentPage + 1}</li>`;
  }
  if (currentPage < lastPage - 2) {
    markup += `<li class="js-pagination-item">${currentPage + 2}</li>`;
  }

  if (currentPage < lastPage - 3) {
    markup += `<li>...</li>`;
  }

  if (currentPage < lastPage) {
    markup += `<li class="js-pagination-item">${lastPage}</li>`;
  }

  pagination.innerHTML = markup;
}

pagination.addEventListener('click', handlerPagination);
function handlerPagination(evt) {
  if (!evt.target.classList.contains('js-pagination-item')) {
    return;
  }

  const page = evt.target.textContent;
  getHero(page)
    .then(data => {
      createPaginataion(data.page, data.pages);
    })
    .catch(err => console.log(err));
}

// import axios from 'axios'

// async function serviceImg(query, page = 1) {
//     try{
//     const API_KEY = '35967279-8c24489aaedeeb926c95777ea';
//     const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

//     const resp = await axios.get(API_URL)
//     return resp
//     // const data = await resp.json()
//     }
//     // return data
//     // return resp.json()
// }

// // serviceImg('cat').then(data => {}).catch()

// export {serviceImg}
