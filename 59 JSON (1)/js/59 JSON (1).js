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

// const taulaWIP = document.getElementById("taulaWIP");
// async function carregarDades() {
//     try {
//         // AGAFEM L'ARXIU
//         const resposta = await fetch("./JSON_(dades)/2025_pad_imm_mdbas.json");
//         const usuaris = await resposta.json();

//         // RECORREM ELS ELEMENTS DEL JSON i els mostrem
//         usuaris.forEach(usuari => {
//             console.log(usuari.Nom_Districte+ " "+ usuari.Nom_Barri);
//             taulaWIP.innerHTML += "<p> <b>"+ usuari.Valor+"</b> - "+ usuari.Nom_Districte+ usuari.Nom_Barri  + "</p>"
//         });

//         // En cas de error:...
//     } catch (error) {
//         console.error("Error al carregar dades!",error);
//         // alert
//     }
// }
// carregarDades();

const taula = document.getElementById("taula");
async function carregarDades() {
    try {
        // AGAFEM L'ARXIU
        const resposta = await fetch("./JSON_(dades)/2025_pad_imm_mdbas.json");
        const usuaris = await resposta.json();

        // RECORREM ELS ELEMENTS DEL JSON i els mostrem
        usuaris.forEach(usuari => {
            taula.innerHTML += "<tr><td><b>"+usuari.Valor+"</b> - </td><td>"+usuari.Nom_Districte +"</td><td>"+usuari.Nom_Barri+"</td><td>"+usuari.Seccio_Censal+"</td><td>"+usuari.Any+"</td></tr>";
            // Funció
            sumaValorDistricte(usuari.Valor, usuari.Nom_Districte);
            console.log(usuari.Nom_Districte+ " "+ usuari.Nom_Barri);
        });

        // En cas de error:...
    } catch (error) {
        console.error("Error al carregar dades!",error);
        // alert
    }
}
carregarDades();

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
