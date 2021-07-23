import { getUsers, setUsers } from '../utils/storage-utils.js';
import { findByName } from '../utils/helpers.js';

const users = getUsers();
const newNote = document.getElementById('newNote');
const submitNewNote = document.getElementById('submitNewNote');
const searchParams = new URLSearchParams(window.location.search);
let user = findByName(users, (searchParams.get('name')));

submitNewNote.addEventListener('click', () =>{
    updateToDos(user, newNote.value);
});

function updateToDos(user, newNote) {
    const updatedUser = {
        id: user.id, 
        name: user.name,
        password: user.password,
        todos: [...user.todos, newNote],
    };

    const users = getUsers().filter(item => item.name !== user.name);
    users.push(updatedUser);
    setUsers(users);
    
}