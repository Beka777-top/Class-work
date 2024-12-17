const nameField = document.getElementById('name');
const helperText = document.getElementById('helperText');

nameField.addEventListener('focus', () => {
    nameField.style.background = 'black';
    nameField.style.color = 'white';
    helperText.textContent = 'Толтырыңыз';
})
nameField.addEventListener('blur', () => {
    nameField.style.background = "white";
    nameField.style.color = 'black';
    helperText.textContent = '';
})

const email = document.getElementById('name');
const liveOuptut = document.getElementById('liveOutput');

email.addEventListener('input', () => {
    liveOuptut.textContent =email.value;
})

