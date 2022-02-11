const slider = (prev, next, slide, wrapper) => {
  const arrowPrev = document.querySelector(prev);
  const arrowNext = document.querySelector(next);
  const slides = document.querySelectorAll(slide);
  const block = document.querySelector(wrapper)
  block.addEventListener('touchstart', handleTouchStart);
  block.addEventListener('touchmove', handleTouchMove);
  block.addEventListener('touchend', handleTouchend);
  const media = window.matchMedia('(max-width: 769px)')

  let slideIndex = 1;

  let x1 = null;

  let x2 = null;

  showSlides(slideIndex);

  function showSlides(n) {

    if (n < 1) {
      slideIndex = slides.length - 2;
    }

    if (n >= slides.length - 1) {
      slideIndex = 1
    }

    slides.forEach((el) => {
      el.style.display = 'none';
    })


    slides[slideIndex].style.display = 'block';
    slides[slideIndex + 1].style.display = 'block';
    slides[slideIndex - 1].style.display = 'block';

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

  // setInterval(() => {
  //   plusSlides(1)
  // }, 3000)



  arrowPrev.addEventListener('click', () => {
    plusSlides(-1);
  })

  arrowNext.addEventListener('click', () => {
    plusSlides(1)
  })

  function handleTouchStart(e) {
    x1 = e.touches[0].clientX
  }


  function handleTouchMove(e) {
    x2 = e.touches[0].clientX;
  }

  function handleTouchend() {
    let swipeFinal = x1 - x2;
    if (swipeFinal > 0) {
      plusSlides(-1);
    } else {
      plusSlides(1);
    }

  }


}

export default slider;