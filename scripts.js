'use strict';

const menuToggle = document.querySelector('.mobile-nav');
const mobileNavbar = document.querySelector('.navbar');

let openMenu = false;

const menuOpenClose = (e) => {
  e.preventDefault();
  if (!openMenu) {
    menuToggle.classList.toggle('open');
    mobileNavbar.classList.toggle('mobile');
  }
};

menuToggle.addEventListener('click', menuOpenClose);
