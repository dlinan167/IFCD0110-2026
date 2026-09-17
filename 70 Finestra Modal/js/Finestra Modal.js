// Finestra Modal

// // PER COOCKIES
// function obrirModal() {
//     const finestra = document.getElementById("myDialog");
//     finestra.open = true;
// }

// function tancarModal() {
//     const finestra = document.getElementById("myDialog");
//     finestra.open = false;
// }


function obrirModal() {

    console.time();
    const finestra = document.getElementById("myDialog");
    finestra.showModal();
    // showModal() fa que no sigui posible interactuar quan la finestra sigui oberta
    
    console.timeEnd();
}


function tancarModal() {
    const finestra = document.getElementById("myDialog");
    finestra.close();

}


// console.time()    <-- Comença temporitzador
// console.timeEnd() <-- Acaba temporitzador    (per veure el rendiment en ms)