//# Classes en JavaScript

// Classe cotxe:
// Una classe NO es un objecte
// Una classe es una plantilla de construcció per objecte
// Es el concepte del cotxe
class Cotxe {
    constructor(nom, any) {
        this.nom = nom;
        this.any = any;
    }

    // Mètode method() (per recuperar la data del sistema y calcular la edat que te el cotxe) (és una funció dins la classe plantilla)
    edat(){
        const anyActual = new Date(); //Creem un objecte a partir de la classe/Plantilla 'Date()' / 
        return anyActual.getFullYear() - this.any; // y retornem el resultat del any actual mostra el rellotge del sistema -restat per el any del cotxe(this.year)
    }
}

const cotxePersonal = new Cotxe("SEAT",2024);
const cotxeOscar = new Cotxe("Audi",2001);

// Com es veu
console.log(Cotxe);
console.log(cotxePersonal);
console.log(cotxeOscar);

document.getElementById("edat").innerHTML = "l'edat del meu cotxe amb marca <b>"+cotxeOscar.nom+"</b> és de: <b>"+cotxeOscar.edat()+"</b> anys.";



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
            return "La meva velocitat es: "+this.velocitat+"km/h";
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
        amagarSe(){
            return "Aquest animal s'amaga";
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

console.log(" ========== Objecte hiena a partir de la classe animals =============== ");
// Objecte hiena a partir de la classe animals
const hiena = new animal("Hiena", 45, 20, "marró", 9, true, ["carn", "ossos", "fruites"],["lleóns, pantera"], "sabana");
// Prova
console.log(hiena);
console.log(hiena.correr());
console.log(hiena.caminar());
console.log(hiena.menjar());
console.log(hiena.amagarSe());
console.log(hiena.lluitar());

console.log(hiena.amagarSe("lleó"));


// 
const Enric = new animal("Enric", 80);
console.log(Enric);