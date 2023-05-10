export class Spinner {
  spinnerEl = document.querySelector('.spinner-js');

  show() {
    this.spinnerEl.classList.remove('is-hidden');
  }

  hide() {
    this.spinnerEl.classList.add('is-hidden');
  }

  getEl() {
    return this.spinnerEl;
  }
}