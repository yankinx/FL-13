// TODO: Your code goes here
function assign() {
    let obj = {};
    for (const element of arguments) {
        for (const key in element) {
            if (!obj.hasOwnProperty(key)) {
                obj[key] = element[key];
            }
        }
    }
    return obj;
}
