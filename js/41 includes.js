// Funció de carrega
async function carregarComponent(id, fitxer) {
const resposta = await fetch(fitxer);
const contingut = await resposta.text();
document.getElementById(id).innerHTML = contingut;
}

// Crida a funció "carregaComponent"
carregarComponent("41 navbar-BOOT", "./components/41 navbar-BOOT.html");
carregarComponent("41 previa", "./components/41 previa.html");