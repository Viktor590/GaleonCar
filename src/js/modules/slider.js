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
    // console.log(x1);
  }


  function handleTouchMove(e) {
    let x2 = e.touches[0].clientX;
    console.log(x2);
    let xRes = x1 - x2;
    // console.log(xRes);
    if (xRes < 0) {
      plusSlides(-1);
    }
    if (xRes > 0) {
      plusSlides(1);
    }
  }


}

export default slider;