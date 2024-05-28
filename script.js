const sliders = document.querySelectorAll('.slider');

function showSlide(index, sliderIndex) {
  const slides = sliders[sliderIndex].querySelectorAll('.slides img');
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


const sliders1 = document.querySelectorAll('.slider1');

function showSlide1(index1, sliderIndex1) {
  const slides1 = sliders1[sliderIndex1].querySelectorAll('.slides1 img');
  if (index1 < 0) {
    index1 = slides1.length - 1;
  } else if (index1 >= slides1.length) {
    index1 = 0;
  }
  for (let i1 = 0; i1 < slides1.length; i1++) {
    slides1[i1].style.display = 'none';
  }
  slides1[index1].style.display = 'block';
}

function prevSlide1(sliderIndex1) {
  const currentSlide1 = Array.from(sliders1[sliderIndex1].querySelectorAll('.slides1 img')).findIndex(img => img.style.display === 'block');
  showSlide1(currentSlide1 - 1, sliderIndex1);
}

function nextSlide1(sliderIndex1) {
  const currentSlide1 = Array.from(sliders1[sliderIndex1].querySelectorAll('.slides1 img')).findIndex(img => img.style.display === 'block');
  showSlide1(currentSlide1 + 1, sliderIndex1);
}

// Показываем первый слайд для каждого слайдера
sliders1.forEach((slider1, index1) => {
  showSlide1(0, index1);
});




const sliders2 = document.querySelectorAll('.slider2');

function showSlide2(index2, sliderIndex2) {
  const slides2 = sliders2[sliderIndex2].querySelectorAll('.slides2 img');
  if (index2 < 0) {
    index2 = slides2.length - 1;
  } else if (index2 >= slides2.length) {
    index2 = 0;
  }
  for (let i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = 'none';
  }
  slides2[index2].style.display = 'block';
}

function prevSlide2(sliderIndex2) {
  const currentSlide2 = Array.from(sliders2[sliderIndex2].querySelectorAll('.slides2 img')).findIndex(img => img.style.display === 'block');
  showSlide2(currentSlide2 - 1, sliderIndex2);
}

function nextSlide2(sliderIndex2) {
  const currentSlide2 = Array.from(sliders2[sliderIndex2].querySelectorAll('.slides2 img')).findIndex(img => img.style.display === 'block');
  showSlide2(currentSlide2 + 1, sliderIndex2);
}

// Показываем первый слайд для каждого слайдера
sliders2.forEach((slider2, index2) => {
  showSlide2(0, index2);
});



const sliders3 = document.querySelectorAll('.slider3');

function showSlide3(index3, sliderIndex3) {
  const slides3 = sliders3[sliderIndex3].querySelectorAll('.slides3 img');
  if (index3 < 0) {
    index3 = slides3.length - 1;
  } else if (index3 >= slides3.length) {
    index3 = 0;
  }
  for (let i3 = 0; i3 < slides3.length; i3++) {
    slides3[i3].style.display = 'none';
  }
  slides3[index3].style.display = 'block';
}

function prevSlide3(sliderIndex3) {
  const currentSlide3 = Array.from(sliders3[sliderIndex3].querySelectorAll('.slides3 img')).findIndex(img => img.style.display === 'block');
  showSlide3(currentSlide3 - 1, sliderIndex3);
}

function nextSlide3(sliderIndex3) {
  const currentSlide3 = Array.from(sliders3[sliderIndex3].querySelectorAll('.slides3 img')).findIndex(img => img.style.display === 'block');
  showSlide3(currentSlide3 + 1, sliderIndex3);
}

// Показываем первый слайд для каждого слайдера
sliders3.forEach((slider3, index3) => {
  showSlide3(0, index3);
});


const sliders4 = document.querySelectorAll('.slider4');

function showSlide4(index4, sliderIndex4) {
  const slides4 = sliders4[sliderIndex4].querySelectorAll('.slides4 img');
  if (index4 < 0) {
    index4 = slides4.length - 1;
  } else if (index4 >= slides4.length) {
    index4 = 0;
  }
  for (let i4 = 0; i4 < slides4.length; i4++) {
    slides4[i4].style.display = 'none';
  }
  slides4[index4].style.display = 'block';
}

function prevSlide4(sliderIndex4) {
  const currentSlide4 = Array.from(sliders4[sliderIndex4].querySelectorAll('.slides4 img')).findIndex(img => img.style.display === 'block');
  showSlide4(currentSlide4 - 1, sliderIndex4);
}

function nextSlide4(sliderIndex4) {
  const currentSlide4 = Array.from(sliders4[sliderIndex4].querySelectorAll('.slides4 img')).findIndex(img => img.style.display === 'block');
  showSlide4(currentSlide4 + 1, sliderIndex4);
}

// Показываем первый слайд для каждого слайдера
sliders4.forEach((slider4, index4) => {
  showSlide4(0, index4);
});


const sliders5 = document.querySelectorAll('.slider5');

function showSlide5(index5, sliderIndex5) {
  const slides5 = sliders5[sliderIndex5].querySelectorAll('.slides5 img');
  if (index5 < 0) {
    index5 = slides5.length - 1;
  } else if (index5 >= slides5.length) {
    index5 = 0;
  }
  for (let i5 = 0; i5 < slides5.length; i5++) {
    slides5[i5].style.display = 'none';
  }
  slides5[index5].style.display = 'block';
}

function prevSlide5(sliderIndex5) {
  const currentSlide5 = Array.from(sliders5[sliderIndex5].querySelectorAll('.slides5 img')).findIndex(img => img.style.display === 'block');
  showSlide5(currentSlide5 - 1, sliderIndex5);
}

function nextSlide5(sliderIndex5) {
  const currentSlide5 = Array.from(sliders5[sliderIndex5].querySelectorAll('.slides5 img')).findIndex(img => img.style.display === 'block');
  showSlide5(currentSlide5 + 1, sliderIndex5);
}

// Показываем первый слайд для каждого слайдера
sliders5.forEach((slider5, index5) => {
  showSlide5(0, index5);
});
