function palindromo(palavra){
    if (!palavra) return "String inesxistente";
    palavra = palavra.toUpperCase();                    //não será diferenciado letras maíusculas e minúsculas
    palavra = palavra.replaceAll(" ", "");
    let array = palavra.split("");                      //transforma a string em um array
    let invertida = array.reverse();                    //inverte cada caracter do array
    invertida = invertida.join("");

    return((palavra === invertida) ? "É PALÍNDROMO" : "NÃO É PALÍNDROMO");
}

function palindromo2(palavra){
    palavra = palavra.toUpperCase();
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--){
        invertida += palavra[i];
    }
    
    return((palavra === invertida) ? "É PALÍNDROMO" : "NÃO É PALÍNDROMO");
}


console.log(palindromo("roma me tem amor"));