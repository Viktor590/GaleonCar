import burger from './modules/burger.js';
import headerSlider from './modules/headerSlider.js'
import slider from './modules/slider.js';
import tabs from './modules/tabs.js';
import tabSlide from './modules/tabSlide.js'
import modal from './modules/modal.js'




window.addEventListener('DOMContentLoaded', () => {
  burger('body', '.header__burger', '.header__nav-burger', '.header__nav-close');


  headerSlider('.header__slider', '.header__slider-item', '.header__arrow-prev', '.header__arrow-next');

  slider('.cars__arrow-left', '.cars__arrow-right', '.cars__cards-item', '.cars__cards-wrapper');

  tabs('.rent__tabs-list', '.rent__item-visibility', '.rent__item-arrow', '.rent__item-novisibility');

  tabSlide('.reviews__tabs-card', '.reviews__arrow-left',
    '.reviews__arrow-right',
    '.reviews__content-cards',
    '.reviews__tabs');

  modal();
})