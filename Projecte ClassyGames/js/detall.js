// detall

// Selecciona la de la carta del joc clickat, el pasa per sessionStorage i el mostra a la página detall.html
const joc = JSON.parse(sessionStorage.getItem("jocSeleccionat"));
const imatgeDetall = document.querySelector(".imatgeDetall figure");
const dadesDetall = document.querySelector(".dadesDetall");


// Imatge del jock
  const foto = document.createElement("img");
  foto.src = joc.imatge;
  foto.alt = joc.titol;

  imatgeDetall.append(foto);
  
  // Info del Joc
  dadesDetall.innerHTML = "<h2>" + joc.titol + "</h2><br>" +
  "<p><b>- Plataforma:</b> " + joc.plataforma + "</p>" +
  "<p><b>- Gènere:</b> " + joc.genere + "</p>" +
  "<p><b>- Any:</b> " + joc.any + "</p>"+
  "<br>"+
  "<p>- <a href='"+joc.wikiLink+"'>Visitar wiki del joc</a></p>"+
  "<br>"+
  "<div><p>" + joc.wiki + "</p></div>";
