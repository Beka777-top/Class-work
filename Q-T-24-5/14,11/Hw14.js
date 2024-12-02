// Дұрыс пароль
const correctPassword = "amjilt_the_best";

// 5 мүмкіндік
const maxAttempts = 5;
let attempts = 0;

// Цикл арқылы пароль сұрау
while (attempts < maxAttempts) {
    let userInput = prompt("Парольді енгізіңіз:");

    if (userInput === correctPassword) {
        alert("Құттықтаймыз, пароль дұрыс!");
        break;
    } else {
        attempts++;
        alert(`Қате! Сізде ${maxAttempts - attempts} мүмкіндік қалды.`);
    }

    if (attempts === maxAttempts) {
        alert("Too many attempts");
    }
}
