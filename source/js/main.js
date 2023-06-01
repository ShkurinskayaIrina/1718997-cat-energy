const classSliderButttonBefore = 'slider__button--before';

const classSliderBefore = 'slider--before';
const classSliderAfter = 'slider--after';

const navHeader = document.querySelector('.page-header__nav');
const navToggle = navHeader.querySelector('.page-header__toggler');

const exampleContainer = document.querySelector('.view');
const viewSlider = exampleContainer.querySelector('.view__slider');

const exampleImgBefore = exampleContainer.querySelector('.view__image--before');
const exampleImgAfter = exampleContainer.querySelector('.view__image--after');

const sliderButtons = exampleContainer.querySelectorAll('.slider__button');

navHeader.classList.remove('page-header__nav--nojs');
navToggle.addEventListener('click', function() {
  navHeader.classList.toggle('page-header__nav--closed');
  navHeader.classList.toggle('page-header__nav--opened');
});

const showExampleImg = function(elementClassRemove, elementClassAdd) {
  const className = 'view__image--active';
  elementClassRemove.classList.remove(className);
  elementClassAdd.classList.add(className);
}

const handleSliderClick = function(classNameRemove, classNameAdd) {
  viewSlider.classList.remove(classNameRemove);
  viewSlider.classList.add(classNameAdd);
}

sliderButtons.forEach((sliderButton) => {
  sliderButton.addEventListener('click', () => {
    if (sliderButton.classList[1] === classSliderButttonBefore) {
      handleSliderClick(classSliderAfter, classSliderBefore);
      showExampleImg(exampleImgAfter, exampleImgBefore);
    } else {
      handleSliderClick(classSliderBefore, classSliderAfter);
      showExampleImg(exampleImgBefore, exampleImgAfter);
    }
  })
});
