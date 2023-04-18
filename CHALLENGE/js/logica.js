function encriptar() {
  var palabra = document.getElementById("txt_ingresado").value.toLowerCase();

  if (palabra.length == 0) {
    alert("ingrese una frase");
  } else var txtrncriptado = palabra.replace(/e/gim, "enter");
  var txtrncriptado = txtrncriptado.replace(/o/gim, "ober");
  var txtrncriptado = txtrncriptado.replace(/i/gim, "imes");
  var txtrncriptado = txtrncriptado.replace(/a/gim, "ai");
  var txtrncriptado = txtrncriptado.replace(/u/gim, "ufat");
  document.getElementById("txt_resultado").innerHTML = txtrncriptado;
  document.getElementById("btn_copiar").style.display = "show";
  document.getElementById("btn_copiar").style.display = "inherit";
  alert("texto desencriptado correctamente");
}

var btn = document.querySelector("#btn_encriptar");
btn.onclick = encriptar;

/*segunda parte */
function desencriptar() {
  var palabra = document.getElementById("txt_ingresado").value.toLowerCase();
  if (palabra.length == 0) {
    alert("no existe codigo que desencriptar");
  } else var txtrncriptado = palabra.replace(/enter/gim, "e");
  var txtrncriptado = txtrncriptado.replace(/ober/gim, "o");
  var txtrncriptado = txtrncriptado.replace(/imes/gim, "i");
  var txtrncriptado = txtrncriptado.replace(/ai/gim, "a");
  var txtrncriptado = txtrncriptado.replace(/ufat/gim, "u");
  document.getElementById("txt_resultado").innerHTML = txtrncriptado;
}

var btn2 = document.querySelector("#btn_desencriptar");
btn2.onclick = desencriptar;

function copiar() {
  var ver_contenido = document.querySelector("#txt_resultado");
  ver_contenido.select();
  document.execCommand("copy");
  alert("se copio corectamente");
}

var btn3 = document.querySelector("#btn_copiar");
btn3.onclick = copiar;
