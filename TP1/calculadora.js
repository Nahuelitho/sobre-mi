
    const resultado = document.getElementById("resultado");

    function calcular() {
        const option = document.getElementById("operacion").value;
        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);

        if (isNaN(num1) || isNaN(num2)) {
            resultado.innerHTML = "Ingrese números válidos";
            return;
        }

        switch(option) {
            case "suma":
                resultado.innerHTML = "Su resultado de la Suma es: "+ num1 + num2;
                break;
            case "resta":
                resultado.innerHTML ="Su resultado de la Resta es: "+ num1 - num2;
                break;
            case "division":
                if (num2 === 0) {
                    resultado.innerHTML = "No se puede dividir por cero";
                } else {
                    resultado.innerHTML ="Su resultado de la Division es: "+ num1 / num2;
                }
                break;
            case "multiplicacion":
                resultado.innerHTML ="Su resultado de la multiplicacion es: "+ num1 * num2;
                break;
            default:
                resultado.innerHTML = "Opción inválida";
                break;
        }
    }

   