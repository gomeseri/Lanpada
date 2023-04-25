let lanp = document.getElementById("lanp");
function trocar() {
  return lanp.src.indexOf("quebrada") > -1;
}
function quebra() {
  lanp.src = "../img/quebrada.jpg";
}
function on() {
  if (!trocar()) {
    lanp.src = "../img/ligada.jpg";
  }
}
function of() {
  if (!trocar()) {
    lanp.src = "../img/desligada.jpg";
  }
}
