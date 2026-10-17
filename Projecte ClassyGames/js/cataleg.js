// cataleg


// ************************************************************************************************
// *                                      EVENTS LISTENERS                                        *
// ************************************************************************************************




// WIP *********************************************
// Animació de Carrega: No es mostra el contingut main fins que acaba de carregar

document.addEventListener("DOMContentLoaded", function () {
const main = document.getElementById("main");
main.hidden = true;

  const aCargant = document.getElementById("aCargant");
  aCargant.innerHTML = "Carregat!";
  
  // Interval per demostració
  setInterval(() => {
    // Finalitza de carregar (Desapareix)
    aCargant.hidden = true;
    // Mostra el contingut de main
    // main.hidden = false;
  }, 1000);
});
// ************************************************

// Carrusel (girar a la esquerra)
const evtcFletxaEsquerra = document.getElementById("cFletxaEsquerra");
evtcFletxaEsquerra.addEventListener("click", () =>{
  giraCarrusel(90); // <-- Graus que gira el carrusel al fer clic a la fletxa
});

// Carrusel (girar a la dreta)
const evtcFletxaDreta = document.getElementById("cFletxaDreta");
evtcFletxaDreta.addEventListener("click", () =>{
  giraCarrusel(-90);
});

// Buscar dintre de Cataleg de jocs
const buscaBarra = document.getElementById("jocBusca");
buscaBarra.addEventListener("keyup", () =>{
  buscaCataleg();
});



// ****************************************************************************
// +                                CARRUSEL                                  +
// ----------------------------------------------------------------------------

// Gira carrusel, Quan es fa click (a la dreta o esquerra)
let posicioCarrusel = 0;
const carrusel = document.getElementById("carruselPrincipal");
let resetTimeout = 0;

function giraCarrusel(deg) {
  
  posicioCarrusel += deg; //<= Acumula els degrees de la posició actual amb els que sumem clickant més
  // Animacións de moviment (els fem .remove cada vegada per no resetegar la posició inicial de la animació CSS, fent-lo dinàmic) =>
  carrusel.classList.remove("carruselgiraAutomatic", "carruselgiraEsquerra", "carruselgiraDreta"); 
  carrusel.style.transform = "rotateY(" + posicioCarrusel + "deg)"; // <= modifica la posició en el css
  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(retornaGiraAutomatic, 4000); // retorna a girar automaticament després de 4s
}

// El carrusel retorna a girar de forma automàtica (com estava originalment, abans de fer click a una fletxa)
function retornaGiraAutomatic() {
  carrusel.style.transform = "";
  carrusel.classList.remove("carruselgiraEsquerra", "carruselgiraDreta");
  carrusel.classList.add("carruselgiraAutomatic");
}


// ++++++++++++++++++++++++ consumir Cataleg ++++++++++++++++++++++

// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ CARREGA EL JSON (Generic) +-+-+-+-+-+-+-+-+

// Cataleg: Videojocs

// const cataleg = "https://randomuser.me/api/?results=30"; (Exemple de direcció amb filtres)
const API = "./data/catalegs.json";
const taula = document.getElementById("taulaCataleg");

// Carrega Cataleg
async function carregaCataleg() {
  try {
    const resposta = await fetch(API);
    const dades = await resposta.json();
    console.log(dades);   // <= Object { videojocs: (20) […] } videojocs: Array(20) [ {…}, {…}, {…}, … ]
    console.log(dades.videojocs);  // videojocs: Array(20) [ {…}, {…}, {…}, … 
    
    // Aquí va el codi
    mostrarDades(dades);
  } catch (e) {
    console.error("Error de càrrega", e);
  }
}

carregaCataleg();
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 


// Buscar dintre de Cataleg de jocs
function buscaCataleg() {
    let buscaInput = document.getElementById('jocBusca').value;
    buscaInput = buscaInput.toLowerCase();

    // Busca i compara el contingut de cada carta i mostra el que inclou el es busca
    const jocs = taula.querySelectorAll(".jocCarta");
    for (let i = 0; i < jocs.length; i++) {
      if (jocs[i].textContent.toLowerCase().includes(buscaInput)) {
        jocs[i].style.display = "";     // <-- Mostra
      } else {
        jocs[i].style.display = "none"; // <-- NO Mostra
      }
    }
}

// ====== AFEGIR I MOSTRAR DADES EN TAULA (En Cartes) ======= (// Comentat)


async function mostrarDades(dades) {
    
      //recorrem els elements del json cataleg
      dades.videojocs.forEach((element) => {
        console.log(element.titol);
        // PER CADA UN: Mostra el titol, imatge etc...
        taula.appendChild(creaCarta(element.titol, element.imatge, element.plataforma, element.genere, element.any, element)); // Carta de cada element (funció)
      });
}


// funció crea carta de joc
function creaCarta(titol, imatge, plataforma, genere, any, joc) {
  const carta = document.createElement("div");
  carta.classList.add("jocCarta");
  // carta.classList.add("card", "border-primary", "mb-3", "shadow");
  carta.classList.add("shadow");
  carta.style.margin = "0.35rem";
  carta.style.maxWidth = "12rem"; // mida de carta
  carta.style.border = "solid"; // <= Prova WIP (per mirar si carrega)
  
  //Nom en la carta
  const header = document.createElement("h4", "card-header");
  header.innerText = titol; 


  // Foto
  const foto = document.createElement("img");
  foto.style.maxWidth = "100%";
  foto.loading = "lazy";      // <-- Carga de imatges menys prioritaria (Última cosa que es carrega a la página)
  foto.src = imatge;


  // ****
  // Enllaç cap a la seva propia pagina d'informació extendida '<a> <img> </a>'
  // ****
  const redireccio = document.createElement("a");
  redireccio.href = "./detall.html";
  redireccio.addEventListener("click", () => {
    sessionStorage.setItem("jocSeleccionat", JSON.stringify(joc));
  });
  // ****

  // plataforma
  const body = document.createElement("div");
  body.innerHTML ="<b>- Plataforma:</b><br> "+ plataforma;

  // genere
  const titolBody = document.createElement("p");
  titolBody.innerHTML ="<b>- Gènere:</b> "+ genere;

  // any
  const textBody = document.createElement("p");
  textBody.innerHTML ="<b>- Any:</b> "+ any;

  // Afegim els elements a la carta
  body.append(titolBody, textBody);
  redireccio.append(foto);
  carta.append(header, redireccio);
  carta.append(header, body);

  return carta; //Afegeix carta a la taula
}

