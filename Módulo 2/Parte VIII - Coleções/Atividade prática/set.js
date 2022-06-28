/*Atividade 2: Set
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], rendimentos outro array apenas com valores únicos. */

const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
const mySet = new Set(myArray);

/*let myNewArray = [];

for (let valor of mySet){
    myNewArray.push(valor);
}*/

let myNewArray = [...mySet]; 

console.log(myNewArray);


