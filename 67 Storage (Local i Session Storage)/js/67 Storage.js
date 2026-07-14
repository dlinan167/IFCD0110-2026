// 67 Storage (Local i Session Storage)

// -+-+-+-+-+-+-+-+-+-+-+-+-+ LOCAL STORAGE -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
localStorage.setItem("lastname", "Smith"); // (clau, valor) afegir una dada nova per guardar
localStorage.getItem("lastname"); // recupera la dada
console.log(localStorage.getItem("lastname")); // Mostrar dada
// ///////////////////////////////////////////////////////////////////////////////////////////////



const boto = document.getElementById("btnGuardar");
const divNom = document.getElementById("mostraNom");

//  ============= MOSTRAR NOM =============== (getItem)
window.addEventListener("load", function(){ // Quan carrega la pàgina/finestra mostra el nom guardat
console.log("OK, Si Entra a l'event de carrega");
// document.getElementById("mostraNom")
divNom.innerHTML += "<br><h4>"+ localStorage.getItem("NOM")+"</h4>"; //Mostra el nom
}) 
// ===========================================



//  =============  GUARDAR NOM ============= (setItem)
boto.addEventListener("click", function(){ // dispara el event de guardar el nom
    guardar();
    console.log("OK, l'event click al botó funciona");
});

// FUNCIÓ: Guardar el nom del input
function guardar() {

    const entradaNom = document.getElementById("nom").value; // valor del nom

    if (entradaNom.trim()) { //Mira si està buit, '.trim()' esborrant els espais del principi i el final
        console.log("El nom NO està buit");
        localStorage.setItem("NOM", entradaNom); // Guardar al storage

    }else{
        console.log("El nom SI està buit");
        divNom.innerHTML += " <br><b>El input esta buit! </b>";
        return;
    }
}
//  ===========================================


//  =============  COMPTADOR DE CLICKS ! ============= 

const botoClicks = document.getElementById("btnClicks");
const txtClicks = document.getElementById("txtClicks");
botoClicks.addEventListener("click", function(){contarClicks()});


function contarClicks() {
    if (localStorage.comptadorClicks) {
        localStorage.comptadorClicks++;
    }else{ // Si no hi ha dades el comptador comença en 0
        localStorage.comptadorClicks = 1;
    }

    txtClicks.innerHTML = "<b> "+localStorage.comptadorClicks+"</b>";
}
//  ==================================================

// ==================== CLEAR ======================  (Nateja tots els localStorage, totes les dades guardades)

const botoNateja = document.getElementById("btnNateja");
botoNateja.addEventListener("click", function(){  // Al fer click fa 'clear()' de les dades
    localStorage.clear();                         // <= Nateja les dades
    location.reload();                            // <= Recarga la pàgina (com F5)
});

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ 

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ SESSION STORAGE -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ (El mateix que el codi LOCAL pero amb SESSION)


const boto2 = document.getElementById("btnGuardar-2");
const divNom2 = document.getElementById("mostraNom-2");

//  ============= MOSTRAR NOM =============== (getItem)
window.addEventListener("load", function(){ // Quan carrega la pàgina/finestra mostra el nom guardat

document.getElementById("mostraNom-2")
divNom2.innerHTML += "<br><h4>"+ sessionStorage.getItem("NOM-2")+"</h4>"; //Mostra el nom
}) 
// ===========================================



//  =============  GUARDAR NOM ============= (setItem)
boto2.addEventListener("click", function(){ // dispara el event de guardar el nom
    guardarSESSION();
    console.log("OK, l'event click al botó funciona");
});

// FUNCIÓ: Guardar el nom del input
function guardarSESSION() {

    const entradaNom = document.getElementById("nom-2").value;

    if (entradaNom.trim()) { //Mira si està buit, '.trim()' esborrant els espais del principi i el final
        sessionStorage.setItem("NOM-2", entradaNom);
    }else{
        divNom2.innerHTML += " <br><b>El input esta buit! </b>";
        return;
    }
}
//  ===========================================


//  =============  COMPTADOR DE CLICKS ! ============= 

const botoClicks2 = document.getElementById("btnClicks-2");
const txtClicks2 = document.getElementById("txtClicks-2");
botoClicks2.addEventListener("click", function(){contarClicksSESSION()});


function contarClicksSESSION() {
    if (sessionStorage.comptadorClicks2) {
        sessionStorage.comptadorClicks2++;
    }else{ // Si no hi ha dades el comptador comença en 0
        sessionStorage.comptadorClicks2 = 1;
    }

    txtClicks2.innerHTML = "<b> "+sessionStorage.comptadorClicks2+"</b>";
}

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ TEMA CLAR / TEMA FOSC -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

window.addEventListener("load", function(){ // Quan carrega la pàgina/finestra mostra el tema guardat
    cambiaTema(localStorage.tema);
    console.log(localStorage.tema);
}) 



document.getElementById("tema").addEventListener("change", function(){
    const tema = document.getElementById("tema").value;
    cambiaTema(tema);
});

// 
const mainColor = document.getElementById("principal");
function cambiaTema(tema) {
    if (tema == "dark") {
        mainColor.classList.remove("light")  // <= Quita tema 'light'
        mainColor.classList.add("dark")      // <= Posa tema 'dark'
        localStorage.setItem("tema", "dark") // <= Guarda l'estat tema 'dark'
    } else {
        mainColor.classList.remove("dark")
        mainColor.classList.add("light")
         localStorage.setItem("tema", "light")
    } 
    console.log(localStorage.tema); // Prova // <= retorna 'light' o 'dark'
}