import { axiosApiBooks } from './axiosApi';
import { refs } from './main';

//Если клик был произведен на элементе списка категорий, то код получает название категории, которую кликнули, находит элемент списка с этой категорией, и добавляет ему класс upper-case. Затем он проверяет, является ли категория "All categories", и если да, то вызывает функцию fetchTopBooks()
refs.categoriesListEl.addEventListener('click', onCategoryNameClick);

//Обработчик клика на категории
async function onCategoryNameClick(event) {
  const { target } = event;
  if (!target.classList.contains('cat-list')) return;

  const { textContent: currentName, closest: findParent } = target;
  const currentCat = findParent.call(target, '.cat-list');
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
  categories.sort((a, b) => a.list_name.localeCompare(b.list_name));
  const categoriesMarkup = categories
    .map(({ list_name }) => {
      return `<li class="cat-list cat-text" name="${list_name}">${list_name}</li>`;
    })
    .join('');

  refs.categoriesListEl.insertAdjacentHTML('beforeend', categoriesMarkup);
}

renderCategories();
