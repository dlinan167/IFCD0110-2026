//# Exercicis de JavaScript


// === ## 1. Contrasenya vàlida ===  Escriure una funció anomenada `contrasenyaValida` que rebi un string i retorni `true` si el string és igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". En cas contrari ha de retornar `false`).
// escriu la teva resposta aquí
function contrasenyaValida(Contrasenya){

    if(Contrasenya == "2Fj(jjbFsuj" || Contrasenya == "eoZiugBf&g9"){

        return true;
    }else{
        return false;
    }
}
// codi de prova
console.log("=== ## 1. Contrasenya vàlida === ")
console.log(contrasenyaValida("2Fj(jjbFsuj")) // true
console.log(contrasenyaValida("eoZiugBf&g9")) // true
console.log(contrasenyaValida("hola")) // false
console.log(contrasenyaValida("")) // false

// === ## 2. Calcular impostos === Escriure una funció anomenada `calcularImpostos` que rebi dos arguments numèrics: `edat` i `ingressos`. Si `edat` és igual o major a 18 i els ingressos són iguals o majors a 1000 ha de retornar `ingressos` * 40%. En cas contrari retornar 0.
function calcularImpuestos(edat, ingressos){

    if(edat >= "18" || ingressos >= 1000){
        return ingressos * 0.40 //40% de ingressos
    }else{
        return 0;
    }
}
// escriu la teva resposta aquí

// codi de prova
console.log("=== ## 2. Calcular impostos === ")
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

// === ## 3. IMC (índex de massa corporal) ===
// L'índex de massa corporal (IMC), o BMI per les sigles en anglès, és un valor que determina la quantitat de greix d'una persona.

// El BMI es calcula amb la fórmula següent: `pes / altura^2`

// Escriure una funció anomenada `bmi` que rebi dos arguments: pes i altura, i retorni un string amb les possibilitats següents:

// * "Baix de pes" si el BMI < 18.5
// * "Normal" si està entre 18.5 i 24.9
// * "Sobrepès" si està entre 25 i 29.9
// * "Obès" si és igual o major a 30

// escriu la funció bmi aquí
function bmi(pes, altura){
    if(pes/altura**2 >= 65/1.8**2 && pes/altura**2 < 72 / 1.6**2){
        bmiResult = "Normal";
    }
    if(pes/altura**2 >= 72 / 1.6**2 && pes/altura**2 < 135 / 1.7**2){
        bmiResult = "Sobrepes";
    }
    if(pes/altura**2 >= 52 / 1.75**2 && pes/altura**2 < 65 / 1.8**2){
        bmiResult = "Baix de pes";
    }
    if(pes/altura**2 >= 135 / 1.7**2){
        bmiResult = "Obès";
    }
    return bmiResult;
}
// codi de prova
console.log("=== ## 3. IMC (índex de massa corporal) ===")
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepes"
console.log(bmi(52, 1.75)) //  "Baix de pes"
console.log(bmi(135, 1.7)) // "Obès"

// === ## 4. Imprimir un array ===  Escriure una funció anomenada `imprimirArray` que rebi un array i imprimeixi cada element en una línia a part:
// escriu la teva resposta aquí

// Recòrrer una col·lecció d'elements
function imprimirArray(llista){
for (const elementDeLlista of llista) {
    console.log(elementDeLlista);
}

// Recòrrer a partir d'un index
    for (let i = 0; i < llista.length; i++) {
        console.log(llista[i]);
    }
}
// codi de prova
console.log("=== ## 4. Imprimir un array (x2) === ");
imprimirArray([1, "Hola", 2, "Món"]);
// 1
// Hola
// 2
// Món

// === ## 5. Número de Likes === Escriu una funció anomenada `likes` que rebi un número i retorni un string utilitzant el format de K per a milers i M per a milions.
// Per exemple:

// * 1400 es converteix en 1K
// * 34,567 es converteix en 34K
// * 7,456,345 es converteix en 7M.

// Si el nombre és menor a 1000, s'ha de tornar el mateix nombre com un string.
// escriu la teva resposta aquí
function likes(numLikes){
    if(numLikes < 1000){
        return numLikes;
    }
    else if(numLikes < 1000000){
        // Math.trunc(numLikes); // Elimina decimals
        // return numLikes/1000.toPrecision(1) + "K"; // toPrecision: Retorna un string amb un decimal o mes segons el valor
        return Math.trunc(numLikes/1000) + "K";
    }
    else if(numLikes >= 1000000){
        return Math.trunc(numLikes/1000000) + "M";
    }
}
// codi de prova
console.log(" === ## 5. Número de Likes === ")
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"

// === ## 6. FizzBuzz === Escriure una funció anomenada `fizzBuzz` que rebi un número i retorni un string d'acord amb el següent:
// * "fizz" si el nombre és múltiple de 3.
// * "buzz" si el nombre és múltiple de 5.
// * "fizzbuzz" si el nombre és múltiple tant de 3 com de 5.
// * Si no compleix cap de les condicions anteriors ha de retornar el mateix número.
// escriu la teva resposta aquí
function fizzBuzz(num){
    // Multiples de 3 i 5
    if(num % 3 == 0 && num % 5 == 0){return num+" es fizzBuzz";}
    // Multiples de 3
    if(num % 3 == 0){return num+" es fizz";}
    // Multiples de 5
    if(num % 5 == 0){return num+" es Buzz";}
    return num;
}
// codi de prova
console.log(" === ## 6. FizzBuzz === ")
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

// === ## 7. Comptar rang de números === Escriure una funció anomenada `comptarRang` que rebi dos números i retorni quants n'hi ha entre ells (excloent-los):
// **Nota:** Utilitza un cicle a la teva solució. Pots assumir que el primer número serà menor que el segon.
// escriu la teva resposta aquí
function comptarRang(numeroInferior, numeroSuperior){
    let contadorRang = 0;
    for(let i = numeroInferior + 1; i < numeroSuperior; i++){
        contadorRang++;
    }
    return contadorRang;
}
// codi de prova
console.log(" === ## 7. Comptar rang de números === ")
console.log(comptarRang(1, 9)) // 7
console.log(comptarRang(1332, 8743)) // 7410
console.log(comptarRang(5, 6)) // 0


// === ## 8. Sumar rang de números === Escriure una funció anomenada `sumarRang` que rebi dos arguments: nombre inicial i nombre final. La funció ha de retornar la suma dels nombres en aquest rang (incloent-los).
// **Nota:** pots assumir que el nombre inicial serà menor o igual que el nombre final.
// escriu la teva resposta aquí
function sumarRang(numInicial, numFinal){
    let sumaRang = 0;
       for(let i = numInicial + 1; i <= numFinal; i++){
        sumaRang += numInicial++; //nem suman desde el numero inicial fins al número final
    }
    sumaRang += numFinal; //sumem el número final
    return sumaRang;
}
// codi de prova
console.log(" === ## 8. Sumar rang de números === ")
console.log(sumarRang(0, 10)) // 55
console.log(sumarRang(12, 14)) // 39
console.log(sumarRang(5, 5)) // 5

// === ## 9. Número de as (lletra "a") === Escriure una funció anomenada `numeroDeAes` que rebi un string i retorni el nombre de vegades que apareix la lletra "a":
// escriu la teva resposta aquí
function numeroDeAes(frase){
    let contadorAes = 0;
    for (let i = 0; i < frase.length; i++){
        if(frase[i].toLocaleLowerCase() == 'a'){
            contadorAes++;
        }
    }
    return "El número de aes és: "+contadorAes;
}
// codi de prova
console.log(" === ## 9. Número de as (lletra 'a') === ")
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0


// === ## 10. Nombre de caràcters === Escriure una funció anomenada `numeroDeCaracters` que rebi un string i un caràcter (un string d'un caràcter). La funció ha de retornar el nombre de vegades que apareix el caràcter a l'string.
//  Escriu 'vocals' de la frase, solament una vegada
// escriu la teva resposta aquí
function numeroDeCaracters(frase, caracter){
    let contadorCaracter = 0;
    for (let i = 0; i < frase.length;i++){
        if(frase[i] == caracter){
            contadorCaracter++;
        }
    }
    return "El text \""+frase+"\" conté "+contadorCaracter+" la lletra \""+caracter+"\"";
}
// codi de prova
console.log(" === ## 10. Nombre de caràcters === ")
console.log(numeroDeCaracters("Hola Món", "o")) // 2
console.log(numeroDeCaracters("MMMMM", "m")) // 0
console.log(numeroDeCaracters("eeee", "e")) // 4

// === ## 11. Sumar array === Escriure una funció anomenada `sumarArray` que rebi un array de números i retorni la suma de tots els elements.
// escriu la teva resposta aquí
function sumarArray(arrayNumeros){
    let sumaResult = 0;
    for (let i = 0; i < arrayNumeros.length; i++){
        sumaResult = sumaResult + arrayNumeros[i];
    }
    return sumaResult;
}

// codi de prova
console.log(" === ## 11. Sumar array === ")
console.log(sumarArray([3, 1, 2])) // 6
console.log(sumarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArray([])) // 0

// === ## 12. Multiplicar array === Escriure una funció anomenada `multiplicarArray` que rebi un arranjament de números i retorni la multiplicació de tots els elements.
// escriu la teva resposta aquí
function multiplicarArray(arrayNumeros){
    let multiplicacioResult = 1; //mult. x1
    for (let i = 0; i < arrayNumeros.length; i++){
        multiplicacioResult = multiplicacioResult * arrayNumeros[i];
    }
    return multiplicacioResult;
}
// codi de prova
console.log(" === ## 12. Multiplicar array === ")
console.log(multiplicarArray([4, 1, 2, 3])) // 24
console.log(multiplicarArray([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArray([])) // 1


// === ## 13. Treure zeros === Escriure una funció anomenada `treureZeros` que rebi un arrany de números i retorni un nou array excloent els zeros (0).
// escriu la teva resposta aquí

// Cas A: Forma sense metodes

function treureZeros(arrayNumeros){
    const arrayTreureZeros = [];
    let contadorNoZeros = 0;
    for (let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] != 0){
            contadorNoZeros++; //contem els números que no són zeros
            arrayTreureZeros[contadorNoZeros - 1] = arrayNumeros[i]; //utilizem el contadorNoZeros per afegir els números que no són zeros al nou array
        }
    }
    return arrayTreureZeros;
}

// Cas B: Forma amb metodes (.push)
function treureZeros(arrayNumeros){
    const arrayTreureZeros = [];
    for (let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] != 0){
          arrayTreureZeros.push(arrayNumeros[i]); //regenera el array, sense zeros
        }
    }
    return arrayTreureZeros;
}

// codi de prova
console.log(" === ## 13. Treure zeros === ")
console.log(treureZeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(treureZeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(treureZeros([0, 0, 0])) // []


// === ## 14. Sumar array entre el rang === Escriure una funció anomenada `sumarArray` que rebi tres arguments: un array de números, la posició inicial i la posició final. La funció ha de retornar la suma de tots els números dins del rang (la posició inicial i la posició final, incloent-les).
// escriu la teva resposta aquí
function sumarArray(arrayNumeros, numInicial, numFinal){
    let sumaResult = 0;
    for (let i = numInicial; i <= numFinal; i++){
        sumaResult = sumaResult + arrayNumeros[i];
    }
    return sumaResult;
}
// codi de prova
console.log(" === ## 14. Sumar array entre el rang === ")
console.log(sumarArray([1, 2, 3], 1, 2)) // 5
console.log(sumarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArray([7, 8, 9], 0, 0)) // 0

 // === ## 15. Transcriure ADN a ARN  === Escriure una funció anomenada `transcriure` que rebi un string (una cadena d'ADN) i retorni un altre string (el vostre complement ARN).

// Els complements són els següents:

// * G -> C
// * C -> G
// * T -> A
// * A -> U

// escriu la teva funció aquí
function transcriure(cadenaADN){
    let cadenaARN = "";
    for (let i = 0; i < cadenaADN.length; i++){
        switch (cadenaADN[i]) {
            case "G":
                cadenaARN += "C";
                break;
            case "C":
                cadenaARN += "G";
                break;
            case "T":
                cadenaARN += "A";
                break;
            case "A":
                cadenaARN += "U";
                break;
        }
    }
    return cadenaARN;
}

// codi de prova
console.log(" === ## 15. Transcriure ADN a ARN === ")
console.log(transcriure("ACGT")) // "UGCA"
console.log(transcriure("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

// === ## 16. Capitalitzar paraula === Escriure una funció anomenada `capitalitzar` que rebi un string i capitalitzi la primera lletra:
// escriu la teva funció aquí
function capitalitzarPrimeraLletra(cadena){
    if(cadena.length !=0){ //Si la cadena no esta res escrit
        return cadena[0].toUpperCase() + cadena.slice(1);
    }
    return "\"\"";
}
// codi de prova
console.log(" === ## 16. Capitalitzar paraula === ")
console.log(capitalitzarPrimeraLletra("pedro")) // "Pedro"
console.log(capitalitzarPrimeraLletra("hola món")) // "Hola món"
console.log(capitalitzarPrimeraLletra("")) // ""

// === ## 17. Capitalitzar cada paraula ===  Escriure una funció anomenada `capitalitzar` que rebi un string i capitalitzi la primera lletra **de cada paraula**:
// escriu la teva funció aquí
function capitalitzar(cadena){
    let cadenaSolucio="";
    for(i = 0; i<cadena.length; i++){
        if(i==0 || cadena[i - 1] == " "){ //IF Si el es la primera posició (0) o si el caracter anteior es un espai, 
            cadenaSolucio+=cadena[i].toUpperCase(); //es fa mayuscula i es suma al nou array, 
        }else{
            cadenaSolucio+=cadena[i]; //ELSE la resta de les lletres de la paraula es sumen
        }
    }
    return cadenaSolucio;

    // = METODE (split) =

    // let llista = cadena.split(" ") //Fem split per els espais
    // for(element of llista){ //PER CADA ELEMENT LA PRIMERA LLETRA ES MAYUCULA + LA RESTA DE LA PARAULA + ESPAI
    //     cadenaSolucio += element[0].toUpperCase()+element.slice(1)+ " ";
    // }
    // return cadenaSolucio;
}
// codi de prova
console.log(" === ## 17. Capitalitzar cada paraula === ")
console.log(capitalitzar("hola món")) // "Hola Món"
console.log(capitalitzar("make it real")) // "Make It Real"
console.log(capitalitzar("")) // ""

// === ## 18. Trobar el número màxim === Escriure una funció anomenada `max` que rebi un array de números i retorni el nombre màxim:
// **Nota:** Intentar-ho fer sense el mètode `Math.max` de JavaScript.
// escriu la teva funció aquí
function max(arrayNumeros){
    let numMax=0;
    for (let i = 0; i < arrayNumeros.length; i++) {        
        if (numMax < arrayNumeros[i]){
            numMax = arrayNumeros[i];
        }
    }
    return numMax;
}
// codi de prova
console.log(" === ## 18. Trobar el número màxim === ")
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

// === ## 19. Trobar el número mínim === Escriure una funció anomenada `min` que rebi un array de números i retorni el nombre mínim:
// **Nota:** Intentar-ho fer sense el mètode `Math.min` de JavaScript.
// escriu la teva funció aquí
function min(arrayNumeros){

    let numMin = arrayNumeros[0]; //El minim comença amb el primer numero del array/llista
    for (let i = 0; i < arrayNumeros.length; i++) {        
        if (numMin > arrayNumeros[i]){
            numMin = arrayNumeros[i];
        }
    }
    return numMin;
}
// codi de prova
console.log(" === ## 19. Trobar el número mínim === ")
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2


// === ## 20. Generar contrasenya === Escriure una funció anomenada `password` que rebi un string i retorni un nou string realitzant els canvis següents:

// * Les majúscules es reemplacen per minúscules.
// * S'eliminen els espais en blanc.
// * Reemplaça el caràcter “a” per “4”.
// * Reemplaça el caràcter “e” per “3”.
// * Reemplaça el caràcter “i” per “1”.
// * Reemplaça el carater “o” per “0”.
// escriu la teva funció aquí
function password(contrasenyaAntiga) {
    let contrasenyaNova = "";
    for (let i = 0; i < contrasenyaAntiga.length; i++){
        switch (contrasenyaAntiga[i]) { //Switch de cambiar les lletres per numeros
            case "a":
                contrasenyaNova+="4";
                break;
            case "e":
                contrasenyaNova += "3";
                break;
            case "i":
                contrasenyaNova += "1";
                break;
            case "o":
                contrasenyaNova += "0";
                break;
            case " ": //Si es espai el salta
            break;
            default:// si no es cap dels casos, posa la [i] lletra del string original al nou
                contrasenyaNova += contrasenyaAntiga[i]; 
            break;
        }
    }
    return contrasenyaNova;
}
// codi de prova
console.log(" === ## 20. Generar contrasenya === ")
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

// === ## 21. Trobar números parells en un array === Escriure una funció anomenada `parells` que rebi un array de números i retorni un nou array amb els números parells únicament.
// escriu la teva funció aquí
function parells(arrayNumeros) {
    let arrayParells =[];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if(arrayNumeros[i] % 2 == 0){//IF són numeros pars, insertem els numeros del array antic(array Numeros) al nou(array Parells)
            arrayParells.push(arrayNumeros[i]);
        }
    }
    return arrayParells;
}
// codi de prova
console.log(" === ## 21. Trobar números parells en un array === ")
console.log(parells([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(parells([])) // []

// === ## 22. Trobeu posicions de números parells === Escriviu una funció anomenada `posicions` que rebi un array de números i retorneu un nou array **a les posicions** on es troben números parells.
// escriu la teva funció aquí
function posicions(arrayNumeros) {
    let posicionsParells =[];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if(arrayNumeros[i] % 2 == 0){//IF són numeros pars
            posicionsParells.push(i); //agafem la posició
        }
    }
    return posicionsParells;
}


// codi de prova
console.log(" === ## 22. Trobeu posicions de números parells === ")
console.log(posicions([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posicions([])) // []


// === ## 23. Duplicar elements d'un array === Escriu una funció anomenada `duplicar` que rep un array de números i retorna un nou array on cada número estigui multiplicat per dos (2).
// escriu la teva funció aquí
function duplicar(arrayNumeros) {
    let arrayX2 =[];
    for (let i = 0; i < arrayNumeros.length; i++) {
            arrayX2[i] = arrayNumeros[i] * 2
        }
        return arrayX2;
    }
// codi de prova
console.log(" === ## 23. Duplicar elements d'un array === ")
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []


// === ## 24. Trobeu paraules que comencin per "a" === Escriu una funció anomenada `comencenPerA` que rebi un array d'strings i retorna un nou array amb totes les paraules que comencin per "a" (majúscula o minúscula).
// escriu la teva funció aquí
function comencenPerA(arrayParaules) {
    let arrayAmbA = []
    for (paraula of arrayParaules) {
        if(paraula[0].toLocaleLowerCase() == "a"){
            arrayAmbA.push(paraula);
        }
    }
    return arrayAmbA;
}

//Metode de for amb index

// function comencenPerA(arrayParaules) {
//     let arrayAmbA = []
//     for (i=0; i< arrayParaules.length; i++) {
//         if(arrayParaules[i][0].toLocaleLowerCase() == "a"){
//             arrayAmbA.push(arrayParaules[i]);
//         }
//     }
//     return arrayAmbA;
// }
// codi de prova

console.log("=== ## 24. Trobeu paraules que comencin per 'a' === ")
console.log(comencenPerA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(comencenPerA(["beta", "delta", "gama"])) // []
console.log(comencenPerA([])) // []


// === ## 25. Trobeu paraules que acabin en "s" === Escriu una funció anomenada `acabenAmbS` que rep un array d'strings i retorna un nou array amb totes les paraules que acaben amb "s" (majúscula o minúscula).
// escriu la teva funció aquí
function acabenAmbS(arrayParaules) {
    let arrayAmbS = []
    for (paraula of arrayParaules) {
        if(paraula[paraula.length -1].toLocaleLowerCase() == "s"){
            arrayAmbS.push(paraula);
        }
    }
    return arrayAmbS;
}
// codi de prova
console.log("=== ## 25. Trobeu paraules que acabin en 's' === ")
console.log(acabenAmbS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(acabenAmbS(["beta", "delta", "gama"])) // []
console.log(acabenAmbS([])) // []


// === ## 26. Imprimir una matriu === Escriu una funció anomenada `imprimirMatriu` que rep una matriu (un array d'arrays) i imprimeixi tots els elements de l'array.
// escriu la teva funció aquí
function imprimirMatriu(matriu) {
    for (let i = 0; i < matriu.length; i++) {
        
    }
}
// codi de prova
console.log(" === ## 26. Imprimir una matriu === ")
console.log(imprimirMatriu([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// === ## 31. Distància entre dos strings === Escriviu una funció de anomenada `distància` que rebi dos strings i retorni el nombre de caràcters diferents (comparant la posició per posició).
// **Nota:** Podeu assumir que els strings sempre tenen la mateixa longitud. En canvi, si voleu afegir més dificultat podeu pensar cómo solucionar-ho si una cadena és més llarga que l'atra (la diferència entre les longituds s'afegiria al resultat).
// escriu la teva funció aquí
function distancia(string1, string2) {
    let diferent=0;
    let diferenciaLLarg=0;
    
    // Quants dels caracters son diferents entre els strings
    for (let i = 0; i < string2.length; i++) {
        if (string1[i] != string2[i]) {
            diferent++   
        }
    }

    // Diferencia del llarg sumat al final
    if(string1.length < string2.length){
       diferenciaLLarg = string2.length - string1.length
    }else{
        diferenciaLLarg = string1.length - string2.length
    }
    return diferent + diferenciaLLarg;
}
// codi de prova
console.log(" === ## 31. Distància entre dos strings === ")
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3