function slider() {
  // Slider
  const slider = document.querySelector('.offer__slider'),
    slides = slider.querySelectorAll('.offer__slide'),
    prev = slider.querySelector('.offer__slider-prev'),
    next = slider.querySelector('.offer__slider-next'),
    total = slider.querySelector('#total'),
    current = slider.querySelector('#current'),
    slidesWrapper = slider.querySelector('.offer__slider-wrapper'),
    slidesField = slider.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1,
    offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
    dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {
      dot.classList.add('active-dot');
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }

  next.addEventListener('click', () => {
    const slideTo = (slideIndex >= slides.length) ? 1 : (slideIndex + 1);

    goToSlide(slideTo);
  });

  prev.addEventListener('click', () => {
    const slideTo = (slideIndex <= 1) ? slides.length : (slideIndex - 1);

    goToSlide(slideTo);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      goToSlide(slideTo);
    });
  });

  function goToSlide(n) {
    slideIndex = +n;
    offset = deleteNotDigits(width) * (n - 1);
    // offset = +width.slice(0, width.length - 2) * (n - 1);
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[slideIndex - 1].classList.add('active-dot');
  }

  // showSlides(slideIndex);

  // function showSlides(n) {
  //     if (n > slides.length) {
  //         slideIndex = 1;
  //     }

  //     if (n < 1) {
  //         slideIndex = slides.length;
  //     }

  //     slides.forEach(item => item.style.display = 'none');

  //     slides[slideIndex - 1].style.display = 'block';

  //     if (slideIndex < 10) {
  //         current.textContent = `0${slideIndex}`;
  //     } else {
  //         current.textContent = slideIndex;
  //     }
  // }

  // function plusSlides(n) {
  //     showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', () => {
  //     plusSlides(-1);
  // });

  // next.addEventListener('click', () => {
  //     plusSlides(1);
  // });
}

module.exports = slider;