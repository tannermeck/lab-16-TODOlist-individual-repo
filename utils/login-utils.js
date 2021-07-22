export function isValidUserName(users, name) {
    let matches = users.filter(user => user.name === name);
    if (matches.length === 0) {
        return true;
    } else {
        alert('User name already in use.');
        return false;
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