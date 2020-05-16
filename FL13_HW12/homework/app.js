const root = document.getElementById('root');
const TWO = 2;
function create_book_list() {
    let books = JSON.parse(localStorage.getItem('books'));
    let list = document.createElement('ul');
    list.setAttribute('id', 'books');
    list.className = 'books';
    Object.keys(books).forEach(ele => {
        let el = document.createElement('li');
        let a = document.createElement('a');
        let button = document.createElement('button');
        button.setAttribute('href', `?id=${ele}#edit`)
        button.innerText = 'Редактировать'
        a.setAttribute('href', `?id=${ele}#preview`);
        a.innerHTML = books[ele].name;
        el.appendChild(a);
        el.appendChild(button);
        list.appendChild(el);
    })
    return list;
}
function create_page() {
    let main_cont = document.createElement('div');
    main_cont.className = 'conetnt';
    let book = document.createElement('div');
    book.className = 'block book_list';
    let rihgt_bar = document.createElement('div');
    rihgt_bar.className = 'block';
    let add_edit = document.createElement('div');
    add_edit.className = 'edit add';
    add_edit.setAttribute('id', 'constuctor');
    let buttom = document.createElement('button');
    buttom.setAttribute('id', 'add_book')
    buttom.setAttribute('href', 'index.html#add')
    buttom.innerHTML = 'Добавить книгу';
    function create_preview_book() {
        let preview = document.createElement('div');
        preview.className = 'preview';
        preview.setAttribute('id', 'preview')
        let name_book = document.createElement('h2');
        let book_outor = document.createElement('span');
        let book_img = document.createElement('img');
        book_img.setAttribute('src', '#');
        let plot = document.createElement('p');
        preview.appendChild(name_book);
        preview.appendChild(book_outor);
        preview.appendChild(book_img);
        preview.appendChild(plot);
        rihgt_bar.appendChild(preview)
    }
    function create_constuctior_book() {
        let form = document.createElement('form');
        form.className = 'add_book'
        let lable = document.createElement('lable')
        let input_name = document.createElement('input');
        input_name.setAttribute('required', 'required')
        lable.innerText = 'Имя книги:';
        lable.appendChild(input_name);
        form.appendChild(lable);
        lable = document.createElement('lable')
        input_name = document.createElement('input');
        input_name.setAttribute('required', 'required')
        lable.innerText = 'Автор:';
        lable.appendChild(input_name);
        form.appendChild(lable);
        lable = document.createElement('lable')
        input_name = document.createElement('input');
        input_name.setAttribute('required', 'required')
        lable.innerText = 'Сслыка:';
        lable.appendChild(input_name);
        form.appendChild(lable);
        lable = document.createElement('lable')
        input_name = document.createElement('textarea');
        input_name.setAttribute('required', 'required')
        input_name.setAttribute('cols', '50');
        input_name.setAttribute('rows', '10')
        lable.innerText = 'Описание:';
        lable.appendChild(input_name);
        form.appendChild(lable);
        input_name = document.createElement('input');
        input_name.setAttribute('type', 'submit')
        input_name.setAttribute('value', 'Добавить');
        input_name.setAttribute('name', 'add_burrom')
        form.appendChild(input_name);
        lable = document.createElement('div')
        lable.className = 'submit_edit_book';
        lable.setAttribute('id', 'sumbit_buttons');
        input_name = document.createElement('input');
        input_name.setAttribute('type', 'submit');
        input_name.setAttribute('value', 'Сохранить');
        input_name.setAttribute('name', 'save')
        lable.appendChild(input_name);
        input_name = document.createElement('input');
        input_name.setAttribute('type', 'button');
        input_name.setAttribute('value', 'Отменить');
        input_name.setAttribute('name', 'cancl')
        lable.appendChild(input_name);
        form.appendChild(lable);
        add_edit.appendChild(form)
        rihgt_bar.appendChild(add_edit)
    }
    create_preview_book();
    create_constuctior_book();
    book.appendChild(create_book_list())
    book.appendChild(buttom);
    main_cont.appendChild(book);
    main_cont.appendChild(rihgt_bar);
    root.appendChild(main_cont);
}
create_page()

let delete_books_list = function () {
    let list = document.getElementById('books');
    list.remove(list);
}
let book_item = function book_in_book_list(book_number) {
    let books = JSON.parse(localStorage.getItem('books'));
    return books[book_number];
}
let update_preview = function (num_book) {
    let preview = document.getElementById('preview');
    let book_name = preview.querySelector('h2');
    let book_outor = preview.querySelector('span');
    let book_img = preview.querySelector('img');
    let book_plot = preview.querySelector('p');
    let book = book_item(num_book);
    book_name.innerText = book.name;
    book_outor.innerText = book.outor;
    book_img.src = book.fhoto;
    book_plot.innerText = book.plot;
}
let update_edit_panel = function (book_item) {
    let list_value = document.getElementsByTagName('input');
    let plot = document.getElementsByTagName('textarea');
    list_value[0].value = book_item.name;
    list_value[1].value = book_item.outor;
    list_value[TWO].value = book_item.fhoto;
    plot[0].value = book_item.plot;
}
let clear_add_book = function () {
    let list_value = document.getElementsByTagName('input');
    let plot = document.getElementsByTagName('textarea');
    let max_length = 3;
    for (let i = 0; i < max_length; i++) {
        list_value[i].value = '';
    }
    plot[0].value = '';
}
function control_page() {
    let href = location.href.split('#');
    if (href[1] !== 'add') {
        href[0] = href[0].split('?id=')[1]
    }
    let num_book = href[0];
    let page_editor = href[1];
    let books = JSON.parse(localStorage.getItem('books'));
    if (Object.keys(books).length + 1 <= num_book) {
        document.getElementById('constuctor').className = 'none';
        document.getElementById('preview').className = 'none';
        document.querySelector('input[name=add_burrom]').className = 'none';
        return;
    }
    switch (page_editor) {
        case 'preview':
            document.getElementById('preview').className = 'preview';
            document.getElementById('constuctor').className = 'none';
            update_preview(num_book);
            break;
        case 'add':
            document.getElementById('constuctor').className = 'add edit';
            document.getElementById('preview').className = 'none';
            document.querySelector('input[name=add_burrom]').className = '';
            document.querySelector('div[id=sumbit_buttons]').className = 'none';
            clear_add_book();
            break;
        case 'edit':
            document.getElementById('constuctor').className = 'add edit';
            document.getElementById('preview').className = 'none';
            document.querySelector('input[name=add_burrom]').className = 'none'
            document.querySelector('div[id=sumbit_buttons]').className = 'submit_edit_book';
            update_edit_panel(book_item(num_book));
            break;
        default:
            document.getElementById('constuctor').className = 'none';
            document.getElementById('preview').className = 'none';
            document.querySelector('input[name=add_burrom]').className = 'none'
            break;
    }
}
let books_list = document.querySelector('div.block.book_list');
books_list.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        return;
    }
    let state = {
        page: e.target.getAttribute('href')
    }
    history.pushState(state, '', state.page);
    control_page();
    e.preventDefault();
});
window.addEventListener('submit', (e) => {
    e.preventDefault();
    let href = location.href.split('#');
    if (href[1] !== 'add') {
        href[0] = href[0].split('?id=')[1]
    }
    let num_book = href[0];
    let length_books = '';
    let books = JSON.parse(localStorage.getItem('books'));
    if (document.querySelector('div[id=sumbit_buttons]').className !== 'none') {
        length_books = num_book
    } else {
        length_books = Object.keys(books).length + 1
    }
    let list_value = document.getElementsByTagName('input');
    let plot = document.getElementsByTagName('textarea');
    let new_book = {
        [length_books]: {
            name: list_value[0].value,
            outor: list_value[1].value,
            fhoto: list_value[TWO].value,
            plot: plot[0].value
        }
    }

    books = Object.assign(books, new_book)
    localStorage.setItem('books', JSON.stringify(books));
    delete_books_list();
    books_list.prepend(create_book_list())
    clear_add_book();
    let time_del = 300;
    if (Number(num_book)) {
        history.back();
        setTimeout("alert('Book successfully updated')", time_del);
    }
})
let console_chang = document.querySelector('input[name=cancl]');
console_chang.addEventListener('click', () => {
    console.log('sss');
    if (confirm('Хотите отменить изменения?')) {
        history.back();
    }
})
window.addEventListener('popstate', () => {
    control_page();
})
window.addEventListener('load', () => {
    control_page();
})