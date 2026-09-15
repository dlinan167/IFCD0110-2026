// catalegs


// ************************************************************************************************
// *                                      EVENTS LISTENERS                                        *
// ************************************************************************************************

// Carrusel (girar a la esquerra)
const evtcFletxaEsquerra = document.getElementById("cFletxaEsquerra");
evtcFletxaEsquerra.addEventListener("click", () =>{
  giraCarrusel(120);
});

// Carrusel (girar a la dreta)
const evtcFletxaDreta = document.getElementById("cFletxaDreta");
evtcFletxaDreta.addEventListener("click", () =>{
  giraCarrusel(-120);
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

// El carrusel retorna a girar de forma automàtica (com estaba originalment, abans de fer click a una fletxa)
function retornaGiraAutomatic() {
  carrusel.style.transform = "";
  carrusel.classList.remove("carruselgiraEsquerra", "carruselgiraDreta");
  carrusel.classList.add("carruselgiraAutomatic");
}


// ++++++++++++++++++++++++ consumir Cataleg ++++++++++++++++++++++

// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ CARREGA EL JSON (Generic) +-+-+-+-+-+-+-+-+

// Cataleg: Videojocs

// const cataleg = "https://randomuser.me/api/?results=30";
const cataleg = "./data/catalegs.json";
const taula = document.getElementById("taulaCataleg");

// Carrega Cataleg
async function carregaCataleg() {
  try {
    const resposta = await fetch(cataleg);
    const dades = await resposta.json();
    console.log(dades);   // <= Object { videojocs: (20) […] } videojocs: Array(20) [ {…}, {…}, {…}, … ]
    console.log(dades.videojocs);  // videojocs: Array(20) [ {…}, {…}, {…}, … 
    
    // Aquí va el codi
    mostrarDades(dades);
  } catch (e) {
    console.error("Error de càrrega",e);
  }
}

carregaCataleg();
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 

// ====== AFEGIR I MOSTRAR DADES EN TAULA ======= (// Comentat)


async function mostrarDades(dades) {
    
      //recorrem els elements del json cataleg
      dades.videojocs.forEach((element) => {
        console.log(element.titol);
        // PER CADA UN: Mostra el titol, imatge etc... 
        taula.appendChild(creaCarta(element.titol, element.imatge, element.plataforma, element.genere, element.any)); // Carta de cada element (funció)
      });
}


// funció crea carta de joc
function creaCarta(titol, imatge, plataforma, genere, any) {
  const carta = document.createElement("div");
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
  foto.setAttribute("loading", "lazy");  // Carga de imatges menys prioritaria (Última cosa que es carrega a la página) 
  foto.src = imatge;

  // Enllaç cap a la seva propia pagina d'informació extendida '<a> <img> </a>'  *WIP
  // 
  // ---
  // 

  // plataforma
  const body = document.createElement("div");
  // body.classList.add("card-body", "text-primary");
  body.innerHTML ="<b>- Plataforma:</b><br> "+ plataforma;

  // genere
  const titolBody = document.createElement("p");
  // titolBody.classList.add("card-title");
  titolBody.innerHTML ="<b>- Gènere:</b> "+ genere;

  // any
  const textBody = document.createElement("p");
  // textBody.classList.add("card-text");
  textBody.innerHTML ="<b>- Any:</b> "+ any;

  // Afegim els elements a la carta
  body.append(titolBody, textBody);
  carta.append(header, foto);
  carta.append(header, body);

  return carta; //Afegeix carta a la taula
}

