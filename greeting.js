const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const logout = document.querySelector('#logout-form');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    logout.classList.remove('hidden');
}

loginForm.addEventListener('submit', onLoginSubmit);


function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function logoutSubmit(event){
    event.preventDefault(); //새로고침방지
    localStorage.removeItem('username');
    logout.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove('hidden');
    window.location.reload();
}

logout.addEventListener('submit', logoutSubmit); 

//저장된 값을 가져오는 것!

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);

}
else{
    paintGreetings(savedUsername);
}
