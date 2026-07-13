// 66 APIs


// ++++++++++++++++++++++++ EXERCICI consumir API (Usuaris) ++++++++++++++++++++++

// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ CARREGA EL JSON (COPY/PASTE Generic) +-+-+-+-+-+-+-+-+

// API: (https://randomuser.me/documentation#multiple) amb opcións de filtrat en l'URL (PER EXEMPLE: ?results=30&&gender=female)

const API = "https://randomuser.me/api/?results=30";
const taula = document.getElementById("taulaAPI");

// Carrega API
async function carregaAPI() {
  try {
    const resposta = await fetch(API);
    const dades = await resposta.json();
    console.log(dades);   
    
    // Aquí va el codi
    mostrarDades(dades);
  } catch (error) {
    console.error("Error de càrrega",e)
  }
}

carregaAPI();
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 

// ====== AFEGIR I MOSTRAR DADES EN TAULA ======= (// Comentat)


async function mostrarDades(dades) {
  
  // Capçalera per cada result:
  // dades.results.forEach((clau) => {
  //   const camp = document.createElement("th");
  //   camp.innerText = clau;
  //       taula.appendChild(camp);
  //     });
  
      //recorrem els elements del json API
      dades.results.forEach((element) => {
        // taula.appendChild(afegeixRegistre(element.name)); // Mostra el nom del usuari
        taula.appendChild(creaCarta(element.name, element.phone, element.email, element.picture.large, element.login.username, element.location)); // Carta de cada element (funció)
        // console.log(element.name);
      });
}


// // Afegeix i mostra una fila per cada registre
// function afegeixRegistre(element,etiqueta="td") {
//   const registre = document.createElement("tr");
  
//   Object.keys(element).forEach((clau) => {
//     const camp = document.createElement(etiqueta);
//     camp.innerText = element[clau];
//     registre.appendChild(camp);
//   });
//   return registre;
// }




// funció crea carta de usuari
function creaCarta(name, phone, email, picture, username, location) {
  const carta = document.createElement("div");
  carta.classList.add("card", "border-primary", "mb-3", "shadow");
  carta.style.margin = "0.2rem";
  carta.style.maxWidth = "10rem"; // mida de carta
  
  //Nom en la carta
  const header = document.createElement("h4", "card-header");
  header.innerText = name.first +" "+ name.last; 


  // Foto
  const foto = document.createElement("img");
  foto.src = picture;
  // username
  const body = document.createElement("div");
  body.classList.add("card-body", "text-primary");
  body.innerHTML ="- <b>Username:</b> "+ username;

  // Email
  const titolBody = document.createElement("p");
  titolBody.classList.add("card-title");
  titolBody.innerHTML ="- <b>Email:</b> "+ email;

  // Location
  const textBody = document.createElement("p");
  textBody.classList.add("card-text");
  textBody.innerHTML ="- <b>Location:</b> "+ location.city +", "+ location.country;

  body.append(titolBody, textBody);
  carta.append(header, foto);
  carta.append(header, body);

  return carta; //Afegeix carta a la taula
}

