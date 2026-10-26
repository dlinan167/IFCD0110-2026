// Funció de carrega
async function carregarComponent(id, fitxer) {
const resposta = await fetch(fitxer);
const contingut = await resposta.text();
document.getElementById(id).innerHTML = contingut;
}

// Crida a funció "carregaComponent"
carregarComponent("44 NAVBAR-top-horitzontal", "./components/44 NAVBAR-top-horitzontal.html");
carregarComponent("44 SIDENAV", "./components/44 SIDENAV.html");
carregarComponent("44 SIDENAV-light-theme", "./components/44 SIDENAV-light-theme.html");
carregarComponent("44 PREVIA", "./components/44 PREVIA.html");

// SNIPPETS DE COMPONENTES EN COMUN COMO LOS NAV. EN ESTE PROYECTO PLANTILLA DE BOOTSTRAP!