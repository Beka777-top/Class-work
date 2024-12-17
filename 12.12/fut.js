const fruits = document.getElementById("fruitSelect");
const selectedValue = document.getElementById("selectedValue");

fruitSelect.addEventListener("change", () => {
    selectedValue.textContent = fruitSelect.value;
})