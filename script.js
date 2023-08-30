/**
 * Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "o" es convertida para "ober"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también
devolver una palabra encriptada para su versión original.

replace(){
    i es para que afecte mayusucalas y minusculas
    g es para toda linea u oracion
    m es para que afecte a multiples lineas o parrafos
}
 */
function encriptar(){

    var texto = document.getElementById("input").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");


    document.getElementById("muneco").style.display="none";
    document.getElementById("noText").style.display="none";
    document.getElementById("output").innerHTML=txtCifrado;
    document.getElementById('copiar').style.display= "show";
    document.getElementById('copiar').style.display= "inherit";
    document.getElementById('output').style.marginTop= "70%";
    document.getElementById('output').style.height="400px";

}

function desencriptar(){

    var texto = document.getElementById("input").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");


    document.getElementById("muneco").style.display="none";
    document.getElementById("noText").style.display="none";
    document.getElementById("output").innerHTML=txtCifrado;
    document.getElementById('copiar').style.display= "show";
    document.getElementById('copiar').style.display= "inherit";
    document.getElementById('output').style.marginTop= "70%";
    document.getElementById('output').style.height="400px";



}

function copiar(){
    var contenido = document.querySelector("#output");
    contenido.select();
    document.execCommand('copy');
    contenido.blur();
}

