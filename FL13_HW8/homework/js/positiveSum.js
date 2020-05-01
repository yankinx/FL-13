function positiveSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i] > 0 ? arguments[i] : 0;
    }
    return sum;
}

console.log(positiveSum(5, -2, 4));
