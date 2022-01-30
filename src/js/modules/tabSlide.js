const tabSlide = () => {
  const tabs = document.querySelectorAll('.reviews__tabs-card');
  const arrowLeft = document.querySelector('.reviews__arrow-left');
  const arrowRight = document.querySelector('.reviews__arrow-right')
  const content = document.querySelectorAll('.reviews__content-cards')

  let slideIndex = 1;
  let transform = 0;
  const stepTransform = 200;

  hideTabs(transform, stepTransform)
  showTabs(slideIndex);




  function hideTabs(i, step) {

    tabs.forEach(el => {
      el.style.opacity = '.4';
      el.style.transform = `translateX(${i}px)`
    });

    content.forEach(el => {
      el.style.display = 'none';
    })
  }

  function showTabs(i) {

    if (i < 1) {
      // tabs.forEach(el => {
      //   el.style.transform = 'translateX(100px)'
      // })
      slideIndex = tabs.length;
    }

    if (i > tabs.length) {
      slideIndex = 1
    }
    // hideTabs();
    tabs[slideIndex - 1].style.opacity = '';
    content[slideIndex - 1].style.display = 'flex';
  }

  function plusSlides(n) {
    showTabs(slideIndex += n);

  }

  function plusTransform(n) {
    hideTabs(transform += n);
  }

  arrowLeft.addEventListener('click', () => {
    plusTransform(200)
    plusSlides(-1)
  })

  arrowRight.addEventListener('click', () => {
    plusTransform(-200)
    plusSlides(1)
  })

}

export default tabSlide