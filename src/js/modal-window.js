// //open-close modal window with remove event listener
// const openModalBtn = document.querySelector('[data-modal-open]');
// const closeModalBtn = document.querySelector('[data-modal-close]');
// const modalWindow = document.querySelector('[data-modal]');

// openModalBtn.addEventListener('click', toggleModal);
// closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   modalWindow.classList.toggle('is-hidden');
//   if (modalWindow.classList.contains('is-hidden')) {
//     removeModalListeners();
//   } else {
//     addModalListeners();
//   }
// }

// function closeModal() {
//   toggleModal();
//   window.removeEventListener('keydown', onEscKeyPress);
//   window.removeEventListener('click', onOverlayClick);
// }

// function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//     closeModal();
//   }
// }

// function onOverlayClick(event) {
//   if (event.target === modalWindow) {
//     closeModal();
//   }
// }

// function addModalListeners() {
//   window.addEventListener('keydown', onEscKeyPress);
//   window.addEventListener('click', onOverlayClick);
// }

// function removeModalListeners() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   window.removeEventListener('click', onOverlayClick);
// }
