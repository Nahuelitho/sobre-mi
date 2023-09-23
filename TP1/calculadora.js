
const resultado = document.getElementById("resultado");
function reset() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    resultado.innerHTML = "";
}
function suma(num1, num2) {

    return num1 + num2;
}
function resta(num1, num2) {

    return num1 - num2;
}
function multiplicacion(num1, num2) {

    return num1 * num2;
}
function division(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        alert('no puede dividir por cero');
    } else {
        return num1 / num2
    }
}
function calcular() {
    const option = document.getElementById("operacion").value;
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "Ingrese números válidos";
        return;
    }

    switch (option) {
        case "suma":
            resultado.innerHTML = "Su resultado de la Suma es: " + suma(num1, num2);
            break;
        case "resta":
            resultado.innerHTML = "Su resultado de la Resta es: " + resta(num, num2);
            break;
        case "division":
            resultado.innerHTML = "Su resultado de la Division es: " + division(num1, num2);
            break;
        case "multiplicacion":
            resultado.innerHTML = "Su resultado de la multiplicacion es: " + multiplicacion(num1, num2);
            break;
        default:
            resultado.innerHTML = "Opción inválida";
            break;
    }
}

