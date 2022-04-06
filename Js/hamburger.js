'use strict';

const nav = document.querySelector('.primary-nav');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', () => {
  nav.classList.add('activeNav');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('activeNav');
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';
});
