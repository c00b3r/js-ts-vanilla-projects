const burgerButton = document.querySelector(".button-burger");
const burgerButtonClose = document.querySelector(".button-close-burger");
const burgerMenu = document.querySelector('.burger-menu')

burgerButton.addEventListener("click", function () {
    burgerButton.style.display = "none";
    burgerButtonClose.style.display = "flex";
    burgerMenu.style.display = 'flex'
});

burgerButtonClose.addEventListener("click", function () {
  burgerButtonClose.style.display = "none"
  burgerButton.style.display = "flex";
  burgerMenu.style.display = 'none'

});
