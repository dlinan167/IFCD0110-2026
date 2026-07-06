// 62 RegExp (Exercicis)


// ## 1. Validació de correus electrònics
// ### Enunciat: 
// Escriu una funció esEmailValid(email) que retorni true si l'email és vàlid i false altrament.
// > Pista:
// Ha de contenir **@**, i després un **.**

// esEmailValid()
document.getElementById("btn1").addEventListener("click", esEmailValid);

function esEmailValid() {
    
    // Referències als objectes
    const text = document.getElementById("txt1").value;
    const solucio = document.getElementById("sol1");
    // 
    let patro = /\w+@\w+\.\w{2,5}/g;
    let resultat = text.match(patro);

    if (resultat){
        solucio.innerText= "Email SI es compatible"
    }else{
        solucio.innerText= "Email NO es compatible"
    }
}

// ### Proves
// console.log(esEmailValid("test@example.com")); // true
// console.log(esEmailValid("test.example.com")); // false


// ## 2. Extracció de números de telèfon
// ### Enunciat: 
// Escriu una funció extreureNombresTelefon(text) que retorni una llista de números de telèfon trobats en el text.
// > Pista:
// Ha de contenir **3 números entre parèntesis**, després **3 números**, un **-** i **4 números** més

document.getElementById("btn2").addEventListener("click", extreureNombresTelefon);

function extreureNombresTelefon(text) {
 
    text = document.getElementById("txt2").value;
  
    const solucio = document.getElementById("sol2");
    
    const patro = /\(\d{3}\) \d{3}-\d{4}/g;
    const resultat = text.match(patro);

    if (resultat){
        solucio.innerText= "Numeros tel: => "+resultat
    }else{
        solucio.innerText= "Error: No hi ha un numero de telefon aqui!"
    }
    return resultat;
}

// ### Proves
console.log(extreureNombresTelefon("Call me at (123) 456-7890 or (987) 654-3210")); // ["(123) 456-7890", "(987) 654-3210"]

// ## 3. Validació de codis postals
// ### Enunciat: 
// Escriu una funció esCpValid(zip) que retorni true si el codi postal és vàlid i false altrament.
// > Pista:
// Ha de contenir 5 números

// ### Proves

document.getElementById("btn3").addEventListener("click", esCpValid);

function esCpValid(text) {
 
    text = document.getElementById("txt3").value;
    const solucio = document.getElementById("sol3");
    
    const patro = /^\d{5}-\d{4}$|^\d{5}$/ ; // | OR
    const resultat = text.match(patro);

    if (resultat){
        solucio.innerText= "codi postal OK: => "+resultat;
        return true;
    }else{
        solucio.innerText= "Error: No és un codi postal!";
        return false;
    }
}
// ### Proves
// console.log(esCpValid("12345")); // true
// console.log(esCpValid("12345-6789")); // true
// console.log(esCpValid("123456")); // false


// ## 4. Extracció de dominis de correu electrònic
// ### Enunciat: 
// Escriu una funció extraureDominiEmail(email) que retorni el domini de l'email.
// > Pista:
// S'ha de treure tot el què hi hagi després de la **@**
document.getElementById("btn4").addEventListener("click", extraureDominiEmail);
function extraureDominiEmail(text) {
    
    text = document.getElementById("txt4").value;
    const solucio = document.getElementById("sol4");
    
    // Mirar Email
    let patro = /\w+@\w+\.\w{2,5}/g;
    const resultat = text.match(patro);

    // Mirar Domini
    let patroDomini = /@\w+\.\w{2,5}/g;
    let domini = text.match(patroDomini);
    
    // domini.substring(1,0);

    if (resultat){
        solucio.innerText= "El domini és OK: => "+domini; //Retrnar domini en lloc d'Email
    }else{
        solucio.innerText= "Error: Email NO valid!";
    }
    return domini;
}

// ### Proves
console.log(extraureDominiEmail("test@example.com")); // "example.com"


// ## 5. Validació de números de targeta de crèdit
// ### Enunciat: 
// Escriu una funció esTargetaCreditValida(number) que retorni true si el número de targeta és vàlid i false altrament.
// > Pista:
// Ha de contenir **16 números**, **tots junts**, o **separats per espais en grups de 4**
document.getElementById("btn5").addEventListener("click", esTargetaCreditValida);
function esTargetaCreditValida(text) {
    
    text = document.getElementById("txt5").value;
    const solucio = document.getElementById("sol5");

    // Mirar Patro de tarjeta
    let patro = /^\d{4} \d{4} \d{4} \d{4}$|^\d{16}$/g;
    const resultat = text.match(patro);

    if (resultat){
        solucio.innerText= "La targeta és OK: => "+resultat;
        return true;
    }else{
        solucio.innerText= "Error: targeta NO valida!";
        return false;
    }
}

// ### Proves
// console.log(esTargetaCreditValida("1234 5678 9012 3456")); // true
// console.log(esTargetaCreditValida("1234567890123456")); // true
// console.log(esTargetaCreditValida("1234-5678-9012-3456")); // false



// ## 6. Extracció de hashtags
// ### Enunciat: 
// Escriu una funció extraureHashtags(text) que retorni una llista de hashtags trobats en el text.
// > Pista:
// Extraure el **#** i la **paraula adjunta**
document.getElementById("btn6").addEventListener("click", extraureHashtags);
function extraureHashtags(text) {
    
    text = document.getElementById("txt6").value;
    const solucio = document.getElementById("sol6");

    // Mirar Patro de tarjeta
    let patro = /#\w+/g;
    const resultat = text.match(patro);

    if (resultat){
        solucio.innerText= "Els Hashtags són OK: => "+resultat;
    }else{
        solucio.innerText= "Error: NO valid!";
    }
    return resultat;
}

// ### Proves
console.log(extraureHashtags("Loving the new #JavaScript features in #ECMAScript2021!")); // ["#JavaScript", "#ECMAScript2021"]


// ## 7. Validació de contrasenyes
// ### Enunciat: 
// Escriu una funció esPasswordValida(password) que retorni true si la contrasenya és vàlida i false altrament.
// > Pista:
// Ha de contenir **lletres**, **números**, i **caràcters especials**
document.getElementById("btn7").addEventListener("click", esPasswordValida);
function esPasswordValida(text) {
    
    text = document.getElementById("txt7").value;
    const solucio = document.getElementById("sol7");

    // Mirar Patro de tarjeta
    let patro = /(\w+)(\d+)([^A-Za-z0-9]+)/ig;
    const resultat = text.match(patro);

    if (resultat){
        solucio.innerText= "El password OK: => "+resultat;
    }else{
        solucio.innerText= "Error: password NO valid!";
    }
    return resultat;
}
// ### Proves
// console.log(esPasswordValida("Password1!")); // true
// console.log(esPasswordValida("password1")); // false