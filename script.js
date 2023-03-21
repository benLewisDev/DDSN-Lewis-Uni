let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slider-img");
  let btns = document.getElementsByClassName("slide-btn");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000);
}

let slideLeft = document.createElement("span");
let slideRight = document.createElement("span");
slideLeft.className = "slide-btn left fas fa-chevron-left";
slideRight.className = "slide-btn right fas fa-chevron-right";
document.getElementById("slider").appendChild(slideLeft);
document.getElementById("slider").appendChild(slideRight);

slideLeft.addEventListener("click", function() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
});

slideRight.addEventListener("click", function() {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
});
