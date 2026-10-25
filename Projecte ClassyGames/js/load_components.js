// ********** Animació de Carrega: No es mostra el contingut main fins que acaba de carregar **********
const main = document.querySelector("main"); // <-- Selecciona el main
main.hidden = true; // <-- Amaga el main

// Crea un div que mostra la carrega
const divAnimacio = document.createElement("div");
divAnimacio.id = "aCargant";
divAnimacio.className = "cargant";
divAnimacio.innerHTML = "Carregant...";

main.prepend(divAnimacio); // <-- Inserta el div d'animació de carrega en el main per mostrar-lo (Abans d'altres elements fill)

document.addEventListener("DOMContentLoaded", function () {
  // (Utilitza un Interval per demostració)

  // Finalitza de carregar (Desapareix)
  divAnimacio.remove();
});
// ************************************************************


// Funció de carrega
async function carregarComponent(id, fitxer) {
const resposta = await fetch(fitxer);
const contingut = await resposta.text();
document.getElementById(id).innerHTML = contingut;
}

// Carrega els arxus de components, segons l'id en el .html  (<div id="previa"></div>)
carregarComponent("previa", "./components/previa.html");

// carregarComponent("header", "./components/header.html");
carregarComponent("navMenu", "./components/navMenu.html");
carregarComponent("footer", "./components/footer.html");

