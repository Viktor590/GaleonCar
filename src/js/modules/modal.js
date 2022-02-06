const modal = () => {
  const btn = document.querySelector('.maps__btn-contact');
  const contactBlock = document.querySelector('.maps__contact');
  const closeBtn = document.querySelector('.maps__contact-close');
  const modalBtn = document.querySelectorAll('.maps__contact-btn')
  const body = document.querySelector('body')

  btn.addEventListener('click', () => {
    contactBlock.classList.toggle('active')
  });

  closeBtn.addEventListener('click', () => {
    contactBlock.classList.remove('active')
  })

  modalBtn.forEach((el) => {
    el.addEventListener('click', () => {
      const modal = document.createElement('div')
      modal.classList.add('modal');
      modal.style.cssText = `
        width: 500px;
        height: 500px;
        z-index: 100;
        background: #ccc;
        position: fixed;
        top: 30%;
        left: 35%; 
      `;
      body.style.overflow = 'hidden'
      body.append(modal)
    })
  })
}
export default modal;