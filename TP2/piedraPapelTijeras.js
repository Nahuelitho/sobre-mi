const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
  var numDecimal = Math.random() * 3;
  var numEntero = Math.floor(numDecimal);
  if (numEntero === 0) {
    return "piedra";
  } else if (numEntero === 1) {
    return "papel";
  } else if (numEntero === 2) {
    return "tijeras";
  }
}

function obtenerJugadaUsuario() {
  let num = parseInt(readlineSync.question("Ingrese un numero para jugar Piedra(0)-Papel(1)-Tijera(2): "));
  if (num === 0) {
    return "piedra";
  } else if (num === 1) {
    return "papel";
  } else if (num === 2) {
    return "tijeras";
  }
}

function determinarGanador(jugadaC, jugadaU) {
  if (jugadaC === jugadaU) {
    return "Empate";
  } else if ((jugadaC === "piedra" && jugadaU === "tijeras") ||
    (jugadaC === "tijeras" && jugadaU === "papel") ||
    (jugadaC === "papel" && jugadaU === "piedra")) {
    return "Gana la Computadora";
  } else {
    return "Gana el usuario";
  }
}

let jugadaC = obtenerJugadaComputadora();
let jugadaU = obtenerJugadaUsuario();

let resultado = determinarGanador(jugadaC, jugadaU);

console.log("El Resultado del usuario es " + jugadaU);
console.log("El Resultado de la computadora es " + jugadaC);
console.log("El Resultado final es " + resultado);

////////////////EXTRA 1////////////////

function obtenerJugadas() {
  const piedra = "piedra";
  const papel = "papel";
  const tijeras = "tijeras";
  let cantidad = parseInt(readlineSync.question("Ingrese la cantidad de veces que desea jugar: "));
  
  for(let i=0;i<cantidad;i++){
  var numDecimal = Math.random() * 3;
  var numEntero = Math.floor(numDecimal);

  let num = parseInt(readlineSync.question("Ingrese un numero para jugar Piedra(0)-Papel(1)-Tijera(2): "));
  if (num === 0) {
     console.log("El Resultado del usuario es: " + piedra);
  } else if (num === 1) {
    console.log("El Resultado del usuario es: " + papel);
  } else if (num === 2) {
    console.log("El Resultado del usuario es: " + tijeras);
  }
  if (numEntero === 0) {
     console.log("El Resultado de la computadora es: " + piedra);
  } else if (numEntero === 1) {
     console.log("El Resultado de la computadora es: " + papel);
  } else if (numEntero === 2) {
     console.log("El Resultado de la computadora es: " + tijeras);
  }
  
  if (numEntero === num) {
    console.log("Empate");
  } else if ((numEntero === 0 && num === 2) ||
    (numEntero === 2 && num === 1) ||
    (numEntero === 1 && num === 0)) {
      console.log("Gana la Computadora");
  } else {
    console.log("Gana el usuario");
  }
};
   console.log("Fin del juego gracias por jugar!")
}



