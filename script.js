const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const tBox = document.getElementById('toast-box')
const darkModeToggle = document.getElementById('dark-mode-toggle')

let sucessIcon = '<i class="fa-solid fa-check"></i>'
let errorIcon = '<i class="fa-solid fa-xmark"></i>'
let warnIcon = '<i class="fa-solid fa-exclamation"></i>'

darkModeToggle.addEventListener('click', toggleDM)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let toast = document.createElement('div')
  toast.classList.add('toast')
  if (
    email.value == '' ||
    email.value == undefined ||
    password.value == '' ||
    password.value == undefined
  ) {
    toast.classList.add('warn')
    toast.innerHTML = warnIcon + 'Both email and password may not be null'
    tBox.appendChild(toast)
  } else if (password.value.length < 8 || password.value.lenth > 20) {
    toast.classList.add('warn')
    toast.innerHTML =
      warnIcon + 'Passwords may have between 8 and 20 characters'
    tBox.appendChild(toast)
  } else {
    toast.classList.add('success')
    email.value = ''
    password.value = ''
    toast.innerHTML = sucessIcon + 'Account created successfully'
    tBox.appendChild(toast)
  }

  setTimeout(() => {
    toast.remove()
  }, 5000)
})

function toggleDM() {
  console.log('test!')
  document.body.classList.toggle('dark')
  if (document.body.classList.contains('dark')) {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'
  } else {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'
  }
}
