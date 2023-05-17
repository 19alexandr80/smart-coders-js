const buttonThemes = document.querySelector('.button-themes');
buttonThemes.addEventListener('click', onThemLocal);
function onThemLocal() {
  if (document.body.style.getPropertyValue('--light') === '#ffffff') {
    localStorage.removeItem('them');
    document.body.style.setProperty('--dark', '#111111');
    document.body.style.setProperty('--wayte', '#ffffff');
    document.body.style.setProperty('--light', '#111111');
    document.body.style.setProperty('--light-sidebar', 'rgba(17, 17, 17, 0.6)');
    document.body.style.setProperty('--light-shoplist', 'rgba(0, 0, 0, 0.6)');
    document.body.style.setProperty(
      '--light-book-modal',
      'rgba(17, 17, 17, 0.5)'
    );
    document.body.style.setProperty('--light-singup-modal-btn', '#f3f3f3');
    document.body.style.setProperty(
      '--light-singup-modal-singin-txt',
      'rgba(17, 17, 17, 0.5)'
    );
    document.body.style.setProperty('--light-bgc', '#f6f6f6');
    document.body.style.setProperty('--light-bgc-second', '#ffffff');
    document.body.style.setProperty('--light-scroll', '#e0e0e0');
    document.body.style.setProperty('--light-brdr', '#111111');

    //---------------add
    document.body.style.setProperty('--light-accent', '#4f2ee8');
    document.body.style.setProperty('--light-brdr-reg', '#111111');
  } else {
    localStorage.setItem('them', 'dark');
    document.body.style.setProperty('--wayte', '#111111');
    document.body.style.setProperty('--dark', '#ffffff');
    document.body.style.setProperty('--light', '#ffffff');
    document.body.style.setProperty(
      '--light-sidebar',
      'rgba(255, 255, 255, 0.6)'
    );
    document.body.style.setProperty(
      '--light-shoplist',
      'rgba(255, 255, 255, 0.6)'
    );
    document.body.style.setProperty(
      '--light-book-modal',
      'rgba(255, 255, 255, 0.5)'
    );
    document.body.style.setProperty('--light-singup-modal-btn', '#202024');
    document.body.style.setProperty(
      '--light-singup-modal-singin-txt',
      'rgba(246, 246, 246, 0.5)'
    );
    document.body.style.setProperty('--light-bgc', '#202024');
    document.body.style.setProperty('--light-bgc-second', '#111111');
    document.body.style.setProperty('--light-scroll', 'rgba(17, 17, 17, 0.6)');
    document.body.style.setProperty('--light-brdr', '#ffffff');

    //---------------add
    document.body.style.setProperty('--light-accent', '#eac645');
    document.body.style.setProperty('--light-brdr-reg', '#f6f6f6');
  }
}
function localThem() {
  if (localStorage.getItem('them')) {
    onThemLocal();
  }
}
localThem();



const toggle = document.getElementById('toggle');
toggle.onclick = () => {
  toggle.classList.toggle('active');
};

