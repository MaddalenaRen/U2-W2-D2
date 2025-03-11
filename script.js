
const hot = document.querySelectorAll("#hot .card")

hot.forEach((card, i) => {
    const label = document.createElement('p')
    label.innerText = 'Hot'
    label.classList.add('bg-danger', 'text-light')
    label.classList.add('position-absolute')
    hot[i].classList.add('position-relative')
    hot[i].appendChild(label)
})
