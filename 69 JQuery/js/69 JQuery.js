// 69 JQuery


$(document).ready(function(){ // <= Opcional pero recomenable - $(document).ready
    
    
    // - Amagar els elements '<p>' cuan es fa click al botó
    // - Amagar per etiqueta
//   $("button").click(function(){
//     $("p").hide();
//   });



// - Amagar per id
$("#boto1").click(function(){
    $("#paragraf1").hide(1000); //1000 ms (milisegons de transició)
});
$("#boto2").click(function(){
    $("#paragraf2").hide(1000);
});
$("#boto3").click(function(){
    $("#paragraf3").hide(1000);
});


// - Amagar per classe
$("#botoImparells").click(function(){
    $(".imparell").hide(1000);
});
$("#botoParells").click(function(){
    $(".parell").hide(1000);
});

// .this
$("#aquest").click(function(){
    $(this).hide(1000);
});

// - LA PART '.hide(this.value)' FA TRANCICIÓ: 
// $("#aquest").click(function(){
//     $(this).hide(this.value);
// });


// Mostrar el valor seleccionat del <select> a <p id="demoCoches">
$("#fCoches").change(function(){
    // let coche = $("#fCoches").val(); <= No necessari
    $("#demoCoches").text(this.value);
});

// Al fer doble click amaga els '<p>' que es fa click
// $("p").dblclick(function(){
//     $(this).hide();
// });

// - '.mouseover' es com el ':hover' // .mouseenter es igual
// $("#paragraf1").mouseover(function(){
//     alert("L'event mouse enter s'ha activat al fer hover sobre el paragraf amb id paragraf1");
// });

// El .hover s'activa tant quan entra com quan surt
// $("#paragraf1").hover(function(){
//     alert("L'event mouse enter s'ha activat al fer hover sobre el paragraf amb id paragraf1");
// });


// - Al fer focus, li cambiem al atribut css
$("button").focus(function(){
    $(this).css("background", "red");
});
$("button").click(function(){ //Retorna al color original CSS
    $(this).css("background", "");
});


// - Multiples events, en un mateix element
$("p").on({
    click:function(){
        $(this).css("background", "green")
    },
    dblclick:function(){
        $(this).css("background", "red")
    },
    mouseenter:function(){
        $(this).css("color", "orange")
    },
    mouseleave:function(){
        $(this).css("color", "")
    }

});


$("#botoMostrar").click(function(){
    $("p").show(1000);    //1000 ms (milisegons de transeció)
});


// - '.fadeIn' o '.fadeOut' (Apereixer/Desapareixer)
$("#botoFadeIn").click(function(){
    $(".blau").fadeIn("slow");
    $(".vermell").fadeIn("fast");
    $(".groc").fadeIn(1000);
    $(".cyan").fadeIn(3500);
});
$("#botoFadeOut").click(function(){
    $(".blau").fadeOut("slow");
    $(".vermell").fadeOut("fast");
    $(".groc").fadeOut(1000);
    $(".cyan").fadeOut(3000);
});

// - Desplegable '.slide'
$("#slideTitol").click(function(){
    $("#slideCos").slideDown(1000);
});

// - Animació '.animate'
$("#botoAnimacio").click(function(){
    
    $(".caixa").show().css("position", "relative");
    $(".caixa").css({opacity:0});

    $(".caixa").animate({right:"250px", opacity:0.5}, "slow");
    $(".caixa").animate({bottom:"100px", opacity:1}, 1000); // (1000ml) 1s de temps 
    $(".caixa").animate({bottom:"+=10px", right:"+=250px", fontSize: "1.4rem"});
});

// - Es poden afegir... atributs tots en cadena
$("#botoEncadena").click(function(){
    $("#pFlip").css("color","red").slideUp(500).slideDown(800);
});

// - Agafar el contingut(text) del id
$("#botoAlerta").click(function(){
    alert($("#textAlerta").text());
});



// - Agafar els atributs '.attr()'
$("#botoAlerta").click(function(){
    $("#mostraAtributs").text($(".caixa").attr("class"));
});

// - Afegir text()/html()/val()
$("#botoAfegeix").click(function(){
// .text()
    $("#idText").text("Aquest es un text afegit amb el mètode '.text()'");
// .html()
$("#idHTML").html("<b style = 'color:blue'> Aquest es un html afegit amb el mètode '.html()'</b>");
// .val() <= sobreescriu el valors (value=) de formulari (<input>)
$("#idVal").val("Aquest es el nou valor! gràcies al '.val()'");
});

// - Afegir/Modificar atributs
$("#botoAtribut").click(function(){
    $("a").text("Enllaç d'internet: canviat a => (www.google.com)");
    $("a").css("background", "pink");


    // $("a").attr("href", "https://www.google.com/").attr("target", "_blank");
    $("a").attr({"href":"https://www.google.com/","target":"_blank"}); //El mateix, En llista

    // Els podem canviar utilitzant amb variables
    let pagina = prompt("Digue'm el nom de la pàgina"); 
     $("a").text(pagina);


    // Podem canviar els atributs utilitzant un Objecte
    let adreça = {
        "href":"https://campus.cetpenedes.cat",
        "target":"_blank",
        "title": "CET PENEDES!"
    };
     $("a").attr(adreça);

});

// - Afegir elements amb      '.append' <= (Inserta contingut al final) '.prepend' <= (Inserta contingut al principi)
$("#botoContingut").click(function(){

    $("#refElements").append("--Text al Final");
    $("#refElements").prepend("Text a l'Inici--");

    //el id, Es pot posar amb variables  (p, h3, *, etc...)
    let element = prompt("Posa el element on vols afegir 'Text a l'Inici--' i '--Text al Final'");
    $(element).append("--Text al Final");
    $(element).prepend("Text a l'Inici--");
});


// - Afegir Etiquetes HTML (elements HTML) amb  '.append' o '.prepend'
$("#botoEtiquetes").click(function(){

    // manera amb jquery // 1
    $("#refEtiquetes").append("<p><b>Això es un nou paragraf 'b'</b></p>"); //Una línea per crear i afegir element HTML

    // manera amb javascript // 4
    const LlocOnPosarElement = document.getElementById("refElements");
    const element = document.createElement("p");
    element.innerText="Nou paràgraf amb JavaScript";
    LlocOnPosarElement.appendChild(element);
});

// - Multiples elements afegits amb jquery
$("#boto3Elements").click(function(){
  let text1 = "<p> Aquest es el element 1 </p>";               // <= Create element with HTML 
  let text2 = "<div> Aquest es el element 2 </div>";   
  let text3 = "<p> Aquest es el element 3 </p>";

  $("#ref3Elements").append(text1, text2, text3);      // Append the new elements 
  
  //  Es pot afegir en llista
  let llista=[];
  llista.push(text1);
  llista.push(text2);
  llista.push(text3);
  $("#refLlistaElements").append(llista);
});

// - Afegir elements amb '.before()' o '.after()' (exemple a un menú)
$("#botoAfegirAMenu").click(function(){

    // .append()
  $("#refMenu").append(
    "<li>Arros</li>", 
    "<li>Vedella estofada</li>", 
    "<li>Suc de taronja</li>" ); // Afegits com FILLS del <ul>-(#refMenu)

// .before() o after
  $("#refMenu").before(
    "<li>Burger</li>", 
    "<li>Fries Chips</li>", 
    "<li>Gelat Oreo</li>"); // Afegits com GERMÀS del <ul>-(#refMenu)
});

// - Eliminar elements amb '.remove()' o '.empty()'
// .remove()
$("#botoRemove").click(function(){
    $("ul").remove();
    $("div").remove(".caixa"); // Es pot filtrar que s'elimina
});
// .empty()
$("#botoEmpty").click(function(){
    $("ul").empty();
});

// - Afegir classe CSS a elements
$("#botoAfegirClasse").click(function(){
    // $("h3, p").addClass("cyan"); // <=
    
    // $("h3").removeClass("cyan"); // Esborrar classe CSS

    $("h3").toggleClass("cyan"); // Posar/Quitar classe   (Interruptor)
});


//!!  jQuery Dimension Methods     (DETECTAR DIMENSIONS D'ELEMENTS AMB EL JQUERY)

$("#botoDimensions").click(function(){
    $(".caixa").css("fontSize","15px")
    $(".caixa").html("Alçada: "+$(".caixa").height()+"<br>Amplada: "+$(".caixa").width()) //Mostra les dimensions de la classe 'caixa'
});
// - Canvia dimensions
$("#botoCanviaDimensions").click(function(){
    $(".cyan").width(150).height(100);
});

// Amagar tot el <main>  //Estrictura de pares/fills   (example de W3Schools)
$("#btnMain").click(function(){
    $("main").empty();
    $("main").append("<div class='arbre' id='ancestre'>ancestre</div>"); // Nivell 1: Ancestre/Avi

    $("#ancestre").append("<ul class='arbre' id='pare'>pare</ul>");  // Nivell 2: Pare

    $("#pare").append(                                 // Nivell 3: Fill
        "<li class='arbre' id='fill1'>Fill 1</li>", 
        "<li class='arbre' id='fill2'>Fill 2</li>"
    );
    
                                                        // Nivell 4: Net
    $("#fill1").append(
        "<span class='arbre' id='net11'>net 11</span>",
        "<span class='arbre' id='net12'>net 12</span>"
    )
    $("#fill2").append(
        "<b class='arbre' id='net21'>net 21</b>",
    )

    $("main").append("<button id='botoPare'>Busca pare</button>");  //Botó: Busca pare
    $("main").append("<button id='botoFills'>Busca fills</button>");  //Botó: Busca fills
});

// ===> BUSCAR Pare:
$(document).on("click", "#botoPare", function(){
    let pare = prompt("Posa el element del que vols saber el seu pare");
    $(pare).parent().css({"border": "0.45rem solid #ff0000"});
});

// ===> BUSCAR Fills:
$(document).on("click", "#botoFills", function(){
    let fill = prompt("Posa el element del que vols saber el seus fills");
    $(fill).children().css({"border": "0.45rem solid #00ff55"});
});

// Destacar el pare que mirem del arbre amb el mouse     // WIP
// $(".arbre").mouseenter(function(){
//     $(this).parent().css({"border": "0.5rem solid #ff0000", "color": "red"});
// });

}); // <= .ready



// ***************************************************************************************************
// ***************************************************************************************************

// -----

// ***************************************************************************************************
// *                                       DEFINICIÓ FUNCIÓNS                                        *
// ***************************************************************************************************





// ***************************************************************************************************
// ***************************************************************************************************





















// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ TEMA CLAR / TEMA FOSC -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

window.addEventListener("load", function(){ // Quan carrega la pàgina/finestra mostra el tema guardat
    cambiaTema(localStorage.tema);
});

// Seleccionar el tema
document.getElementById("tema").addEventListener("change", function(){
    const tema = document.getElementById("tema").value;
    cambiaTema(tema);
});

// 
const bodyColor = document.getElementById("body");
function cambiaTema(tema) {
    if (tema == "dark") {
        bodyColor.classList.remove("light");  // <= Quita tema 'light'
        bodyColor.classList.add("dark");      // <= Posa tema 'dark'
        localStorage.setItem("tema", "dark"); // <= Guarda l'estat tema 'dark'
        // TEMA ACTUAL: DARK
    } else {
        bodyColor.classList.remove("dark");
        bodyColor.classList.add("light");
         localStorage.setItem("tema", "light");
        // TEMA ACTUAL: LIGHT
    } 
}