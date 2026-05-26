// Funció de carrega
async function carregarComponent(id, fitxer) {
const resposta = await fetch(fitxer);
const contingut = await resposta.text();
document.getElementById(id).innerHTML = contingut;
}

// Crida a funció "carregaComponent"
carregarComponent("43 header", "./components/43 header.html");
carregarComponent("43 nav", "./components/43 nav.html");
carregarComponent("43 footer", "./components/43 footer.html");
carregarComponent("43 previa", "./components/43 previa.html");