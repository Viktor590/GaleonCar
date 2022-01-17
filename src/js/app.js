import burger from './modules/burger.js';
import headerSlider from './modules/headerSlider.js'




window.addEventListener('DOMContentLoaded', () => {
  burger('body', '.header__burger', '.header__nav-burger', '.header__nav-close');
  headerSlider('.header__slider', '.header__slider-item', '.header__arrow-prev', '.header__arrow-next');
})