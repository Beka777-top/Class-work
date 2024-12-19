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



// const cardsContainer = document.getElementById('cardsContainer');

// const data = ["apple", "banana", "orange", "kiwi"];

// data.forEach((item) => {
//     const card = document.createElement('div');
//     const title = document.createElement('h3');

//     card.style.border = '1px solid black';
//     card.style.borderRadius = '12px';
//     card.style.padding = '10px';
//     card.style.width = "fit-content";

//     card.appendChild(title);
//     title.textContent = item;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = "Delete";

//     card.appendChild(deleteButton);

//     deleteButton.addEventListener('click', () => {
//         card.remove();
//     })

//     cardsContainer.appendChild(card);
// });



// const data = [
//     {title: "Абай жолы - Мұқтар Әуезов",
//         description:"Абайдың өмірі мен қазақ қоғамының тарихи шежіресі"},
//     {title: "Қан мен тер  - Әбдіжәміл Нұрпейсов",
//         description:"Қазақ халқының қиын кезеңдерінің эпикалық баян."},
//     {title: "lorem ipsum dolor sit amet", 
//         description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."},
//     {title: "lorem ipsum dolor sit amet",
//         description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."},
// ];
// data.forEach((item) => {
   
//     const card = document.createElement('div');
//     const title = document.createElement('h3');
//     const description = document.createElement('p');


// card.appendChild(title);
// title.textContent = item; 

// card.appendChild(description);
// description.textContent = item.description;


//  const deleteButton = document.createElement('button');
// deleteButton.textContent = "Delete";

// cardsContainer.appendChild(deleteButton);

// deleteButton.addEventListener('click', () => {
//     data.remove();
// });
// cardsContainer.appendChild(deleteButton);

// })



const data = [
    {title: "Ruslan",
        description:"13/02/2004",

    },
    {title:"Azamat",
        description:"01/07/2006"
    },
    {
        title:"Raushan",
        description:"15/08/2004"
    },
    {
        title:"Saule",
        description:"21/09/2013"
    }
]

data.forEach((element) =>{
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    card.style.width = "200px";
    card.style.border = '1px solid black';
    card.style.borderRadius ="5xp"
    card.style.padding = "10px"

    card.appendChild(title);
    title.textContent = element.title;

    card.appendChild(description);
    description.textContent = element.description;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    cardsContainer.appendChild(card);
    
    deleteButton.addEventListener('click', () => {
        card.remove();
    });
    card.appendChild(deleteButton);

    card.addEventListener('dblclick', () => {
        const comment = document.createElement('h3');
        comment.textContent = "Hello!";
        card.appendChild(comment);
    })
});
