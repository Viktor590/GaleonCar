const headerSlider = (block, items, prev, next) => {
  const container = document.querySelector(block);
  const slides = document.querySelectorAll(items);
  const arrowPrev = document.querySelector(prev);
  const arrowNext = document.querySelector(next);

  let activeSlide = 0;

  init();
  function init() {

    slides.forEach((item, index) => {
      item.dataset.order = index;
      item.style.transform = 'translate(-50%, -50%)';
      item.addEventListener('click', clickHadler)
    })


    activeSlide = Math.floor(slides.length / 2);

    update();
  }


  function update() {

    const { width, height } = container.getBoundingClientRect();


    const a = width / 2;
    const b = height * 0.40;
    const delta = Math.PI / slides.length / 4;

    for (let i = 0; i < slides.length; i++) {
      const leftSlide = document.querySelector(`${items}[data-order="${activeSlide - i}"]`);

      if (leftSlide) {
        leftSlide.style.zIndex = slides.length - i;
        leftSlide.style.opacity = 1 - (3 * i) / slides.length;
        leftSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)}px`;

        leftSlide.style.bottom = `${-b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)}px`
      }

      const rightSlide = document.querySelector(`${items}[data-order="${activeSlide + i}"]`);

      if (rightSlide) {
        rightSlide.style.zIndex = slides.length - i;
        rightSlide.style.opacity = 1 - (3 * i) / slides.length;
        rightSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta * i * 2)}px`;

        rightSlide.style.bottom = `${-b * Math.sin((Math.PI * 3) / 2 + delta * i * 2)}px`
      }
    }
  }

  function clickHadler() {
    const order = parseInt(this.dataset.order, 10);
    activeSlide = order;
    update();
  }

  arrowPrev.onclick = () => {
    activeSlide = Math.max(0, activeSlide - 1);
    update();
  }

  arrowNext.onclick = () => {
    activeSlide = Math.min(slides.length - 1, activeSlide + 1);
    update();
  }





}
export default headerSlider;