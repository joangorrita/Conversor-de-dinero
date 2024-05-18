let moneda = parseFloat(prompt("Ingrese monto a convertir:"));
let tipoMoneda = parseInt(prompt("Indique el tipo de moneda 1.USD   2.EUR   3.GBP "));

let resultado;

switch (tipoMoneda) {
    case 1: 
        resultado = moneda * 0.0011;
        console.log(resultado);
        break;
    case 2: 
        resultado = moneda * 0.0010;
        console.log(resultado);
        break;
    case 3:
        resultado = moneda * 0.0009;
        console.log(resultado);
        break;
    default:
        let i = 0;
        while (i = 1 ){
            if (isNaN(tipoMoneda) || tipoMoneda < 1 || tipoMoneda > 3 ) {
                console.log("por favor ingrese una de las opciones indicadas  1.USD   2.EUR   3.COP");
            }
        }
        break;
}


// mirar los ultimos if

