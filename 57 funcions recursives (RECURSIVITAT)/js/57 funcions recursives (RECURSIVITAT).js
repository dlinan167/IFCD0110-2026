// 57 funcions recursives (RECURSIVITAT)

// UNA FUNCIÓ QUE ES CRIDA A SI MATEIXA (EN BUCLE) HASTA QUE NO ES NECESSARI



// La funció es repeteix així mateixa (fins que el numero arriva/li pasem 'numTimer' es fa menys que 0)
function cuentaAtras(numTimer)  {

    if (numTimer < 0) {
        return;
    }

    console.log(numTimer)
    cuentaAtras(numTimer - 1); // <= Es repeteix la funció
}
console.log(cuentaAtras(10));


// Factorial d'un numero
let reultat=1;
function factorial(numero) {
    if (numero < 1){ //Trenca el bucle (la recursivitat)
        return;
    }
    reultat*=numero;

    console.log(reultat)
    factorial(numero - 1);
}
console.log(factorial(4)); //Resultat: 24

// Funció on els parametres tenen un valor per defecte si NO s'indica explicitament (En aquest cas 'num2=10')
function suma(num1, num2=10) {
    return num1 + num2;
}
console.log(suma(5,2));
console.log(suma(4));

// 
function alumne(nom, cognom, ciutat="Vilafranca") {
    return "L'alumne es "+nom+", de cognom"+ ", i és resident a: "+ciutat;
}
console.log(alumne("Joan", "Petit", "Badalona"));
console.log(alumne("Pep", "Jiménez"));