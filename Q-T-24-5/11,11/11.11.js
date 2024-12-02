// exercise1
var a = Number(prompt("Бірінші қабырға санын енгізіңіз:"));
var b = Number(prompt("Екінші қабырға санын енгізіңіз"));
var c = Number(prompt("Үшінші қабырға санын енгізіңіз:"));

if (a + b > c && a + c > b && b + c > a) {
  alert("Бұл үшбұрышты жасай алады");
} else {
  alert("Бұл үшбұрышты жасай алмайды");
}

// exercise3
let gradee = prompt("0-ден 100-ге дейін ұпай енгізіңіз:");

if (gradee >= 0 && gradee <= 59) {
  alert("Баға: F");
}
if (gradee >= 60 && gradee <= 69) {
  alert("Баға: D");
}
if (gradee >= 70 && gradee <= 79) {
  alert("Баға: C");
}
if (gradee >= 80 && gradee <= 89) {
  alert("Баға: B");
}
if (gradee >= 90 && gradee <= 100) {
  alert("Баға: A");
}