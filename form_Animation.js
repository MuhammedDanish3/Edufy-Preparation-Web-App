const container = document.getElementById('container');
const resgisterBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

resgisterBtn.addEventListener('click' , () =>
{
    container.classList.add("active");
});

loginBtn.addEventListener('click' , () =>
{
    container.classList.remove("active");
});