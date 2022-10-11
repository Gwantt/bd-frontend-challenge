const form = document.querySelector("[data-multi-step]")
const steps = [...document.querySelectorAll("[data-step]")]
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')

const checkPassword = () => {
  if(password.value !== confirm.value) {
    alert('please check passwords')
    return false
  } else if (password.value === '' && confirm.value === '') {
    alert('please enter a password')
    return false
  }
  return true;
}

let currStep = steps.findIndex(step => {
  return step.classList.contains('active')
})


if (currStep < 0) {
  currStep = 0
  showCurrentStep()
}

form.addEventListener('click', e => {
  let addend;
  if(e.target.matches('[data-next]')) {
    addend = 1
  } else if (e.target.matches('[data-back]')) {
    addend = -1
  } else {
    return
  }

  if(addend === null) return;

  // if not required steps complete stop from going to next
  const inputs = [...steps[currStep].querySelectorAll('input')]
  if(!checkPassword()) {
    return;
  }
  const valid = inputs.every(input => input.reportValidity())

  if(valid) {
    currStep += addend
    showCurrentStep()
  }
})

const showCurrentStep = () => {
  steps.forEach((step, idx) => {
    step.classList.toggle('active', idx === currStep)
  })
}

const submit = document.querySelector('[data-submit]')
const inputs = form.querySelectorAll('input')
const selects = form.querySelectorAll('select')
const formData = {}

submit.addEventListener('click', e => {
  inputs.forEach(input => {
    formData[input.name] = input.value
  })

  selects.forEach(select => {
    formData[select.name] = select.value
  })

  console.log(JSON.stringify(formData))

})
