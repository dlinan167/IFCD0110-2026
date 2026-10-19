// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ TEMA CLAR / TEMA FOSC (toggle) -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

window.addEventListener("load", function(){ // Quan carrega la pàgina/finestra canvia al tema guardat anteriorment
    const temaGuardat = localStorage.temaFosc;
    canviarTema(temaGuardat);
});

// Seleccionar el temaFosc (toggle)
const icona = document.getElementById("themeIcon");
icona.addEventListener("click", function(){
    const temaFosc = icona.classList.contains("fa-moon"); //Si la icona es del tema dark = true
    canviarTema(temaFosc);
}); 

// Canvi de temaFosc  (per defecte el tema es fosc/dark)
const bodyColor = document.getElementById("body");
function canviarTema(temaFosc) {

    if (temaFosc === false) {
        bodyColor.classList.remove("dark");    // <= Quita tema 'light' a la pàgina
        bodyColor.classList.add("light");        // <= Posa tema 'dark' a la pàgina
        icona.classList.remove("fa-sun");      // <= Intercanvia la forma del icona d'un sol a una luna
        icona.classList.add("fa-moon");
        localStorage.setItem("temaFosc", temaFosc); // <= Guarda l'estat tema 'light' (false)
        // TEMA ACTUAL: LIGHT
        // console.log(temaFosc) //check (false)
    } else {
        bodyColor.classList.remove("light");
        bodyColor.classList.add("dark");
        icona.classList.remove("fa-moon");
        icona.classList.add("fa-sun");
        localStorage.setItem("temaFosc", temaFosc); // <= Guarda l'estat 'dark' (true)
        // TEMA ACTUAL: DARK
        // console.log(temaFosc) //check (true)
    } 
}