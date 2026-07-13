// 65 API (PokemonAPI)


// ++++++++++++++++++++++++ EXERCICI API  (recuperar informació de POKEAPI)++++++++++++++++++++++

// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ CARREGA EL JSON (COPY/PASTE Generic) +-+-+-+-+-+-+-+-+

// API: (https://pokeapi.co/api/v2/pokemon/) amb opcións de filtrat en l'URL ()

const API = "https://pokeapi.co/api/v2/pokemon/";
const taula = document.getElementById("taulaPokemonAPI");

// Carrega API
async function carregaAPI() {
  try {
    const resposta = await fetch(API);
    const dades = await resposta.json();
    console.log(dades);   
    
    // Aquí va el codi
    mostrarDades(dades);
  } catch (e) {
    console.error("Error de càrrega",e)
  }
}

carregaAPI();
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 

// ====== AFEGIR I MOSTRAR DADES En Cartes =======

async function mostrarDades(dades) {

  //recorrem els elements del json API
  
  dades.results.forEach((element) => {
  try {
        // const resposta2 =  fetch(element.url);
        // const dades2 =  resposta2.json();
        // console.log(dades2);   

        taula.appendChild(creaCarta(element.name, element.weight)); // Carta de cada element (funció)
      
      } catch (e) {
        console.error("Error de càrrega",e)
      }
      });
        // console.log(element.name);
}


// funció crea carta de usuari
function creaCarta(name, weight, email, picture, username, location) {
  const carta = document.createElement("div");
  carta.classList.add("card", "border-primary", "mb-3", "shadow");
  carta.style.margin = "0.2rem";
  carta.style.maxWidth = "15rem"; // mida de carta
  
  //Nom en la carta
  const header = document.createElement("h4", "card-header");
  header.innerText = name; 
  const headerProva2 = document.createElement("h4", "card-header");
  headerProva2.innerText = weight; 

  // // Foto
  // const foto = document.createElement("img");
  // foto.src = picture;
  // // username
  // const body = document.createElement("div");
  // body.classList.add("card-body", "text-primary");
  // body.innerHTML ="- <b>Username:</b> "+ username;

  // // Email
  // const titolBody = document.createElement("p");
  // titolBody.classList.add("card-title");
  // titolBody.innerHTML ="- <b>Email:</b> "+ email;

  // // Location
  // const textBody = document.createElement("p");
  // textBody.classList.add("card-text");
  // textBody.innerHTML ="- <b>Location:</b> "+ location.city +", "+ location.country;

  // body.append(titolBody, textBody);
  // carta.append(header, foto);
  // carta.append(header, body);

  carta.appendChild(header);
  carta.appendChild(headerProva2);

  return carta; //Afegeix carta a la taula
}







// // +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// // +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 

// function afegeixRegistre(element,etiqueta="td") {
//   const registre = document.createElement("tr");
  
//   Object.keys(element).forEach((clau) => {
//     const camp = document.createElement(etiqueta);
//     camp.innerText = element[clau];
//     registre.appendChild(camp);
//   });
//   return registre;
// }


// // Crear cartes POKEMON  (BOOTstrap)
// // PARTS DE LA CARTA:
// // carta
// const carta = document.createElement("div");
// carta.classList.add("card");
// carta.classList.add("border-primary");
// carta.classList.add("mb-3");
// carta.style.maxWidth = "18rem";
// carta.innerHTML= "Hola! soc una carta";


// // titol carta
// const titolCarta = document.createElement("div");
// titolCarta.classList.add("card-header");
// // titolCarta.innerHTML="Sóc el titol de la carta";


// // cos carta
// const cosCarta = document.createElement("div", "card-body","text-primary" );
// // cosCarta.classList.add("card-body");
// // cosCarta.classList.add("text-primary");
// // cosCarta.innerHTML="Sóc el cos de la carta";


// // titol del cos
// const titolCos = document.createElement("h5");
// titolCos.classList.add("cord-title");
// titolCos.innerText= "Primary card title";


// // Afegir elements de la carta

// cosCarta.appendChild(titolCos); // afegir 'titolCos' al 'cosCarta'
// carta.appendChild(titolCarta); // afegir 'titolCarta' a la 'carta'
// carta.appendChild(cosCarta); // afegir 'cosCarta' a la 'carta'

// // Afegim
// taula.appendChild(carta); //Afegir carta a la taula


