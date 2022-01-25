const slider = (prev, next, slide, wrapper) => {
  const arrowPrev = document.querySelector(prev);
  const arrowNext = document.querySelector(next);
  const slides = document.querySelectorAll(slide);
  const block = document.querySelector(wrapper)
  block.addEventListener('touchstart', handleTouchStart);
  block.addEventListener('touchmove', handleTouchMove);

  const media = window.matchMedia('(max-width: 769px)')

  let slideIndex = 1;
  let x1 = null;

  showSlides(slideIndex);

  function showSlides(n) {
    if (n - 1 < 0) {
      n = slides.length - 1;
    }

    if (n + 1 > slides.length - 1) {
      n = 1
    }

    slides.forEach((el) => {
      el.style.display = 'none';
    })

    slides[n + 1].style.display = 'block';
    slides[n - 1].style.display = 'block';
    slides[n].style.display = 'block';

    if (media.matches) {
      slides.forEach((el) => {
        el.style.display = 'none';
      })

      slides[n].style.display = 'block'
    }

  }

  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  setInterval(() => {
    plusSlides(1)
  }, 3000)



  arrowPrev.addEventListener('click', () => {
    plusSlides(-1);
  })

  arrowNext.addEventListener('click', () => {
    plusSlides(1)
  })

  function handleTouchStart(e) {
    const touch = e.touches[0]
    x1 = touch.clientX;
  }

  function handleTouchMove(e) {
    let x2 = e.touches[0].clientX;

    let xRes = x2 - x1;

    if (xRes < 0) {
      plusSlides(-1);
    } else if (xRes > 0) {
      plusSlides(1);
    } else {
      return
    }
  }


}

export default slider;