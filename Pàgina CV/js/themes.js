// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ TEMA CLAR / TEMA FOSC (toggle) -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

window.addEventListener("load", function(){ // Quan carrega la pàgina/finestra canvia al tema guardat anteriorment
    const temaGuardat = localStorage.temaClar;
    canviarTema(temaGuardat);
});

// Seleccionar el temaClar (toggle)
const icona = document.getElementById("themeIcon");
icona.addEventListener("click", function(){
    const temaClar = icona.classList.contains("fa-sun"); //Si la icona es del tema light = true
    canviarTema(temaClar);
}); 

// Canvi de temaClar  (per defecte el tema es clar/light)
const bodyColor = document.getElementById("body");
function canviarTema(temaClar) {

    if (temaClar === false) {
        bodyColor.classList.remove("light");    // <= Quita tema 'dark' a la pàgina
        bodyColor.classList.add("dark");        // <= Posa tema 'light' a la pàgina
        icona.classList.remove("fa-moon");      // <= Intercanvia la forma del icona d'un sol a una luna
        icona.classList.add("fa-sun");
        localStorage.setItem("temaClar", temaClar); // <= Guarda l'estat tema 'light' (false)
        // TEMA ACTUAL: DARK
        // console.log(temaClar) //check (false)
    } else {
        bodyColor.classList.remove("dark");
        bodyColor.classList.add("light");
        icona.classList.remove("fa-sun");
        icona.classList.add("fa-moon");
        localStorage.setItem("temaClar", temaClar); // <= Guarda l'estat 'light' (true)
        // TEMA ACTUAL: LIGHT
        // console.log(temaClar) //check (true)
    } 
}