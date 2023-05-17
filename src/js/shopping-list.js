// import { axiosApiBooks } from './axiosApi';
import svgHref from '../images/icons.svg';
import amazon from '../images/shops/amazon@1x.png';
import amazon2x from '../images/shops/amazon@2x.png';
import apple from '../images/shops/book@1x.png';
import apple2x from '../images/shops/book@2x.png';
import bookShop from '../images/shops/books@1x.png';
import bookShop2x from '../images/shops/books@2x.png';

import { DataFirebase } from './firebaseInteraction.js';
const dataFirebase = new DataFirebase();

const refs = {
  shopListContainer: document.querySelector('.shop-list__container'),
  imgEmptyPage: document.querySelector('.imgEmptyPage'),
  textEmptyPage: document.querySelector('.textEmptyPage'),
  container: document.querySelector('.shop-list__container'),
  cards: document.querySelector('.shop-list__cards'),
};

// =========================================================================================

const dataBookShop = JSON.parse(localStorage.getItem('shopingList'));
let dataBookRender = [];

if (!dataBookShop) {
  return;
} else {
  const bookShopKyes = Object.keys(dataBookShop);

  dataBookRender = bookShopKyes.map(kye => {
    return dataBookShop[kye];
  });
}
console.log(dataBookRender);
// =========================================================================================

// при відкритті сторінки, викликається функція
onOpenPage();
function onOpenPage() {
  // якщо в local storage немає жодної книги, малюється розмітка пустої сторінки
  // if (!dataBookRender) {
  //   refs.containerEmptyPage.innerHTML = `
  //   <p class="textEmptyPage">
  //     This page is empty, add some books and proceed to order.
  //   </p>
  //   <img class="imgEmptyPage" src="./images/is-empty@1x.png" alt="" />`;
  // }

  // якщо в local storage є хоча б одна книга, стираєтьсч розмітка пустої сторінки і малюється розмітка книги
  if (dataBookRender.length >= 1) {
    refs.imgEmptyPage.remove('.imgEmptyPage');
    refs.textEmptyPage.remove('.textEmptyPage');
    makeMarkupBook(dataBookRender);
  }
}

console.log(dataBookRender);
function makeMarkupBook(dataBookRender) {
  refs.cards.classList.remove('is-hidden');

  const markup = dataBookRender.map(
    ({ id, bookImg, author, title, description, listName, buyLinks }) => {
      let amazonLink = '';
      let appleBookLink = '';
      let bookShopLink = '';
      // David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall
      buyLinks.forEach(link => {
        if (link.name === 'Amazon') {
          amazonLink = link.url;
        }
        if (link.name === 'Apple Books') {
          appleBookLink = link.url;
        }
        if (link.name === 'Bookshop') {
          bookShopLink = link.url;
        }
      });
      return ` 
      <li class="shop-list__one-card" data-id=${id}>
        <img class="shop-list__img" src=${bookImg} alt="${title}" />
        <div class="shop-list__text-container">
        <h2 class="shop-list__title-book">${title}</h2>
        <h3 class="shop-list__category-name">${listName}</h3>
        <p class="shop-list__descr">${description}</p>
        <h3 class="shop-list__author">${author}</h3>
        </div>
        
        <ul class='shop-list__links-group'>
        <li class='shop-list__links'><a href=${amazonLink} target="_blank"> <img  src='${amazon}' srcset="${amazon} 1x, ${amazon2x} 2x" rel="noopener noreferrer nofollow" aria-label="Amazon link"></a></li>
        <li class='shop-list__links'><a href=${appleBookLink} target="_blank"> <img  src='${apple}' srcset="${apple} 1x, ${apple2x} 2x" rel="noopener noreferrer nofollow" aria-label="Apple Books link"'></a></li>
        <li class='shop-list__links'><a href=${bookShopLink} target="_blank"> <img  src='${bookShop}' srcset="${bookShop} 1x, ${bookShop2x} 2x" rel="noopener noreferrer nofollow" aria-label="Amazon link"></a></li>
        </ul>
        
       
      <div>
    <button class="btn-trash-box" type="button" data-name="btn-trash" data-id=${id}>
      <span class="btn-icn-wrap">
        <svg width="18" height="18">
          <use href="${svgHref}#trash"></use>
        </svg>
      </span>
    </button>
  </div>
  </li>
    `;
    }
  );
  //     .join('');

  //   refs.cards.insertAdjacentHTML('beforeend', markup);
  // }
  // вставляємо отриману розмітку до контейнера
  refs.cards.innerHTML = markup.join('');
}

// видаляємо книгу з localStorage та з розмітки сторінки
refs.shopListContainer.addEventListener('click', onRemoveCard);

function onRemoveCard(evt) {
  console.log(evt.target);
  if (evt.target.nodeName !== 'use') {
    return;
  }

  const card = evt.target.closest('.shop-list__one-card');
  const id = card.dataset.id;

  // видаляємо книгу з localStorage
  const bookShopKeys = Object.keys(dataBookShop);

  bookShopKeys.forEach(key => {
    if (dataBookShop[key].id === id) {
      delete dataBookShop[key];
    }
  });

  localStorage.setItem('shopingList', JSON.stringify(dataBookShop));

  // видаляємо книгу з розмітки сторінки
  evt.target.closest('.shop-list__one-card').remove();

  // якщо всі книги видалено, генерується розмітка пустої сторінки
  if (!refs.cards.children.length) {
    refs.cards.classList.add('is-hidden');
    refs.container.innerHTML = `
      <p class="textEmptyPage">
        This page is empty, add some books and proceed to order.
      </p>
      <img class="imgEmptyPage" src="./src/images/is-empty@1x.png" alt="" />`;
    refs.cards.insertAdjacentHTML('beforeend', markup);
  }
}
const btnTrash = document.querySelector('.shop-list__cards');
btnTrash.addEventListener('click', onBtnTrash);

async function onBtnTrash(e) {
  if (e.target.closest('button').tagName) {
    const id = e.target.closest('button').dataset.id;
    await dataFirebase.deleteBook(id);
    window.location.reload();
  }
  const id = e.target.closest('li').dataset.id;
  await dataFirebase.deleteBook(id);
  window.location.reload();
}

// const card = document.querySelector('.shop-list__one-card');
// const btnTrash = document.querySelector('[data-name="btn-trash"]');

// refs.cards.addEventListener('click', onBtnTrash);

// function onBtnTrash(e) {
//   if (e.target.classList.contains('btn-trash-box')) {
//     console.log(e.target);
//     card.remove();
//   }
// }

// modal.addEventListener('click', event => {
//   event.stopPropagation();
// });

// console.log(oneCard);
// refs.container.innerHTML = `
// // <p class="textEmptyPage">
// //   This page is empty, add some books and proceed to order.
// // </p>
// // <img class="imgEmptyPage" src="./images/is-empty@1x.png" alt="" />`;
