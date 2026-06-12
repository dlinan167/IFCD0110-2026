// # Exercicis UOC bàsics
// 1. Escriviu un programa d'una sola línia que faci que aparegui a la pantalla un alerta que digui “Hello World”.
// 2. Escriviu un programa d'una sola línia que escrigui a la pantalla un text que digui “Hello World” (document.write).
// 3. Escriviu un programa d'una sola línia que escrigui a la pantalla el resultat de sumar 3 + 5.
// 4. Escriviu un programa de dues línies que demani el nom de l'usuari amb un prompt i escrigui un text que digui “Hola nomUsuari”.
// 5. Escriviu un programa de tres línies que demani un número, demani un altre número i escrigui el resultat de resum aquests dos números.
// 6. Escriviu un programa que demani dos números i escrigui a la pantalla quin és el major.
// 7. Escriviu un programa que demani 3 números i escrigui a la pantalla el major dels tres.
// 8. Escriviu un programa que demani un número i digui si és divisible per 2.
// 9. Escriviu un programa que demani una frase i escrigui quantes vegades apareix la lletra a.
// 10. Escriviu un programa que demani una frase i escrigui les vocals que apareixen.
// 11. Escriviu un programa que demani una frase i escrigui quantes lletres són vocals.
// 12. Escriviu un programa que demani una frase i escrigui quantes vegades apareixen cada una de les vocals.
// 13. Escriviu un programa que demani un número i ens digui si és divisible per 2, 3, 5 o 7 (sólo cal comprobar si ho és per un dels quatre).
// 14. Afegir a l'exercici anterior que ens digui quin dels quatre és divisible (s'han de dir tots pels que és divisible).
// 15. Escriviu un programa que mostri per pantalla els divisors d'un número donat.
// 16 Escriviu un programa que mostri per pantalla els divisors comuns de dos números donats.
// 17. Escriure un programa que ens digui si un número donat és primer (no és divisible per ningun altre número que no sigui ell mateix o la unitat).


// === ex1.- ===
// alert("Hello World")

// === ex2.- ===
// document.write("Hello World")
document.getElementById("ex2").innerHTML="Hello World";

// === ex3.- ===
let ex3Suma = 3+5
document.getElementById("ex3").innerHTML= "<p>/- El resultat de 3 + 5 es : "+ex3Suma+"</p>";

// === ex4.- ===
    let ex4NomUsuari=prompt("Quin es el teu nom d'usuari?");
    document.getElementById("ex4").innerHTML= "<p>/- Hola "+ex4NomUsuari+"</p>";

// === ex5.- ===
    let ex5Num1=parseInt(prompt("(ex5) num1 per sumar"));
    let ex5Num2=parseInt(prompt("(ex5) num2 per sumar"));
    document.getElementById("ex5").innerHTML= "<p>/- suma: "+(ex5Num1 + ex5Num2)+"</p>";

// === ex6.- ===
    let ex6Num1=parseInt(prompt("(ex6) COMPARACIÓ num1"));
    let ex6Num2=parseInt(prompt("(ex6) COMPARACIÓ num2"));

    if (ex6Num1 > ex6Num2) {
        document.getElementById("ex6").innerHTML= "<p>/- (ex6) El major es: "+ex6Num1+" (primer número) </p>";
    } else {
        document.getElementById("ex6").innerHTML=  "<p>/- (ex6) El major es: "+ex6Num2+" (segón número) </p>";
    }

// === ex7.- ===
    let ex7Num1=parseInt(prompt("(ex7) COMPARACIÓ num1"));
    let ex7Num2=parseInt(prompt("(ex7) COMPARACIÓ num2"));
    let ex7Num3=parseInt(prompt("(ex7) COMPARACIÓ num3"));

        if (ex7Num1 > ex7Num2 && ex7Num3) {
            document.getElementById("ex7").innerHTML= "<p>/- (ex7) El major es: "+ex7Num1+" (primer número) </p>";
        }
        if (ex7Num2 > ex7Num1 && ex7Num3) {
            document.getElementById("ex7").innerHTML= "<p>/- (ex7) El major es: "+ex7Num2+" (segón número)</p>";
        }
        if (ex7Num3 > ex7Num1 && ex7Num2) {
            document.getElementById("ex7").innerHTML= "<p>/- (ex7) El major es: "+ex7Num3+" (tercer número)</p>";
        } 
        else{
            document.getElementById("ex7").innerHTML= "<p>/- (ex7) El major es: invalid</p>";
        } 


// === ex8.- ===
 let ex8Num=prompt("(ex8) Es divisible per dos?");

    divisible = ex8Num % 2;

 if (divisible == 0) {
        document.getElementById("ex8").innerHTML= "<p>/- (ex8) "+ex8Num+" Si és divisible per 2</p>";
}
else{
        document.getElementById("ex8").innerHTML= "<p>/- (ex8) "+ex8Num+" No és divisible per 2</p>";
}

// === ex9.- ===
//  Contador de caracters 'a'
let fraseA=prompt("(ex9) Escriu un frase aqui (a):");

var contadorCaracterA = 0;
for (var i = 0; i < fraseA.length; i++){
    
    if (fraseA[i] == 'a'){
        contadorCaracterA++;
    }
}
document.getElementById("ex9").innerHTML= "<p>/- (ex9) Numero de caràcters 'a': "+contadorCaracterA+" En la frase (\""+fraseA+"\")</p>";


// === ex10.- ===
//  Escriu 'vocals' de la frase, solament una vegada
let fraseEscriuVocals=prompt("(ex10) Escriu un frase aqui (ex: Escriu vocals):");

let vocals = "";
let teA = false;
let teE = false;
let teI = false;
let teO = false;
let teU = false;
for (var i = 0; i < fraseEscriuVocals.length; i++){

    if (fraseEscriuVocals[i] == 'a' && teA == false){
        vocals += "a";
        teA = true;
    }
    if (fraseEscriuVocals[i] == 'e' && teE == false){
        vocals += "e";
        teE = true;
    }
    if (fraseEscriuVocals[i] == 'i' && teI == false){
        vocals += "i";
        teI = true;
    }
    if (fraseEscriuVocals[i] == 'o' && teO == false){
        vocals += "o";
        teO = true;
    }
    if (fraseEscriuVocals[i] == 'u' && teU == false){
        vocals += "u";
        teU = true;
    }
}
document.getElementById("ex10").innerHTML= "<p>/- (ex10) caràcters 'vocals': <b>"+vocals+"</b> Dins la frase (\""+fraseEscriuVocals+"\")</p>";

// === ex11.- ===
//  Contador de caracters 'vocals'
let fraseVocals=prompt("(ex11) Escriu un frase aqui (vocals):");

var contadorCaracterVocal = 0;
for (var i = 0; i < fraseVocals.length; i++){
    
    if (fraseVocals[i] == 'a' || fraseVocals[i] == 'e' || fraseVocals[i] == 'i' || fraseVocals[i] == 'o' || fraseVocals[i] == 'u'){
        contadorCaracterVocal++;
    }
}
document.getElementById("ex11").innerHTML= "<p>/- (ex11) Numero de caràcters 'vocals': <b>"+contadorCaracterVocal+"</b> En la frase (\""+fraseVocals+"\")</p>";


// === ex12.- ===
//  Contador DE CADA caracter 'vocal'
let fraseNumVocals=prompt("(ex12) Escriu un frase aqui (numero de cada vocal):");
let contadorVocalA=0;
let contadorVocalE=0;
let contadorVocalI=0;
let contadorVocalO=0;
let contadorVocalU=0;

for (var i = 0; i < fraseNumVocals.length; i++){
    
    if (fraseNumVocals[i] == 'a'){
        contadorVocalA++;
    }
    if (fraseNumVocals[i] == 'e'){
        contadorVocalE++;
    }
    if (fraseNumVocals[i] == 'i'){
        contadorVocalI++;
    }
    if (fraseNumVocals[i] == 'o'){
        contadorVocalO++;
    }
    if (fraseNumVocals[i] == 'u'){
        contadorVocalU++;
    }
}
document.getElementById("ex12").innerHTML= 
"<p>/- (ex12) Numero de caràcters: 'a': "+contadorVocalA+ "</p>"+

"<p>Numero de caràcters: 'e': "+contadorVocalE+ "</p>"+
"<p>Numero de caràcters: 'i': "+contadorVocalI+ "</p>"+
"<p>Numero de caràcters: 'o': "+contadorVocalO+ "</p>"+
"<p>Numero de caràcters: 'u': "+contadorVocalU+ "</p>"+
"<p> En la frase (\""+fraseNumVocals+"\")</p>";

