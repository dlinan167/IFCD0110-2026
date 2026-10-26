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

// === ex4.- ===  Escriviu un programa de dues línies que demani el nom de l'usuari amb un prompt i escrigui un text que digui “Hola nomUsuari”.
    let ex4NomUsuari=prompt("Quin es el teu nom d'usuari?");
    document.getElementById("ex4").innerHTML= "<p>/- Hola "+ex4NomUsuari+"</p>";

// === ex5.- === Escriviu un programa de tres línies que demani un número, demani un altre número i escrigui el resultat de resum aquests dos números.
    let ex5Num1=parseInt(prompt("(ex5) num1 per sumar"));
    let ex5Num2=parseInt(prompt("(ex5) num2 per sumar"));
    document.getElementById("ex5").innerHTML= "<p>/- suma: "+(ex5Num1 + ex5Num2)+"</p>";

// === ex6.- === Escriviu un programa que demani dos números i escrigui a la pantalla quin és el major.
    let ex6Num1=parseInt(prompt("(ex6) COMPARACIÓ num1"));
    let ex6Num2=parseInt(prompt("(ex6) COMPARACIÓ num2"));

    if (ex6Num1 > ex6Num2) {
        document.getElementById("ex6").innerHTML= "<p>/- (ex6) El major es: "+ex6Num1+" (primer número) </p>";
    } else {
        document.getElementById("ex6").innerHTML=  "<p>/- (ex6) El major es: "+ex6Num2+" (segón número) </p>";
    }

// === ex7.- === Escriviu un programa que demani 3 números i escrigui a la pantalla el major dels tres.
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


// === ex8.- === Escriviu un programa que demani un número i digui si és divisible per 2.
 let ex8Num=parseInt(prompt("(ex8) Es divisible per dos?"));

    divisible = ex8Num % 2;

 if (divisible == 0) {
        document.getElementById("ex8").innerHTML= "<p>/- (ex8) "+ex8Num+" Si és divisible per 2</p>";
}
else{
        document.getElementById("ex8").innerHTML= "<p>/- (ex8) "+ex8Num+" No és divisible per 2</p>";
}

// === ex9.- === Escriviu un programa que demani una frase i escrigui quantes vegades apareix la lletra a.
//  Contador de caracters 'a'
let fraseA=prompt("(ex9) Escriu un frase aqui (a):");

var contadorCaracterA = 0;
for (var i = 0; i < fraseA.length; i++){
    
    if (fraseA[i] == 'a'){
        contadorCaracterA++;
    }
}
document.getElementById("ex9").innerHTML= "<p>/- (ex9) Numero de caràcters 'a': "+contadorCaracterA+" En la frase (\""+fraseA+"\")</p>";


// === ex10.- === Escriviu un programa que demani una frase i escrigui les vocals que apareixen.
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