import { getUsers } from './storage-utils.js';

export function userNameExists(users, name) {
    let matches = users.filter(user => user.name === name);
    if (matches.length === 0) {
        return false;
    } else {
        return true;
    }
}

export function makeUser(name, password) {

    const userObject = {
        id: name,
        password,
        name,
        todos: []
    };

    return userObject;
}
export function isValidPassword(username, password, users){
    const user = users.filter(item => item.name === username)[0];
    if (user && user.password === password){
        return true;
    } else {
        return false;
    }
}