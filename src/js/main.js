//import Notiflix from 'notiflix';
import { axiosApiBooks } from './axiosApi';
const bestsellersSectionEl = document.querySelector('.bookshelf');
window.addEventListener('DOMContentLoaded', loadTopBooksOnClick);

// вивод одной книги
function makeMarkupBook(books) {
  const markup = books
    .map(({ _id, book_image, author, title }) => {
      return `<li class="book-item" data-id="${_id}">
      <a class="bookshelf-bool-link" href="#">
    <div class="book-img-container">
     <img class="book-img" loading="lazy" src="${book_image}" alt="${title}"  width="180px" height="256px"/>
     <div class="books-overlay">
     <p class="books-overlay-text">quick view
     </p>
     </div>
     </div>
     <p class="book-title">${title}</p>
        <p class="author-name">${author}</p>
         </a>
        </li>`;
    })
    .join('');

  return markup;
}

// вывод список книг
async function makeMarkupTopBooksGallery(data) {
  const markup = await Promise.all(
    data.map(async ({ list_name, books }) => {
      const bookMarkup = await makeMarkupBook(books);
      return `
      <div class="bestsellers-category-item">
        <p class="bestsellers-category-name" name="${list_name}">${list_name}</p>
        <ul class="bestsellers-book-list">
          ${bookMarkup}
        </ul>
        <div class="bestsellers-button-container">
          <button type="button" class="bestsellers-button" name="${list_name}">see more</button>
        </div>
      </div>
    `;
    })
  );
  const titleMarkup = `<h2 class="bestsellers-title">
    Best Sellers Books  </h2>`;
  bestsellersSectionEl.innerHTML = titleMarkup + markup.join('');
}

async function loadTopBooksOnClick(event) {
  try {
    const data = await axiosApiBooks.fetchTopBooks();
    if (data.length === 0 || data === undefined) {
      Notiflix.Notify.failure(
        "Sorry, we didn't find anything according to your request."
      );
      return;
    }
    makeMarkupTopBooksGallery(data);
  } catch (error) {
    console.log(error.message);
  }
}
