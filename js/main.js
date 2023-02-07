'use strict';

const bg = document.querySelector('#bg');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    bg.classList.add('-visible');
    // bg.classList.add('afterLoaded');
  }, 500);
});
