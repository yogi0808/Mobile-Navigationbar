const icons = document.querySelectorAll('.icon')
const circul = document.querySelector('.circul')



icons.forEach((icon, idx) => {
    icon.addEventListener('click', () => {
        removeActive()
        icon.parentElement.classList.add('active')

        circul.classList.remove('n0')
        circul.classList.remove('n1')
        circul.classList.remove('n2')
        circul.classList.remove('n3')
        circul.classList.remove('n4')

        circul.classList.add(`n${idx}`)


    })
})



function removeActive() {
    icons.forEach(icon => {
        icon.parentElement.classList.remove('active')
    })
}