//Rotator/picture slider

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

slideLeft.addEventListener("click", function () {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
});

slideRight.addEventListener("click", function () {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
});


// Hamburger Menu

const hamburgerMenu = document.querySelector('.hamburger-menu');
const subMenu = document.querySelector('.sub-menu');

// Show the sub-menu on hover of the hamburger menu
hamburgerMenu.addEventListener('mouseover', function() {
  subMenu.classList.add('show-menu');
});

// Hide the sub-menu when the user clicks anywhere else on the page
document.addEventListener('click', function(event) {
  if (!hamburgerMenu.contains(event.target) && !subMenu.contains(event.target)) {
    subMenu.classList.remove('show-menu');
  }
});


//Thank you message
const contactForm = document.getElementById("contactForm");
const messageContainer = document.getElementById("messageContainer");

contactForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form inputs
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Hide the form
  contactForm.style.display = "none";

  // Construct the personalized message
  const personalizedMessage = `
    <h2>Thank you, ${firstName}!</h2>
    <p>We have received your message and will get back to you as soon as possible.</p>`
    ;

  // Display the personalized message
  messageContainer.innerHTML = personalizedMessage;
  messageContainer.style.display = "block";
});
