import { axiosApiBooks } from './axiosApi';
import { refs } from './main';

//Если клик был произведен на элементе списка категорий, то код получает название категории, которую кликнули, находит элемент списка с этой категорией, и добавляет ему класс upper-case. Затем он проверяет, является ли категория "All categories", и если да, то вызывает функцию fetchTopBooks()
refs.categoriesListEl.addEventListener('click', onCategoryNameClick);

//Обработчик клика на категории
async function onCategoryNameClick(event) {
  if (!event.target.classList.contains('cat-list')) return;

  const currentName = event.target.textContent;
  const currentCat = event.target.closest('.cat-list');
  const currentUpperCaseCategory = document.querySelector(
    '.cat-list.upper-case'
  );

  if (currentUpperCaseCategory) {
    currentUpperCaseCategory.classList.remove('upper-case');
  }

  currentCat.classList.add('upper-case');

  if (currentName === 'All categories') {
    await axiosApiBooks.fetchTopBooks();
    return;
  }

  await axiosApiBooks.fetchSelectedCategory(currentName);
}

// рендеринг списка категорий на странице
async function renderCategories() {
  const categories = await axiosApiBooks.fetchCategoryList();
  const categoriesMarkup = categories
    .map(category => {
      return `<li class="cat-list cat-text" name="${category.list_name}">${category.list_name}</li>`;
    })
    .join('');

  refs.categoriesListEl.insertAdjacentHTML('beforeend', categoriesMarkup);
}

renderCategories();
