const imgs = document.querySelectorAll('.panel')

imgs.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive()
        panel.classList.add('active')
    })
})


function removeActive(){
    imgs.forEach(panel => {
        panel.classList.remove('active')
    })
}