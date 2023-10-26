const navHeader = document.querySelector('.page-header__nav');
const navToggle = navHeader.querySelector('.page-header__toggler');

const exampleContainer = document.querySelector('.view');

const classSliderBefore = 'slider--before';
const classSliderAfter = 'slider--after';
const classImageActive = 'view__image--active';

navHeader.classList.remove('page-header__nav--nojs');
navHeader.classList.remove('page-header__nav--opened');
navHeader.classList.add('page-header__nav--closed');

navToggle.addEventListener('click', function() {
  navHeader.classList.toggle('page-header__nav--closed');
  navHeader.classList.toggle('page-header__nav--opened');
});

if (exampleContainer) {
  const viewSlider = exampleContainer.querySelector('.view__slider');

  const exampleImgBefore = exampleContainer.querySelector('.view__image--before');
  const exampleImgAfter = exampleContainer.querySelector('.view__image--after');
  const  sliderBar = exampleContainer.querySelector('.slider__bar');

  const sliderBtnBefore = document.querySelector('.slider__button--before');
  const sliderBtnAfter = document.querySelector('.slider__button--after');

  const handleSliderChange = function(widthValue) {
    exampleImgBefore.setAttribute("style",`width:${100-widthValue}%`);
    exampleImgAfter.setAttribute("style",`width:${widthValue}%`);
  }

  const handleSliderClick = function(classNameRemove, classNameAdd) {
    viewSlider.classList.remove(classNameRemove);
    viewSlider.classList.add(classNameAdd);
  }

  const showExampleImg = function(elementClassRemove, elementClassAdd) {
    elementClassRemove.classList.remove(classImageActive);
    elementClassAdd.classList.add(classImageActive);
  }

  sliderBtnBefore.addEventListener('click', () => {
    handleSliderClick(classSliderAfter, classSliderBefore);
    showExampleImg(exampleImgAfter, exampleImgBefore);

    sliderBar.value = '0';
    handleSliderChange(sliderBar.value);
  });

  sliderBtnAfter.addEventListener('click', () => {
    handleSliderClick(classSliderBefore, classSliderAfter);
    showExampleImg(exampleImgBefore, exampleImgAfter);

    sliderBar.value = '100';
    handleSliderChange(sliderBar.value);
  });

  sliderBar.addEventListener('input', (evt) => {
    handleSliderChange(evt.target.value);
  })
}
