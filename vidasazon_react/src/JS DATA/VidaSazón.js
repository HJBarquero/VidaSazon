import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    handleMenuEvents();
    const handleResize = (() => {
      handleMenuEvents();
      if
    })

//------------------------------ Dropdown menu ------------------------------
document.addEventListener('DOMContentLoaded', function () {
  handleMenuEvents();
});
window.addEventListener('resize', function () { // If page's resolution change...
  handleMenuEvents();
  if (window.innerWidth < 720) {
    MobileEvents();
  } else {
    console.log('WORKS DELETE EVENT');
    const ayudaBtn = document.getElementById('ayuda_btn');
    ayudaBtn.removeEventListener('click', ayudaEvent);
    const contactoBtn = document.getElementById('contacto_btn');
    contactoBtn.removeEventListener('click', contactoEvent);
  }
});
function handleMenuEvents() {
  if (window.innerWidth > 720) {
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach((menuLink) => {
      const subMenu = menuLink.parentElement.querySelector('ul');
      menuLink.addEventListener('mouseenter', function () {  //Visible
        subMenu.style.visibility = 'visible';
        subMenu.style.opacity = 1;
        menuLink.style.color = 'white';
        subMenu.addEventListener('mouseenter', function () { //Visible subMenu :Hover
          subMenu.style.visibility = 'visible';
          subMenu.style.opacity = 1;
          menuLink.style.color = 'rgb(255, 255, 255)';
        });
      });
      menuLink.addEventListener('mouseleave', function () {  //Hidden
        subMenu.style.visibility = 'hidden';
        subMenu.style.opacity = 0;
        menuLink.style.color = 'rgb(188, 188, 188)';
        subMenu.addEventListener('mouseleave', function () {  //Hidden subMenu :Hover
          subMenu.style.visibility = 'hidden';
          subMenu.style.opacity = 0;
          menuLink.style.color = 'rgb(188, 188, 188)';
        });
      });
    });
  }
}
//------------------------------Dropdown menu MOBILE------------------------------ 
function MobileEvents() {
  const ayudaBtn = document.getElementById('ayuda_btn');
  ayudaBtn.addEventListener('click', ayudaEvent);
  const contactoBtn = document.getElementById('contacto_btn');
  contactoBtn.addEventListener('click', contactoEvent);
}
function ayudaEvent() {
  window.location.href = "Nuevoindex.html";
}
function contactoEvent() {
  window.location.href = "CONTACTO.html";
}
if (window.innerWidth < 720) {
  MobileEvents();
}
//------------------------------ Effect Carousel ------------------------------}
let checkboxRight = document.getElementById('check_slide');
let checkboxLeft = document.getElementById('check_slide_left')
let sliderButton = document.querySelector('.slider_animation_button');
// num clicks follow-up
let clics = 0;
console.log(`Clicks: ${clics}`)

const minMargin = -200; // Limit of margin lower
const maxMargin = 0;    // Limit of margin upper


checkboxRight.addEventListener('change', function () {
  //Limit margin to -200%
  if (clics < -200 / -100) {
    clics++;

    let nuevoMargen = clics * -100 + '%';

    sliderButton.style.marginLeft = nuevoMargen;

  } else if (clics > -200 / -100) {
    clics--;

  }
});

checkboxLeft.addEventListener('change', function () {

  if (clics < 0 / -100) {
    clics++;
  }
  // Limit margin to 0% 
  else if (clics > 0 / -100) {
    clics--;
  }


  nuevoMargen = clics * -100 + '%';
  sliderButton.style.marginLeft = nuevoMargen;
})




