const header = document.querySelector("header");
const navLists = document.querySelectorAll(".nav-list");
const DMLists = document.querySelectorAll(".dm-lists");
const hambugerMenu = document.querySelector(".hamburger-menu");

const aboutList = document.querySelector('.about-list');
const DDMenu1 = document.querySelector('.dm-1');

const worksList = document.querySelector('.works-list');
const DDMenu2 = document.querySelector('.dm-2');

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

// DMLists.forEach((DMlist) => {
//   DMlist.addEventListener("click", (e) => {
//     console.log(e)
//   })
// });

aboutList.addEventListener("click", () => {
  DDMenu1.classList.toggle("d-flex");
});

worksList.addEventListener("click", () => {
  DDMenu2.classList.toggle("d-flex");
});

window.addEventListener("scroll", () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? navLists.forEach((navList) => navList.classList.add("sticky"))
    : navLists.forEach((navList) => navList.classList.remove("sticky"));
});

let swiper = new Swiper(".swipo", {
  slidesPerView: 1,
  speed: 600,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
