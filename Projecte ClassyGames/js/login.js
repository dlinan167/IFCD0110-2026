// Validació de les dades d'inici de sessió (username i password login)

// ***************************************************************************************************
// *                                      EVENTS LISTENERS                                        *
// ***************************************************************************************************

// Al fer unfocus al camp 'username'
const evtUsername = document.getElementById("username");
evtUsername.addEventListener("blur", () => {
  validaCamp("username", "mUsername", /^[a-zñ0-9àèìòùáéíóú]+$/i); // <= PATRO: Es permet; numeros, lletres amb accents i ñ
});

// Validació de password
const evtPassword = document.getElementById("password");
evtPassword.addEventListener("keyup", () => {
    validaCamp("password","mPassword", /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/); // <= PATRO: min.1 majúscula, min.1 número, min.1 caràcter especial, mínim 8 caràcters
    validarClauDePas(); // <= Missatges de validació per l'usuari, (return true/false si la contrasenya es valida)
});

// Toggle de password visible


// 1: Dispara l'inici de sessió (botó)
// 2: També valida quan el <form> fa submit (Evita fer un submit i pasar de pàgina, si el usuari o password no son vàlids)
const btnIniciSessio = document.getElementById("btnIniciSessio");
btnIniciSessio.addEventListener("click", function () {
    const iniciSessio = validaIniciSessio(); // <= retorna (true o false)(Vàlid o NO Vàlid)
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
    return true; // true VALIDACIÓ CORRECTA!
  } else {
    // console.log("no OK !!!");
    mAlert.innerText = "NO Vàlid";
    mAlert.classList.remove("alert-success");
    mAlert.classList.add("alert-danger");
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
// VALIDA SESSIÓ
function validaIniciSessio() {
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
    missatge.innerText = "Inici de sessió realitzat correctament!";
    return true;
  } else {
    missatge.innerText = "Sessió Incorrecte!";
    return false;
  }
}

// window onload
// VALIDACIÓ: Usuari i password trobats en la "base de dades" (usuaris.json)
async function fetchUsuarisJSON() {

  // Fetch del JSON local (usuari) (dona una llista d'Objectes amb 'username' and 'password')
  const missatge = document.getElementById("missatgeValUsuari");
  const username = document.getElementById("username").value; // <= valor del username
  const password = document.getElementById("password").value; // <= valor del password

  try {
    const resposta = await fetch("./data/usuaris.json"); // <= Busca els usuaris d'aquest fitxer
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
