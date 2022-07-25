var ico = document.getElementsByTagName("img");

for(var i=0; i<ico.length; i++){
    ico[i].addEventListener("mouseover", entrar);
    ico[i].addEventListener("mouseout", salir);
}
var colores = ["#f53b57","#c4ff33","#33ffca", "#3386ff", "#9c33ff"];

function entrar(e){
    var boton_pulsado = e.target.id;
    document.getElementById(boton_pulsado).style.background = colores[boton_pulsado];
    document.getElementById(pop[boton_pulsado]).style.visibility = "visible";
    document.body.style.background = colores[boton_pulsado];
    
}
function salir(e){
    var boton_pulsado2 = e.target.id;
    document.getElementById(boton_pulsado2).style.background = "white";
    document.getElementById(pop[boton_pulsado2]).style.visibility = "hidden";
    document.body.style.background = "white";
}

window.onload = function(){
        alert("Acerca el cursor sobre cualquier icono");
}
