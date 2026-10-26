// 55 Funcions fletxa

// funció fletxa (alternativa una mica mes compacta)
// limpiar = () => {
//     numerosMostrats = "";
//     document.getElementById("pantallaCalc").innerText= "";
// }





let numero1 = parseInt(prompt("=> Escriu el primer número:"));
let numero2 = parseInt(prompt("=> Escriu el segon número:"));

// === Funció 1 ===
// = DUES MANERES DE FER FUNCIONS:
// CLASSICA
function sumar(numero1, numero2){
    return numero1+numero2;
}
// FLETXA
sumar = (numero1, numero2) => {return numero1 + numero2;};
// 
document.getElementById("f1").innerHTML = sumar(numero1, numero2);




// === Funció 2 ===
resta = (numero1, numero2) => {return numero1 - numero2;}; 
document.getElementById("f2").innerHTML = resta(numero1, numero2);


