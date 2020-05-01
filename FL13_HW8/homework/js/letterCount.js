function letterCount(str, letter) {
    [str, letter] = [str, letter].map(lett => lett.toLowerCase());
    let num = 0;
    for (const lett of str) {
        lett === letter ? num++ : false;
    }
    return num;
}

console.log(letterCount("", "l"));
