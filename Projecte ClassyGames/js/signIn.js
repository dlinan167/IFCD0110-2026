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



// Guarda en variable la llista d'usuaris al carregar la pàgina
window.addEventListener("load", function () {
  fetchUsuarisJSON();
});

// Evitar tancar la pestanya per accident i esborrar les dades del formulari
// window.addEventListener("beforeunload", (e) => {
//   if (!validaUsuariNou()) {
//     e.preventDefault();
//   }
// });

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
  const camp = document.getElementById("password").value;   // <-- Camp de contrasenya
  const mAlert = document.getElementById("mPassword");      // <-- Missatge de validació del patro contrasenya
  const mFortalesa = document.getElementById("mFortalesa"); // <-- Missatge alerta fortalesa

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
  
  // Indicar fortalesa de contrasenya (WIP, provisional millorable)
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


// VALIDA. Usuari nou
function validaUsuariNou() {
  const missatge = document.getElementById("missatgeValUsuari");
  const username = document.getElementById("username").value.trim(); // <=
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value.trim();
  const usuaris = obtenirUsuarisLocalStorage(); // <= llista d'usuaris LocalStorage

  // VALIDACIÓ: No està buit
  if (!username.trim() || !password.trim()) {
    missatge.innerText = "Un dels camps esta buit!"; // <= Missatge d'error
    return false;
  }
  // VALIDACIÓ: Local Storage (Usuari existeix en local storage?)
  function obtenirUsuarisLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem("usuarisJSON")) || [];
    } catch (e) {
      return [];
    }
}

  if (usuaris.some(usuari => usuari.username == username || usuari.email == email)) {
    missatge.innerText = "L'usuari o el correu ja existeix!";
    return false;
  }

  if (  // VALIDACIÓ FINAL: Valida el camps amb els patrons que correponen:
    validaCamp("username", "mUsername", /^[a-zñ0-9àèìòùáéíóú]+$/i) &&
    validaCamp("password", "mPassword", /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/) &&
    validaCamp("email", "mEmail", /(\w+[^\.]|\w+\.\w+)@\w+\.\w{2,}/i) &&
    validaClauConfirmacio()
  ) {
    // --> USUARI NOU <--
    const ara = new Date().toISOString();
    const nouUsuari = {
      id: usuaris.length + 1,
      username,
      password,
      rol: "user",
      actiu: true,
      nom: username,
      email,
      emailVerificat: false,
      preferencies: {
        idioma: "ca",
        tema: "light",
        notificacions: true
      },
      preferits: [],
      registre: {
        dataRegistre: ara,
        dataActualitzacio: ara
      }
    };

    usuaris.push(nouUsuari); // Guarda nou usuari al local storage (l'usuari amb un format emulant el .json)
    localStorage.setItem("usuarisJSON", JSON.stringify(usuaris));
    missatge.innerText = "Usuari nou registrat correctament!";
    return true;
  } else {
    missatge.innerText = "L'usuari no es vàlid per registrar!";
    return false;
  }
}

// window onload
async function fetchUsuarisJSON() {
  // VALIDACIÓ: Usuaris trobats en la "base de dades" (usuaris.json)
  // Fetch del JSON local (usuari) (dona una llista d'Objectes amb 'username' and 'password')
  if (localStorage.getItem("usuarisJSON")) { // if: evita sobreescriure la variable 'usuarisJSON' si ja tenim una llista d'ells en local storage
    return true;
  }

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