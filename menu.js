const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll("header li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);

const header = document.querySelector("header");
const vmin = Math.min(window.innerWidth, window.innerHeight) / 100;

function handleScroll() {
  if (window.scrollY > 14 * vmin) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}
window.addEventListener("scroll", handleScroll);