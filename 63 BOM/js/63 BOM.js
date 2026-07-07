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