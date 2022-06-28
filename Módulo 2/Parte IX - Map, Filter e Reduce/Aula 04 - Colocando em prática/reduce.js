function reduceSemInitial(arr){
    return arr.reduce(function(previous, current){
        return previous + current;
    })
}

const arr = [1,2,5];

console.log(reduceSemInitial(arr));