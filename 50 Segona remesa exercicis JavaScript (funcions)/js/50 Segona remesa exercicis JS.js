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
    if(pes/altura**2 >= 65 / 1.8**2 && pes/altura**2 < 72 / 1.6**2){
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
function imprimirArray(){

}
// codi de prova
console.log("=== ## 4. Imprimir un array === ")
console.log(imprimirArray(1, "Hola", 2, "Món"))
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
    if (numLikes.length >= 4){
        numLikes +="K"
    }
    if (numLikes.length >= 8){
        numLikes=
        numLikes+= "M"
    }
    return
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

// codi de prova
console.log(" === ## 6. FizzBuzz === ")
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

// === ## 7. Comptar rang de números === Escriure una funció anomenada `comptarRang` que rebi dos números i retorni quants n'hi ha entre ells (excloent-los):
// **Nota:** Utilitza un cicle a la teva solució. Pots assumir que el primer número serà menor que el segon.
// escriu la teva resposta aquí

// codi de prova
console.log(" === ## 7. Comptar rang de números === ")
console.log(comptarRang(1, 9)) // 7
console.log(comptarRang(1332, 8743)) // 7410
console.log(comptarRang(5, 6)) // 0


// === ## 8. Sumar rang de números === Escriure una funció anomenada `sumarRang` que rebi dos arguments: nombre inicial i nombre final. La funció ha de retornar la suma dels nombres en aquest rang (incloent-los).
// **Nota:** pots assumir que el nombre inicial serà menor o igual que el nombre final.

// escriu la teva resposta aquí

// codi de prova
console.log(" === ## 8. Sumar rang de números === ")
console.log(sumarRang(0, 10)) // 55
console.log(sumarRang(12, 14)) // 39
console.log(sumarRang(5, 5)) // 5

// === ## 9. Número de as (lletra "a") === Escriure una funció anomenada `numeroDeAes` que rebi un string i retorni el nombre de vegades que apareix la lletra "a":
// escriu la teva resposta aquí

// codi de prova
console.log(" === ## 9. Número de as (lletra 'a') === ")
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0


// === ## 10. Nombre de caràcters === Escriure una funció anomenada `numeroDeCaracters` que rebi un string i un caràcter (un string d'un caràcter). La funció ha de retornar el nombre de vegades que apareix el caràcter a l'string.
//  Escriu 'vocals' de la frase, solament una vegada
// escriu la teva resposta aquí

// codi de prova
console.log(" === ## 10. Nombre de caràcters === ")
console.log(numeroDeCaracters("Hola Món", "o")) // 2
console.log(numeroDeCaracters("MMMMM", "m")) // 0
console.log(numeroDeCaracters("eeee", e)) // 4

// === ex11.- === Escriviu un programa que demani una frase i escrigui quantes lletres són vocals.
//  Contador de caracters 'vocals'
let fraseVocals=prompt("(ex11) Escriu un frase aqui (vocals):");

var contadorCaracterVocal = 0;
for (var i = 0; i < fraseVocals.length; i++){

    if (fraseVocals[i].toLocaleLowerCase() == 'a' || fraseVocals[i].toLocaleLowerCase() == 'e' || fraseVocals[i].toLocaleLowerCase() == 'i' || fraseVocals[i].toLocaleLowerCase() == 'o' || fraseVocals[i].toLocaleLowerCase() == 'u'){
        contadorCaracterVocal++;
    }
}
document.getElementById("ex11").innerHTML= "<p>/- (ex11) Numero de caràcters 'vocals': <b>"+contadorCaracterVocal+"</b> En la frase (\""+fraseVocals+"\")</p>";


// === ex12.- === Escriviu un programa que demani una frase i escrigui quantes vegades apareixen cada una de les vocals.
//  Contador DE CADA caracter 'vocal'
let fraseNumVocals=prompt("(ex12) Escriu un frase aqui (numero de cada vocal):");
let contadorVocalA=0;
let contadorVocalE=0;
let contadorVocalI=0;
let contadorVocalO=0;
let contadorVocalU=0;

for (var i = 0; i < fraseNumVocals.length; i++){
    
    if (fraseNumVocals[i].toLocaleLowerCase() == 'a'){
        contadorVocalA++;
    }
    if (fraseNumVocals[i].toLocaleLowerCase() == 'e'){
        contadorVocalE++;
    }
    if (fraseNumVocals[i].toLocaleLowerCase() == 'i'){
        contadorVocalI++;
    }
    if (fraseNumVocals[i].toLocaleLowerCase() == 'o'){
        contadorVocalO++;
    }
    if (fraseNumVocals[i].toLocaleLowerCase() == 'u'){
        contadorVocalU++;
    }
}
document.getElementById("ex12").innerHTML= 
"<p>/- (ex12) </p>"+
"<p>Numero de caràcters: 'a': "+contadorVocalA+ "</p>"+

"<p>Numero de caràcters: 'e': "+contadorVocalE+ "</p>"+
"<p>Numero de caràcters: 'i': "+contadorVocalI+ "</p>"+
"<p>Numero de caràcters: 'o': "+contadorVocalO+ "</p>"+
"<p>Numero de caràcters: 'u': "+contadorVocalU+ "</p>"+
"<p> En la frase (\""+fraseNumVocals+"\")</p>";


// === ex13.- === Escriviu un programa que demani un número i ens digui si és divisible per 2, 3, 5 o 7 (sólo cal comprobar si ho és per un dels quatre).
 let ex13Num=parseInt(prompt("(ex13) Es divisible per per un dels quatre?: 2, 3, 5, 7"));

 if(ex13Num % 2 == 0 || ex13Num % 3 == 0 || ex13Num % 2 == 5 || ex13Num % 7 == 0){
     
     document.getElementById("ex13").innerHTML= "<p>/- (ex13) "+ex13Num+" Si és divisible per un dels quatre: 2, 3, 5, 7</p>";
 }
 else{
 document.getElementById("ex13").innerHTML= "<p>/- (ex13) "+ex13Num+" No és divisible per un dels quatre: 2, 3, 5, 7</p>";
}


// === ex14.- === Afegir a l'exercici anterior que ens digui quin dels quatre és divisible (s'han de dir tots pels que és divisible).
 let ex14Num=parseInt(prompt("(ex14) Es divisible per per un dels quatre?: 2, 3, 5, 7"));

 let ex14Resposta="El número és: "+ex14Num;

 if(ex14Num % 2 == 0){ ex14Resposta+="<br> És divisible per 2.";}
 if(ex14Num % 3 == 0){ex14Resposta+="<br> És divisible per 3.";}
 if(ex14Num % 5 == 0){ex14Resposta+="<br> És divisible per 5.";}
 if(ex14Num % 7 == 0){ex14Resposta+="<br> És divisible per 7.";}

 document.getElementById("ex14").innerHTML= ex14Resposta;

 // === ex15.- === Escriviu un programa que mostri per pantalla els divisors d'un número donat.
  let ex15Num=parseInt(prompt("(ex15) Escriu un número i et diré els seus divisors"));
  let ex15Divisors="";

  for(i=1; i<=ex15Num; i++){
    if(ex15Num % i == 0){
        ex15Divisors += i+"<br>"
    }
  }
 document.getElementById("ex15").innerHTML= "Els divisors del número"+ex15Num+ "són: <br>" +ex15Divisors;

  // === ex16.- === Escriviu un programa que mostri per pantalla els divisors comuns de dos números donats.
  let ex16Num1=parseInt(prompt("(ex16) Escriu un número (1) i et diré els divisors comuns"));
  let ex16Num2=parseInt(prompt("(ex16) Escriu un número (2) i et diré els divisors comuns"));

  let ex16DivisorsComuns="";
  let numeroMenor=0;
    // Busquem el número menor perquè aquest serà el potencial major comú
  if (ex16Num1 > ex16Num2){
    numeroMenor=ex16Num2;
  }else{
    numeroMenor=ex16Num1
  }
  
  for(i=1; i<=numeroMenor; i++){
    if(ex16Num1 % i == 0 && ex16Num2 % i == 0){
        ex16DivisorsComuns += i+"<br>";
    }
  }
  document.getElementById("ex16").innerHTML="Els divisors comuns entre el "+ex16Num1+" i el " + ex16Num2 +" són: <br>"+ ex16DivisorsComuns;

// === ex17.- ===  Escriure un programa que ens digui si un número donat és primer (no és divisible per ningun altre número que no sigui ell mateix o la unitat).
  
let ex17Num=parseInt(prompt("(ex17) Escriu un número i et diré si és primer (nomes divisible per ell mateix i per 1)"));
let esPrimer=true;
for (let i = 2; i < ex17Num; i++) {
    if (ex17Num % i == 0) {
        esPrimer=false; // No es primer si es divisible entre altres numeros que no sigui el mateix o 1
    }
}

if(esPrimer){ //if(esPrimer == true){
document.getElementById("ex17").innerHTML="El número "+ex17Num+" Si es primer";
}else {
    document.getElementById("ex17").innerHTML="El número "+ex17Num+" NO es primer";
}