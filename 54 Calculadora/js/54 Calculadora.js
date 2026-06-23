// CALCULADORA


let numerosMostrats = "";


// Afegeix cada numero clickat
function afegir(numero) {
    esOperador=false;
    switch (numero) {
        case "+":
            esOperador=true
            break;
        case "-":
            esOperador=true
            break;
        case "*":
            esOperador=true
            break;
        case "/":
            esOperador=true
            break;
        case "%":
            esOperador=true
            break;
        default:
            break;
    }
    // Impedir dos operadors seguits
    if (numerosMostrats.length > 0  && esOperador==true && (numerosMostrats.slice(-1) == "+" || numerosMostrats.slice(-1) == "-" || numerosMostrats.slice(-1) == "*" || numerosMostrats.slice(-1) == "/" || numerosMostrats.slice(-1) == "%")) {
        return;
    }
    
    numerosMostrats += numero; //Concatenar cadena

    document.getElementById("pantallaCalc").innerText = numerosMostrats; //Mostrar cadena de numeros i operadors cada vegada
    return numerosMostrats;

}

// Al clickar el boto igual ("=")
function calcular() {

        let resultatTemporal = eval(numerosMostrats); // Guarda el resultat que es calcula en 'eval()'
        document.getElementById("pantallaCalc").innerText = resultatTemporal; // Mostra el resultat en la pantalla
        numerosMostrats = resultatTemporal; //Manté i mostra el resultat final, no la operació
        return numerosMostrats;
}

// Limpiar pantalla 
function limpiar() {
    numerosMostrats = "";
    document.getElementById("pantallaCalc").innerText= "";
}
