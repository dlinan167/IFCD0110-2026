// 63 BOM


// === = OBJECTE WINDOW = ===

let w = window.innerWidth;
let h = window.innerHeight;

// === = SCREEN = ===
let wS = screen.width;
let hS = screen.height;


document.getElementById("demo").innerHTML="<h2>Les dimensions son: <br> Window: </h2> <br> Amplada: "+ w + "px<br> Alçada: "+h+"px <hr>"+ 
"<h2> Screen: </h2> <br> Amplada: "+ wS + "px<br> Alçada: "+hS +"px"+ "<br> Profunditat de color: 24. Es a dir: "+ 2**screen.colorDepth +" colors.<hr><br>"+
"<b>location.href:</b> "+location.href.replace("%20"," ")+
"<br>location.<b>hostname:</b> "+location.hostname+
"<br>location.<b>pathname:</b> "+location.pathname.replace("%20"," ")+
"<br>location.<b>protocol:</b> "+location.protocol+
"<br>location.<b>port:</b> "+location.port;
// console.log("Anchura: "+ w + " Altura: "+h);


// window.open(); <=- open a new window
// window.close(); <=- close the current window
// window.moveTo(); <=- move the current window
// window.resizeTo(); <=- resize the current window

// location.href.replace("%20"," ")+    //<=- Mostra URL actual  (amb espais)
// location.hostname                     //<=- Mostra IP
// location.href.replace("%20"," ")+    //<=- Mostra el path URL  (amb espais)
// location.protocol                    //<=- Mostra el protocol (http/s)
// location.port                        //<=- Mostra el port (5500)

// window.open(https://www.google.com);

// OBRIR NOVA PAGINA (POP-UP), I MOURE-LA
// const obre=window.open("https://www.google.com", "", "height=500", "width=400");
// obre.moveTo(1555,500);


// windows.location.assign("./img/imatge_pera.png"); //<=- Carga un recurs i no deixa tornar per l'historial <- :


// history.back(1);            //<=- carrega la pagina anterior
// history.forward(1);

function tornaErera() {
    window.history.back();
}
function tornaEndavant() {
    window.history.forward();
}


// === = NAVEGATOR = ===

// navigator.cookieEnabled   // <=- Retorna boolean de si les cookies estan actives
// navigator.language       // <=- Mostra el idioma configurat al navegador del client
// navigator.onLine        // <=- Mostra si l'usuari está amb conexió o no
// navigator.appName       // <=- Mostra el nom del navegador d'usuari  (generic i deprecat) (casi sempre retorna el 'Netscape')
// navigator.userAgent       // <=- Mostra versions (deprecat, no fiable)

document.getElementById("demo2").innerHTML+= "<br> cookies activades?: <b>"+ navigator.cookieEnabled +"</b>"+
"<br>Llenguatge: <b>"+ navigator.language+"</b>"+
"<br>conexió Online?: <b>"+ navigator.onLine+"</b>"+
"<br>Nom navegador (app): <b>"+ navigator.appName+"</b>"+
"<br>Agent: <b>"+ navigator.userAgent+"</b>";


// pop-up
// alert
// confirm
// prompt

// POP-UP CONFIRM  (retorna a boolea)
if(confirm("Press a button!")){
    alert("You pressed OK!");
}else{   
    alert("You pressed CANCEL!");
}

// let resposta = confirm("Estàs seguir que vols desar les dades?");  //Retorna un boolean true o false
// console.log(resposta);

// if (resposta) {
//     console.log("Ha triat Acceptar");
// }else{
//     console.log("Ha triat Cancelar");
// }

//prompt:           Missatge,                       valor per defecte
// let resposta = prompt("Quin és el teu color favorit", "Green");

// // console.log(resposta);

// if (resposta) {
//     console.log("Has entrat "+resposta);
// }else{
//     console.log("No has entrat res");
// }


// Si no hi ha respota (null) insisteix l'usuari fins que introdeix una resposta

let resposta = prompt("Quin és el teu color favorit", "Green");

while (!resposta) {
    console.log("Escriu algo!!!")
    resposta = prompt("Quin és el teu color favorit", "Green")
}
console.log(resposta);

// alert("Hola \n Bon dia a tothom"); // '\n' <= Salt de línea



// +-+-+-++-+-+-+-+-++-+-+-===== ! TIMING EVENTS ! ======-+-+-+-++-+-+-+-+-+-+-+-+-++-+-+-++-++-+-+

// Delay de 3 segons per mostrar el missatge! o executar el codi de la funció assignada
function missatgeAmbRetard() {
    alert("Bon dia amb alegría (Timeout)");
}


// Rellotge del PC
setInterval(hora, 1000); // <= S'actualitza per cada 1s que pasa

function hora() {
  const horaPC = new Date(); // <= Crea un objecte i referencia 'horaPC'
  document.getElementById("demoRellotge").innerHTML = "<br><b>"+horaPC.toLocaleTimeString()+"</b>";
} 


let comptaEnrera = setInterval(cronometre, 1000); // <= S'actualitza per cada 1s que pasa

let comptador = 60; // s

function cronometre() {
  document.getElementById("demoCronometre").innerHTML = "<br><b>"+comptador+"</b>";
  comptador--;
  if (comptador < 0) { // Es para quan arriva a '0' (I evitar numeros negatius)
    clearInterval(comptaEnrera);
  }
} 
