import { getUsers, setUsers } from '../utils/storage-utils.js';
import { findByName } from '../utils/helpers.js';

const newNote = document.getElementById('newNote');
const submitNewNote = document.getElementById('submitNewNote');
const searchParams = new URLSearchParams(window.location.search);

submitNewNote.addEventListener('click', () =>{
    const users = getUsers();
    let user = findByName(users, (searchParams.get('name')));
    updateToDos(user, newNote.value);
});

function updateToDos(user, newNote) {
    const users = getUsers().filter(item => item.name !== user.name);
    const updatedUser = {
        id: user.id, 
        name: user.name,
        password: user.password,
        todos: [...user.todos, newNote],
    };
    users.push(updatedUser);
    console.log(updatedUser.todos);
    
    setUsers(users);
    
}