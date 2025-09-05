import './scss/styles.scss'

import { Dropdown, Modal, Carousel, Button, } from 'bootstrap'

document.getElementById('newPostBtnInput').addEventListener('click',  ()=> {
    const modalElement = document.getElementById('postModal')
    const modal = new Modal(modalElement)
    modal.show()
    setTimeout(() => {
        document.getElementById('writePostInput').focus()
    }, 500);
})

document.getElementById('themeSwitcher').addEventListener('click', () => {
    const htmlElement = document.querySelector('html')
    const iconElement = document.querySelector('#themeSwitcher i')
    if(htmlElement.getAttribute('data-bs-theme') === 'dark'){
        htmlElement.setAttribute('data-bs-theme', 'light')
        iconElement.classList.remove('bi-sun-fill')
        iconElement.classList.add('bi-moon-fill')
        localStorage.setItem('theme', 'light')
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark')
        iconElement.classList.remove('bi-moon-fill')
        iconElement.classList.add('bi-sun-fill')
        localStorage.setItem('theme', 'dark')
    }
})