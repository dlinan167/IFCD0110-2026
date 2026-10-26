// ====== Declarem variables
let nom = "David";
let cognom = "Linan";
let edat = 24;
let teMascota = false;
//====== LLista (array)
let diesSetmana= ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissapte", "Diumenge"];

// ======== Mostrar per consola
console.log("/Nom es: "+nom)
console.log("/Cognom es: "+cognom)
console.log("/L'edat es: "+edat)
console.log("/Te Mascota?: "+teMascota)
console.log("Els dies de la setmana són: "+diesSetmana)
console.log(diesSetmana) // Mostrar array
console.log("Avui és: "+diesSetmana[1]) // Agafar un element del array

// Mostrar els valors amb un finestra emergent --->
// window.alert("El meu nom és: "+nom)


// Mostrar els valors dins de la pàgina web
// document.write(nom)

// Inserir el valor amb ids
document.getElementById("JSdades").innerHTML= 
    "<p>/- Nom es: "+nom+"</p>"+
    "<p>/- Cognom es: "+cognom+"</p>"+
    "<p>/- L'edat es: "+edat+"</p>"+
    "<p>/- Te Mascota?: "+teMascota;+"/</p>";

    // Inserir Array amb l'id
document.getElementById("JsSetmana").innerHTML= 
    "<p>/- Els dies de la setmana són: "+diesSetmana+"</p>";

    // ========= Objecte cotxe (Declarar)
    let cotxe={
        color:"verd",
        marca:"Toyota",
        model:"CHR",
        numCavalls:130,
        emisions:80,
        numPortes:5,
        numRodes:4,
        esElectric:false,
        any:2020,
    }
    // Objecte cotxe (print)
    document.getElementById("JsCotxe").innerHTML= 
    "<p>/- El cotxe : "+cotxe+"</p>";
    console.log("El cotxe : "+cotxe)
    console.log(cotxe[3])


    // ========== FUNCIONS ========
    function sumar(num1, num2){
        return num1 + num2;
    }
    // ==== (cridar funció) Donem el numeros
    console.log(sumar(25, 42))

    // ====
    function caixaAlerta(missatgeAlerta){
        window.alert(missatgeAlerta);
    }
    // (cridar funció)
    // caixaAlerta("Bon divendres tingueu")

    // Caixa d'alerta amb un input que es guarda a aquesta variable "resposta"
    let resposta=prompt("Quina és la teva edat?");