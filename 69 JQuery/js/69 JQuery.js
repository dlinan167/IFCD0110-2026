// 69 JQuery


// Amagar els elements '<p>' cuan es fa click al botó
$(document).ready(function(){ // <= Opcional pero recomenable - $(document).ready
    
    
    // Amagar per etiqueta
//   $("button").click(function(){
//     $("p").hide();
//   });



// Amagar per id
$("#boto1").click(function(){
    $("#paragraf1").hide(1000); //1000 ms (milisegons de transició)
});
$("#boto2").click(function(){
    $("#paragraf2").hide(1000);
});
$("#boto3").click(function(){
    $("#paragraf3").hide(1000);
});


// Amagar per classe
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

// LA PART '.hide(this.value)' FA TRANCICIÓ: 
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

// '.mouseover' es com el ':hover' // .mouseenter es igual
// $("#paragraf1").mouseover(function(){
//     alert("L'event mouse enter s'ha activat al fer hover sobre el paragraf amb id paragraf1");
// });

// El .hover s'activa tant quan entra com quan surt
// $("#paragraf1").hover(function(){
//     alert("L'event mouse enter s'ha activat al fer hover sobre el paragraf amb id paragraf1");
// });


// Al fer focus, li cambiem al atribut css
$("button").focus(function(){
    $(this).css("background", "red");
});
$("button").click(function(){ //Retorna al color original CSS
    $(this).css("background", "");
});


// Multiples events, en un mateix element
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


// '.fadeIn' o '.fadeOut' (Apereixer/Desapareixer)
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

// Desplegable '.slide'
$("#slideTitol").click(function(){
    $("#slideCos").slideDown(1000);
});

// Animació '.animate'
$("#botoAnimacio").click(function(){
    
    $(".caixa").show().css("position", "relative");
    $(".caixa").css({opacity:0});

    $(".caixa").animate({right:"250px", opacity:0.5}, "slow");
    $(".caixa").animate({bottom:"100px", opacity:1}, 1000); // (1000ml) 1s de temps 
    $(".caixa").animate({bottom:"+=10px", right:"+=250px", fontSize: "1.4rem"});
});

// Es poden afegir... atributs tots en cadena
$("#botoEncadena").click(function(){
    $("#pFlip").css("color","red").slideUp(500).slideDown(800);
});

// Agafar el contingut(text) del id
$("#botoAlerta").click(function(){
    alert($("#textAlerta").text());
});



// Agafar els atributs '.attr()'
$("#botoAlerta").click(function(){
    $("#mostraAtributs").text($(".caixa").attr("class"))
});


});


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