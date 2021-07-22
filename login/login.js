

const userForm = document.getElementById('userForm');
const createAcct = document.getElementById('createAcct');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signInData = new FormData(userForm);
    const name = signInData.get('name');
    const password = signInData.get('pwd');
});

createAcct.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('./create/index.html');
});