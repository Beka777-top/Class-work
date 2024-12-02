let enter;
let score = 6;
do {
  enter = parseInt(prompt("Adam kansha sagat yikagany durus?"));
  score--;
} while (enter !== 8);
do {
    enter = parseInt(prompt("22+8=?"));
    score--;
}while(enter !== 30);

do {
  enter = parseInt(prompt("12/2=?"));
  score--;
} while (enter !== 6);

alert(score + " балл");
console.log(enter);