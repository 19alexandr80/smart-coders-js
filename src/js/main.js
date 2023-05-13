import { axiosApiBooks } from './axiosApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');

const refs = {
  bestsellersSectionEl: document.querySelector('.bookshelf'),
  categoriesListEl: document.querySelector('.categories-list'),
  allCategoriesTitleEl: document.querySelector('.cat-list'),
  bestsellersButton: document.querySelector('.bestsellers-button'),
  //spinnerEl: document.querySelector('.spinner-more'),
};

// Загружает топовые книги и отображает их на странице (по умолчанию при зангрузке страницы).
window.addEventListener('DOMContentLoaded', loadTopBooksOnClick);
//При клике на элемент refs.allCategoriesTitleEl, будет вызвана фунция для загрузки топовых книг
refs.allCategoriesTitleEl.addEventListener('click', loadTopBooksOnClick);

// обработка кликов на кнопках категорий книг на странице SEE MORE
refs.bestsellersSectionEl.addEventListener('click', onCattegoryButtonElClick);
//  обрабатка кликов по элементу списка категорий и вызывает запрос к API для получения книг по выбранной категории
refs.categoriesListEl.addEventListener('click', loadCategoryBooksOnClick);

// рендер одной книги
function makeMarkupBook(books) {
  const markup = books
    .map(({ _id, book_image, author, title }) => {
      return `<li class="book-item" data-id="${_id}">
     <a class="bookshelf-bool-link" href="#">
    <div class="book-img-container">
    <div class="book-shoppingcart is-hidden"></div>
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

// рендер группы книг
async function makeMarkupTopBooksGallery(data) {
  const markupPromises = data.map(async ({ list_name, books }) => {
    const booksMarkup = await makeMarkupBook(books);
    return `
        <div class="bestsellers-category-item">
        <p class="bestsellers-category-name" name="${list_name}">${list_name}</p>
        <ul class="bestsellers-book-list">
        ${booksMarkup}
        </ul>
        <div class="bestsellers-button-container">
        <button type="button" class="bestsellers-button" name="${list_name}">see more</button>
        </div>
        </div>`;
  });

  const markupArray = await Promise.all(markupPromises);
  const markup = markupArray.join('');

  refs.bestsellersSectionEl.innerHTML = `
    <h2 class="bestsellers-title">${changeColorStyleInTitle(
      'Best Sellers Books'
    )}</h2>
    ${markup}`;
}

// загружает топовые книги
async function loadTopBooksOnClick(event) {
  try {
    //refs.spinnerEl.classList.remove('spinner-hidden');
    const data = await axiosApiBooks.fetchTopBooks();
    if (data.length === 0 || data === undefined) {
      Notify.failure(
        "Sorry, we didn't find anything according to your request."
      );
      return;
    }
    //refs.spinnerEl.classList.add('spinner-hidden');
    await makeMarkupTopBooksGallery(data);
  } catch (error) {
    console.log(error.message);
  }
}

// обработка кликов на кнопках категорий книг на странице SEE MORE
async function onCattegoryButtonElClick(event) {
  // проверяем, что клик был по кнопке категории
  if (!event.target.classList.contains('bestsellers-button')) {
    return;
  }

  // получаем название выбранной категории
  const categoryName = event.target.name;
  //refs.spinnerEl.classList.remove('spinner-hidden');
  try {
    // запрашиваем данные книг для выбранной категории
    const booksData = await axiosApiBooks.fetchSelectedCategory(categoryName);

    // если данных нет, выводим сообщение об ошибке
    if (!booksData || booksData.length === 0) {
      Notify.failure(
        "Sorry, we didn't find anything according to your request."
      );
      return;
    }

    // форматируем заголовок страницы
    const formattedCategoryName = toUpperCaseCategoryName(categoryName);
    const formattedTitle = changeColorStyleInTitle(formattedCategoryName);

    // обновляем заголовок и контент на странице
    const bestsellersTitle = document.querySelector('.bestsellers-title');
    bestsellersTitle.innerHTML = formattedTitle;
    makeMarkupCategoryShelf(booksData, categoryName);
    //refs.spinnerEl.classList.add('spinner-hidden');
  } catch (error) {
    console.log(error.message);
  }
}

//Функция используется для изменения заголовка категории книг в приложении,
//добавляя к последнему слову названия тег <span> с классом categories-title-last-word.
function changeColorStyleInTitle(category) {
  if (!category) {
    return '';
  }
  const words = category.trim().split(' ');
  const lastWord = words.pop();
  const formattedWords = words.join(' ');
  return `${formattedWords} <span class="categories-title-last-word">${lastWord}</span>`;
}

//  функция обрабатывает клик по элементу списка категорий и вызывает запрос к API для получения книг по выбранной категории
async function loadCategoryBooksOnClick(event) {
  const target = event.target;
  if (
    target.nodeName !== 'LI' ||
    target.textContent.trim() === 'All categories'
  ) {
    return;
  }
  //refs.spinnerEl.classList.remove('spinner-hidden');
  try {
    const nameCategory = target.textContent;
    const booksData = await axiosApiBooks.fetchSelectedCategory(nameCategory);

    if (!booksData || booksData.length === 0) {
      Notify.failure(
        "Sorry, we didn't find anything according to your request."
      );
    }

    const bestsellersTitle = document.querySelector('.bestsellers-title');
    bestsellersTitle.innerHTML = nameCategory;
    makeMarkupCategoryShelf(booksData, nameCategory);
    //refs.spinnerEl.classList.add('spinner-hidden');
  } catch (error) {
    console.log(error.message);
  }
}

// Функция формирует разметку для отображения книг определенной категории на странице
function makeMarkupCategoryShelf(data, nameCategory) {
  const categoryTitle = changeColorStyleInTitle(nameCategory);
  const booksMarkup = makeMarkupBook(data);

  const shelfMarkup = `
    <h2 class="bestsellers-title">${categoryTitle}</h2>
    <div class="bestsellers-category-item" name="${nameCategory}">
      <ul class="category-book-list">${booksMarkup}</ul>
    </div>
  `;

  refs.bestsellersSectionEl.innerHTML = shelfMarkup;
}

//Функция ищет элемент списка с именем категории и добавляет этому элементу класс upper-case, который приводит текст в верхний регистр и выделяет его на странице. Если на странице уже есть элементы с классом upper-case, функция удаляет этот класс у всех таких элементов, чтобы только один элемент был выделен верхним регистром в данный момент времени.

function toUpperCaseCategoryName(categoryName) {
  const previousSelectedCategory = document.querySelector('.upper-case');
  if (previousSelectedCategory) {
    previousSelectedCategory.classList.remove('upper-case');
  }
  const currentSelectedCategory = document.querySelector(
    `li[name="${categoryName}"]`
  );
  currentSelectedCategory.classList.add('upper-case');
}

export { refs };
