function convert() {
    let result = [];
    for (const element of arguments) {
        result.push(typeof element === 'number' ? `${element}` : +element);
    }
    return result;
}
console.log(convert(1, '2'));
function executeforEach(array, anFunction) {
    for (const element of array) {
        anFunction(element)
    }
}
console.log(executeforEach([]));

function mapArray(array, anFunction) {
    let result = [];
    executeforEach(array, element => {
        result.push(anFunction(+element))
    });
    return result;
}

console.log(mapArray([]));

function filterArray(array, anFunction) {
    let result = [];
    executeforEach(array, element => {
        anFunction(element) ? result.push(element) : false;
    })
    return result;
}

console.log(filterArray([]));

function containsValue(array, value) {
    let result = false;
    executeforEach(array, element => {
        if (!result) {
            element === value ? result = true : false;
        }
    })
    return result;
}

console.log(containsValue([]));

function flipOver(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

console.log(flipOver('hey world'));

function makeListFromRange(array) {
    let result = [];
    let start, end;

    if (array[1] > array[0]) {
        start = array[1];
        end = array[0];
    } else {
        start = array[0];
        end = array[1];
    }
    for (let i = 0; i < start - end + 1; i++) {
        result[i] = end + i;
    }
    return result;
}

console.log(makeListFromRange([]));


const fruits = [{ name: 'apple', weight: 0.5 }, { name: 'pineapple', weight: 2 }];

function getArrayOfKeys(array, value) {
    let result = [];
    executeforEach(array, element => {
        result.push(element[value]);
    })
    return result;
}

console.log(getArrayOfKeys(fruits, 'name'));

function substitute(array) {
    let result = [];
    let maxel = 20, minel = 10;

    mapArray(array, element => {
        result.push(element < maxel && element > minel ? '*' : element);
    })
    return result;
}

console.log(substitute([]));


const date = new Date();

function getPastDay(date, subtractDay) {
    const someDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - subtractDay);
    return someDate.getDate();
}

console.log(getPastDay(date));

function formatDate(date) {
    const NONE = '';
    const ZERO = 0;
    const ONE = 1;
    const NINE = 9;
    let newDate = `${date.getFullYear()}/${date.getMonth() + ONE}/${date.getDate()} ` +
        `${date.getHours() > NINE ? NONE : ZERO}` + `${date.getHours()}:` +
        `${date.getMinutes() > NINE ? NONE : ZERO}` + `${date.getMinutes()}`;
    return newDate;
}
console.log(formatDate(new Date('6/15/2019 09:15:00')));
console.log(formatDate(new Date()));
