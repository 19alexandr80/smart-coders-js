import svgHref from '../images/icons.svg';
import amazon from '../images/shops/amazon@1x.png';
import amazon2x from '../images/shops/amazon@2x.png';
import apple from '../images/shops/book@1x.png';
import apple2x from '../images/shops/book@2x.png';
import bookShop from '../images/shops/books@1x.png';
import bookShop2x from '../images/shops/books@2x.png';

import { DataFirebase } from './firebaseInteraction.js';
const dataFirebase = new DataFirebase();

export const refs = {
  container: document.querySelector('.shop-list__empty-page'),
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

// =========================================================================================

// при відкритті сторінки, викликається функція
onOpenPage();
function onOpenPage() {
  // якщо в local storage немає жодної книги, малюється розмітка пустої сторінки
  if (!dataBookRender) {
    refs.cards.classList.add('visually-hidden');
    refs.container.innerHTML = `
  <div class="shop-list__empty-page">
  <p class="textEmptyPage">
    This page is empty, add some books and proceed to order.
  </p>
  <img class="imgEmptyPage" src="./images/is-empty@2x.png" alt="" />
</div>`;
  }

  // якщо в local storage є хоча б одна книга, стираєтьсч розмітка пустої сторінки і малюється розмітка книги
  if (dataBookRender.length >= 1) {
    refs.container.remove('.shop-list__empty-page');
    makeMarkupBook(dataBookRender);
  }
}

export function makeMarkupBook(dataBookRender) {
  refs.cards.classList.remove('visually-hidden');

  const descrText =
    'Hi! We have no description. If you plan to read this book, we would be very happy to receive a description from you';
  const categoryText = 'There is no category here';

  const markup = dataBookRender.map(
    ({ id, bookImg, author, title, description, listName, buyLinks }) => {
      let amazonLink = '';
      let appleBookLink = '';
      let bookShopLink = '';

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
        <img class="shop-list__img" src="${
          bookImg ? bookImg : './src/images/stopper335@1x.png'
        }" alt="${title ? title : 'No title'}" />
        <div class="shop-list__text-container">
          <h3 class="shop-list__title-book">${title ? title : 'No title'} </h3>
          <h4 class="shop-list__category-name">${
            listName ? listName : categoryText
          }</h4>
          <p class="shop-list__descr ">${
            description ? description : descrText
          }</p>
          <h4 class="shop-list__author">${author ? author : 'No author'}</h4>
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

  // вставляємо отриману розмітку до контейнера
  return (refs.cards.innerHTML = markup.join(''));
}

// видаляємо книгу з localStorage та з розмітки сторінки
refs.cards.addEventListener('click', onRemoveCard);

function onRemoveCard(evt) {
  if (!evt.target.closest('.btn-trash-box')) {
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
    refs.cards.classList.add('visually-hidden');
    refs.container.innerHTML = `
    <div class="shop-list__empty-page">
    <p class="textEmptyPage">
      This page is empty, add some books and proceed to order.
    </p>
    <img class="imgEmptyPage" src="./images/is-empty@2x.png" alt="" />
  </div>`;
  }
}

const btnTrash = document.querySelector('.shop-list__cards');
btnTrash.addEventListener('click', onBtnTrash);

async function onBtnTrash(e) {
  if (!e.target.closest('.btn-trash-box')) {
    return;
  }
  const id = e.target.closest('button').dataset.id;

  await dataFirebase.deleteBook(id);
  window.location.reload();
}
