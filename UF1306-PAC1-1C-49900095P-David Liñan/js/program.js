
// Validació de la contrasenya i el captcha abans d'enviar el <form>

// ***************************************************************************************************
// *                                      EVENTS LISTENERS                                        *
// ***************************************************************************************************

// Validació d'exemple amb una expressió regular (2.2)
const evtInpTarjeta = document.getElementById("inpTarjeta");
evtInpTarjeta.addEventListener("keyup", () => {
    esTargetaCreditValida();
});

// Validació captcha (3)
const evtCaptcha = document.getElementById("btnCaptcha");
evtCaptcha.addEventListener("click", () => {
    validaCaptcha();
});

// Validació de password  (4.1)
const evtPassword = document.getElementById("password");
evtPassword.addEventListener("keyup", () => {
  validaCamp("password","mPassword", /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/); // <= PATRO: min.1 majúscula, min.1 minúscula, min.1 número, min.1 caràcter especial, mínim 8 caràcters
  validarClauDePas(); // <= Missatges de validació per l'usuari (Quan és de forta la contrasenya)
});
// Valida la confirmació de password (4.3)
const evtPasswordConfirm = document.getElementById("passwordConfirm");
evtPasswordConfirm.addEventListener("keyup", () =>{
  validaClauConfirmacio();
});

// Mostra la contrasenya en format text al clickar el ull (4.2)
const evtUllContrasenya = document.getElementById("ullContrasenya");
evtUllContrasenya.addEventListener("click", () =>{

    const ullIcona = document.getElementById("ullContrasenya");
    let campContrasenya = document.getElementById("password");
// Si el type es 'password', cambia a type 'text' i viceversa
    if (campContrasenya.type == "password") {
        campContrasenya.type = "text";
        ullIcona.classList.remove("fa-eye");
        ullIcona.classList.add("fa-eye-slash");
    } else {
        campContrasenya.type = "password";
        ullIcona.classList.remove("fa-eye-slash");
        ullIcona.classList.add("fa-eye");
    }
});




// Carrusel (girar a la esquerra)
const evtcFletxaEsquerra = document.getElementById("cFletxaEsquerra");
evtcFletxaEsquerra.addEventListener("click", () =>{
  giraCarrusel(120);
});

// Carrusel (girar a la dreta)
const evtcFletxaDreta = document.getElementById("cFletxaDreta");
evtcFletxaDreta.addEventListener("click", () =>{
  giraCarrusel(-120);
});

// ***************************************************************************************************
// ***************************************************************************************************

// -----

// ***************************************************************************************************
// *                                       DEFINICIÓ FUNCIÓNS                                        *
// ***************************************************************************************************


// Captcha (3)
function validaCaptcha() {
    const numCaptcha = document.getElementById("respostaCaptcha").value;
    const mCaptcha = document.getElementById("mCaptcha");
    if (numCaptcha == 5) {
        mCaptcha.innerText = "Ets una persona real";
    } else {
        mCaptcha.innerText = "Probablement ets un robot!";
    }
}

// Exemple pràtic d'expressió regular (2.2)
function esTargetaCreditValida() {
    
    const tarjeta = document.getElementById("inpTarjeta").value;
    const mAlert = document.getElementById("mTarjeta");

    const mTarjeta = document.getElementById("mTarjeta");

    // Patro de tarjeta
    let patro = /^\d{4} \d{4} \d{4} \d{4}$|^\d{16}$/;
    const resultat = tarjeta.match(patro);

    if (resultat){
        mTarjeta.innerText= "La targeta és VÀLIDA: => "+resultat;
        mAlert.classList.remove("alert-danger");
        mAlert.classList.add("alert-success");

    }else{
        mTarjeta.innerText= "Error: targeta NO vàlida!";
        mAlert.classList.remove("alert-success");
        mAlert.classList.add("alert-danger");
    }
}

// FUNCIÓ: VALIDAR els camps i dona un missatge visible
function validaCamp(id, idMissatge, patro) {
  const camp = document.getElementById(id).value; // <= valor del password (id)
  const mAlert = document.getElementById(idMissatge); // <= Missatge validació (Depend del camp)

  // PATRO per validar:
  let resultat = camp.match(patro);

  if (resultat) {

    mAlert.innerText = "Vàlid";
    mAlert.classList.remove("alert-danger");
    mAlert.classList.add("alert-success");
    document.getElementById(id).style.borderColor = "green";
    return true; // true VALIDACIÓ CORRECTA!
  } else {

    mAlert.innerText = "NO Vàlid";
    mAlert.classList.remove("alert-success");
    mAlert.classList.add("alert-danger");
    document.getElementById(id).style.borderColor = "red";
    return false; // false VALIDACIÓ INCORRECTA!
  }
}

// VALIDA PATRO PASSWORD/CONTRASENYA (4.1)
// Validació d'un patro mes complexe en petites parts (amb missatges personalitzats)
function validarClauDePas() {
  const camp = document.getElementById("password").value;
  const mAlert = document.getElementById("mPassword");
  const mFortalesa = document.getElementById("mFortalesa");
  let clauForta = false

  if (camp.length < 8) {
    mAlert.innerHTML = "Menys de 8 caracters - Falten:" + (8 - camp.length); // <= MIDEIX EL LLARG DE LA PASSWORD, i el mostra
  }
  if (!camp.match(/\d/)) {
    mAlert.innerHTML += "<br>Falta un número"; //<=
  }
  if (!camp.match(/[A-Z]/)) {
    mAlert.innerHTML += "<br>Falta una lletra majúscula";
  }
  if (!camp.match(/[a-z]/)) {
    mAlert.innerHTML += "<br>Falta una lletra minúscula";
  }
  if (!camp.match(/[^a-z0-9]+/i)) {
    mAlert.innerHTML += "<br>Falta una símbol";
  }

// Indicar fortalesa de contrasenya 
    if (camp.match(/\d/) && camp.match(/[A-Z]/) && camp.match(/[a-z]/) && camp.match(/[^a-z0-9]+/i)) {
    clauForta = true
    }

  if (!camp.match(/\d/) || !camp.match(/[A-Z]/) || !camp.match(/[a-z]/) || !camp.match(/[^a-z0-9]+/i)) {
      mFortalesa.innerHTML = "Clau fluixa";
      mFortalesa.classList.add("alert-danger");
      mFortalesa.classList.remove("alert-success");
    }else if (clauForta && camp.length >= 6 && camp.length <= 9) {
        mFortalesa.innerHTML = "Clau vulnerable";
        mFortalesa.classList.add("alert-warning");
        mFortalesa.classList.remove("alert-success");
    }else if (clauForta && camp.length > 9 && camp.length <= 12) {
        mFortalesa.innerHTML = "Clau forta";
        mFortalesa.classList.add("alert-success");
    }else if (clauForta && camp.length > 12 && camp.length <= 15) {
        mFortalesa.innerHTML = "Clau molt forta";
        mFortalesa.classList.add("alert-success");
    }else if (clauForta && camp.length > 15 && camp.length <= 18) {
        mFortalesa.innerHTML = "Clau super forta!";
        mFortalesa.classList.add("alert-success");
}
}
// VALIDA LA REPETICIÓ DE LA CONTRASENYA (4.3)
function validaClauConfirmacio() {
  const password = document.getElementById("password").value; // <= input password
  const passwordConfirm = document.getElementById("passwordConfirm").value; // <= input confirmació de password
  const mAlert = document.getElementById("mPasswordConfirm");
  if (password === passwordConfirm) {

    mAlert.innerText = "La contrasenya es igual";
    mAlert.classList.remove("alert-danger");
    mAlert.classList.add("alert-success");
    return true;
  } else {
    
    mAlert.innerText = "La contrasenya no es igual";
    mAlert.classList.remove("alert-success");
    mAlert.classList.add("alert-danger");
    return false;
  }
}

// (5.1) (5.2)
// Gira carrusel, Quan es fa click (a la dreta o esquerra)
let posicioCarrusel = 0;
const carrusel = document.getElementById("carruselPrincipal");
let resetTimeout = 0;

function giraCarrusel(deg) {
  
  posicioCarrusel += deg; //<= Acumula els degrees de la posició actual amb els que sumem clickant més
  // Animacións de moviment (els fem .remove cada vegada per no resetegar la posició inicial de la animació CSS, fent-lo dinàmic) =>
  carrusel.classList.remove("carruselgiraAutomatic", "carruselgiraEsquerra", "carruselgiraDreta"); 
  carrusel.style.transform = "rotateY(" + posicioCarrusel + "deg)"; // <= modifica la posició en el css
  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(retornaGiraAutomatic, 4000); // retorna a girar automaticament després de 4s
}

// El carrusel retorna a girar de forma automàtica (com estaba originalment, abans de fer click a una fletxa)
function retornaGiraAutomatic() {
  carrusel.style.transform = "";
  carrusel.classList.remove("carruselgiraEsquerra", "carruselgiraDreta");
  carrusel.classList.add("carruselgiraAutomatic");
}

// (5.3)

// Li afegim un parametre a la funció anonima del event (captura dades, podem veure a quin dels fills hem fet click)
carrusel.addEventListener("click", function (event){

        console.log(event); // <= click { target: img, buttons: 0, clientX: 1244, clientY: 284, layerX: -29, layerY: 180 }
        console.log(event.target.name); // <= nom=""(intern html) de cada imatge

        document.getElementById("marcDeContingut").src = event.target.src; // <= En target posa el scr de cada imatge al marcDeContingut
        document.getElementById("finestraDeContingut").innerHTML = event.target.name; // <= Posa el nom
    });



// Proves d'exemple de Console (6.2)
function provaConsoleLog() {
  let resposta = 3 + 2;
  console.log("Console log: La resposta es: "+ resposta);
}
function provaConsoleWarn() {
  let resposta = 3 + 2;
  console.warn("Console warn: ADVERTENCIA La resposta es: "+ resposta);
}
function provaConsoleError() {
  let resposta = 3 + 2;
  if (resposta = 5) { 
    console.error("Console log: --ERROR-- La resposta NO es: "+ resposta);
  }
}

function provaConsoleCount() {
  for (let i = 0; i < 5; i++) {
    console.count("console.count: La resposta actual es: ");
  }
}
function provaConsoleClear() {
  console.clear();
}