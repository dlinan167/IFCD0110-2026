// 67 Storage (Local i Session Storage)

// localStorage.usuari1="David";
// localStorage.usuari1="12345";





const btnIniciSessio = document.getElementById("btnIniciSessio");
const btnNouUsuari = document.getElementById("btnNouUsuari");



// Al fer unfocus al camp 'username'
const evtUsername = document.getElementById("username");
evtUsername.addEventListener("blur", ()=>{
    // validaIniciSessio();
    validaCamp("username", "mUsername", /^[a-zñ0-9àèìòùáéíóú]+$/i);           // <= PATRO: Es permet; numeros, lletres amb accents i ñ
});

const evtPassword = document.getElementById("password");
// Valida el llarg de 'password' 
evtPassword.addEventListener("keyup", ()=>{
    validaCamp("password", "mPassword", /(\d+)([A-Z]+)([^a-z0-9]+)/);  // <= PATRO: min.1: lletra, numero (chars: min.8-16.max)
    validarClauDePas();
});

//  // Dispara l'inici de sessió
btnIniciSessio.addEventListener("click", function(){ 
    const missatge = document.getElementById("missatgeValUsuari");
    missatge.innerText = validaIniciSessio();                               // <= El missatge es el que retorna(return) de la funció
});

// ***************************************************************************************************
// *                                       DEFINICIÓ FUNCIÓNS                                        *
// ***************************************************************************************************

// FUNCIÓ: VALIDAR el INICI SESSIÓ
function validaCamp(id, idMissatge, patro) {
    const camp = document.getElementById(id).value;                       // <= valor del username o password
    const mAlert = document.getElementById(idMissatge);             // <= Missatge validació (Depend del camp)    
    
    // PATRO per validar:
    // let patro = ;
    let resultat = camp.match(patro);
    
    if (resultat) {
        // console.log("OK");
        mAlert.innerText= "Vàlid";
        mAlert.classList.remove("alert-danger")
        mAlert.classList.add("alert-success")
       
    } else {
        // console.log("no OK !!!");
        mAlert.innerText= "NO Vàlid";
        mAlert.classList.remove("alert-success")
        mAlert.classList.add("alert-danger")

    }
}

function validarClauDePas() {
    const camp = document.getElementById("password").value; 
    const mAlert = document.getElementById("mPassword");  

    if (camp.length<8) {
         mAlert.innerHTML = "Menys de 8 caracters - Falten:"+ (8-camp.length); // <= MIDEIX EL LLARG DE LA PASSWORD, i el mostra
    }
    if (!camp.match(/\d/)) {
        mAlert.innerHTML += "<br>Falta un número";
    }
    if (!camp.match(/[A-Z]/)) {
        mAlert.innerHTML += "<br>Falta una lletra majúscula";
    }
    if (!camp.match(/[^a-z0-9]+/i)) {
        mAlert.innerHTML += "<br>Falta una símbol";
    }
}

function validaIniciSessio() {
    const username = document.getElementById("username").value;             // <= valor del username
    const password = document.getElementById("password").value;             // <= valor del password

    // VALIDACIÓ: No està buit
    if (!username.trim() || !password.trim()) {   
        return " Un dels camps esta buit!";  // <= Missatge d'error (Esta buit!)
    }
    return "";
}



// ============================ AFEGIR NOU USUARI ============================================

// btnNouUsuari.addEventListener("click", function(){ 
//     const missatge = document.getElementById("missatgeValUsuari");
//     missatge.innerText = validaIniciSessio();                         // <= El missatge es el que retorna(return) de la funció
// });

// function registrarNouUsuari() {
    
    
//     // localStorage.setItem("username", username); // Guardar al storage
//     return "S'ha registrat com el nou usuari correctament!";
// }

































// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ TEMA CLAR / TEMA FOSC -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

window.addEventListener("load", function(){ // Quan carrega la pàgina/finestra mostra el tema guardat
    cambiaTema(localStorage.tema);
});

// Seleccionar el tema
document.getElementById("tema").addEventListener("change", function(){
    const tema = document.getElementById("tema").value;
    cambiaTema(tema);
});

// 
const bodyColor = document.getElementById("body");
function cambiaTema(tema) {
    if (tema == "dark") {
        bodyColor.classList.remove("light");  // <= Quita tema 'light'
        bodyColor.classList.add("dark");      // <= Posa tema 'dark'
        localStorage.setItem("tema", "dark"); // <= Guarda l'estat tema 'dark'
        // TEMA ACTUAL: DARK
    } else {
        bodyColor.classList.remove("dark");
        bodyColor.classList.add("light");
         localStorage.setItem("tema", "light");
        // TEMA ACTUAL: LIGHT
    } 
}