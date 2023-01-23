const left = document.querySelector(".blog__btn-left");
const right = document.querySelector(".blog__btn-right");

const slider = document.querySelector(".blog__slider");

//наш общий слайдера
new Swiper(slider, {
  slidesPerView: 2, // по сколько слайдев отображать на странице (либо цифра или авто
  loop: false, // повтор слайдев (true/folce)
  spaceBetween: 30, //растояние между слайдами
  allowTouchMove: false,
  speed: 6000,
  navigation: {
    nextEl: right,
    prevEl: left,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      loop: false,
    },
  },
});
//слайдер страницы about
const researchSlider = document.querySelector(".research__slider");
const researchLeft = document.querySelector(".research__btn-left");
const researchRight = document.querySelector(".research__btn-right");

new Swiper(researchSlider, {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: researchRight,
    prevEl: researchLeft,
  },
});
