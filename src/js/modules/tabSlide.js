const tabSlide = (tabsBlock, arrowPrev, arrowNext, textContent, container) => {
  const tabs = document.querySelectorAll(tabsBlock);
  const arrowLeft = document.querySelector(arrowPrev);
  const arrowRight = document.querySelector(arrowNext)
  const content = document.querySelectorAll(textContent);
  const block = document.querySelector(container);
  block.addEventListener('touchstart', handleTouchStart);
  block.addEventListener('touchmove', handleTouchMove);


  let slideIndex = 1;
  let transform = 0;
  const stepTransform = 280;
  let x1 = null;
  let res = -(block.scrollWidth - stepTransform);


  hideTabs(transform)
  showTabs(slideIndex);

  function hideTabs(i) {
    let a = Math.max(i, res)
    tabs.forEach(el => {
      el.style.opacity = '.4';
      el.style.transform = `translateX(${a}px)`
    });

    content.forEach(el => {
      el.style.display = 'none';
    })
  }

  function showTabs(i) {

    if (i < 1) {
      slideIndex = tabs.length;
    }

    if (i > tabs.length) {
      slideIndex = 1
    }
    tabs[slideIndex - 1].style.opacity = '';
    content[slideIndex - 1].style.display = 'flex';
  }

  tabs.forEach((el, i) => {
    el.addEventListener('click', () => {
      slideIndex = i + 1
      hideTabs();
      showTabs(slideIndex)
    })
  })

  function handleTouchStart(e) {
    const touch = e.touches[0]
    x1 = touch.clientX;
  }

  function handleTouchMove(e) {
    let x2 = e.touches[0].clientX;
    let diff = -Math.round((x1 - x2) / 15);
    hideTabs(transform += diff)
  }


  function plusSlides(n) {
    showTabs(slideIndex += n);

  }

  function plusTransform(n) {
    hideTabs(transform += n);
  }

  arrowLeft.addEventListener('click', () => {
    plusTransform(stepTransform)
    plusSlides(-1)
  })

  arrowRight.addEventListener('click', () => {
    plusTransform(-stepTransform)
    plusSlides(1)
  })

}

export default tabSlide