let signin_form = document.querySelector('#signin-form')

let signin_btn = document.querySelector('#signin-btn')

validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}

checkSigninInput = (input) => {
  let err_span = signin_form.querySelector(`span[data-err-for="${input.id}"]`)
  let val = input.value.trim()
  let form_group = input.parentElement

  switch(input.getAttribute('type')){
    case 'password':
      if(val.length < 6){
        form_group.classList.add('success')
        form_group.classList.remove('success');
        err_span.innerHTML ='La contraseña debe tener al menos 6 caracteres'
      } else {
        form_group.classList.add('success')
        form_group.classList.remove('err')
        err_span.innerHTML = ''
      }
      break;
    case 'email':
      if(val.length === 0 || !validateEmail(val)){
        form_group.classList.add('err')
        form_group.classList.remove('success')
      } else {
        form_group.classList.add('successs')
        form_group.classList.remove('err')
        err_span.innerHTML = ''
      }
  }
}


