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
// inicialitza();

let jugadorColor="";
let tornContador=-1;

// Funció del torn del jugador (clickar casella)
torn = (posicion) =>{
    let posicionSeleccionada = document.getElementById(posicion); //Agafa la posicio id que le pasem amb el onclick()

    // Evitar pintar una casella ya pintada
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
}

// Win conditions
    // function condicionsVictoria(jugadorColor, posicion) {
        //     // WIN CONDITIONs ?????WIP
        //     // if (condition) {
           
    //     // }
        
    //     switch (position) {   
    //         case value:

    //             console.log(jugadorColor+" ha guanyat!")
    //             break;
        
    //         default:
    //             break;
    //     }
    // 01 / 02 / 03
    // 01 / 11 / 21
    // 


