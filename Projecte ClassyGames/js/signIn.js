// Validació de les dades d'un usuari nou (username i password login)

// ***************************************************************************************************
// *                                      EVENTS LISTENERS                                        *
// ***************************************************************************************************

// Al fer unfocus al camp 'username'
const evtUsername = document.getElementById("username");
evtUsername.addEventListener("blur", () => {
  // validaIniciSessio();
  validaCamp("username", "mUsername", /^[a-zñ0-9àèìòùáéíóú]+$/i); // <= PATRO: Es permet; numeros, lletres amb accents i ñ
});
// Validació de password
const evtPassword = document.getElementById("password");
// Valida el llarg de 'password'
evtPassword.addEventListener("keyup", () => {
  validaCamp("password","mPassword", /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/); // <= PATRO: min.1 majúscula, min.1 número, min.1 caràcter especial, mínim 8 caràcters
  validarClauDePas(); // <= Missatges de validació per l'usuari
});
// Valida la confirmació de password
const evtPasswordConfirm = document.getElementById("passwordConfirm");
evtPasswordConfirm.addEventListener("keyup", () =>{
  validaClauConfirmacio();
});

// Validar Email
const evtEmail = document.getElementById("email");
evtEmail.addEventListener("blur", () => {
  validaCamp("email", "mEmail", /(\w+[^\.]|\w+\.\w+)@\w+\.\w{2,}/i); // <= PATRO: Email estandar
});

// 1: Dispara el registrat d'un usuari nou (botó)
// 2: També valida quan el <form> fa submit (Evita fer un submit i pasar de pàgina, si el usuari o password no son vàlids)
const btnRegistrarUsuari = document.getElementById("btnRegistrarUsuari");
btnRegistrarUsuari.addEventListener("click", function () {
    validaUsuariNou(); // <= retorna (true o false)(Vàlid o NO Vàlid)
});

// Guarda en variable la llista d'usuaris al carregar la pàgina
window.addEventListener("load", function () {
  fetchUsuarisJSON();
});

// ***************************************************************************************************
// ***************************************************************************************************

// -----

// ***************************************************************************************************
// *                                       DEFINICIÓ FUNCIÓNS                                        *
// ***************************************************************************************************

// FUNCIÓ: VALIDAR botó el INICI SESSIÓ
function validaCamp(id, idMissatge, patro) {
  const camp = document.getElementById(id).value; // <= valor del username o password (id)
  const mAlert = document.getElementById(idMissatge); // <= Missatge validació (Depend del camp)

  // PATRO per validar:
  // let patro = ;
  let resultat = camp.match(patro);

  if (resultat) {
    // console.log("OK");
    mAlert.innerText = "Vàlid";
    mAlert.classList.remove("alert-danger");
    mAlert.classList.add("alert-success");
    document.getElementById(id).style.borderColor = "green";
    return true; // true VALIDACIÓ CORRECTA!
  } else {
    // console.log("no OK !!!");
    mAlert.innerText = "NO Vàlid";
    mAlert.classList.remove("alert-success");
    mAlert.classList.add("alert-danger");
    document.getElementById(id).style.borderColor = "red";
    return false; // false VALIDACIÓ INCORRECTA!
  }
}

// VALIDA PATRO PASSWORD/CONTRASENYA
// Validació d'un patro mes complexe en petites parts (amb missatges personalitzats)
function validarClauDePas() {
  const camp = document.getElementById("password").value;
  const mAlert = document.getElementById("mPassword");

  if (camp.length < 8) {
    mAlert.innerHTML = "Menys de 8 caracters - Falten:" + (8 - camp.length); // <= MIDEIX EL LLARG DE LA PASSWORD, i el mostra
  }
  if (!camp.match(/\d/)) {
    mAlert.innerHTML += "<br>Falta un número"; //<=
  }
  if (!camp.match(/[A-Z]/)) {
    mAlert.innerHTML += "<br>Falta una lletra majúscula";
  }
  if (!camp.match(/[^a-z0-9]+/i)) {
    mAlert.innerHTML += "<br>Falta una símbol";
  }
}
// VALIDA LA REPETICIÓ DE LA CONTRASENYA
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


// VALIDA si el usuari ja existeix
function validaUsuariNou() {
  const missatge = document.getElementById("missatgeValUsuari");
  const username = document.getElementById("username").value; // <= valor del username
  const password = document.getElementById("password").value; // <= valor del password

  // VALIDACIÓ: No està buit
  if (!username.trim() || !password.trim()) {
    missatge.innerText = "Un dels camps esta buit!"; // <= Missatge d'error
    return false;
  }
  // && VALIDACIÓ: Usuari i password trobats al JSON()
  const usuarisJSON = localStorage.getItem("usuarisJSON");
  let usuaris = [];
  
  if (usuarisJSON) {
    usuaris = JSON.parse(usuarisJSON);
  } else {
    missatge.innerText = "Error al carregar el usuari!";
  }
// let trobat = usuaris.find(usuari => usuari.username === username && usuari.password === password); WIP 
  let trobat = false;
  for (usuari of usuaris) {
    if (usuari.username === username && usuari.password === password) {  //<= (True o False) Vàlida si tant el 'username' i 'password' trobats al JSON son iguals que els del <input>
      trobat = true;   
    }
  }

  // VALIDACIÓ: Local Storage (usuari registrat anteriorment)
  if (
    (username == localStorage.getItem("usernameSave") && password == localStorage.getItem("passwordSave")) || trobat == true) {
    missatge.innerText = "Aquest usuari ja existeix!";
    return false;
    

  } else if( // VALIDACIÓ FINAL: Valida els camps abans de registrar el usuari amb els patrons que corresponen: Usuari, Password, Email...
    validaCamp("username", "mUsername", /^[a-zñ0-9àèìòùáéíóú]+$/i) == true && 
    validaCamp("password","mPassword", /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/) == true &&
    validaCamp("email", "mEmail", /(\w+[^\.]|\w+\.\w+)@\w+\.\w{2,}/i) == true &&
    validaClauConfirmacio() == true
){
    missatge.innerText = "Usuari nou registrat correctament!";
    // REGISTRA EL USUARI NOU (al local storage):



    // let usernameSave+=usernameSave+","+nousUsuari;
    // let temporal=localStorage.getItem(usernameSave);
    // temporal.split(",");


    // localStorage.setItem("usernameSave", Todo:WIP );  // Llista [,] dels usuaris guardats (local storage)
    
    return true;
  }else{
    missatge.innerText = "L'usuari no es vàlid per registrar!";
    return false;
  }
}

// window onload
async function fetchUsuarisJSON() {
  // VALIDACIÓ: Usuari i password trobats en la "base de dades" (usuaris.json)
  // Fetch del JSON local (usuari) (dona una llista d'Objectes amb 'username' and 'password')
  const missatge = document.getElementById("missatgeValUsuari");
  const username = document.getElementById("username").value; // <= valor del username
  const password = document.getElementById("password").value; // <= valor del password

  try {
    const resposta = await fetch("./data/usuaris.json"); // adjust path if needed
    if (!resposta.ok) throw new Error("No s'ha pogut carregar usuaris.json");
    const usuaris = await resposta.json();
    const stringUsuaris = JSON.stringify(usuaris);
    localStorage.setItem("usuarisJSON", stringUsuaris); // Guardar al storage la llista d'usaris del JSON
  } catch (e) {
    console.error(e);
    missatge.innerText = "Error al carregar els usuaris localment!";
    return false;
  }
}


// ***************************************************************************************************
// ***************************************************************************************************

