//------------------------------------------------------------------------------------
//1º caso: somando e subtraindo usando currentNumber:
var currentNumberWrapper1 = document.getElementById('currentNumber1');
var currentNumber1 = 0;

function increment1(){
    currentNumber1 = currentNumber1 + 1;
    currentNumberWrapper1.innerHTML = currentNumber1;
}

function decrement1(){
    currentNumber1 = currentNumber1 - 1;
    currentNumberWrapper1.innerHTML = currentNumber1;
}
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
//2º caso: somando e subtraindo usando addEventListener:
var currentNumberWrapper2 = document.getElementById('currentNumber2');
var currentNumber2 = 0;

document.getElementsByName('subtrair2').addEventListener('click', decrement2());
document.getElementByName('adicionar2').addEventListener('click', increment2());

function increment2(){
    currentNumber2 = currentNumber2 + 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
}

function decrement2(){
    currentNumber2 = currentNumber2 - 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
}
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
//3º caso: contador de 0 a 10 somente:
var currentNumberWrapper3 = document.getElementById('currentNumber3');
var currentNumber3 = 0;

function increment3(){
    if (currentNumber3 < 10){
        currentNumber3 = currentNumber3 + 1;
    }
    currentNumberWrapper3.innerHTML = currentNumber3;
}

function decrement3(){
    if (currentNumber3 > 0){
        currentNumber3 = currentNumber3 - 1;
    }
    currentNumberWrapper3.innerHTML = currentNumber3;
}
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
//4º caso: mudando a cor para números negativos:
var currentNumberWrapper4 = document.getElementById('currentNumber4');
var currentNumber4 = 0;

function increment4(){
    currentNumber4 = currentNumber4 + 1;
    if (currentNumber4 >= 0){
        document.getElementById('currentNumber4').style.color = 'black';
    }
    currentNumberWrapper4.innerHTML = currentNumber4;
}

function decrement4(){
    currentNumber4 = currentNumber4 - 1;
    if (currentNumber4 < 0){
        document.getElementById('currentNumber4').style.color = 'red';
    }
    currentNumberWrapper4.innerHTML = currentNumber4;
}
//------------------------------------------------------------------------------------