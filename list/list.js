import { getUsers, setUsers } from '../utils/storage-utils.js';
import { findByName } from '../utils/helpers.js';

const newNote = document.getElementById('newNote');
const submitNewNote = document.getElementById('submitNewNote');
const searchParams = new URLSearchParams(window.location.search);
const ul = document.getElementById('toDo');
const users = getUsers();

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
    console.log();
    const button = document.createElement('button');
    button.textContent = 'clear items';
    button.classList.add('btn');
    const span = document.createElement('li');
    for (let item of listItem){
        span.textContent = item.name;
    }
    button.addEventListener('click', () => {
        span.classList.add('line');
        // updateCompleted(listItem.name);
        
    });
    ul.append(button, span);
}

// function updateCompleted(name){ 
//     let user = findByName(users, (searchParams.get('name')));
//     findByName(user, name);
// }