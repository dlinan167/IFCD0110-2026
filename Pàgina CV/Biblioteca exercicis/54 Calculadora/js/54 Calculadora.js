// CALCULADORA


let numerosMostrats = "";

// Afegeix cada numero clickat
function afegir(numero) {

    // Evitar dos operadors seguits    
    // Amb isFinite(numero) diu si es un numero o no (true o false)
    if (numerosMostrats.length > 0  && isFinite(numero)==false && isFinite(numerosMostrats.slice(-1)) == false) {
    return;
    }
    numerosMostrats += numero; //Concatenar cadena
    
    document.getElementById("pantallaCalc").innerText = numerosMostrats; //Mostrar cadena de numeros i operadors cada vegada
    return numerosMostrats;
}

// Al clickar el boto igual ("=")
function calcular() {

    try {
        document.getElementById("pantallaCalc").innerText = eval(numerosMostrats); // Mostra el resultat en la pantalla (resultat que es calcula en 'eval()')
        numerosMostrats = eval(numerosMostrats); //Manté i mostra el resultat final, no la operació
        
        // Codi d'error
    } catch (error) {
        document.getElementById("pantallaCalc").innerText = "Operació no valida!";
        console.log("Operació no valida: " + error);
        numerosMostrats ="";
    }
}

// Limpiar pantalla 
function limpiar() {
    numerosMostrats = "";
    document.getElementById("pantallaCalc").innerText= "";
}

// funció fletcha (alternativa una mica mes compacta)
limpiar = () => {
    numerosMostrats = "";
    document.getElementById("pantallaCalc").innerText= "";
}

// Limpiar últim caracter{}

// ===Codi original (sense isFinite)===
// function afegir(numero) {
    // esOperador=false;
    // switch (numero) {
    //     case "+":
    //         esOperador=true
    //         break;
    //     case "-":
    //         esOperador=true
    //         break;
    //     case "*":
    //         esOperador=true
    //         break;
    //     case "/":
    //         esOperador=true
    //         break;
    //     case "%":
    //         esOperador=true
    //         break;
    //     default:
    //         break;
    // }
    // if (numerosMostrats.length > 0  && esOperador==true && (numerosMostrats.slice(-1) == "+" || numerosMostrats.slice(-1) == "-" || numerosMostrats.slice(-1) == "*" || numerosMostrats.slice(-1) == "/" || numerosMostrats.slice(-1) == "%")) {
    //     return;
    // }
// }