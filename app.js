const barBtn = document.querySelector('#bar-btn')
const navBar = document.querySelector('.navbar')
const closeBtn = document.querySelector('#close-btn')
const fruitBtn = document.querySelectorAll('.btn3')
const fruitBar = document.querySelectorAll('.fruit')

barBtn.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})
closeBtn.addEventListener('click', () =>{
    navBar.classList.remove('active')
})





window.onscroll = () => {
    navBar.classList.remove('active')
}