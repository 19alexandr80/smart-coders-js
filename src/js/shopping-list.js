// import { axiosApiBooks } from './axiosApi';

const refs = {
  shopListContainer: document.querySelector('.container__shopping-list'),
  shopListBtn: document.querySelector('.button-header-shoping'),
  imgEmptyPage: document.querySelector('.imgEmptyPage'),
  textEmptyPage: document.querySelector('.textEmptyPage'),
  container: document.querySelector('.shop-list__container'),
  containerEmptyPage: document.querySelector('shop-list__empty-page'),
  btnTrash: document.querySelector('.btn-trash-box'),
};

// =========================================================================================

const dataBookShop = JSON.parse(localStorage.getItem('shopingList'));
const bookShopKyes = Object.keys(dataBookShop);
const dataBookRender = bookShopKyes.map(kye => {
  return dataBookShop[kye];
});
console.log(dataBookRender);
// =========================================================================================

refs.shopListBtn.addEventListener('click', onBtnClick);
// refs.btnTrash.addEventListener('click', onBtnTrash);
console.log(refs.btnTrash);

function onBtnClick() {
  console.log('gooood');
  if (dataBookRender.length < 1) {
    refs.imgEmptyPage.remove('.imgEmptyPage');
    refs.textEmptyPage.remove('.textEmptyPage');
    makeMarkupBook(dataBookRender);
  }
  // if ((dataBookRender.length = 0)) {
  //   // refs.containerEmptyPage.innerHTML = `
  //   // <p class="textEmptyPage">
  //   //   This page is empty, add some books and proceed to order.
  //   // </p>
  //   // <img class="imgEmptyPage" src="./images/is-empty@1x.png" alt="" />`;
  // }
}

// function onBtnTrash() {
//   refs.container.innerHTML = `
//   <p class="textEmptyPage">
//     This page is empty, add some books and proceed to order.
//   </p>
//   <img class="imgEmptyPage" src="./images/is-empty@1x.png" alt="" />`;
// }

function makeMarkupBook(dataBookRender) {
  console.log('bla bla');
  const markup = dataBookRender
    .map(({ id, bookImg, author, title, description, listName }) => {
      return ` <ul class="shop-list__cards">
      <li class="shop-list__one-card" data-id=${id}>
        <img class="shop-list__img" src=${bookImg} alt="${title}" />
        <div class="shop-list__text-container">
        <h2 class="shop-list__title">${title}</h2>
        <h3 class="shop-list__category-name">${listName}</h3>
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
    })
    .join('');
  console.log(markup);
  console.log(refs.container);
  refs.container.innerHTML = markup;
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
