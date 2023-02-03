let navMenu = document.querySelector('.main-nav');
let navMenuToggleButton = document.querySelector('.main-nav__toogle');

navMenu.classList.remove('main-nav--nojs');

navMenuToggleButton.addEventListener('click', (()=>{
  navMenu.classList.toggle('main-nav--closed')
  navMenu.classList.toggle('main-nav--opened')
}))
