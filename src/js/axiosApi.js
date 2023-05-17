import axios from 'axios';

class AxiosApiBooks {
  constructor() {
    this.baseUrl = 'https://books-backend.p.goit.global';

    this.categoryList = '/books/category-list'; // Перелік категорій книг
    this.topBooks = '/books/top-books'; // Популярні книги, що належать до усіх категорій
    this.selectedCategory = '/books/category?category='; // Книги окремої категорії
    this.bookInfo = '/books/'; // Детальна інформація про книгу
  }

  async fetchApi(param) {
    try {
      const response = await axios.get(`${this.baseUrl}${param}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  // Перелік категорій книг
  async fetchCategoryList() {
    return this.fetchApi(this.categoryList);
  }

  // Популярні книги, що належать до усіх категорій
  async fetchTopBooks() {
    return this.fetchApi(this.topBooks);
  }

  // Книги окремої категорії
  async fetchSelectedCategory(category) {
    return this.fetchApi(`${this.selectedCategory}${category}`);
  }

  // Детальна інформація про книгу
  async fetchBookInfo(id) {
    return this.fetchApi(`${this.bookInfo}${id}`);
  }
}

const axiosApiBooks = new AxiosApiBooks();

export { axiosApiBooks };
