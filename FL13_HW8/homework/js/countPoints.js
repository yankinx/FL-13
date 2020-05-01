function countPoints() {
    let sumpoints = 0;
    for (const iterator of arguments) {
        if (iterator[0] === iterator[2]) {
            sumpoints++;
        } else {
            iterator[0] > iterator[2] ? sumpoints += 3 : false;
        }
    }
    return sumpoints
}

console.log(countPoints("6:5", "5:4", "5:5", "6:5", "5:5", "2:5"));
