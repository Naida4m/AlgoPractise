function arraysum(){
    let array = [4, 5, 6];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(arraysum());
