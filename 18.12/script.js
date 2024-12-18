// const container = document.getElementById('container');

// const greetButton = document.getElementById('greet');
// greetButton.addEventListener('click', () => {
//     const title = document.createElement('h1');
//     title.textContent = "Welcome, to my website!"; 
//     greetButton.style.display = 'none';
//     container.appendChild(title);

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = "Dont't click me!";

//     title.appendChild(deleteButton);

//     deleteButton.addEventListener('click', () => {
//         title.remove();
//     })


// })







// const removeButoon = document.getElementById("removeButton");
// const second = document.getElementById("second");

// removeButoon.addEventListener('click', () => {
//     second.remove();
//     alert("Deleted!");
// });



const cardsContainer = document.getElementById('cardsContainer');

const data = ["apple", "banana", "orange", "kiwi"];

data.forEach((item) => {
    const card = document.createElement('div');
    const title = document.createElement('h3');

    card.style.border = '1px solid black';
    card.style.borderRadius = '12px';
    card.style.padding = '10px';
    card.style.width = "fit-content";

    card.appendChild(title);
    title.textContent = item;

    cardsContainer.appendChild(card);
})