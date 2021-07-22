// const userNameInput = document.getElementById('user');
// const passwordInput = document.getElementById('pwd');
// const userForm = document.getElementById('userForm');
const createAcct = document.getElementById('createAcct');

createAcct.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('./create/index.html');
});