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