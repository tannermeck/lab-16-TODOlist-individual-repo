export const USERS = 'USERS';

export function setUser(userObject) {
    localStorage.setItem(USERS, JSON.stringify(userObject));
}

export function getUsers() {
    return JSON.parse(localStorage.getItem(USERS));
}