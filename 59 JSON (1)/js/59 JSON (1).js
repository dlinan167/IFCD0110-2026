// 59 JSON (1)

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
