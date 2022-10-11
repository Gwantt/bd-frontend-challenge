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
  if(e.target.matches('[data-next]')) {
    currStep++
  } else if (e.target.matches('[data-back]')) {
    currStep--
  }
  showCurrentStep()
})

const showCurrentStep = () => {
  steps.forEach((step, idx) => {
    step.classList.toggle('active', idx === currStep)
  })
}

console.log(currStep)
