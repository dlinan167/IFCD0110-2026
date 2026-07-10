// 65 API (PokemonAPI)


// ++++++++++++++++++++++++ EXERCICI API  (recuperar informació de POKEAPI)++++++++++++++++++++++

// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ CARREGA EL JSON (COPY/PASTE) +-+-+-+-+-+-+-+-+

let dadesPokemon = null; // Declarar globalment
window.onload = async function (){ // Inicia al cargar la ventana
    await carregarJSON();
}
const taula = document.getElementById("taulaPokemon");

// carregarJSON();
async function carregarJSON() {   
    try{
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!resposta.ok) {
            throw new Error("No s'ha pogut carregar el fitxer JSON.");
        }
        dadesPokemon = await resposta.json();

    dadesPokemon.results.forEach((clau) => { // dadesPokemon <= Objecte .results <= Llista
      const camp = document.createElement("th");
      camp.innerText = clau;
      taula.appendChild(camp);
    });

    //recorrem els elements del json
    dadesPokemon.results.forEach((element) => {
      taula.appendChild(afegeixRegistre(element));
    });

    }catch (e){
        console.error(e);
    }
    
    console.log(dadesPokemon.results);
}
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 
// +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ 

function afegeixRegistre(element,etiqueta="td") {
  const registre = document.createElement("tr");
  
  Object.keys(element).forEach((clau) => {
    const camp = document.createElement(etiqueta);
    camp.innerText = element[clau];
    registre.appendChild(camp);
  });
  return registre;
}


// Crear cartes POKEMON  (BOOTstrap)
// PARTS DE LA CARTA:
// carta
const carta = document.createElement("div");
carta.classList.add("card");
carta.classList.add("border-primary");
carta.classList.add("mb-3");
carta.style.maxWidth = "18rem";
carta.innerHTML= "Hola! soc una carta";


// titol carta
const titolCarta = document.createElement("div");
titolCarta.classList.add("card-header");
// titolCarta.innerHTML="Sóc el titol de la carta";


// cos carta
const cosCarta = document.createElement("div");
cosCarta.classList.add("card-body");
cosCarta.classList.add("text-primary");
// cosCarta.innerHTML="Sóc el cos de la carta";


// titol del cos
const titolCos = document.createElement("h5");
titolCos.classList.add("cord-title");
titolCos.innerText= "Primary card title";


// Afegir elements de la carta

cosCarta.appendChild(titolCos); // afegir 'titolCos' al 'cosCarta'
carta.appendChild(titolCarta); // afegir 'titolCarta' a la 'carta'
carta.appendChild(cosCarta); // afegir 'cosCarta' a la 'carta'

// Afegim
taula.appendChild(carta); //Afegir carta a la taula


