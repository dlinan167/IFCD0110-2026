// 58 EVENTS (Afegir contingut), etc...


const contenidorMain = document.getElementById("main");
// AFEGIR CONTINGUT
function creaFigura() {
    console.log("Entra a la creació de l'event");

    // AFEGIR CONTINGUT (Caixes)(div)
    contenidorMain.innerHTML+="<div style='background-color:#555555; width:5rem; height:5rem; border: solid; align-content: center;'> Caixa </div>"; //Caixa 1
    contenidorMain.innerHTML+="<div class='caixa'> Caixa 2 </div>"; //Caixa 2
// 

// 
    // Crear element
    const figura = document.createElement("div");
    // Afegir element al contenidor amb 'appendChild' (Afegeix un fill al final de la llista de fills del contenidor)
    // <div> </div>
    // <div> </div>
    // <div> </div> etc...
    figura.classList.add("caixa", "figura"); //Afegim una classe CSS per pintar-ho
    console.log(figura.classList); // Llista de classes CSS que te figura
    contenidorMain.appendChild(figura); // FIGURA
}

function destruirFigura() {
    console.log("Destrueix la figura");

    const llistaFiguras = document.querySelectorAll(".figura"); //
    console.log(llistaFiguras); //Mostra la llista
    for (element of llistaFiguras) {
        console.log(element); // Mostra cada element de la llista
        contenidorMain.removeChild(element); //Borra cada element dels fills 'figura' del main
    }
}
// id de boto4 resumit
const boto4 = document.getElementById("boto4");

//Objecte           // Nom d'event , script/funció //
boto4.addEventListener("click", creaFigura)
