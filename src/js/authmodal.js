import { DataFirebase } from './firebaseInteraction.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const buttonIn = document.querySelector('.buttonAuthEmail');
const buttonSangIn = document.querySelector('.buttonSignIn');
const buttonGoogle = document.querySelector('.buttonGoogle');

const dataFirebase = new DataFirebase();

buttonIn.addEventListener('click', modalAuth);
buttonSangIn.addEventListener('click', modalSignIn);
buttonGoogle.addEventListener('click', onAuthGoogle);
// ========================================================
async function onAuthGoogle() {
  dataFirebase.authGoogle();
}
// =========================================================
const auth = dataFirebase.auth;
const modalBox = document.querySelector('.modalWindow');
function modalSignIn() {
  const formHtml = `
    <div class="modal-bakc">
    <form class="modal-form-auth"">
    <input
      type="email"
      name="email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      placeholder="password"
    />
    <button type="submit">Sign in</button>
  </form>
  </div>`;
  modalBox.innerHTML = formHtml;
  const modalForm = modalBox.querySelector('.modal-form-auth');
  modalForm.addEventListener('submit', onDataFormIn);
}

async function onDataFormIn(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  try {
    const fire = await signInWithEmailAndPassword(auth, email, password);

    localStorage.setItem('tokenResponse', fire._tokenResponse.idToken);
    localStorage.setItem('email', email);
    modalBox.innerHTML = '';
  } catch (error) {
    console.error('fire.data-error', error);
    alert(error.message);
  }
}
// =========================================================
export function modalAuth() {
  const formHtml = `
    <div class="modal-bakc">
    <form class="modal-form-auth">
    <input
      type="email"
      name="email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      placeholder="password"
    />
    <input
      type="password"
      name="passwordConfirmation"
      placeholder="password"
    />
    <button type="submit">Registration</button>
  </form>
  </div>`;
  modalBox.innerHTML = formHtml;
  const modalForm = modalBox.querySelector('.modal-form');
  modalForm.addEventListener('submit', onDataFormAuth);
}

async function onDataFormAuth(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  const passwordConfirmation =
    e.currentTarget.elements.passwordConfirmation.value;
  if (password && password === passwordConfirmation) {
    console.log(email, password);
    modalBox.innerHTML = '';
    try {
      const fire = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('tokenResponse', fire._tokenResponse.idToken);
      localStorage.setItem('email', email);
    } catch (error) {
      console.error('jjjjjjjj-error', error);
      const errorMessage = error.message;
      alert(errorMessage);
    }
  } else {
    alert('Check the password');
  }
}
