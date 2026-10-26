
// ***********************************************************************************************************************
// *                                             EVENT:  preventDefault                                                  *
// ***********************************************************************************************************************

/* Exercici 1 */
const enllac = document.getElementById("aGoogle");

enllac.addEventListener("click",  function(evt){

    evt.preventDefault();  //Bloqueja el comportament natural de <a>
    alert ("La navigació ha estat bloquejada");

});


/* Exercici 2 */
const formulari = document.getElementById("formulari");

formulari.addEventListener("submit", function(e) {

    e.preventDefault(); // Bloqueja el submit, evitant la info dels <input> enviar-se, (no s'envia el formulari)

    alert("No s'ha enviat el formulari");

});


/* Exercici 3 */
// Valida el formilari abans d'enviar-lo
const registre = document.getElementById("registre");

registre.addEventListener("submit", function(e) {

    const usuari = document.getElementById("usuari").value;

    if (usuari.trim() === "") {

        e.preventDefault();

        alert("Has d'introduir algun usuari!!!");

    }

});


/* Exercici 4 */
// Evitar el menú contextual del botó dret (en tot el document)
document.addEventListener("contextmenu", (e) => {

    e.preventDefault();

    alert("Botó dret desactivat");

});


/* Exercici 5 */
// Evitar que una tecla faci una acció
const camp = document.getElementById("camp");

camp.addEventListener("keydown", (e) => {
    console.log(e); // keydown { target: input#camp, key: "a", charCode: 0, keyCode: 65 }
    console.log(e.key); // key: "a"

  if (e.key === "a") {

    e.preventDefault();

  }

});

/* Exercici 6 */
// Evitar que un botó enviï un formulari
document.getElementById("boto")
.addEventListener("click", function(e){

    e.preventDefault();

    alert("El botó no envia el formulari");

});


/* Exemple 7: */
// Evitar que es tanqui finestra per accident (beforeunload)

window.addEventListener("beforeunload", (e) => {

    // if's de VALIDACIÓNS si hi ha formularis amb info {
        e.preventDefault();
    // }

});
