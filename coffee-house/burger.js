const burgerButton = document.querySelector(".button-burger");
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const menuItem = document.querySelectorAll('.menu-item')

function toggleMenu() {
    if  (burgerButton.classList.contains('active-burger-button')){
        burgerButton.classList.remove('active-burger-button')
        burgerMenu.style.display = 'none'
        body.style.overflow = 'scroll'
    } else {
        burgerButton.classList.add('active-burger-button')
        burgerMenu.style.display = 'flex'
        body.style.overflow = 'hidden'
    }
}

burgerButton.addEventListener("click", toggleMenu);

menuItem.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )


