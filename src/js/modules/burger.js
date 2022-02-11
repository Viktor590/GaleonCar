const burger = (page, trigger, nav, close) => {
  const body = document.querySelector(page);
  const burgerMenu = document.querySelector(trigger);
  const navBurger = document.querySelector(nav);
  const closeMenu = document.querySelector(close);
  const navBurgerList = document.querySelectorAll('.header__nav-burger__item')

  burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.overflow = 'hidden';
    navBurger.style.transform = 'translateY(0)';
  })

  function hideMenu() {
    body.style.overflow = 'auto';
    navBurger.style.transform = 'translateY(300%)'
  }

  closeMenu.addEventListener('click', () => {
    hideMenu()
  })

  navBurgerList.forEach(el => {
    el.addEventListener('click', () => {
      hideMenu();
    })
  })

}

export default burger;