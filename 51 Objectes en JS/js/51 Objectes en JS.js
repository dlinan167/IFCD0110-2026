//# Objectes en JavaScript

// Objecte cotxe
const cotxe = {
    // Atributs del objecte
    marca: "Fiat",
    model: "500",
    color: "Negre",
    direccioAssistida: true,
    hibrid: false,
    preu: 20000,
    numPortes: 5,
    modelIMarca: function(){
        return this.model +" "+ this.marca; // Es pot fer en: cotxe.model +" "+ cotxe.marca;
    }
};

console.log(cotxe)  //Apareix tot el objecte
console.log("El color es: "+cotxe.color) // Apareix solament el color

//DOM (Document-Object-Model) (El que es veu en la pàgina amb JavaScript)
document.getElementById("cotxeColor").innerHTML = "El color del cotxe es: <b>"+cotxe.color+"</b>";

// Concatenat en un sol id (+=)
document.getElementById("cotxeObjecte").innerHTML = "Marca: <b>"+cotxe.marca+"</b>"; // Fiat
document.getElementById("cotxeObjecte").innerHTML += "<br> Model: <b>"+cotxe.model+"</b>"; // 500
document.getElementById("cotxeObjecte").innerHTML += "<br> Color: <b>"+cotxe.color+"</b>"; // Negre
document.getElementById("cotxeObjecte").innerHTML += "<br> Direcció Assistida: <b>"+(cotxe.direccioAssistida ? "Sí": "No");+"</b>"; //true (Sí)
document.getElementById("cotxeObjecte").innerHTML += "<br> Hibrid: <b>"+(cotxe.hibrid? "Sí": "No");+"</b>"; //False (No)
document.getElementById("cotxeObjecte").innerHTML += "<br> Status: <b>"+(cotxe.preu < 15000? "Utilitari": (cotxe.preu<50000? "SUV": "Luxury"));+"</b>"; // € < 15000 = Utilitari || 
// (Se ahorran ids)

// S'edita/Sobreescriu el valor de color
cotxe.color="Blanc";
document.getElementById("cotxeObjecte").innerHTML+="<br> Color nou: "+cotxe.color; //Blanc

// Afegir nou atribut al objecte
cotxe.tipusCombustible="Diesel";
document.getElementById("cotxeObjecte").innerHTML +="<br>Tipus combustible: <b>"+ cotxe.tipusCombustible+"</b>"; // Diesel

// Nomeclatura de Braket ["preu"] (alternativa)
document.getElementById("cotxeObjecte").innerHTML +="<br>Preu: <b>"+ cotxe["preu"]+"€</b>"; // 20000

document.getElementById("cotxeObjecte").innerHTML += "<br> Marca: <b>"+cotxe.modelIMarca() +"</b>"; // 500 Fiat

// Eliminar el atribut cotxe.model (delete)
delete cotxe.model;
console.log("Model: "+cotxe.model); //Undefined

// Comprovació /si o no ("atributo" in contxe) ?busca (in)
let result = ("color" in cotxe);
console.log(result); //true


// Objecte
console.log("Format JSON")
console.log(cotxe)

// Convertim el objecte en un string
let cadena = JSON.stringify(cotxe)
console.log("Format String")
console.log(cadena)


// (this.)
function person(first, second, age, eye) {
    this.firstName = first;
    this.firstName = second;
    this.age = age;
    this.firstName = eye;
}

