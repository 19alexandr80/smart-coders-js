import { axiosApiBooks } from './axiosApi';

const categoriesRef = document.querySelector('.categories');

const categoriesListRef = document.querySelector('.categories-list');
const catListRef = document.querySelector('.cat-list');

axiosApiBooks.fetchCategoryList().then(markupCategories).then(createOnScreen);

categoriesListRef.addEventListener('click', onCategoryNameClick);

function onCategoryNameClick(e) {
  if (!e.target.classList.contains('cat-list')) return;

  const currentName = e.target.textContent;
  const currentCat = e.target.closest('.cat-list');
  const currenUpperCaseCategory = document.querySelector(
    '.cat-list.upper-case'
  );

  if (currenUpperCaseCategory) {
    currenUpperCaseCategory.classList.remove('upper-case');
  }

  currentCat.classList.add('upper-case');

  if (currentName === 'All categories') {
    axiosApiBooks.fetchTopBooks();
    return;
  }
}

function markupCategories(catArray) {
  return catArray
    .map(item => {
      return `<li class="cat-list cat-text" name="${item.list_name}">${item.list_name}</li>`;
    })
    .join('');
}

function createOnScreen(data) {
  categoriesListRef.insertAdjacentHTML('beforeend', data);
}
