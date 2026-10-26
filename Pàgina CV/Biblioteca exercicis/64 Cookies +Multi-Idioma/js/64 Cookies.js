// 64 Cookies


// ++-+-+-===== ! COOKIES ! ======-+-+-+-++-+-+-+-

// + Crear cookies +
document.cookie="usuari1=John Doe";  //Guardar un nom a les cookies (per defecte expiren al finalitzar la sessió)
document.cookie="usuari2=Pepito Grillo; expires= Sat, 11 Jul 2026 09:00:00 UTC"; // Guardar nom, amb una data de expiració específica

// + Mostrar cookies +
document.getElementById("demoCookies").innerHTML= document.cookie;


// + Cambiar cookies (Sobreescriu) +
document.cookie="usuari1=Manolo Gafotas";


// + Borrar cookies +
// document.cookie="usuari2=Pepito Grillo; expires= Sat, 1 Jun 1970 09:00:00 UTC"; // Per borrar, posar que expira en una data pasada


// + Seleccionar cookies +
// Per buscar un en especific podem partir(split), els "clau-valor" de les cookies sempre separants per ';'
let llista = document.cookie.split("; ");
console.log(llista);  // [ "usuari2=Pepito Grillo", " usuari1=Manolo Gafotas" ]


// Podem recorre la llista per tractar amb cookies especifiques de la llista


// +++++++++ FUNCIÓ D'EXEMPLE (W3SCHOOLS) +++++++++++++++

// function checkCookie() {
//   let username = getCookie("username");
//   if (username != "") {
//    alert("Welcome again " + username);
//   } else {
//     username = prompt("Please enter your name:", "");
//     if (username != "" && username != null) {
//       setCookie("username", username, 365);
//     }
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++



// ++++++++++++++++++++++++ EXERCICI MULTI-IDIOMA ++++++++++++++++++++++

// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ CARREGA EL JSON (COPY/PASTE) +-+-+-+-+-+-+-+-+

let dadesIdiomes = null; // Declarar globalment
window.onload = async function (){ // Inicia al cargar la ventana
    await carregarJSON();
}

async function carregarJSON() {   
    try{
        const resposta = await fetch("./json/64 Multi-Idiomes Dades.json");
        if (!resposta.ok) {
            throw new Error("No s'ha pogut carregar el fitxer JSON.");
        }
        dadesIdiomes = await resposta.json();
    }catch (e){
        console.error(e);
    }
    
    console.log(dadesIdiomes); // Array(3) [ {…}, {…}, {…} ] (Array de Objectes .idiomes)
}
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 



// Detecta al cambiar (onchange) de opció en el desplegable de idiomes, i pasa quin dels idiomes es carrega en la funció 'carregaidiomes()'
const desplegableIdiomes = document.getElementById("desplegableIdiomes");

desplegableIdiomes.addEventListener("change", function(){
    carregaIdioma(desplegableIdiomes.value);
});
document.getElementById("demoIdioma").innerHTML= "Hola! Sembla que el teu navegador està en l'idioma: <b>"+navigator.language+"</b>";

// Assigna un numero index per cada idioma (per buscar-lo en les dades JSON (El numero de cada registre))
function carregaIdioma(idioma) {

    console.log(dadesIdiomes.idiomes);

        switch (idioma) {
            case "ca-CA": // Càtala
                tradueix(0);  
                break;
            case "es-ES": // Espanyol
                tradueix(1); // (1) es el numero del registre JSON d'idiomes
                break;
                case "en-US": // Angles
                tradueix(2);
                break;
                
                default:
                    break;
                } 
            }
                

// Tradueix els elements (idioma basat en quin index rep)
function tradueix(index) {
    const titol = document.getElementById("titol");
    titol.innerHTML = dadesIdiomes.idiomes[index].titol;
    
    // Cada <li> del nav menu
    const menuNav0 = document.getElementById("menu-nav0");
    menuNav0.innerHTML = dadesIdiomes.idiomes[index].menu[0];
    const menuNav1 = document.getElementById("menu-nav1");
    menuNav1.innerHTML = dadesIdiomes.idiomes[index].menu[1];
    const menuNav2 = document.getElementById("menu-nav2");
    menuNav2.innerHTML = dadesIdiomes.idiomes[index].menu[2];
    const menuNav3 = document.getElementById("menu-nav3");
    menuNav3.innerHTML = dadesIdiomes.idiomes[index].menu[3];
    const menuNav4 = document.getElementById("menu-nav4");
    menuNav4.innerHTML = dadesIdiomes.idiomes[index].menu[4];
}