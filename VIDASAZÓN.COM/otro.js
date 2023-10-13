let menu = document.querySelectorAll('.menu_toggle');
let marginToggle = document.querySelectorAll('.margin_Toggle');
let menuPosition = document.querySelectorAll('.ayuda_li_a_position');
let tglWhite = document.querySelectorAll('.tgl_white');

menu.forEach(function (item) {
    item.addEventListener('click', function (i) {
        let elemento = i.target.parentNode;
        console.log(elemento.children);
        elemento.children[2].classList.toggle('activo');
        
        



    })



})

tglWhite.forEach(function(item){
    item.addEventListener('click', function (i){
   let elemnto2 = i.target.parentNode;
   console.log(elemnto2.children);
   elemento2.children[2].classList.toggle('www');
 
    })
}


)






