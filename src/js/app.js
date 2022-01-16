import burger from './modules/burger.js';




window.addEventListener('DOMContentLoaded', () => {
  burger('body', '.header__burger', '.header__nav-burger', '.header__nav-close');
})