import { getUsers, setUsers } from '../utils/storage-utils.js';
import { findByName } from '../utils/helpers.js';

const newNote = document.getElementById('newNote');
const submitNewNote = document.getElementById('submitNewNote');
const searchParams = new URLSearchParams(window.location.search);
const ul = document.getElementById('toDo');
const users = getUsers();
let user = findByName(users, (searchParams.get('name')));
let listItem = user.todos;
for (let item of listItem){
    const li = document.createElement('li');
    li.textContent = item.name;
    const button = document.createElement('button');
    button.textContent = 'clear items';
    button.addEventListener('click', () => {
        li.classList.add('line');
        if (li.innerHTML === item.name){
            item.completed = true;
            button.disabled = true;
        } else {
            return item.completed = false;
        } 
        setUsers(users);
    }
    );
    ul.append(li, button);
}

submitNewNote.addEventListener('click', () =>{
    updateToDos(users, newNote.value);
    renderItems(users);
});


function updateToDos(users, newNote) {
    let user = findByName(users, (searchParams.get('name')));
    const newTodo = 
        { name: newNote, completed: false };
    user.todos.push(newTodo);
    setUsers(users);
}
function renderItems(users){
    let user = findByName(users, (searchParams.get('name')));
    let listItem = user.todos;
    const button = document.createElement('button');
    button.textContent = 'clear items';
    const span = document.createElement('li');
    for (let item of listItem){
        span.textContent = item.name;
        button.addEventListener('click', () => {
            span.classList.add('line');
            if (span.innerHTML === item.name){
                item.completed = true;
                button.disabled = true;
            } else {
                return item.completed = false;
            } 
            setUsers(users);
        }
        );
        ul.append(button, span);
    }    
}

