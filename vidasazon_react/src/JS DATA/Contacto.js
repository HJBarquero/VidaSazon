

const name ="jhon";
const LastName ="Coffey"

console.log(name, LastName, );

 //asigación de letiables objeto
let user1 ={"money":['220.000', '717.220', '218.000','357.715', '398.110'], 
"name" : 'Alfredito cruz',
"Ancio":  'ACNEZ',
"EXP": '220'} 
let user2 ={"money":['120.000', '514.220', '222.120','984.715', '1.120.000'], 
"name" : 'Berreta',
"EXP": '320'} 
;
 //imprimir en la consola las letiables:
 let n1 = 50;
 let result= name == "jhon";
 let SecurePassword = n1 == 50;

 //Ifs matemáticos
if (SecurePassword == true ){
    console.log("tu puntuación es avanzada " , n1);

}
else {console.log("Tu puntuación es indefinida");}
    

let typecard = "15";

switch(typecard){
case "Debid":
 console.log("You select: ", typecard);
 break;

case "Credit":
 console.log("You select: ", typecard);
 break;
default: 
 console.log("!No card found!");

}

let user1 ="Carlos";
let user2 ="Helen";
let user3 ="Riana";
let edad = 18

/*
mayor de edad con switch
*/

switch (true){
case (edad > 18):
 console.log("Usted es mayor de edad ", edad);
 break;

case (edad ==18):
 console.log("FELICIDADES USTED TIENE 18 ANOS (ANOOOOOS)")
 break;

 default:
    console.log("USTED ES MENOR DE EDAD")
    
    break;
    
    
}

let names = ["bravo", "Quebec", "Zulu"];

//funcion bucles 'for'
for (let i=0; i<names.length; i++ ){
    console.log(names[i]);
 
 

}
for (let i=names.length -1; i>=0; i--){
console.log("La lista es de", names[i]);


}
for (i=0 ; i<names.length; i++){
    console.log("ea pa que vea:",names[i])
}

//FUNCTION y FUNCION PARAETRO
iva="13";
let money= "500";


function deposit(nombre, n1) {

    total = n1 *(13/10)
   
    console.log(nombre, "Su deposito es de:", total )
}
deposit("Carlos", 700000);
deposit("Kiara", 400000);
deposit("Luci", 500000);
deposit("Helena", 1500000);
deposit("Jorge", 500);

//Fuciond de "FOR"

let directores = ["Ariana", "Brianca", "Cedeño"];
for (i= directores.length; i=0; i--){
    console.log("Director: ", directores[i])
}


/////////////////////////////////
let menu = document.querySelectorAll('.menu_toggle');
let marginToggle = document.querySelectorAll('.margin_Toggle');
let menuPosition = document.querySelectorAll('.ayuda_li_a_position');
let tglWhite = document.querySelectorAll('.tgl_white');

menu.forEach(function (item) {
    item.addEventListener('click', function (i) {
        let elemento = i.target.parentNode;
        console.log(elemento.children);
        elemento.children[2].classList.toggle('activo');
        iconArrow.classList.add('.clicked');
        



    })



})