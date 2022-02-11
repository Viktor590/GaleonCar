const form = (state) => {
  const inputs = document.querySelectorAll('.form__input');
  const forms = document.querySelector('.contact')


  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    })
    return await res.text();
  }

  const clearInputs = () => {
    inputs.forEach(el => {
      el.value = '';
    })
  }

  forms.addEventListener('submit', (e) => {
    e.preventDefault();

    let div = document.createElement('div');
    div.classList.add('status-message');
    div.style.cssText = `
      font-size: 25px;
      color: red;
      padding: 25px 0;
    `;

    forms.appendChild(div)

    const formData = new FormData(forms);

    for (let key in state) {
      formData.append(key, state[key])
    }

    postData('server.php', formData)
      .then(res => {
        console.log(res);
        div.textContent = `Спасибо ${inputs[0].value}, скоро свяжемся`;
      })
      .catch(error => {
        console.log(error);
        div.textContent = `Что-то пошло не так, попробуйте еще раз`;
      })
      .finally(() => {
        clearInputs();
        setTimeout(() => {
          div.remove()
        }, 3000)
      })
  })

}
export default form
