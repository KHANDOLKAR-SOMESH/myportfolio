let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  }

  slides.forEach((slide, i) => {
    if (i === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function changeSlide(direction) {
  slideIndex += direction;
  showSlide(slideIndex);
}

// Show first slide initially
showSlide(slideIndex);
