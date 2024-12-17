const loginForm = document.getElementById("loginForm");
const errorMessages = document.getElementById("errorMessage");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = document.getElementById("email") .value;
    const passwordValue = document.getElementById("password") .value;

    if(!emailValue.includes('@')){
        errorMessages.textContent = "Email қате";

    }else if(passwordValue.length < 6){
        errorMessages.textContent = "Пароль қате";
    } else{
        errorMessages.style.color ="green";
        errorMessages.textContent = "Форма сәтті турде жіберілді";
        window.location.href ="fut.html"
    }
})