// write make new id function at some point

export function makeUser(name, password) {

    const userObject = {
        id: name,
        password,
        name,
        todos: []
    };

    return userObject;
}

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signInData = new FormData(userForm);
    const name = signInData.get('name');
    const password = signInData.get('pwd');

    const newUser = makeUser(name, password);
});
