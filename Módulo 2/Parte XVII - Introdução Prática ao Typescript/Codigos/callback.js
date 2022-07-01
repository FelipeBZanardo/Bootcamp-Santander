"use strict";
function somaValoresNumericosTratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function printaValoresNumericosT(numero1, numero2) {
    console.log(numero1 + numero2);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somaValoresNumericosTratar(1, 3, dividirPorEleMesmo));
