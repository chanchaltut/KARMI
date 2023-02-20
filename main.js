const menu_btn = document.querySelector(".menu-btn");
const header = document.querySelector("header");
const dropdown = document.querySelectorAll(".dropdown");

window.addEventListener("scroll", () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

menu_btn.addEventListener("click", (e) => {
  header.classList.toggle("active");
  dropdown.forEach((e) => e.classList.toggle("hover"));
});

dropdown.forEach((d) => {
  d.addEventListener("click", (e) => {
    e.target.parentElement.querySelector(".sub-menu").classList.toggle("show");
    d.querySelector("i").classList.toggle("rotate");
  });
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
