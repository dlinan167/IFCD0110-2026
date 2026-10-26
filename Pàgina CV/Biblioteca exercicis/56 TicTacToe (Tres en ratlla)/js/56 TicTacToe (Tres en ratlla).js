//  56 TIC-TAC-TOE (Tres en ratlla)


// let tauler=[2][2];
// Amb taula Array (coordenades)
// const tauler=[["b", "b", "b"],["b", "b", "b"],["b", "b", "b"]]
// function inicialitza(posicion) {
//     for (let i = 0; i < 2; i++) {
//         for (let j = 0; j < 2; j++) {
//          tauler[i][j]="b";
//         }
//     }
// }

// FORMAT "FOR OF"
// function inicialitza(posicion) {
//     for (let fila of tauler) {
//         for (let i = 0; i < fila.length; i++) {
//             fila[i] = "b";
//         }
//     }
// }

// inicialitza();

let jugadorColor="";
let tornContador =-1;
let partidaAcabada = false;



// Funció del torn del jugador (clickar casella)
torn = (posicion) =>{
    if (partidaAcabada == true) { //Bloqueja si la partida ja s'ha acabat
        return;
    }

    const posicionSeleccionada = document.getElementById(posicion); //Agafa la posició id que li pasem amb el onclick()

    // Evitar pintar una casella ja pintada
    if (posicionSeleccionada.classList.contains("cercle") || posicionSeleccionada.classList.contains("xBlau")) {
        console.log("Aquesta casella ja està pintada!");
        return;
    }
    
    tornContador++; //Torn


    // Torn del cercle vermell
    if (tornContador % 2 == 0) {
        jugadorColor="O Vermell";
        console.log("El jugador és: "+jugadorColor)
        posicionSeleccionada.classList.add("cercle"); //Pinta la classe CSS a la casilla clickada
        
        // Torn de la X blava
    } else {
        jugadorColor="X Blau";
        console.log("El jugador és: "+jugadorColor)
        // posicionSeleccionada.classList.add("xBlau"); 
        posicionSeleccionada.className+=" xBlau" // Alternativa de afegir la classe CSS (El mateix que adalt)
    }

    // La victoria es del jugador que hi retorni 'true' en la funció de 'comprovarVictoria()'
    if (comprovarVictoria(jugadorColor)) { // Si la funció retorna true s'acaba la partida
        partidaAcabada = true;
        alert(jugadorColor + " ha guanyat!");
    }
}



// Posibles combinacions per guanyar el Tres en ratlla
const combinacionsVictoria = [
    ["pos01", "pos02", "pos03"],
    ["pos11", "pos12", "pos13"],
    ["pos21", "pos22", "pos23"],
    ["pos01", "pos11", "pos21"],
    ["pos02", "pos12", "pos22"],
    ["pos03", "pos13", "pos23"],
    ["pos01", "pos12", "pos23"],
    ["pos03", "pos12", "pos21"]];


// Cada cop que un jugador clicka una casella es comprova si algú ha guanyat
function comprovarVictoria(jugadorColor) {

    // Comprovem totes les combinacions possibles de victoria (En bucle)
    for (let combinacio of combinacionsVictoria) {
        let [pos1, pos2, pos3] =  combinacio; //Agrupem tres posicions seguides en una llista
        let casella1 = document.getElementById(pos1);
        let casella2 = document.getElementById(pos2);
        let casella3 = document.getElementById(pos3);
        
        // Si alguna casella no existeix (no hi ha una combinació de tres), passem a la següent combinació
        if (!casella1 || !casella2 || !casella3) { 
            continue; 
        }
        
        // Si hi ha tres caselles seguides del "O Vermell" Gana
        if (jugadorColor == "O Vermell") {
            if (casella1.classList.contains("cercle") &&
                casella2.classList.contains("cercle") &&
                casella3.classList.contains("cercle")) {
                return true;
            }

        // Si hi ha tres caselles seguides del "X Blau" Gana
        } else if (jugadorColor == "X Blau") {
            if (casella1.classList.contains("xBlau") &&
                casella2.classList.contains("xBlau") &&
                casella3.classList.contains("xBlau")) {
                return true;
            }
        }
    }
    return false;
}

// Al clickar el botó de RESET, totes les caselles es buiden
reset = () =>{
    
    let casellas = document.getElementsByClassName("casella");
    console.log(casellas);
    for (let i = 0; i < casellas.length; i++) {
        casellas[i].className = "casella";
    }

    partidaAcabada = false;
}