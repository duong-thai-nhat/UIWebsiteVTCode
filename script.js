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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    // const slides = document.querySelector(".carousel")
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    // if(n===-1){
    //   slides.style.marginLeft -= 100 + '%';
    // }
    // if(n===1){
    //   // slides.style.marginLeft = slides.style.marginLeft - "100%";
    //   slides.style.marginLeft  += 100 + '%';
    // }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }