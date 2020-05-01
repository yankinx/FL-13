function positiveSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] > 0 ? array[i] : 0;
    }
    return sum;
}

console.log(positiveSum([5, -2, 4, 5]));
