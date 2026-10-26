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




// ***********************************************************************************************************************
// *                      IMPORTANT!:                  CAPTURA D'EVENTS                                                  *
// ***********************************************************************************************************************

const menus = document.getElementById("menuCapturaEvents");

// Li afegim un parametre a la funció anonima del event (captura dades, podem veure a quin dels fills hem fet click)
// menus.addEventListener("click", 
//     function (event){
//         console.log(event); // <= click { target: li, buttons: 0, clientX: 682, clientY: 366, layerX: 206, layerY: 41 }
        

//         document.getElementById("resultat").innerHTML = "<b>"+ event.target.innerHTML +"</b>"; // <= En target.innerHTML es pot veure el contingut de cada fill del menu (opcio 1, opcio2, etc...)
//     });


    
// const opcionsMenu = document.querySelector("li"); // <= selecciona el primer <li> que troba   (querySelectorAll dona una llista)
// console.warn(opcionsMenu); // <=  =><li>


const opcionsMenu = document.querySelectorAll("li"); // <= (querySelectorAll dona una llista, de tots els <li>)

// Recorrem la llista al fer click
for (element of opcionsMenu) {
    element.addEventListener("click", function(event){  // <= captura la informació de cada element de la llista

        console.log(event); // <= click { target: li, buttons: 0, clientX: 682, clientY: 366, layerX: 206, layerY: 41 }
        document.getElementById("resultat").innerHTML = "<b>"+ event.target.nodeName +"</b>"; // LI
    });
}


// Captura el nom de tots els elements dins del <body>:
const cos = document.getElementsByTagName("body");
console.log(cos[0])
cos[0].addEventListener("click", function(){
document.getElementById("resultat").innerHTML = "<b>"+ event.target.nodeName +"</b>";
});