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
document.getElementById("demoIdioma").innerHTML= "Hola! Sembla que el teu navegador està en l'idioma: <b>"+navigator.language+"</b>";



// ++++++++++++++++++++++++ EXERCICI MULTI-IDIOMA ++++++++++++++++++++++


document.addEventListener(onload, carregaIdioma(navigator.language));

document.getElementById("desplegableIdiomes").addEventListener(onchange, carregaIdioma(idioma));

function carregaIdioma(idioma) {
    
    // capçalera.innerHTML = navigator.language;
    //  capçalera.innerHTML = idioma;


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

function tradueix(index) {
    const titol = document.getElementById("titol");
    titol.innerHTML = idiomes[index].titol;
}


