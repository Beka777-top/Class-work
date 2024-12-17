const errorMessage = document.getElementById("errorMessage");
const requestForm = document.getElementById("request");

requestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const problem = document.getElementById("problem");
    const comment = document.getElementById("comment");

    console.log(
{   name: name.value,
    phone: phone.value,
    problem: problem.value,
    comment: comment.value
})
if(name.value === "" || phone.value === "" || problem.value === "" || comment.value === ""){
    errorMessage.style.transform = "translateY(-30vh)";
    errorMessage.textContent = "Берілген жолдарды толтырырыңыз";
}
});

const arrowUp = document.getElementById("arrowUp");

window.addEventListener("scroll", () => {
    if(window.scrollY < 500){
        arrowUp.style.display = "none";
    } else{
        arrowUp.style.display = "block";
    }
})




