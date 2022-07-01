"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTeste = 'verificar';
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 1;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
//stringTeste2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
} //precisa fazer a verificação 
function jogaErro(erro, codigo) {
    throw (`error: ${erro} code: ${codigo}`);
}
jogaErro('deu erro', 500);
