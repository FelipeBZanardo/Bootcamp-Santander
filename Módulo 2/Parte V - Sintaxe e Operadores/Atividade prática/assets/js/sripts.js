function atividade(num1, num2){
    let igual = (num1 === num2) ? '' : 'não';
    let menor10 = (num1+num2 === 10) ? 'igual a' : ((num1+num2 < 10) ? 'menor que' : 'maior que');
    let menor20 = (num1+num2 === 20) ? 'igual a' : ((num1+num2 < 20) ? 'menor que' : 'maior que');

    var resposta = `Os números ${num1} e ${num2} ${igual} são iguais. Sua soma é ${num1 + num2}, que é ${menor10} 10 e ${menor20} 20.`;
    return resposta;
}

console.log(atividade(10,10));
