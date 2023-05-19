import { DataFirebase } from './firebaseInteraction.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import svgRight from '../images/icons.svg';
import mail from '../images/icons.svg';
import lock from '../images/icons.svg';

//======================================================================
const buttonAutnSing = document.querySelector('.button-sing-auth-js');
buttonAutnSing.addEventListener('click', modalSignIn);
// =====================================================================

const dataFirebase = new DataFirebase();

// ========================================================
async function onAuthGoogle() {
  await dataFirebase.authGoogle();
  modalBox.innerHTML = '';
  document.body.classList.remove('scroll-off');

  authUserMarkUp();
}
// =========================================================
const auth = dataFirebase.auth;
const modalBox = document.querySelector('.modalWindow');
// =================================================
const burgerEl = document.querySelector('.burger-menu-header');
const burgerModalEl = document.querySelector('.modal-burger-menu');
// ============================================================================
burgerEl.addEventListener('click', () => {
  burgerModalEl.classList.toggle('modal-burger-menu-off');
  burgerEl.classList.toggle('active');
  window.scrollTo(0, 0);
  document.body.classList.toggle('scroll-off');

  if (burgerEl.classList.value.includes('active')) {
    window.document.addEventListener(
      'keydown',
      event => {
        if (!burgerEl.classList.value.includes('active')) {
          return;
        }
        if (event.key === 'Escape') {
          burgerModalEl.classList.toggle('modal-burger-menu-off');
          burgerEl.classList.toggle('active');
          document.body.classList.toggle('scroll-off');
        }
      },
      { once: true }
    );
  }
});
const burgerButtonAuth = document.querySelector('.burger-button-auth');
const burgerButtonFilling = document.querySelector('.burger-button-span');
burgerButtonAuth.addEventListener('click', onAuthBBurger);
function onAuthBBurger(e) {
  burgerEl.classList.toggle('active');
  burgerModalEl.classList.toggle('modal-burger-menu-off');
  document.body.classList.toggle('scroll-off');
  modalSignIn();
}
buttonSingAutBurger();
function buttonSingAutBurger() {
  if (localStorage.getItem('tokenResponse')) {
    burgerButtonFilling.innerHTML = 'Log out';
  } else {
    burgerButtonFilling.innerHTML = 'Log in';
  }
}

// =============================================================================

function modalSignIn() {
  window.document.addEventListener(
    'keydown',
    event => {
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
      if (event.key === 'Escape') {
        onCloseModalAuth();
      }
    },
    { once: true }
  );
  window.scrollTo(0, 0);
  if (localStorage.getItem('tokenResponse')) {
    localStorage.removeItem('tokenResponse');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('email');
    localStorage.removeItem('shopingList');
    authUserMarkUp();
    return;
  }
  const formHtml = `
    <div class="modal-bakc">
    <form class="modal-form-auth"">
    <div class='clousModalAuth'>&times;</div>
    <div class="input-wrapper">
    <input
      type="email"
      name="email"
      placeholder="email"
    />
    <svg class="input-icons">
          <use href="${mail}#mail"></use>
        </svg>
        </div>
        <div class="input-wrapper">
    <input
      type="password"
      name="password"
      placeholder="password"
    />
    <svg class="input-icons">
          <use href="${lock}#lock"></use>
        </svg>
        </div>
    <button type="submit">Sign in</button>
    <div class='button-sing-group'>
    <p class="button-sign-up">Sign up</p>
    <p class='button-sing'>Sign in</p>
    <p class='button-google'>google</p>
    </div>
  </form>
  </div>`;
  modalBox.innerHTML = formHtml;
  // ====================================================== body
  const modalForm = modalBox.querySelector('.modal-form-auth');
  const buttonSingUp = modalForm.querySelector('.button-sign-up');
  const buttonSingGoogle = modalForm.querySelector('.button-google');
  const clousButton = modalForm.querySelector('.clousModalAuth');
  // ========================================================
  buttonSingUp.addEventListener('click', modalAuth);
  buttonSingGoogle.addEventListener('click', onAuthGoogle);
  modalForm.addEventListener('submit', onDataFormIn);

  clousButton.addEventListener('click', onCloseModalAuth);
  modalBox.classList.add('trans-modal');
  document.body.classList.add('scroll-off');
  buttonSingAutBurger();
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
    document.body.classList.remove('scroll-off');
    const basketFire = await dataFirebase.getRequest(email);
    if (basketFire) {
      const bookJson = JSON.stringify(basketFire);
      localStorage.setItem('shopingList', bookJson);
    } else {
      localStorage.setItem('shopingList', JSON.stringify({}));
    }
  } catch (error) {
    console.error('fire.data-error', error);
    alert(error.message);
  }
  authUserMarkUp();
}
// =========================================================
function modalAuth() {
  const formHtml = `
    <div class="modal-bakc">
    <form class="modal-form-auth">
    <div class='clousModalAuth'>&times;</div>
    <div class="input-wrapper">
    <input
      type="email"
      name="email"
      placeholder="email"/>
    <svg class="input-icons"><use href="${mail}#mail"></use></svg>
    </div>
    <div class="input-wrapper">
    <input
      type="password"
      name="password"
      placeholder="password"/>
    <svg class="input-icons"><use href="${lock}#lock"></use></svg>
    </div>
    <div class="input-wrapper">
    <input
      type="password"
      name="passwordConfirmation"
      placeholder="password"/>
    <svg class="input-icons"><use href="${lock}#lock"></use></svg>
    </div>
    <button type="submit">sign up</button>
    <div class='button-sing-group'>
    <p class='button-sing'>Sign up</p>
    <p class="button-sign-in">Sign in</p>
    <p class='button-google'>google</p>
    </div>
  </form>
  </div>`;
  modalBox.innerHTML = formHtml;
  const modalForm = modalBox.querySelector('.modal-form-auth');
  const buttonSingIn = modalForm.querySelector('.button-sign-in');
  const buttonSingGoogle = modalForm.querySelector('.button-google');
  const clousButton = modalForm.querySelector('.clousModalAuth');
  // ====================================================================
  modalBox.classList.add('trans-modal');
  buttonSingIn.addEventListener('click', modalSignIn);
  modalForm.addEventListener('submit', onDataFormAuth);
  buttonSingGoogle.addEventListener('click', onAuthGoogle);
  clousButton.addEventListener('click', onCloseModalAuth);
  document.body.classList.add('scroll-off');
}

function onCloseModalAuth() {
  modalBox.classList.remove('trans-modal');
  modalBox.innerHTML = '';
  document.body.classList.remove('scroll-off');
}

async function onDataFormAuth(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  const passwordConfirmation =
    e.currentTarget.elements.passwordConfirmation.value;
  if (password && password === passwordConfirmation) {
    // console.log(email, password);
    modalBox.innerHTML = '';
    document.body.classList.remove('scroll-off');
    try {
      const fire = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('tokenResponse', fire._tokenResponse.idToken);
      localStorage.setItem('email', email);

      localStorage.setItem('shopingList', JSON.stringify({}));
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  } else {
    alert('Check the password');
  }
  authUserMarkUp();
}
const headerNav = document.querySelector('.header-button-nav');
const authInterfase = document.querySelector('.button-sing-auth-js');
function authUserMarkUp() {
  let userIn = '';
  if (localStorage.getItem('tokenResponse')) {
    const avatar = localStorage.getItem('userAvatar')
      ? localStorage.getItem('userAvatar')
      : 'https://bootstraptema.ru/snippets/icons/2016/mia/1.png';
    const email = localStorage.getItem('email');
    const nikEmail = email.substring(0, email.indexOf('@'));
    userIn = `<div class='user-auth-zone'>
        <img
          src="${avatar}"
          alt="user avatar"
          loading="lazy"
          class="user-img-auth"
          width="100%"
          height="auto"
        />
      <span class='nik-name'>${nikEmail}</span>
        <div class='svg-user-auth'>
        <svg width="23" height="26" fill="#ffffff">
          <use href="${svgRight}#caret-down"></use>
        </svg>
        </div>
    </div>`;
    headerNav.classList.remove('header-not-uyth');
  } else {
    userIn = `<div class="button-sing-auth-js">
      <button class="btn-log-out" type="button">
        Log in<span class="btn-icn-wrap">
          <svg width="20" height="20">
            <use href="${svgRight}#arrow-right"></use>
          </svg>
        </span>
      </button>
    </div>`;
    headerNav.classList.add('header-not-uyth');
  }
  authInterfase.innerHTML = userIn;
}
authUserMarkUp();
