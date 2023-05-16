const burgerEl = document.querySelector('.burger-menu-header');
const burgerModalEl = document.querySelector('.modal-burger-menu');
const burgerButtonAuth = document.querySelector('.burger-button-auth');
burgerEl.addEventListener('click', () => {
  burgerModalEl.classList.toggle('modal-burger-menu-off');
  burgerEl.classList.toggle('active');
  document.body.classList.toggle('scroll-off');
});
