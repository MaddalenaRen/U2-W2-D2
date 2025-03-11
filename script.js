
const hot = document.querySelectorAll("#hot .card")

hot.forEach((card, i) => {
    const label = document.createElement('p')
    label.innerText = 'Hot'
    label.classList.add('bg-danger', 'text-light')
    label.classList.add('position-absolute')
    allTheBears[i].classList.add('position-relative')
    allTheBears[i].appendChild(label)
})
