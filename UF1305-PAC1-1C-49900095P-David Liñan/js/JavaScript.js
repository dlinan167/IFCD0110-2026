//




// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ BLOC 7: TAULA DE LA VERITAT +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

function taulaVeritat(valorA, valorB) {
console.log("ValorA \t ValorB \t AND \t OR \t NEGATIU AND \t NEGATIU OR");
  let columnaAND;
  let columnaOR;
  let negAND;
  let negOR;

//   Columna AND (&&) (Fan DOS 'true' per comptar com true)
  if (valorA == true && valorB == true) {
    columnaAND = true;
  } else {
    columnaAND = false;
  }
//   Columna OR (||) (Fa UN 'true' per comptar com true)
  if (valorA == true || valorB == true) {
    columnaOR = true;
  } else {
    columnaOR = false;
  }
//   Columna Negativa AND (Invirteix el true/false del AND)
  if (columnaAND == true) {
    negAND = false;
  } else {
    negAND = true;
  }
//   Columna Negativa OR (Invirteix el true/false del OR)
  if (columnaOR == true) { 
    negOR = false;
  } else {
    negOR = true;
  }

//  Mostrar per consola la taula amb els booleans
  console.table(valorA + "  \t" + valorB + "     \t" + columnaAND + "  \t" + columnaOR + "    \t" + negAND + "     \t" + negOR);
}
// PROVA DE LA TAULA
console.log(taulaVeritat(true, true));
console.log(taulaVeritat(true, false));
console.log(taulaVeritat(false, true));
console.log(taulaVeritat(false, false));