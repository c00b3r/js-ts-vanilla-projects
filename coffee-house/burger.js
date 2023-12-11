const burgerButton = document.querySelector(".button-burger");
const burgerMenu = document.querySelector('.burger-menu')

function toggleMenu() {
    if  (burgerButton.classList.contains('active-burger-button')){
        burgerButton.classList.remove('active-burger-button')
        burgerMenu.style.display = 'none'
    } else {
        burgerButton.classList.add('active-burger-button')
        burgerMenu.style.display = 'flex'
    }
}

burgerButton.addEventListener("click", toggleMenu);



