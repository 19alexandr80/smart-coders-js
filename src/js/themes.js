const buttonThemes = document.querySelector('.button-themes');
buttonThemes.addEventListener('click', () => {
  console.log(document.body.style.getPropertyValue('--wayte'));

  if (document.body.style.getPropertyValue('--wayte') !== '#111111') {
    document.body.style.setProperty('--dark', '#ffffff');
    document.body.style.setProperty('--wayte', '#111111');
  } else {
    document.body.style.setProperty('--dark', '#111111');
    document.body.style.setProperty('--wayte', '#ffffff');
  }
});
