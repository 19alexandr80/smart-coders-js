import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { axiosApiBooks } from './axiosApi';

const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: 'AIzaSyA0Twt9JJx7KChBOO37tFJHbHS8iJvtnU4',
  authDomain: 'team-project-d4f13.firebaseapp.com',
  projectId: 'team-project-d4f13',
  storageBucket: 'team-project-d4f13.appspot.com',
  messagingSenderId: '378146701089',
  appId: '1:378146701089:web:bf98f84a8f9624c7460860',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export class DataFirebase {
  constructor() {
    this.auth = auth;
    this.app =
      'https://team-project-d4f13-default-rtdb.europe-west1.firebasedatabase.app/';
  }
  async postRequest(request, email) {
    try {
      // const nikEmail = email.substring(0, email.indexOf("."));
      const response = await axios.post(
        `${this.app}booksShop/${email}.json`,
        request
      );

      return response;
    } catch (error) {
      console.error('post-error', error.message);
    }
  }
  async patchRequest(request, email) {
    try {
      // const nikEmail = email.substring(0, email.indexOf("."));
      const response = await axios.patch(
        `${this.app}booksShop/${email}.json`,
        request
      );

      return response;
    } catch (error) {
      console.error('post-error', error.message);
    }
  }
  async putRequest(request, email) {
    try {
      // const nikEmail = email.substring(0, email.indexOf("."));
      const response = await axios.put(
        `${this.app}booksShop/${email}.json`,
        request
      );

      return response;
    } catch (error) {
      console.error('post-error', error.message);
    }
  }
  async getRequest(email) {
    try {
      const nikEmail = email.substring(0, email.indexOf('.'));
      const respon = await axios.get(`${this.app}booksShop/${nikEmail}.json`);
      return respon.data;
    } catch (error) {
      console.error('get-error', error.message);
    }
  }
  async deleteRequest(r = null, id, email) {
    try {
      const nikEmail = email.substring(0, email.indexOf('.'));
      const response = await axios.delete(
        `${this.app}booksShop/${nikEmail}/${id}.json?auth=${r}`
      );

      return response;
    } catch (error) {
      console.error('error-deleteRequest', error.message);
    }
  }
  // ==========================================================================================

  async authGoogle() {
    try {
      const au = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(au);
      const token = credential.accessToken;
      const user = au.user;
      localStorage.setItem('tokenResponse', token);
      localStorage.setItem('email', user.email);
      const basketFire = await this.getRequest(user.email);
      if (basketFire) {
        const bookJson = JSON.stringify(basketFire);
        localStorage.setItem('shopingList', bookJson);
      }
    } catch (error) {
      console.error('get-error', error.message);
    }
  }
  // ==================================================================
  async deleteBook(idBook) {
    const booking = JSON.parse(localStorage.getItem('shopingList'));
    const bookKey = Object.keys(booking);
    bookKey.forEach(id => {
      if (id === idBook) {
        delete booking[idBook];
      }
    });
    const bookJson = JSON.stringify(booking);
    localStorage.setItem('shopingList', bookJson);
    const email = localStorage.getItem('email');
    const nikEmail = email.substring(0, email.indexOf('.'));
    const idBookShop = await this.putRequest(booking, nikEmail);
  }
  // ===================================================================
  async addBookk(id) {
    const email = localStorage.getItem('email');
    const boo = await axiosApiBooks.fetchBookInfo(id);
    const bookData = {
      buyLinks: boo.buy_links,
      title: boo.title,
      id: boo._id,
      listName: boo.list_name,
      bookImg: boo.book_image,
      author: boo.author,
    };

    if (localStorage.getItem('shopingList')) {
      const basket = JSON.parse(localStorage.getItem('shopingList'));
      basket[bookData.id] = bookData;
      const bookJson = JSON.stringify(basket);
      localStorage.setItem('shopingList', bookJson);
    } else {
      const dataBasket = {};
      dataBasket[bookData.id] = bookData;
      const bookJson = JSON.stringify(dataBasket);
      localStorage.setItem('shopingList', bookJson);
    }

    const booking = JSON.parse(localStorage.getItem('shopingList'));

    const nikEmail = email.substring(0, email.indexOf('.'));
    const idBookShop = await this.patchRequest(booking, nikEmail);
  }
}

const firefire = new DataFirebase();

// firefire.addBookk('643282b2e85766588626a10a');

// firefire.deleteBook('643282b1e85766588626a07b');
