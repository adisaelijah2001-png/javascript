
const form = document.getElementById('myform')

form.addEventListener('submit', function(){

    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(name);
    console.log(email);
    console.log(password);

    alert("Registration Successfully")
});