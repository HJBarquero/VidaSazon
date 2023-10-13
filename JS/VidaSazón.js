//------------------------------ Dropdown menu ------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('nav ul li a'); // Selecciona todos los elementos nav ul li a

  menuLinks.forEach(menuLink => {
    const subMenu = menuLink.parentElement.querySelector('ul'); // Encuentra el submenú específico para cada enlace

    //Visible`1
    menuLink.addEventListener('mouseenter', function () {
      subMenu.style.visibility = 'visible';
      subMenu.style.opacity = 1;
      menuLink.style.color = 'green';
    });
    //Hiden
    menuLink.addEventListener('mouseleave', function () {
      subMenu.style.visibility = 'hidden';
      subMenu.style.opacity = 0;
      menuLink.style.color = 'red';
    });
   
   

  });

 
});

// teoria










//------------------------------Dropdown menu MEDIA------------------------------ 
var menu = document.querySelectorAll('.menu_toggle');
var marginToggle = document.querySelectorAll('.margin_Toggle');
var menuPosition = document.querySelectorAll('.ayuda_li_a_position');
var tglWhite = document.querySelectorAll('.tgl_white');

menu.forEach(function (item) {
    item.addEventListener('click', function (i) {
        var elemento = i.target.parentNode;
        console.log(elemento.children);
        elemento.children[2].classList.toggle('activo');
        iconArrow.classList.add('.clicked');
        



    })



})




//------------------------------ Effect Carousel ------------------------------}


let checkboxRight = document.getElementById('check_slide');
let checkboxLeft = document.getElementById('check_slide_left')
let sliderButton = document.querySelector('.slider_animation_button');


// num clicks follow-up
let clics = 0;
console.log(`Clicks: ${clics}`)

const minMargin = -200; // Limit of margin lower
const maxMargin = 0;    // Limit of margin upper


checkboxRight.addEventListener('change', function() {
    //Limit margin to -200%
   if (clics < -200 / -100){
      clics ++;

      let nuevoMargen = clics * -100 + '%';

    sliderButton.style.marginLeft = nuevoMargen;

   }else if (clics > -200 / -100 ){
    clics --;
   
    }
});

checkboxLeft.addEventListener('change', function () {
  
   if (clics < 0 / -100) {
      clics++;
      }
        // Limit margin to 0% 
      else if (clics > 0 / -100) {
         clics --;
      }
      
 
   nuevoMargen = clics * -100 + '%';
   sliderButton.style.marginLeft = nuevoMargen;
})


 

