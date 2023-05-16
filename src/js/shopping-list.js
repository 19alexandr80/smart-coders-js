// import { axiosApiBooks } from './axiosApi';

const refs = {
  shopListContainer: document.querySelector('.container__shopping-list'),
  imgEmptyPage: document.querySelector('.imgEmptyPage'),
  textEmptyPage: document.querySelector('.textEmptyPage'),
  container: document.querySelector('.shop-list__container'),
  // btnTrash: document.querySelector('[data-name="btn-trash"]'),
  cards: document.querySelector('.shop-list__cards'),
};
// const btnTrash = document.querySelector('.btn-trash-box');

// =========================================================================================

const dataBookShop = JSON.parse(localStorage.getItem('shopingList'));
console.log(dataBookShop);
const bookShopKyes = Object.keys(dataBookShop);

const dataBookRender = bookShopKyes.map(kye => {
  return dataBookShop[kye];
});
console.log(dataBookRender);

// =========================================================================================

// при відкритті сторінки, викликається функція
onOpenPage();
function onOpenPage() {
  console.log('gooood');

  // якщо в local storage немає жодної книги, малюється розмітка пустої сторінки
  if (!dataBookRender) {
    refs.containerEmptyPage.innerHTML = `
    <p class="textEmptyPage">
      This page is empty, add some books and proceed to order.
    </p>
    <img class="imgEmptyPage" src="./images/is-empty@1x.png" alt="" />`;
  }

  // якщо в local storage є хоча б одна книга, стираєтьсч розмітка пустої сторінки і малюється розмітка книги
  if (dataBookRender.length >= 1) {
    refs.imgEmptyPage.remove('.imgEmptyPage');
    refs.textEmptyPage.remove('.textEmptyPage');
    makeMarkupBook(dataBookRender);
  }
}

function makeMarkupBook(dataBookRender) {
  const markup = dataBookRender
    .map(({ id, bookImg, author, title, description, listName }) => {
      return ` 
      <li class="shop-list__one-card" data-id=${id}>
        <img class="shop-list__img" src=${bookImg} alt="${title}" />
        <div class="shop-list__text-container">
        <h2 class="shop-list__title-book">${title}</h2>
        <h3 class="shop-list__category-name">${listName}</h3>
        <p class="shop-list__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum blanditiis quo similique placeat aut a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum blanditiis quo similique placeat aut a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum blanditiis quo similique placeat aut a.</p>
        <h3 class="shop-list__author">${author}</h3>
        </div>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
       
      <div>
    <button class="btn-trash-box" type="button" data-name="btn-trash">
      <span class="btn-icn-wrap">
        <svg width="18" height="18">
          <use href="/icons.adfc4680.svg#trash"></use>
        </svg>
      </span>
    </button>
   
  </div>
  </li>
    `;
    })
    .join('');

  refs.cards.insertAdjacentHTML('beforeend', markup);
  const btnTrash = document.querySelector('[data-name="btn-trash"]');

  btnTrash.addEventListener('click', onBtnTrash);
}
const itemShopList = document.querySelector('.shop-list__one-card');

function onBtnTrash(e) {
  itemShopList.classList.add('is-hidden');
  console.log('hbkhbj');
  // refs.container.innerHTML = `
  // // <p class="textEmptyPage">
  // //   This page is empty, add some books and proceed to order.
  // // </p>
  // // <img class="imgEmptyPage" src="./images/is-empty@1x.png" alt="" />`;
}

// const books = {
//   _id: 1,
//   book_image: './src/images/stopper116@1x.png',
//   author: 'bla Bla',
//   title: 'I will find you',
//   category: 'Hardcover fiction',
//   description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.',
// };

// function makeMarkupBook({
//   _id,
//   title,
//   author,
//   book_image,
//   // description,
//   list_name,
//   //   buy_links,
// }) {
//   // let amazonLink = '';
//   // let appleBookLink = '';
//   // let bookShopLink = '';

//   // buy_links.forEach(link => {
//   //   if (link.name === 'Amazon') {
//   //     amazonLink = link.url;
//   //   }
//   //   if (link.name === 'Apple Books') {
//   //     appleBookLink = link.url;
//   //   }
//   //   if (link.name === 'Bookshop') {
//   //     bookShopLink = link.url;
//   //   }
//   // });

//   const markup = `<ul class="shop-list__cards">
//             <li class="shop-list__one-card" data-id=${_id}>
//               <img class="shop-list__img" src="${book_image}" alt="${title}" />
//               <div class="shop-list__text-container">
//               <h2 class="shop-list__title-book">${title}</h2>
//               <h3 class="shop-list__category-name">${list_name}</h3>
//               <p class="shop-list__descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta.</p>
//               <h3 class="shop-list__author">${author}</h3>
//               </div>
//               <ul>
//                 <li><a href=""></a></li>
//                 <li><a href=""></a></li>
//                 <li><a href=""></a></li>
//               </ul>
//               <button></button>

//             <div style="padding: 20px; background-color: #f6f6f6">
//           <button class="btn-trash-box" type="button">
//             <span class="btn-icn-wrap">
//               <svg width="18" height="18">
//                 <use href="./images/icons.svg#trash"></use>
//               </svg>
//             </span>
//           </button>
//           </li>
//         </div>
//           </ul>`;
//   console.log(markup);
//   refs.container.insertAdjacentHTML('beforeend', markup);
// }
