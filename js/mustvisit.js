const mvSlider = document.getElementById("mustVisitSlider");

let isDownMV = false;
let startXMV = 0;
let scrollLeftMV = 0;

mvSlider.addEventListener("mousedown", (e) => {
  isDownMV = true;
  mvSlider.classList.add("dragging");

  startXMV = e.pageX - mvSlider.offsetLeft;   // SAME LOGIC
  scrollLeftMV = mvSlider.scrollLeft;
});

mvSlider.addEventListener("mouseleave", () => {
  isDownMV = false;
  mvSlider.classList.remove("dragging");
});

mvSlider.addEventListener("mouseup", () => {
  isDownMV = false;
  mvSlider.classList.remove("dragging");
});

mvSlider.addEventListener("mousemove", (e) => {
  if (!isDownMV) return;

  e.preventDefault();

  const x = e.pageX - mvSlider.offsetLeft;
  const walk = (x - startXMV);               
  mvSlider.scrollLeft = scrollLeftMV - walk; 
});

// ================= HEADER SCROLL BEHAVIOUR =================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});
