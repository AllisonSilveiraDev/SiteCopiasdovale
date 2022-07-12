const nav = document.querySelector('#header .menu')
const toggle = document.querySelectorAll('#toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
