const slider = (prev, next, slide) => {
  const arrowPrev = document.querySelector(prev);
  const arrowNext = document.querySelector(next);
  const slides = document.querySelectorAll(slide);

  let slideIndex = 1;

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

  }

  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  arrowPrev.addEventListener('click', () => {
    plusSlides(-1);
  })

  arrowNext.addEventListener('click', () => {
    plusSlides(1)
  })


}

export default slider;