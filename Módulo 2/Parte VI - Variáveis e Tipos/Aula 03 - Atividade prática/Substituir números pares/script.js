function SubstituiPares(array){
    if (!array || array.length == 0)  return -1;
    let resposta = [];

    for (let i = 0; i < array.length; i++){
        (array[i] % 2 == 0) ? resposta.push(0) : resposta.push(array[i]);
    }

    return(resposta);
}

let entrada = [];
console.log(SubstituiPares(entrada));

