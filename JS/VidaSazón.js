
//------------------------------ Functions Dropdown menu/Mobile ------------------------------
  

   //Add event 'resize'
   window.addEventListener('resize', function () {
    handleMenuEvents();
    handleMenuEventsMobile();
  });
  
  //Execute funtcion while the page is reloaded
  window.addEventListener('DOMContentLoaded', function () {
    handleMenuEvents();
    handleMenuEventsMobile();
  });


//------------------------------ Dropdown menu ------------------------------
function handleMenuEvents() {
  if (window.innerWidth > 720) {
    
    
    const menuLinks = document.querySelectorAll('nav ul li a');
    const menuLinksAfter = document.querySelectorAll('nav> ul > li > a::after');

    menuLinks.forEach((menuLink) => {
      const subMenu = menuLink.parentElement.querySelector('ul');
      const barsElement = document.querySelector('.animation_Bars::after');

      //Visible
      menuLink.addEventListener('mouseenter', function () {
        subMenu.style.visibility = 'visible';
        subMenu.style.opacity = 1;
        menuLink.style.color = 'rgb(255, 255, 255)';
        
      });

      //Hidden
      menuLink.addEventListener('mouseleave', function () {
        subMenu.style.visibility = 'hidden';
        subMenu.style.opacity = 0;
        menuLink.style.color = 'rgb(188, 188, 188)';

        //Visible subMenu :Hover
        subMenu.addEventListener('mouseenter', function () {
          subMenu.style.visibility = 'visible';
          subMenu.style.opacity = 1;
          menuLink.style.color = 'rgb(255, 255, 255)';
        });

        //Hidden subMenu :Hover
        subMenu.addEventListener('mouseleave', function () {
          subMenu.style.visibility = 'hidden';
          subMenu.style.opacity = 0;
          menuLink.style.color = 'rgb(188, 188, 188)';
        });
      });
    });
    
  } else {

  }
}


  //------------------------------Dropdown menu MOBILE------------------------------ 

function handleMenuEventsMobile() {

    if (window.innerWidth < 720) {
      var menu = document.querySelectorAll('.menu_toggle');
      

      menu.forEach(function (item) {
        item.addEventListener('click', function (i) {
          var elemento = i.target.parentNode;
          console.log(elemento.children);
          elemento.children[2].classList.toggle('activo');
          
         

      
        });
      
      });
  
    } else {
     
    }
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




