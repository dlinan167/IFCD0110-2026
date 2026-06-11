// Declarem variables
let nom = "David";
let cognom = "Liñan";
let edat = 24;
let teMascota = false;

// 
// Mostrar per consola
console.log("/Nom es: "+nom)
console.log("/Cognom es: "+cognom)
console.log("/L'edat es: "+edat)
console.log("/Te Mascota?: "+teMascota)

// Mostrar els valors amb un finestra emergent --->
// window.alert("El meu nom és: "+nom)


// Mostrar els valors dins de la pàgina web
// document.write(nom)

// Inserir el valor amb ids
document.getElementById("JSdades").innerHTML= 

    "<p>/- Nom es: "+nom+"</p>"+
    "<p>/- Cognom es: "+cognom+"</p>"+
    "<p>/- L'edat es: "+edat+"</p>"+
    "<p>/- Te Mascota?: "+teMascota;+"/</p>";