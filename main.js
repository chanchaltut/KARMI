const header = document.querySelector("header");
const navLists = document.querySelectorAll(".nav-list");
const DMLists = document.querySelectorAll(".dm-lists");
const hambugerMenu = document.querySelector(".hamburger-menu");
const ul = document.querySelector(".menu-list>ul");

window.addEventListener("scroll", () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? navLists.forEach((navList) => navList.classList.add("sticky"))
    : navLists.forEach((navList) => navList.classList.remove("sticky"));
});

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

DMLists.forEach((DMlist) => {
  DMlist.addEventListener(
    "click",
    () => DMlist.classList.toggle("dm-show"),
    document.body.addEventListener("click", () =>
      DMlist.classList.remove("dm-show")
    )
  );
});

ul.addEventListener(
  "click",
  function (ev) {
    ev.stopPropagation();
  },
  false
);

DMLists[0].addEventListener("click", () => {
  if (DMLists[1].classList.contains("dm-show"))
    DMLists[1].classList.remove("dm-show");
});

DMLists[1].addEventListener("click", () => {
  if (DMLists[0].classList.contains("dm-show"))
    DMLists[0].classList.remove("dm-show");
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
