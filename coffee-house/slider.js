const leftArrrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const slider = document.querySelector(".slider-list");
const slides = Array.from(slider.querySelectorAll(".product-slider"));
const slideCount = slides.length;
let slideIndex = 0;
const controls = document.querySelector("#controls");
const control = Array.from(controls.querySelectorAll('.control'))
let timer = 0
makeTimer();
let touchStartX = 0;
let touchEndX = 0;

leftArrrow.addEventListener("click", showPreviousSlide);
rightArrow.addEventListener("click", showNextSlide);
slider.addEventListener('touchend', showNextSlide)



function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider(slideIndex);
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider(slideIndex);
}

function updateSlider(slideIndex) {
  let width = slider.offsetWidth
  if (slideIndex === 0) {
    slider.style.transform = "translateX(0px)";
  } else if (slideIndex === 1) {
    slider.style.transform = `translateX(-${width}px)`;
  } else if (slideIndex === 2) {
    slider.style.transform = `translateX(-${width * 2}px)`;
  }

control.forEach((element, index)=>{
    if (index == slideIndex){
        element.children[0].style.animation = `timer 5s infinite`
    } else  element.children[0].style.animation = '0'
})
    makeTimer();
}

function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(showNextSlide,5000);
}

function handleSwipe() {
    const swipeLength = touchEndX - touchStartX;
    if (touchEndX < touchStartX && swipeLength < -60) {
      sliderRight.click();
      return true;
    }
    if (touchEndX > touchStartX && swipeLength > 60) {
      sliderLeft.click();
      return true;
    }
    return false;
  }




