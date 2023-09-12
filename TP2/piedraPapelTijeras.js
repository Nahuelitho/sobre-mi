let resultEmpate = 0;
let resultCompu = 0;
let resultUsuario = 0;
let total = 0;


function reset() {
  resultEmpate = 0;
  resultCompu = 0;
  resultUsuario = 0;
  total = 0;

  // Reinicia las tablas
  document.getElementById("resultU").innerHTML = "Usuario: 0";
  document.getElementById("resultPc").innerHTML = "Computadora: 0";
  document.getElementById("resultE").innerHTML = "Empate: 0";

  // Restablece el mensaje de advertencia
  let adver = document.getElementById("advertencia");
  adver.innerHTML = "El Juego es al mejor de 5";

  // Limpia los resultados anteriores
  document.getElementById("saludo").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("optionJugador").innerHTML = "";
  document.getElementById("optionPc").innerHTML = "";
  //limpio el nombre//
document.getElementById('nombre').value = "";
}


function jugar() {
  if (total !== 5 && resultCompu !== 3 && resultUsuario !== 3) {
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value;
    if (nombre.trim() === "") {
      alert("Por favor, ingrese su nombre antes de jugar.");
      return;
    }

    let saludo = document.getElementById("saludo");
    saludo.innerHTML = "¡Hola, " + nombre + "! Comenzemos el juego.";

    let adver = document.getElementById("advertencia");
    adver.innerHTML = "El Juego es al mejor de 5";

    let option = document.getElementById("select").value;
    document.getElementById("optionJugador").innerHTML = "La opcion del Usuario es: " + option;

    //OPCION DE LA PC
    var numDecimal = Math.random() * 3;
    var optionPC = Math.floor(numDecimal);


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
      document.getElementById("result").innerHTML = "Empate";
      resultEmpate = resultEmpate + 1;
      document.getElementById("resultE").innerHTML = "Empate: " + resultEmpate + " ";
      total += 1;
    } else if ((resultPC === "Piedra" && option === "Tijeras") || (resultPC === "Tijera" && option === "Papel") || (resultPC === "Papel" && option === "Piedra")) {
      document.getElementById("result").innerHTML = "Gana la Computadora";
      resultCompu = resultCompu + 1;
      document.getElementById("resultPc").innerHTML = "Computadora: " + resultCompu + " ";
      total += 1;
    } else {
      document.getElementById("result").innerHTML = "Gana el usuario";
      resultUsuario = resultUsuario + 1;
      document.getElementById("resultU").innerHTML = "Usuario: " + resultUsuario + " ";
      total += 1;
    };

  }
  if (total == 5 || resultCompu == 3 || resultUsuario == 3) {
    let adver = document.getElementById("advertencia");
    if (resultCompu > resultUsuario) {
      adver.innerHTML = "FIN DEL JUEGO! Gano la computadora, porfavor resetee para seguir jugando";
    } else if (resultUsuario > resultCompu) {
      adver.innerHTML = "FIN DEL JUEGO! Gano el Usuario, porfavor resetee para seguir jugando"
    } else {
      adver.innerHTML = "Empate!"
    }
  }
}



// Función para seleccionar una opción en el select según la imagen clicada
function seleccionar(opcion) {
  document.getElementById('select').value = opcion;
}


