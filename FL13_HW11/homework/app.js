const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

let master = document.createElement('ul');

function createTree(el, parent) {
  for (let i = 0; i < el.length; i++) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let label = document.createElement('label');
    let icon = document.createElement('i');

    icon.className = 'material-icons';
    if (el[i].folder) {
      icon.innerHTML = 'folder';
    } else {
      icon.innerHTML = 'insert_drive_file';
      label.className = 'file';
    }
    let input = document.createElement('input');
    input.setAttribute('disabled', 'disabled');
    input.setAttribute('value', el[i].title);
    label.appendChild(icon);
    label.appendChild(input);
    li.appendChild(label);
    parent.appendChild(li);
    label.addEventListener('click', opens);
    if (el[i].children) {
      li.appendChild(ul);
      if (el[i].folder) {
        icon.innerHTML = 'folder';
      } else {
        icon.innerHTML = 'insert_drive_file';
        label.className = 'file';
      }
      ul.style.display = 'none';
      createTree(el[i].children, ul);
    } else if (el[i].folder && !el[i].children) {
      parent.appendChild(ul);
      let emptyFolder = document.createElement('li');
      emptyFolder.innerHTML = 'Folder is empty';
      li.appendChild(emptyFolder);
      emptyFolder.className = 'empty';
      emptyFolder.style.display = 'none';
    }

  }

}

function opens() {
  if (this.nextSibling) {
    if (this.nextSibling.style.display === 'none') {
      this.nextSibling.style.display = 'block';
      this.firstChild.innerHTML = 'folder_open';
    } else {
      this.nextSibling.style.display = 'none';
      this.firstChild.innerHTML = 'folder';
    }
  }

}

createTree(data, master);
rootNode.appendChild(master);
