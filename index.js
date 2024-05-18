let moneda = parseFloat(prompt("Ingrese monto a convertir:"));
let tipoMoneda = parseInt(prompt("Indique el tipo de moneda 1.USD   2.EUR   3.GBP "));

let resultado;

switch (tipoMoneda) {
    case 1: 
        resultado = Number(moneda) * 0.0011;
        console.log(resultado);
        break;
    case 2: 
        resultado = Number(moneda) * 0.0010;
        console.log(resultado);
        break;
    case 3:
        resultado = Number(moneda) * 0.0009;
        console.log(resultado);
        break;
    default:
        while (isNaN(tipoMoneda) || tipoMoneda < 1 || tipoMoneda > 3) {
            console.log("Por favor ingrese una de las opciones indicadas 1.USD   2.EUR   3.GBP");
            tipoMoneda = parseInt(prompt("Indique el tipo de moneda 1.USD   2.EUR   3.GBP "));
        }
        // ingreso una moneda valida y deberia salir del bucle y hacer lo mismo 
        switch (tipoMoneda) {
            case 1: 
                resultado = Number(moneda) * 0.0011;
                console.log(resultado);
                break;
            case 2: 
                resultado = Number(moneda) * 0.0010;
                console.log(resultado);
                break;
            case 3:
                resultado = Number(moneda) * 0.0009;
                console.log(resultado);
                break;
        }
        break;
}