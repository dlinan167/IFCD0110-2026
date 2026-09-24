
// -+-+-+-+-+-+-+-+-+-+-        -+-+-+-+-+-+-+-+-+-+-
// -+-+-+-+-+-+-+-+-+-+- PART 1 -+-+-+-+-+-+-+-+-+-+-
// -+-+-+-+-+-+-+-+-+-+-        -+-+-+-+-+-+-+-+-+-+-
// ***************************************************************************************************
// *                                      EVENTS LISTENERS                                        *
// ***************************************************************************************************


// -+-+-+-+ PART 1:
// Valida edat
const evtEdat = document.getElementById("edat");
evtEdat.addEventListener("change", () =>{
  validaEdat();
});
// Valida el telefón
const evtTelefon = document.getElementById("telefon");
evtTelefon.addEventListener("keyup", () =>{
  validaCamp("telefon", "mTelefon", /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
});
// Validar Email
const evtEmail = document.getElementById("email");
evtEmail.addEventListener("blur", () => {
  validaCamp("email", "mEmail", /(\w+[^\.]|\w+\.\w+)@\w+\.\w{2,}/i); // <= PATRO: Email estandar
});
// Validació de password
const evtPassword = document.getElementById("password");
evtPassword.addEventListener("keyup", () => {
  validaCamp("password","mPassword", /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/); // <= PATRO: min.1 majúscula, min.1 minúscula, min.1 número, min.1 caràcter especial, mínim 8 caràcters
  validarClauDePas(); // <= Missatges de validació per l'usuari (Quan és de forta la contrasenya)
});
// Valida la confirmació de password
const evtPasswordConfirm = document.getElementById("passwordConfirm");
evtPasswordConfirm.addEventListener("keyup", () =>{
  validaClauConfirmacio();
});

// Mostra la contrasenya en format text al clickar l'ull
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




// ***************************************************************************************************
// ***************************************************************************************************

// -----

// ***************************************************************************************************
// *                                       DEFINICIÓ FUNCIÓNS                                        *
// ***************************************************************************************************



// Al VALIDAR els camps, dona un missatge visible (PART 1)
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

// VALIDA PATRO PASSWORD/CONTRASENYA (PART 1)
// Validació d'un patro en petites parts (amb missatges personalitzats)
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
// VALIDA LA REPETICIÓ DE LA CONTRASENYA (PART 1)
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

// VALIDAR EDAT (PART 1)
function validaEdat() {
    
    const edat = document.getElementById("edat").value;
    const mAlert = document.getElementById("mEdat");

    const mEdat = document.getElementById("mEdat");

    // Patro de edat
    let patro = /^\S[0-9]{1,3}$/;
    const resultat = edat.match(patro);

    if (resultat && edat >= 12){
        mEdat.innerText= "La edat és VÀLIDA: => "+resultat;
        mAlert.classList.remove("alert-danger");
        mAlert.classList.add("alert-success");

    }else{
        mEdat.innerText= "Error: edat NO vàlida! (+12)";
        mAlert.classList.remove("alert-success");
        mAlert.classList.add("alert-danger");
    }
}

// -+-+-+-+-+-+-+-+-+-+-        -+-+-+-+-+-+-+-+-+-+-
// -+-+-+-+-+-+-+-+-+-+- PART 2 -+-+-+-+-+-+-+-+-+-+-
// -+-+-+-+-+-+-+-+-+-+-        -+-+-+-+-+-+-+-+-+-+-


function obrirModal() {

    const finestra = document.getElementById("dialogCookies");
    finestra.showModal();

}

function tancarModal() {
    const finestra = document.getElementById("dialogCookies");
    finestra.close();
}

function mostrarValorsGaleta(valorGaleta1, valorGaleta2, valorGaleta3) {
  console.log("===============")
  console.log("Galeta 1: " + valorGaleta1);
  console.log("Galeta 2: " + valorGaleta2);
  console.log("Galeta 3: " + valorGaleta3);
}

function seleccioCookies() {
  
let valorGaleta1 = "No seleccionada"
let valorGaleta2 = "No seleccionada"
let valorGaleta3 = "No seleccionada"

// Galeta 1
  if (document.getElementById('galeta1Refusada').checked) {
    valorGaleta1 = "Refusada";
  }
  if (document.getElementById('galeta1Acceptada').checked) {
    valorGaleta1 = "Acceptada";
  }

  // Galeta 2
  if (document.getElementById('galeta2Refusada').checked) {
    valorGaleta2 = "Refusada";
  }
  if (document.getElementById('galeta2Acceptada').checked) {
    valorGaleta2 = "Acceptada";
  }

  // Galeta 3
  if (document.getElementById('galeta3Refusada').checked) {
    valorGaleta3 = "Refusada";
  }
  if (document.getElementById('galeta3Acceptada').checked) {
    valorGaleta3 = "Acceptada";
  }

  mostrarValorsGaleta(valorGaleta1, valorGaleta2, valorGaleta3);
  tancarModal();
}

function refusarCookies() {
let valorGaleta1 = "Refusada";
let valorGaleta2 = "Refusada";
let valorGaleta3 = "Refusada";

  mostrarValorsGaleta(valorGaleta1, valorGaleta2, valorGaleta3);
  tancarModal();
}
function aceptarCookies() {

let valorGaleta1 = "Acceptada";
let valorGaleta2 = "Acceptada";
let valorGaleta3 = "Acceptada";
  mostrarValorsGaleta(valorGaleta1, valorGaleta2, valorGaleta3);
  tancarModal();
}
