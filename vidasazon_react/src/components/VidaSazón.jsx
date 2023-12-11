import React, { useRef, useEffect } from 'react';
//test Github
function DropMenu() {
  const ayudaBtnRef = useRef(null);
  const contactoBtnRef = useRef(null);
  const ayudaEvent = () => {
    console.log('AYUDA');
    window.location.href = 'Nuevoindex.html';
  };
  const contactoEvent = () => {
    console.log('contacto');
    window.location.href = 'CONTACTO.html';
  };
  useEffect(() => {
    handleMenuEvents();
    MobileEvents();
    const handleResize = () => {
      handleMenuEvents();
      if (window.innerWidth < 720) {
        MobileEvents();
      } else {
        const menuLinks = document.querySelectorAll('nav ul li a');
        menuLinks.forEach((menuLink) => {
          menuLink.removeEventListener('click', ayudaEvent);
          menuLink.removeEventListener('click', contactoEvent);
        });
      }
    };
    window.addEventListener('resize', handleResize); // If witdh changes, callhandleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleMenuEvents = () => {
    if (window.innerWidth > 720) {
      const menuLinks = document.querySelectorAll('nav ul li a');
      menuLinks.forEach((menuLink) => {
        const subMenu = menuLink.parentElement.querySelector('ul');
        menuLink.addEventListener('mouseenter', function () { //MouseENTER EVENT
          subMenu.style.visibility = 'visible';
          subMenu.style.opacity = 1;
          menuLink.style.color = 'white';
          subMenu.addEventListener('mouseenter', function () {
            subMenu.style.visibility = 'visible';
            subMenu.style.opacity = 1;
            menuLink.style.color = 'rgb(255, 255, 255)';
          });
          menuLink.addEventListener('mouseleave', function () { //MouseLEAVE EVENT
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            menuLink.style.color = 'rgb(185, 185, 185)';
            subMenu.addEventListener('mouseleave', function () {
              subMenu.style.visibility = 'hidden';
              subMenu.style.opacity = 0;
              menuLink.style.color = 'rgb(185, 185, 185)';
            });
          });
        })
      })
    }
  };
  const MobileEvents = () => {
   
    if (window.innerWidth < 720) {
      console.log('executed')
      const menuLinks = document.querySelectorAll('nav ul li a');
      menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', ayudaEvent);
        menuLink.addEventListener('click', contactoEvent);
      });
    }
  }


  return (
    <div>
      {/* Assign the refs to the respective elements */}
      <button ref={ayudaBtnRef} id="ayuda_btn">Ayuda Button</button>
      <button ref={contactoBtnRef} id="contacto_btn">Contacto Button</button>
      {/* Your other React component JSX here */}
    </div>
  );
}
export default DropMenu;
//------------------------------ Dropdown menu ------------------------------
// document.addEventListener('DOMContentLoaded', function () {
//   handleMenuEvents();
// });
// window.addEventListener('resize', function () { // If page's resolution change...
//   handleMenuEvents();
//   if (window.innerWidth < 720) {
//     MobileEvents();
//   } else {
//     const ayudaBtn = document.getElementById('ayuda_btn');
//     ayudaBtn.removeEventListener('click', ayudaEvent);
//     const contactoBtn = document.getElementById('contacto_btn');
//     contactoBtn.removeEventListener('click', contactoEvent);
//   }
// });
// function handleMenuEvents() {
//   if (window.innerWidth > 720) {
//     const menuLinks = document.querySelectorAll('nav ul li a');
//     menuLinks.forEach((menuLink) => {
//       const subMenu = menuLink.parentElement.querySelector('ul');
//       menuLink.addEventListener('mouseenter', function () {  //Visible
//         subMenu.style.visibility = 'visible';
//         subMenu.style.opacity = 1;
//         menuLink.style.color = 'white';
//         subMenu.addEventListener('mouseenter', function () { //Visible subMenu :Hover
//           subMenu.style.visibility = 'visible';
//           subMenu.style.opacity = 1;
//           menuLink.style.color = 'rgb(255, 255, 255)';
//         });
//       });
//       menuLink.addEventListener('mouseleave', function () {  //Hidden
//         subMenu.style.visibility = 'hidden';
//         subMenu.style.opacity = 0;
//         menuLink.style.color = 'rgb(188, 188, 188)';
//         subMenu.addEventListener('mouseleave', function () {  //Hidden subMenu :Hover
//           subMenu.style.visibility = 'hidden';
//           subMenu.style.opacity = 0;
//           menuLink.style.color = 'rgb(188, 188, 188)';
//         });
//       });
//     });
//   }
// }
// //------------------------------Dropdown menu MOBILE------------------------------
// function MobileEvents() {
//   const ayudaBtn = document.getElementById('ayuda_btn');
//   ayudaBtn.addEventListener('click', ayudaEvent);
//   const contactoBtn = document.getElementById('contacto_btn');
//   contactoBtn.addEventListener('click', contactoEvent);
// }
// function ayudaEvent() {
//   window.location.href = "Nuevoindex.html";
// }
// function contactoEvent() {
//   window.location.href = "CONTACTO.html";
// }
// if (window.innerWidth < 720) {
//   MobileEvents();
// }




