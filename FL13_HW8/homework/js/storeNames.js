function storeNames() {
    let str = '[';
    for (let i = 0; i < arguments.length; i++) {
        str += `'${arguments[i]}'`;
        i + 1 === arguments.length ? str += "" : str += ", ";
    }
    str += "]"
    return str;
}
console.log(storeNames("a", "ss"));


