const sliders = document.querySelectorAll('.slider2');

function showSlide(index, sliderIndex) {
  const slides = sliders[sliderIndex].querySelectorAll('.slides2 img');
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

function prevSlide(sliderIndex) {
  const currentSlide = Array.from(sliders[sliderIndex].querySelectorAll('.slides img')).findIndex(img => img.style.display === 'block');
  showSlide(currentSlide - 1, sliderIndex);
}

function nextSlide(sliderIndex) {
  const currentSlide = Array.from(sliders[sliderIndex].querySelectorAll('.slides img')).findIndex(img => img.style.display === 'block');
  showSlide(currentSlide + 1, sliderIndex);
}

// Показываем первый слайд для каждого слайдера
sliders.forEach((slider, index) => {
  showSlide(0, index);
});

