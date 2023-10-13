/* clases al mismo tiempo cruiosas
const hoverableElements = document.querySelectorAll('.clhover');

hoverableElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    hoverableElements.forEach(el => {
      el.classList.add('hovered');
    });
  });

  element.addEventListener('mouseleave', () => {
    hoverableElements.forEach(el => {
      el.classList.remove('hovered');
    });
  });
});
*/