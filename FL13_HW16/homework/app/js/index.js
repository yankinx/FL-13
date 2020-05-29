const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

// Your code goes here
const get_users = function (baseUrl) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${baseUrl}/users`, true);
    xhr.onloadend = function () {
        let status_post = 200;
        if (xhr.status !== status_post) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let respons = JSON.parse(xhr.response);
            delete_list_node();

            update_list_users(respons)
        }
    }
    xhr.send();
}
const post_user = function (baseUrl, objact = null) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `${baseUrl}/users`, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        let status_post = 201;
        if (xhr.status !== status_post) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    }
    xhr.send(JSON.stringify(objact));

}
const put_user = function (baseUrl, userid, objact = null) {
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', `${baseUrl}/users/${userid}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        let status_post = 204;
        if (xhr.status !== status_post) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    }
    xhr.send(JSON.stringify(objact));
}
const delete_user = function (baseUrl, userid) {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${baseUrl}/users/${userid}`);
    xhr.setRequestHeader('Authorization', 'admin');
    xhr.onload = function () {
        let status_post = 204;
        if (xhr.status !== status_post) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    }
    xhr.send();
}
const list_users = document.getElementById('list_users');
let update_list_users = function (user_list) {
    let ul = document.createElement('ul');
    user_list.forEach(element => {
        let li = document.createElement('li');
        li.setAttribute('id', element.id)
        let lable = document.createElement('lable');
        lable.innerText = element.id;
        li.appendChild(lable);
        let full_name_user = document.createElement('input');
        full_name_user.setAttribute('type', 'text');
        full_name_user.setAttribute('name', 'full_name_user');
        full_name_user.value = element.name;
        li.appendChild(full_name_user);
        let name_input = document.createElement('input');
        name_input.setAttribute('type', 'text');
        name_input.setAttribute('name', 'name_user');
        name_input.value = element.username;
        li.appendChild(name_input);
        let button_update = document.createElement('input');
        button_update.setAttribute('type', 'button');
        button_update.setAttribute('value', 'Update');
        button_update.addEventListener('click', event_update_button);
        li.appendChild(button_update);
        let button_delete = document.createElement('input');
        button_delete.setAttribute('type', 'button');
        button_delete.setAttribute('value', 'Delete');
        button_delete.addEventListener('click', event_delete_button);
        li.appendChild(button_delete);
        ul.appendChild(li);
    });
    list_users.appendChild(ul);
}
let delete_list_node = function () {
    let a = list_users.children;
    if (a[0]) {
        a[0].remove();
    }
}
let load_node = function () {
    let lable = document.createElement('lable');
    lable.innerText = 'loading.....'
    list_users.appendChild(lable);
}
const button_add_user = document.getElementById('new_user');
button_add_user.addEventListener('click', () => {
    let person = {}
    let name = document.getElementById('full_name');
    let username = document.getElementById('name');
    person.name = name.value;
    person.username = username.value;
    if (person.name && person.username) {
        name.value = '';
        username.value = '';
        delete_list_node();
        load_node()
        post_user(baseUrl, person);
        get_users(baseUrl)
    } else {
        alert('Empty  name or full name')
    }

})

let event_update_button = e => {
    let perent = e.target.parentNode;
    let elements = perent.children;
    let id = perent.id;
    let person = {
        name: elements[1].value,
        username: elements[2].value
    }
    elements[3].setAttribute('disabled', 'disabled');
    put_user(baseUrl, id, person);
    get_users(baseUrl)
}
let event_delete_button = e => {
    let perent = e.target.parentNode;
    let elements = perent.children;
    let id = perent.id;
    elements[3].setAttribute('disabled', 'disabled');
    elements[4].setAttribute('disabled', 'disabled');
    delete_user(baseUrl, id);
    get_users(baseUrl);
}
window.addEventListener('load', () => {
    load_node();
    get_users(baseUrl);
})

