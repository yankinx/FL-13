function isBigger(a, b) {
    return a > b;
}

function getDifference(a, b) {
    return isBigger(a, b) ? a - b : false;
}

console.log(getDifference(56, 7));
