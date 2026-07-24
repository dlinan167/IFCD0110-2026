// Validació de les dades d'inici de sessió (username i password login)



// ***************************************************************************************************
// *                                      EVENTS LISTENERS                                        *
// ***************************************************************************************************

// Al fer unfocus al camp 'username'
const evtUsername = document.getElementById("username");
evtUsername.addEventListener("blur", ()=>{
    // validaIniciSessio();
    validaCamp("username", "mUsername", /^[a-zñ0-9àèìòùáéíóú]+$/i);           // <= PATRO: Es permet; numeros, lletres amb accents i ñ
});
// Validació de password
const evtPassword = document.getElementById("password");
// Valida el llarg de 'password' 
evtPassword.addEventListener("keyup", ()=>{
    validaCamp("password", "mPassword", /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/);  // <= PATRO: min.1 majúscula, min.1 número, min.1 caràcter especial, mínim 8 caràcters
    validarClauDePas();                                                                   // <= Missatges de validació per l'usuari
});

// 1: Dispara l'inici de sessió (botó)
// 2: També valida quan el <form> fa submit (Evita fer un submit i pasar de pàgina, si el usuari o password no son vàlids)
const btnIniciSessio = document.getElementById("btnIniciSessio");
btnIniciSessio.addEventListener("click", function(){ 
    validaIniciSessio();                               // <= retorna (true o false)(Vàlid o NO Vàlid)
});

// ***************************************************************************************************
// ***************************************************************************************************

// -----

// ***************************************************************************************************
// *                                       DEFINICIÓ FUNCIÓNS                                        *
// ***************************************************************************************************

// FUNCIÓ: VALIDAR botó el INICI SESSIÓ
function validaCamp(id, idMissatge, patro) {
    const camp = document.getElementById(id).value;                       // <= valor del username o password (id)
    const mAlert = document.getElementById(idMissatge);                   // <= Missatge validació (Depend del camp)    
    
    // PATRO per validar:
    // let patro = ;
    let resultat = camp.match(patro);
    
    if (resultat) {
        // console.log("OK");
        mAlert.innerText= "Vàlid";
        mAlert.classList.remove("alert-danger")
        mAlert.classList.add("alert-success")
       return true;  // true VALIDACIÓ CORRECTA!
    } else {
        // console.log("no OK !!!");
        mAlert.innerText= "NO Vàlid";
        mAlert.classList.remove("alert-success")
        mAlert.classList.add("alert-danger")
        return false; // false VALIDACIÓ INCORRECTA!
    }
}

// VALIDA PATRO PASSWORD/CONTRASENYA
// Validació d'un patro mes complexe en petites parts (amb missatges personalitzats)
function validarClauDePas() {
    const camp = document.getElementById("password").value; 
    const mAlert = document.getElementById("mPassword");  

    if (camp.length<8) {
         mAlert.innerHTML = "Menys de 8 caracters - Falten:"+ (8-camp.length); // <= MIDEIX EL LLARG DE LA PASSWORD, i el mostra
    }
    if (!camp.match(/\d/)) {
        mAlert.innerHTML += "<br>Falta un número";                             //<=
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
    const username = document.getElementById("username").value;             // <= valor del username
    const password = document.getElementById("password").value;             // <= valor del password

    // VALIDACIÓ: No està buit
    if (!username.trim() || !password.trim()) {   
        missatge.innerText = "Un dels camps esta buit!"; // <= Missatge d'error
        return false;  
    }
    // VALIDACIÓ: Local Storage (usuari registrat anteriorment) && VALIDACIÓ: Usuari i password trobats JSON()
    // if ((username == localStorage.getItem("usernameSave") && password == localStorage.getItem("passwordSave")) || validaFetchUsuariLogin() == true) {
    if (validaFetchUsuariLogin() === true) {
        missatge.innerText = "Inici de sessió realitzat correctament!";
        return true;
    }else{
        missatge.innerText = "Sessió Incorrecte!";
        return false;
    }
}

async function validaFetchUsuariLogin() {
    // VALIDACIÓ: Usuari i password trobats en la "base de dades" (usuaris.json)
    // Fetch del JSON local (usuari) (dona una llista d'Objectes amb 'username' and 'password')
    const missatge = document.getElementById("missatgeValUsuari");
    const username = document.getElementById("username").value;             // <= valor del username
    const password = document.getElementById("password").value;             // <= valor del password
    
    try {
        const resposta = await fetch('./data/usuaris.json'); // adjust path if needed
        if (!resposta.ok) throw new Error('No s\'ha pogut carregar usuaris.json');
        const usuaris = await resposta.json();
        const trobat = usuaris.find(usuari => usuari.username === username && usuari.password === password); //<= (True o False) Vàlida si tant el 'username' i 'password' trobats son iguals que els del <input>
    
        if (trobat) {
            missatge.innerText = "Inici de sessió realitzat correctament!";
            return true;
        } else {
            missatge.innerText = "Sessió Incorrecte!";
            return false;
        }
    } catch (e) {
        console.error(e);
        missatge.innerText = "Error al validar usuaris localment!";
        return false;
    }
}




// ***************************************************************************************************
// ***************************************************************************************************



