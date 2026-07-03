// 59 JSON (1)

// Sessió 30/06/2026
// Ens passen les dades en text
let text = '{"empleats": ['+
'{"nom" : "Joan" , "cognom" : "Dau"},'+
'{"nom" : "Anna" , "cognom" : "Sentmenat"},'+
'{"nom" : "Pere" , "cognom" : "Jaume"} ]}';



console.log(text); // Solament es veu la cadena de text (string)

// Es transforma a format JSON (I podem treballar les dades)
const objecteJSON = JSON.parse(text);


console.log(objecteJSON); //LLista ordenada de JSON

// Mostrem la segona instància del JSON '[1]'
document.getElementById("demo").innerHTML += "Nom: <b>"+ objecteJSON.empleats[1].nom + "</b> " + 
                                                        objecteJSON.empleats[1].cognom +"<br><br>";

// Mostrem totes
for (let i = 0; i < objecteJSON.empleats.length; i++) {
    document.getElementById("demo").innerHTML += "Nom: <b>"+ objecteJSON.empleats[i].nom + "</b> " + 
                                                            objecteJSON.empleats[i].cognom +"<br>";
}


// //////
// Sessió 1/07/2026
// ======================= MOSTRAR ARXIU JSON (local) ===========================


window.addEventListener("load", carregaDades);

const taula = document.getElementById("taula");
let capcalera = [];

async function carregaDades() {
  try {
    const resposta = await fetch("./JSON_(dades)/2025_pad_imm_mdbas.json");
    const persones = await resposta.json();
    //recorrer el camps per a la capçalera
    Object.keys(persones[0]).forEach((clau) => {
      const camp = document.createElement("th");
      camp.innerText = clau;
      taula.appendChild(camp);
    });

    //recorrem els elements del json
    persones.forEach((element) => {
      taula.appendChild(afegeixRegistre(element));
    //   sumaValorDistricte(element);
    });
    // En cas d'error...
  } catch (e) {
    console.error("Error de càrrega ", e);
  }
}

function afegeixRegistre(element,etiqueta="td") {
  const registre = document.createElement("tr");
  
  Object.keys(element).forEach((clau) => {
    const camp = document.createElement(etiqueta);
    camp.innerText = element[clau];
    registre.appendChild(camp);
  });
  return registre;
}



// Suma el 'Valor' si el districte es el mateix
let resultat = 0;
let districteActual = "";
// 
const mostrarSuma = document.getElementById("sumaDistrictes");
function sumaValorDistricte(valor, districte) {
    if (districte != districteActual) { 
        //Mostra el resultat més alt per cada districte
        console.log("El valor total del districte "+districteActual+" és : "+resultat);  
        mostrarSuma.innerHTML += "<p>El valor total del districte <b>"+districteActual+"</b> és : <b>"+resultat+"</b></p>";

        //Es reseteixa el valor total quan el districte es diferent al anterior (y adopta el districte nou com l'actual)
        districteActual = districte;
        resultat = 0;
    }
    resultat += valor;
}


