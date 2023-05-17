import { axiosApiBooks } from './axiosApi';
import { DataFirebase } from './firebaseInteraction';
import amazon from '../images/shops/amazon@1x.png';
import amazon2x from '../images/shops/amazon@2x.png';
import apple from '../images/shops/book@1x.png';
import apple2x from '../images/shops/book@2x.png';
import bookShop from '../images/shops/books@1x.png';
import bookShop2x from '../images/shops/books@2x.png';

const LOCAL_KEY = 'booksID';
const dataFirebase = new DataFirebase();
let BOOKID = null;

export async function openModal(element) {
  const validToken = localStorage.getItem('email') !== null;
  const bookId = element;
  const dataBook = await axiosApiBooks.fetchBookInfo(bookId);
  BOOKID = bookId;
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.remove('is-hidden');

  const modal = document.querySelector('.modal');
  modal.addEventListener('click', event => {
    event.stopPropagation();
  });

  if (validToken) {
    setOrderBtnText();
  }

  document.body.style.overflow = 'hidden';

  backdrop.addEventListener('click', closeModal);
  window.document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  const closeBtn = document.querySelector('.close-btn ');
  closeBtn.addEventListener('click', closeModal);

  const orderBtn = document.querySelector('[data-name="order-btn"]');
  orderBtn.addEventListener('click', onClick);

  const bookInformation = document.querySelector('.book-information');
  const markup = bookInfoMarkup(dataBook);
  bookInformation.innerHTML = markup;

  function closeModal() {
    backdrop.classList.add('is-hidden');
    bookInformation.innerHTML = '';
    orderBtn.removeEventListener('click', onClick);
    document.body.style.overflow = '';
  }

  function onClick(e) {
    const textAfterRemoveBtn = document.querySelector('.text-input');
    if (!orderBtn.classList.value.includes('btn-shop-list-modal-remove')) {
      orderBtn.textContent = 'remove from the shopping list';
      orderBtn.classList.add('btn-shop-list-modal-remove');
      textAfterRemoveBtn.innerHTML = `<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`;
      dataFirebase.addBookk(bookId);
    } else {
      dataFirebase.deleteBook(bookId);
      orderBtn.textContent = 'Add to shopping list';
      orderBtn.classList.add('btn-shop-list-modal-add');
      orderBtn.classList.remove('btn-shop-list-modal-remove');
      textAfterRemoveBtn.innerHTML = '';
    }
  }
}

function bookInfoMarkup({ book_image, title, author, description, buy_links }) {
  const amazonUrl = buy_links[0].url;
  const appleUrl = buy_links[1].url;
  const bookShopUrl = buy_links[3].url;

  return `
      <img class='book_modal-book-img' src="${
        book_image ? book_image : './src/images/stopper335@1x.png'
      }" alt='Book image'>
    <div class='book_modal-book-descr-inf'>
    <p class='book_modal-book-title'>${title ? title : 'No title.'}</p>
    <p class='book_modal-book-author'>${author ? author : 'No author.'}</p>
    <p class='book_modal-book-description'>${
      description ? description : 'No description.'
    }</p>
    <ul class='book_modal-links-group'>
    <li class='book_modal-links'><a href=${amazonUrl} target="_blank" rel="nofollow noopener noreferrer"> <img  src='${amazon}' srcset="${amazon} 1x, ${amazon2x} 2x" alt ='Amazon Icon'></a></li>
    <li class='book_modal-links'><a href=${appleUrl} target="_blank" rel="nofollow noopener noreferrer"> <img  src='${apple}' srcset="${apple} 1x, ${apple2x} 2x" alt ='Apple Icon'></a></li>
    <li class='book_modal-links'><a href=${bookShopUrl} target="_blank" rel="nofollow noopener noreferrer"> <img  src='${bookShop}' srcset="${bookShop} 1x, ${bookShop2x} 2x" alt ='Book Shop Icon'></a></li>
    </ul>
    </div>
       `;
}

function setOrderBtnText() {
  const orderBtn = document.querySelector('[data-name="order-btn"]');
  const textAfterRemoveBtn = document.querySelector('.text-input');
  const shopingListBook = JSON.parse(localStorage.getItem('shopingList'));
  const validBookKey = Object.keys(shopingListBook).includes(BOOKID);
  if (validBookKey) {
    orderBtn.textContent = 'remove from the shopping list';
    orderBtn.classList.add('btn-shop-list-modal-remove');
    orderBtn.classList.remove('btn-shop-list-modal-add');
    textAfterRemoveBtn.innerHTML = `<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`;
  } else {
    orderBtn.textContent = 'Add to shopping list';
    orderBtn.classList.add('btn-shop-list-modal-add');
    orderBtn.classList.remove('btn-shop-list-modal-remove');
    textAfterRemoveBtn.innerHTML = '';
  }
}
