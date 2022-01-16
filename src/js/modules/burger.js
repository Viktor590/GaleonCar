const burger = (page, trigger, nav, close) => {
  const body = document.querySelector(page);
  const burgerMenu = document.querySelector(trigger);
  const navBurger = document.querySelector(nav);
  const closeMenu = document.querySelector(close);

  burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.overflow = 'hidden';
    navBurger.style.transform = 'translateY(0)';
  })

  closeMenu.addEventListener('click', () => {
    body.style.overflow = 'auto';
    navBurger.style.transform = 'translateY(300%)'
  })
}

export default burger;