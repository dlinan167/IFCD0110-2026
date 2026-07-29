// catalegs


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
  foto.src = imatge;

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

