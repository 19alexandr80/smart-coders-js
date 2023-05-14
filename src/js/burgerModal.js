const burgerEl = document.querySelector('.burger-menu-header');
const burgerModalEl = document.querySelector('.modal-burger-menu');
burgerEl.addEventListener('click', () => {
  burgerModalEl.classList.toggle('modal-burger-menu-off');
  burgerEl.classList.toggle('active');
});
