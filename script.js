const hamburger = document.querySelector('.hamburger img')
const dropDown = document.querySelector('.nav-section')
hamburger.addEventListener('click', ()=>{
    hamburger.getAttribute('src')=='./images/icon-hamburger.svg' ? hamburger.setAttribute('src', './images/icon-close.svg') : hamburger.setAttribute('src', './images/icon-hamburger.svg')
    hamburger.getAttribute('src')=='./images/icon-hamburger.svg' ? dropDown.style.display="none" : dropDown.style.display="flex"
})
