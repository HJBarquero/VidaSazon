function Carrousel (){
  let checkboxRight = document.getElementById('check_slide');
  let checkboxLeft = document.getElementById('check_slide_left');
  let sliderButton = document.querySelector('.slider_animation_button');
  let clics = 0;
  let NewMargin = '';
  console.log(`Clicks: ${clics}`);
  checkboxRight.addEventListener('change', function () {
    if (clics < -200 / -100) { //Limit margin to -200%
      clics++;
    } else if (clics > -200 / -100) {
      clics--;
    }
    NewMargin = clics * -100 + '%';
    sliderButton.style.marginLeft = NewMargin;
  });
  checkboxLeft.addEventListener('change', function () {
    if (clics < 0 / -100) { //Limit margin to 0%
      clics--;
    } else if (clics > 0 / -100) {
      clics--;
    }

    NewMargin = clics * -100 + '%';
    sliderButton.style.marginLeft = NewMargin;
  });
}
export default Carrousel;