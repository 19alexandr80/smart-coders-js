import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
        `${this.app}box/${email}.json`,
        request
      );

      return response;
    } catch (error) {
      console.error('post-error', error);
      // alert(error.message);
    }
  }
  async getRequest(email) {
    try {
      // const nikEmail = email.substring(0, email.indexOf("."));
      const respon = await axios.get(`${this.app}box/${email}.json`);
      console.log(respon.data);
      return respon.data;
    } catch (error) {
      console.error('get-error', error);
      // alert(error.message);
    }
  }
  // ==========================================================================================

  async authGoogle() {
    console.log('authgoogle');
    try {
      const au = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(au);
      const token = credential.accessToken;
      const user = au.user;
      localStorage.setItem('tokenResponse', token);
      localStorage.setItem('email', user.email);
      console.log('user', user.email);
      console.log('user photoUrl', user.photoURL);
    } catch (error) {
      console.error('get-error', error.message);
    }
  }
}
