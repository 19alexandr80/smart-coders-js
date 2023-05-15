// import { axiosApiBooks } from './axiosApi';

const refs = {
  shopListContainer: document.querySelector('.container__shopping-list'),
  shopListBtn: document.querySelector('#button-header-shop'),
  imgEmptyPage: document.querySelector('.imgEmptyPage'),
  textEmptyPage: document.querySelector('.textEmptyPage'),
  container: document.querySelector('.shopping-list__container'),
};
refs.shopListBtn.addEventListener('click', onBtnClick);
// LOCALSTORAGE_KEY = 'booksStorage';
// =========================================================================================
const dataBookShop = JSON.parse(localStorage.getItem('shopingList'));
const bookShopKyes = Object.keys(dataBookShop);
const dataBookRender = bookShopKyes.map(kye => {
  return dataBookShop[kye];
});
console.log(dataBookRender);

// =========================================================================================

const books = {
  _id: 1,
  book_image: './src/images/stopper116@1x.png',
  author: 'bla Bla',
  title: 'I will find you',
  category: 'Hardcover fiction',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.',
};

console.log(books);

// localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(books));

function onBtnClick() {
  //   const savedBooks = localStorage.getItem(books);
  console.log('gooood');
  if (localStorage.length >= 1) {
    refs.imgEmptyPage.remove('.imgEmptyPage');
    refs.textEmptyPage.remove('.textEmtyPage');
    makeMarkupBook(books);
  }
  if ((localStorage.length = 0)) {
    console.log('0000000');
  }
}

// createMarkupShopList(books);

function makeMarkupBook({
  _id,
  title,
  author,
  book_image,
  description,
  category,
  //   buy_links,
}) {
  // let amazonLink = '';
  // let appleBookLink = '';
  // let bookShopLink = '';

  // buy_links.forEach(link => {
  //   if (link.name === 'Amazon') {
  //     amazonLink = link.url;
  //   }
  //   if (link.name === 'Apple Books') {
  //     appleBookLink = link.url;
  //   }
  //   if (link.name === 'Bookshop') {
  //     bookShopLink = link.url;
  //   }
  // });

  const markup = `<ul class="shop-list__cards">
            <li class="shop-list__one-card" data-id=${_id}>
              <img class="shop-list__img" src="${book_image}" alt="${title}" />
              <div class="shop-list__text-container">
              <h2 class="shop-list__title">${title}</h2>
              <h3 class="shop-list__category-name">${category}</h3>
              <p class="shop-list__descr">${description}</p>
              <h3 class="author">${author}</h3>
              </div>
              <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
              <button></button>
      
            <div style="padding: 20px; background-color: #f6f6f6">
          <button class="btn-trash-box" type="button">
            <span class="btn-icn-wrap">
              <svg width="18" height="18">
                <use href="./images/icons.svg#trash"></use>
              </svg>
            </span>
          </button>
          </li>
        </div>
          </ul>`;
  console.log(markup);
  refs.container.insertAdjacentHTML('beforeend', markup);
}

// function createMarkupShopList(savedBooks) {
//   console.log('bla bla');
//   const markup = savedBooks
//     .map(({ id, book_image, author, title, description, category }) => {
//       return ` <ul class="shop-list__cards">
//       <li class="shop-list__one-card" data-id=${id}>
//         <img class="shop-list__img" src=${book_image} alt="${title}" />
//         <div class="shop-list__text-container">
//         <h2 class="shop-list__title">${title}</h2>
//         <h3 class="shop-list__category-name">${category}</h3>
//         <p class="shop-list__descr">${description}</p>
//         <h3 class="author">${author}</h3>
//         </div>
//         <ul>
//           <li><a href=""></a></li>
//           <li><a href=""></a></li>
//           <li><a href=""></a></li>
//         </ul>
//         <button></button>

//       <div style="padding: 20px; background-color: #f6f6f6">
//     <button class="btn-trash-box" type="button">
//       <span class="btn-icn-wrap">
//         <svg width="18" height="18">
//           <use href="./images/icons.svg#trash"></use>
//         </svg>
//       </span>
//     </button>
//     </li>
//   </div>
//     </ul>`;
//     })
//     .join('');
//   console.log(markup);
//   console.log(refs.container);
//   refs.container.innerHTML = markup;
// }
