const modal = (showBtn, handlerCloseForm, formWrapper) => {
  const modalBtn = document.querySelectorAll(showBtn)
  const closeForm = document.querySelector(handlerCloseForm)
  const form = document.querySelector(formWrapper);
  const formBlock = document.querySelector('.form')
  const btn = document.querySelector('.maps__btn-contact');
  const contactBlock = document.querySelector('.maps__contact');
  const closeBtn = document.querySelector('.maps__contact-close');

  let scrollSize = window.innerWidth - document.documentElement.clientWidth;

  btn.addEventListener('click', () => {
    contactBlock.classList.add('active')
  });

  closeBtn.addEventListener('click', () => {
    contactBlock.classList.remove('active')
  })

  modalBtn.forEach((el) => {
    el.addEventListener('click', () => {
      form.style.display = 'block';

      let formPositionLeft = Math.round(form.clientWidth / 2 - formBlock.offsetWidth / 2);

      let formPositionTop = Math.round(form.clientHeight / 2 - formBlock.offsetHeight / 2);

      formBlock.style.cssText = `
        top: ${formPositionTop}px;
        left: ${formPositionLeft}px;
      `;

      document.body.style.cssText = `
        overflow: hidden;
        margin-right: ${scrollSize}px;
      `;
      closeForm.style.cursor = 'pointer';
      contactBlock.classList.remove('active')
    })
  })

  closeForm.addEventListener('click', () => {
    form.style.display = '';
    document.body.style.cssText = `
      overflow: '';
      margin-right: 0
    `
  })

}
export default modal;