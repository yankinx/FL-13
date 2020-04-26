let TWO = 2
let str = prompt('Your string') + '';
let start_str = 0, end_str = str.length - 1;
for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ') {
        start_str++;
    } else {
        break;
    }
}
for (let index = end_str; index > 0; index--) {
    if (str[index] === ' ') {
        end_str--;
    } else {
        break;
    }
}
if (start_str <= end_str) {
    if ((end_str - start_str) % TWO === 0) {
        let midel = (end_str - start_str) / TWO;
        alert(str[midel + start_str++])
    } else {
        let midel = Math.trunc((end_str - start_str) / TWO);
        alert(str[start_str + midel] + str[start_str + ++midel]);
    }
} else {
    alert('Invalid value');
}
