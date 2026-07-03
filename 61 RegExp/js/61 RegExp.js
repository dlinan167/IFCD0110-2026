// 61 RegExp  (Expressions regulars)

// Sessió 03/07/2026


// Coincidència en cadenes de caràcters  (match(/ /))
function coincideix() {
    let text = "Visita CET Penedès"
    let resultat = text.match(/CET/); // '/CET/' entre barres, / /, es una expressió regular
    
    console.log(resultat); // Restorna una llista/array dels elements que coincidènxen
}
coincideix();


// Reemplaçament de cadenes (replace())

function reemplaça() {
    let text = "Visita CET Penedès i CET Garraf";
    let resultat = text.replace(/CET/g, "Beep"); //Busca el patró en la cadena y reemplaça el contingut, ('g'(global) fa que s'aplica a totes no solament a la primera)
    console.log(resultat);
}
reemplaça();


// Cerca de cadenes

function cercar() {
    let text = "Visita CET Penedès i CET Garraf";
    let num = text.search(/CET/); // Diu la posició on comença la parula (la primera ocurrencia)
    console.log(num);
}
cercar();


// Coincideix amb OR

function coincideixOR() {
    let text = "black, white, red, green, blue, yellow.";
    let resultat = text.match(/red|green|blue/g);
    
    console.log(resultat);
}
coincideixOR();

// Metacaràcters \w - (Matches words) \d - (Matches digits) \s (busca espais) etc...


// cerca Metacaràcter \d (digit)

function cercaMetaD() {
    let text = "Vull el 125%";
    const patro = /\d/g;
    let resultat = text.match(patro);
    console.log(resultat);
}
cercaMetaD();


// cerca Metacaràcter \w (paraula)

function cercaMetaW() {
    let text = "Vull el 125%";
    const patro = /\w/g;
    let resultat = text.match(patro);
    console.log(resultat);
}
cercaMetaW();


// cerca Metacaràcter \s (espais)

function cercaMetaS() {
    let text = "Vull el 125%";
    const patro = /\s/g;
    let resultat = text.match(patro);

    console.log(resultat); // Array [ " ", " " ]
}
cercaMetaS(); 

// Quantificador   x+ - (un o més) - x* (ningun o més) x? - (ningun o un)

// ? (ningun o un)

function quantificadorInterrogant() {
        let text = "98, 15, 1, 100 o 1000";
    const patro = /10?/g;
    let resultat = text.match(patro);

    console.log(resultat); // Array ["1", "1", "10", "10" ] | (un '1' i que hi hagi un '0' o no  ('0?' el caracter que li afecta el interrogant))
}
quantificadorInterrogant(); 


// RegExp Assercions

// Comença a buscar la paraula del principi (^)
// const pattern = /^W3Schools/;

// Comença a buscar la paraula del final ($)
// const pattern = /W3Schools$/;


// (^) accent circunflex
function circunflex() {

    const patro = /^CET/;
    let text = "Escola de CET";
    let resultat = patro.test(text); //.test retorna un boolean si troba la frase que busquem

    console.log(resultat); // false (no el troba)
}
circunflex(); 


// ($) dollar
function dollar() {

    const patro = /CET$/;
    let text = "Escola de CET";
    let resultat = patro.test(text); //.test retorna un boolean si troba la frase que busquem

    console.log(resultat); // true (el troba)
}
dollar(); 


// Grups/Classes de caràcters
// Match Digits       |[a] [abc] | [a-z] | [0-9]

function numeros() {
    const patro = /[0-9]/g;
    let text = "Més de 1000 vegades";
    let resultat = text.match(patro);

    console.log(resultat); // ["1", "0", "0", "0"]
}
numeros(); 

// ---------------------- Banderes --------------------------------

// flags (banderes) /g - (global) /i - (case-insensitive) /u - (unicode) ...

// cerca /g
function cercaG() {
    let text = "En pinxo li va dir a en panxo: voles que et punxi amb un punxó i en Panxo li va dir a en Pinxo: punxa'm però a la panxa no.";
    const patro = /nx/g;
    let resultat = text.match(patro);
    console.log(resultat);
}
cercaG(); // 8 nx


// cerca /i
function cercaI() {
    let text = "Visita CET Penedès i CeT Garraf";
    const patro = /CET/ig;
    let resultat = text.match(patro);
    console.log(resultat);
}
cercaI();


// Bandera /d  (agafa posicions de sub-cadenes)

function cercaD() {
    let text = "acbbbbaaaabb";
    const patro = /(aa)(bb)/d; // si es un '/aabb/d'  
    let resultat = text.match(patro);
    let indexos = resultat.indices; //Recupera les posicions que coincideixen

    console.log(resultat);
    console.log(indexos); //Ens diu on començen y acaben cada coinsidencia
}
// Array(3) [ "aabb", "aa", "bb" ]
// Array(3) [ (2) […], (2) […], (2) […] ]

// 0: Array [ 8, 12 ] 'aabb'
// ​
// 1: Array [ 8, 10 ] 'aa'
// ​
// 2: Array [ 10, 12 ] 'bb'

// Primer mira per el conjunt sencer 'aabb' i despres cada conjunt entre '()' com (aa) i (bb)
cercaD();



// Bandera /s   (agafa punt. i el \n)

function cercaS() {
    let text = "Linia\nLinia.";
    const patro = /Linia./sg;  // Sense la /s la Linia\n no el trova (\n és salt de linia)

    let resultat = text.match(patro);
    console.log(resultat);
}
cercaS();



// Bandera /m   (agafa el match en multiples linies)

function cercaM() {
    let text = `Is this \n
    all there 
    \nis`;
    const patro = /^is/igm;  // Troba totes les 'is' que comencin cada linia

    let resultat = text.match(patro);
    console.log(resultat); // [ "Is", "is" ]
}
cercaM();



// Bandera sticky /y     (Busca a partir d'un index de posició)

function cercaY() {
    let text = "abc def ghi";
    const patro = /\w+/y; 

    patro.lastIndex = 4;   // '/y' Cerca a partir de la posició 4 on es ta la 'd' (|d|ef)
    let resultat = text.match(patro);

    console.log(resultat); // [ "def" ]
}
cercaY();

// ---------------------- ^^^ Banderes ^^^ --------------------------------


// [] <= Els que volem (llista blanca)
// [^] <= Els que NO volem (llista negra)

function llistaNegra() {
    let text= "Hola que tal bon dia, ja per fi és divendres"

    // const patro = /[aeiou]/g; // <= Array(14) [ "o", "a", "u", "e", "a", "o", "i", "a", "a", "e", … ]
    const patro = /[^aeiou]/g; // <= Array(30) [ "H", "l", " ", "q", " ", "t", "l", " ", "b", "n", … ]
    let resultat = text.match(patro)

    console.log(resultat);
}
llistaNegra();

//  \b   (Mirar principi o final de paraules)

//text.match <= llista de matches
//text.search <= posició

// Principi de paraula
function iniciParaula() {
    let text = "HELLO, LOOK AT YOU!";
    const patro = /\bLO/;
    let resultat = text.search(patro);
    console.log(resultat);
}
iniciParaula(); // 7 (posició)



// Final de paraula
function finalParaula() {
    let text = "HELLO, LOOK AT YOU!";
    const patro = /LO\b/;
    let resultat = text.search(patro);
    console.log(resultat);
}
finalParaula(); // 3 (posició)


// Paraula entera (no dins d'altres paraules)

function paraulaEntera() {
    let text = "Hellow, what is your name? My name is Iris. Ah ok, I thought your name was Laquisha";
    const patro = /\bis\b/g;
    let resultat = text.match(patro);
    console.log(resultat);
}
paraulaEntera(); // [ "is", "is" ] sense els /b son 4 is

// ^^/b^^ // // // // // // // //


// Cerca Condicional (?= paraula)

function cercaCondicional() {
    let text = "CET Penedès no és dels mateixos que els del CET Garraf, ni CET Barcelonés. CET Penedès és l'original";
    const patro = /CET(?= Penedès)/g;   // Busca 'CET' si després hi ha el 'Penedès'
    let resultat = text.match(patro);
    console.log(resultat); // [ "CET", "CET" ]
}
cercaCondicional(); 

// Cerca Condicional NEGATIVA (?! paraula)

function cercaCondicionalNEG() {
    let text = "CET Penedès no és dels mateixos que els del CET Garraf, ni CET Barcelonés. CET Penedès és l'original... CET";
    const patro = /CET(?! Penedès)/g;   // Busca 'CET' si NO hi ha el 'Penedès'
    let resultat = text.match(patro);
    console.log(resultat); // [ "CET", "CET", "CET" ]
}
cercaCondicionalNEG(); 