document.addEventListener('DOMContentLoaded', function () {

  let carouselImg = document.querySelectorAll('.carousel__item');

  function Carousel() {
    carouselImg.forEach(function (elem) {
      elem.addEventListener('click', function () {
        removeActiveImg();
        elem.classList.add('carousel__item--active');
      });
    });
  };

  function removeActiveImg() {
    carouselImg.forEach(function (elem) {
      elem.classList.remove('carousel__item--active');
    });
  };

  Carousel();
});

