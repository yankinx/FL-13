// Your code goes here
const MAX_LOGIN_LENGTH = 4;
const DATE_HOURS = 20;
let users_list = {
    'User': 'UserPass',
    'Admin': 'RootPass'
}
let login = prompt('Enter login ');
if (login) {
    if (login.length >= MAX_LOGIN_LENGTH) {
        if (users_list[login]) {
            let password = prompt('Enter password');
            if (password) {
                if (users_list[login] === password) {
                    if (new Date().getHours() >= DATE_HOURS) {
                        alert('Good evening, dear ' + login + '!');
                    } else {
                        alert('Good day, dear ' + login + '!');
                    }
                } else {
                    alert('Wrong password')
                }
            } else {
                alert('Canceled')
            }
        } else {
            alert('I don’t know you');
        }
    } else {
        alert("I don't know any users having name length less than 4 symbols")
    }
} else {
    alert('Canceled')
}