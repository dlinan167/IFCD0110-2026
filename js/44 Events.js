// Carrega de funcions

function fesClic() {
    alert('Hem fet clic sobre el botó')
}

function fesDobleClic(){
    alert('Hem fet doble clic en aquest botó')
}

function canviaColor(){
        document.getElementById('caixa').style.borderColor = "blue";
        document.getElementById('caixa').style.backgroundColor = "red";
}

// Canvia el color fen i sortin del hover
function canviaColorMouseOver(){
        document.getElementById('caixa').style.borderColor = "green";
        document.getElementById('caixa').style.backgroundColor = "orange";
}
function canviaColorMouseLeave(){
        document.getElementById('caixa').style.Color = "black";
        document.getElementById('caixa').style.backgroundColor = "gray";
}
function fesScroll(){
        console.log(852);
        document.getElementById('caixa').style.backgroundColor = "cyan";
}
function ToggleCanviaOnOff(){
        alert('He apretat el botó de detalis/summary')
}

function msgVenvinguda(){
    alert('Bentornat')
}