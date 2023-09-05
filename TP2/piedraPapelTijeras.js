function jugar() {
  var nombreInput = document.getElementById('nombre');
  var nombre = nombreInput.value;
  if (nombre.trim() === "") {
    alert("Por favor, ingrese su nombre antes de jugar.");
    return;
  }
  // El código de juego va aquí
  let saludo = document.getElementById("saludo");
  saludo.innerHTML="¡Hola, " + nombre + "! Comenzemos el juego.";

  let option = document.getElementById("select").value;
  document.getElementById("optionJugador").innerHTML = "La opcion del Usuario es: " + option;
  //OPCION DE LA PC
  var numDecimal = Math.random() * 3;
  var optionPC = Math.floor(numDecimal);

  const piedra = "Piedra";
  const papel = "Papel";
  const tijeras = "Tijera";

  let resultPC;
  if (optionPC === 0) {
    resultPC = "Piedra";
  } else if (optionPC === 1) {
    resultPC = "Papel";
  } else {
    resultPC = "Tijera";
  }

  if (optionPC === 0) {
    document.getElementById("optionPc").innerHTML = "La opcion de la PC es: " + resultPC;
  } else if (optionPC === 1) {
    document.getElementById("optionPc").innerHTML = "La opcion de la PC es: " + resultPC;
  } else if (optionPC === 2) {
    document.getElementById("optionPc").innerHTML = "La opcion de la PC es: " + resultPC;
  }

  if (resultPC === option) {
    document.getElementById("result").innerHTML = "Empate";;
  } else if ((resultPC === "Piedra" && option === "Tijeras") || (resultPC === "Tijera" && option === "Papel") || (resultPC === "Papel" && option === "Piedra")) {
    document.getElementById("result").innerHTML = "Gana la Computadora";
  } else {
    document.getElementById("result").innerHTML = "Gana el usuario";
  };

}
// Función para seleccionar una opción en el select según la imagen clicada
function seleccionar(opcion) {
  document.getElementById('select').value = opcion;
}


