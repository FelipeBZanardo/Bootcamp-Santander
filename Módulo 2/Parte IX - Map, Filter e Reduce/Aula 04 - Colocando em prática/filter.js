function filtro(arr){
    return arr.filter(function(item){
        if (item % 2 == 0){
            return item;
        }
    })
}

const numbers = [1,2,3,4,5,6,8];

console.log(filtro(numbers));