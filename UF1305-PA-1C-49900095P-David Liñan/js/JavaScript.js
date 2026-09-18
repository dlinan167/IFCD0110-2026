

// +-+-+-+ PART 2:
// Exemple de carrega
window.addEventListener("load", function () {

  // Finalitza de carregar (Mostra missatge)
  setInterval(() => {
    document.getElementById("demoLoad").innerHTML = "Página cargada";
  }, 2000);
  
  // Finalitza de carregar (Desapareix)
  setInterval(() => {
    document.getElementById("demoLoad").style.display = "none";
  }, 3000);



});

// +-+-+-+ PART 3:
// Exemple d'objecte
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
        // MÈTODES del objecte
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

console.log(" ========== PART 3: Objecte i cadena  =============== ");
// Objecte hiena a partir de la classe animals
const hiena = new animal("Hiena", 45, 20, "marró", 9, true, ["carn", "ossos", "fruites"],["lleóns, panteres"], "sabana"); // <= Creació de un OBJECTE de CLASSE 'animal', amb aquestes dades
const peix = new animal("Hiena", 2, 1, "gris", 1, false, ["carn"],["pescadors"], "mar"); // <= Creació de un OBJECTE de CLASSE 'animal', amb aquestes dades
const gat = new animal("Gat", 10, 2, "taronja", 3, false, ["carn"],["aspiradores"], "cases"); // <= Creació de un OBJECTE de CLASSE 'animal', amb aquestes dades
// Prova de mètodes
console.log(hiena);             // <= dades del OBJECTE (hiena)
console.log(hiena.correr());    // <= Proves de Mètodes
console.log(hiena.caminar());
console.log(hiena.menjar());
console.log(hiena.amagarSe("lleó"));
console.log(hiena.lluitar());

// Exemple cadena Array
const grupAnimals = [hiena, peix, gat];
console.log(grupAnimals);


// +-+-+-+ PART 4:
// Control d'un error:
console.log(" === PART 4: Control d'un error === ");
let roger=5;
try {
    roger(5); // <= 'roger' no es una funció (Fa un error)
    
} catch (e) {
    // alerta d'error
    document.getElementById("demoPart4").innerHTML= "<b> S'ha produit un error! </b><br> ("+ e + ")<br>";
    console.log("ERROR! "+ e);
}

// +-+-+-+ PART 5:
// Recorre propietats d'un objecte:
console.log(" === PART 5: Propietats d'un objecte === ");

for (let [elementKey, valor] of Object.entries(hiena)) {
  
  document.getElementById("demoPart5").innerHTML += elementKey +": --> "+ valor + "<br>";
    console.log(elementKey +": --> "+ valor);
}


// +-+-+-+ PART 6:
// Detectar event en elementFormulari
formulariEvent.addEventListener("submit", controlSubmit);
 
//  Envia formulari
 function controlSubmit() {
   controlEvents.innerHTML= "<b> El formulari s'ha enviat!!! </b>"; 
   botoSubmit.style.background="green";
  }