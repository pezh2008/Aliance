const left = document.querySelector(".blog__btn-left");
const right = document.querySelector(".blog__btn-right");

const slider = document.querySelector(".blog__slider");

//наш общий слайдера
new Swiper(slider, {
  slidesPerView: 2, // по сколько слайдев отображать на странице (либо цифра или авто
  loop: true, // повтор слайдев (true/folce)
  spaceBetween: 30, //растояние между слайдами
  allowTouchMove: false,
  navigation: {
    nextEl: right,
    prevEl: left,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    
    800: {
      slidesPerView: 2,
    
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
  slidesPerView: 2,
  loopedSlides: 4,
  navigation: {
    nextEl: researchRight,
    prevEl: researchLeft,
  },
});

const headerBtn = document.querySelector(".header__btn");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupBtn = document.querySelector(".popup__btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

headerBtn.addEventListener("click", () => {
  popup.style.display = "flex";

  // popup.classList.add("popup-test");
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

popupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  popup.style.display = "none";
  modal.style.display = "flex";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});



//burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("test");
  menu.classList.toggle("test2");
  document.body.classList.toggle("no-scroll");
});


//banner сдайдер

const advantages = document.querySelector(".advantages");
const bannerBtnPrev = document.querySelector(".banner__btn-left")
const bannerBtnNext = document.querySelector(".banner__btn-right")

new Swiper(advantages, {
  loop: false,
  slidesPerView: 5,
  allowTouchMove: false,
  navigation: {
    nextEl: bannerBtnNext,
    prevEl: bannerBtnPrev,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      allowTouchMove: true,
      loop: true,
    },
    1300: {
      slidesPerView: 5,
      allowTouchMove: false,
     
    },
  },
});


const workSlider = document.querySelector(".work__list");
const workBtnPrev = document.querySelector(".work__btn-prev")
const workBtnNext = document.querySelector(".work__btn-next")
new Swiper(workSlider, {
  loop: true,
  slidesPerView: 4,
  allowTouchMove: false,
  navigation: {
    nextEl: workBtnNext,
    prevEl: workBtnPrev,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      allowTouchMove: true,
      
    },
    1300: {
      slidesPerView: 4,
      allowTouchMove: false,
     
    },
  },
});