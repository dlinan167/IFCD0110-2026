//

// -------------------------------------------------------------------------------------------------------------------
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Part del BLOC 1: codi d'ordinograma +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// -------------------------------------------------------------------------------------------------------------------

// 


document.getElementById("RestaB1").addEventListener("click", restaB1)
const resultatRestaB1 = document.getElementById("resultatRestaB1");

function restaB1() {
  // Demanem els numeros 'num1' i 'num2'
  let num1 = parseInt(prompt("Proporciona el primer numero"));
  let num2 = parseInt(prompt("Proporciona el segon numero"));

  // Calculem el resultat
  let resultat = num1 - num2;

  // Si el resultat es (== 0) ZERO
  if (resultat == 0) {
        resultatRestaB1.innerHTML= "El resultat <b>"+ resultat+ "</b> És <b> ZERO </b>";
  }

  // Si el resultat es (< 0) NEGATIU
  if (resultat < 0){
    resultatRestaB1.innerHTML= "El resultat <b>"+ resultat+ "</b> És <b> NEGATIU </b>";

      // Si el resultat es (> 0) POSITIU
  }else if (resultat > 0){
    resultatRestaB1.innerHTML= "El resultat <b>"+ resultat+ "</b> És <b> POSITIU </b>";
  }
}



// ======================= BLOC 1 OBJECTES: ==================================
// Classe animal
class animal {
    constructor(nom, pes, velocitat, color, edat, esPerillos, queMenja, esMenjatPer, habitat) {
        // ATRIBUTS
        this.nom = nom;
        this.pes = pes;
        this.velocitat = velocitat;
        this.color = color;
        this.edat = edat;
        this.esPerillos = esPerillos;
        this.queMenja = queMenja;
        this.esMenjatPer = esMenjatPer;
        this.habitat = habitat;
    }
        // MÈTODES
        correr(){
            return "La velocitat d'aquest animal és: "+this.velocitat+"km/h";
        }
        caminar(){
            return "Aquest animal camina";
        }
        menjar(){
            let comides="";
            for (let comida of this.queMenja) {
                comides += comida + ", ";
            }
            return "Aquest animal menja: "+comides;
        }
        amagarSe(mimetitzat){
            return "Aquest animal es fa pasar per un: "+ mimetitzat;
        }
        lluitar(){
            let enemics="";
            for (let enemic of this.esMenjatPer) {
                enemics += enemic + ", ";
            }
            return "Aquest animal es baralla amb: "+enemics;
        }
}

console.log(" ========== Bloc 1: Objecte a partir d'una classe  =============== ");
// Objecte hiena a partir de la classe animals
const hiena = new animal("Hiena", 45, 20, "marró", 9, true, ["carn", "ossos", "fruites"],["lleóns, panteres"], "sabana"); // <= Creació de un OBJECTE de CLASSE 'animal', amb aquestes dades
// Prova de mètodes
console.log(hiena);             // <= dades del OBJECTE (hiena)
console.log(hiena.correr());    // <= Proves de Mètodes
console.log(hiena.caminar());
console.log(hiena.menjar());
console.log(hiena.amagarSe("lleó"));
console.log(hiena.lluitar());




// -------------------------------------------------------------------------------------------------------------------
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Part del BLOC 2: INSERCIÓ AMB JAVASCRIPT +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// -------------------------------------------------------------------------------------------------------------------

const demoBloc2 = document.getElementById("demoBloc2");
demoBloc2.innerHTML = "<h2> Hola! Aixó és text inserit utilitzant JavaScript! (Bloc 2) </h2>";

// -------------------------------------------------------------------------------------------------------------------
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ BLOC 3: RECURSIVA AMB CONDICIONAL +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// -------------------------------------------------------------------------------------------------------------------

// La funció es repeteix així mateixa (fins que el numero arriva/li pasem 'numTimer' es fa menys que 0)
console.log("-+-+-+-+-+-+-+-+-+- Bloc 3: Recursiva amb condicional -+-+-+-+-+-+-+-");
function cuentaAtras(numTimer)  {
  
    if (numTimer < 0) { // <= Condicional 'if'
        return;
    }

    console.log(numTimer)
    cuentaAtras(numTimer - 1); // <= Es repeteix la funció (recursivitat)
}
console.log(cuentaAtras(10)); // de '10' fins a '0'



// Funció on els parametres tenen un valor per defecte si NO s'indica explicitament (En aquest cas 'num2=10')
console.log("-+-+-+-+-+-+-+-+-+- Bloc 3: funciço amb valor per defecte -+-+-+-+-+-+-+-");
function suma(num1, num2=10) {
    return num1 + num2;
}
console.log(suma(5,2)); // = 7
console.log(suma(4)); // = 14


// (BLOC 4: en codi_bloc4.html)

// -------------------------------------------------------------------------------------------------------------------
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ BLOC 5: DOM  (Propietat i mètode)  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// -------------------------------------------------------------------------------------------------------------------

console.log("-+-+-+-+-+-+-+-+-+- Bloc 5: -+-+-+-+-+-+-+-");
console.log(demoBloc2.innerText); // innerText es un dels mètodes del Objecte DOM
console.log(demoBloc2.attributes); // Mostra els atributs del DOM llistats
console.log(demoBloc2.id); // Mostra específicament la propietat 'id'


// -------------------------------------------------------------------------------------------------------------------
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ BLOC 6: ESDEVENIMENTS +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// -------------------------------------------------------------------------------------------------------------------


// 
console.log("-+-+-+-+-+-+-+-+-+- Bloc 6: -+-+-+-+-+-+-+-");
console.log(elementFormulari);

// Detectar event en elementFormulari
formulariB6.addEventListener("submit", controlSubmit);
elementFormulari.addEventListener("click", controlClick);
elementFormulari.addEventListener("dblclick", controlDblclick);
elementFormulari.addEventListener("mouseover", controlMouseover);
elementFormulari.addEventListener("focus", controlFocus);
elementFormulari.addEventListener("keydown", controlKeyDown);
window.addEventListener("load", controlClickFinestra);
llistaElements.addEventListener("change",controlLlistaElements)

 // Escriure en '<p id=controlEvents' segons quin event s'activa:
 const controlEvents = document.getElementById("controlEvents");
 const controlFinestra = document.getElementById("controlFinestra");
 
//  Envia formulari
 function controlSubmit() {
   controlEvents.innerHTML= "<b> El formulari s'ha enviat!!! </b>"; 
   botoSubmit.style.background="green";
  }
  // Ratolí
 function controlClick() {
   controlEvents.innerHTML= "<b> Hola, estas fen: </b> onclick"; 
   elementFormulari.style.background="white";
  }
  function controlMouseover() {
    controlEvents.innerHTML= "<b> Hola, estas fen: </b> onmouseover"; 
    elementFormulari.style.background="cyan";
  }
  function controlDblclick() {
    controlEvents.innerHTML= "<b> Hola, estas fen: </b> dblclick"; 
    elementFormulari.style.backgroundColor="blue";
  }
  // Enfoc
  function controlFocus() {
    controlEvents.innerHTML= "<b> Hola, estas fen: </b> onfocus"; 
    elementFormulari.style.background="yellow";
  }
  // Teclat
  function controlKeyDown() {
    controlEvents.innerHTML= "<b> Hola, estas fen: </b> onKeyDown"; 
    elementFormulari.style.backgroundColor="orange";
  }
  // Finestra
  function controlClickFinestra() {
    controlFinestra.innerHTML= "<b> La finestra s'ha carregat correctament! </b>"; 
    controlFinestra.style.backgroundColor="green";
  }
  // Elements de formulari
  function controlLlistaElements() {
    controlFinestra.innerHTML= "<b> S'ha cambiat la targeta! </b>"; 
    controlFinestra.style.backgroundColor="yellow";
  }

// -------------------------------------------------------------------------------------------------------------------
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ BLOC 7: TAULA DE LA VERITAT +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-
// -------------------------------------------------------------------------------------------------------------------
console.log("+-+-+-+-+-+-+-+-+-+-+-+ Bloc 7: Taula de la veritat +-+-+-+-+-+-+-+-+-+-+-+");

function taulaVeritat(valorA, valorB) {
console.log("ValorA \t ValorB \t AND \t OR \t NEGATIU AND \t NEGATIU OR");
  let columnaAND;
  let columnaOR;
  let negAND;
  let negOR;

//   Columna AND (&&) (Fan falta DOS 'true' per comptar com true)
  if (valorA == true && valorB == true) {
    columnaAND = true;
  } else {
    columnaAND = false;
  }
//   Columna OR (||) (Fa falta UN 'true' per comptar com true)
  if (valorA == true || valorB == true) {
    columnaOR = true;
  } else {
    columnaOR = false;
  }
//   Columna Negativa AND (Invirteix el true/false del AND)
  if (columnaAND == true) {
    negAND = false;
  } else {
    negAND = true;
  }
//   Columna Negativa OR (Invirteix el true/false del OR)
  if (columnaOR == true) { 
    negOR = false;
  } else {
    negOR = true;
  }

//  Mostrar per consola la taula amb els booleans
  console.table(valorA + "  \t" + valorB + "     \t" + columnaAND + "  \t" + columnaOR + "    \t" + negAND + "    \t" + negOR);
}
// PROVA DE LA TAULA (4 posibles casos)
console.log(taulaVeritat(true, true));
console.log(taulaVeritat(true, false));
console.log(taulaVeritat(false, true));
console.log(taulaVeritat(false, false));