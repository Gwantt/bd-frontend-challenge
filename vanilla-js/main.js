const form = document.querySelector("[data-multi-step]")
const steps = [...document.querySelectorAll("[data-step]")]

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
  }

  if(addend === null) return;
  // if not required steps complete stop from going to next
  const inputs = [...steps[currStep].querySelectorAll('input')]
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
