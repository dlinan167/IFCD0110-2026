// 60 Errors

// Sessió 02/07/2026


// = Error de REFERÈNCIA =
let x = 5;
try {
    x=y + 1; // <= 'y' no definida
    document.getElementById("ErrReferencia").innerHTML= "El valor és: "+x;
} 
catch (err) { //Mostra el error al usuari/programador

        // alert
        document.getElementById("ErrReferencia").innerHTML= "<b> S'ha produit un error! </b><br> ("+ err+")<br>";
        console.log("ERROR! "+ err);
}

// = Error de TIPUS =
let anna=5;
try {
    anna(5); // <= 'anna' no es una funció
    
} catch (e) {
    // alert
    document.getElementById("ErrTipus").innerHTML= "<b> S'ha produit un error! </b><br> ("+ e + ")<br>";
    console.log("ERROR! "+ e);
}


// = Error de RANG =
let num=5;
try {
   num.toPrecision(150) // <= rang permés entre '1-21'
    
} catch (e) {
    // alert
    document.getElementById("ErrRang").innerHTML= "<b> S'ha produit un error! </b><br> ("+ e + ")<br>";
    console.log("ERROR! "+ e);
}


// = Error URI = (direcció web)

try {
    // let direcció = ww.google.com
decodeURI("%%%"); // <= No es poden decodificar els signes com '%'
// decodeURI("www.google.com");
// direccio = direccio.replace("%","") // possible Sol·lució
} catch (e) {
    // alert
    document.getElementById("ErrURI").innerHTML= "<b> S'ha produit un error! </b><br> ("+ e + ")<br>";
    console.log("ERROR! "+ e);
}


// = Error de SINTAXI = (No es pot detectar/gestionar amb el try catch)

// let nom= "Jordi); // <= mala sintaxi (la execució es para aqui!)



// // = Error Silenciós = (Silent error)

let resultat = "No es Actiu.";
let esActiu = false;

// ❌ Assignment, not comparison ('=' y no '==')
if (esActiu = true) {
  let resultat = "Actiu!";
}
document.getElementById("ErrSilencios").innerHTML= resultat +"<br>";



// // = try/catch Finally = (S'executa tant com el try o el catch s'executa)

try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs, no matter what
}
//===============================================

// === The throw Statement ===

// The throw statement allows you to create a custom error. //Error personalitzat (SUSBTITUEIX EL MISSATGE D'ERROR (per mostrar a usuaris))
// Technically you can throw an exception (throw an error).

// throw "Too big";    // throw a text
// throw 500;          // throw a number 

// Exemple de throw
function validar() {
    const missatge = document.getElementById("missatge");
    missatge.innerHTML="";
    let x=document.getElementById("numero").value;

    try {
        if (x.trim() == ""){ throw "empty / Buit!"}; //.trim els caracters en blanc (espais)
        if(isNaN(x)){throw "not a number / No es un numero!"};

        x = Number(x); //Converteix el valor a numero

        if(x < 5){throw "too low / Molt baix!"};
        if(x > 10){throw "too high / Molt alt!"};
    } catch (e) {
        missatge.innerHTML = "ERROR! El input és: <b>" + e +"</b>";
    } finally{ //Nateja la caixa del input, ja sigui error o no
        document.getElementById("numero").value="";
    }
}

// Console log para una taula (format més bonic)
let users = [
  {name: "John", age: 25},
  {name: "Anna", age: 30}
];

console.table(users);


// == BREAKPOINTS == (Per el depurador/debugger)
// Exemple de breakpoints

function suma(num1, num2) {
let = resultat = num1 + num2;
return resultat;    
}
// = Pausa amb el depurador del navegador per veura cada resultat =
document.getElementById("resultat").innerHTML = suma(10, 5);
document.getElementById("resultat").innerHTML = suma(10, 50);
document.getElementById("resultat").innerHTML = suma(10, 500);
document.getElementById("resultat").innerHTML = suma(10, 5000);
