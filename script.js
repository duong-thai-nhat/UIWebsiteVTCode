let slideIndex = 1;
showSlides(slideIndex);
showSlides1(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  showSlides1(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  showSlides1(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// document.querySelectorAll('.carousel').addEventListener('mouseleave', function(e) { flick.playPlayer() });
// document.querySelector('.carousel').da