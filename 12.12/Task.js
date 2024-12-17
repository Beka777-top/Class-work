const loginForm = document.getElementById("signupForm");
const errorMessages = document.getElementById("errorMessage");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(emailValue === "" || passwordValue === ""){

        errorMessages.textContent ="Email мен Passwors жазыңыз";

    } else if (!emailValue.includes ("@")){

        errorMessages.textContent ="Email дұрыс жазыңыз";

    }else if(passwordValue.length < 6){

        errorMessages.textConect ="Пороль 6 символдан кобірек болуы керек"

    }else if(passwordValue !== confirmPassword){

        errorMessages.textContent ="Қате"

    }else{

        errorMessages.style.color = "green";

        errorMessages.textContent = "Форма сәтті турде жіберілді";
    }
})