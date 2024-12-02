
// function esep (a, b){
// var a = +prompt("Birinshi sandi engiz");
// var b = +prompt("Ekinshi sandi engiz");
// var tanba = prompt("tanba jaz");
// var order = 0;
// for (var i = 1; i <= Infinity; i++){
//     if (tanba == "+"){
//         order = a + b;
//     }else if (tanba == "-"){
//         order = a - b;
//     }else if (tanba == "*"){
//         order = a * b;
//     }else if (tanba == "/"){
//         order = a / b;
//     }
//     return a, b, tanba, order;
// }

// }
// alert(esep());




function zat (a, b,) {
    var a= +prompt    ('Bagasin jaz')
    var b= +prompt('kansha zat aldiniz')
    var c= 0
    var d=0

    c += a * b

    if (c>5000 && c<=10000) {
    d = c - ((c / 100) * 10)

}else if (c>10000 && c<=20000) {
    d = c - ((c / 100) * 20)

}else if(c > 20000){
    d = c - ((c / 100) * 30)

}else{
     console.log(c);



}
 return a,b;
}

alert(zat());




// function sanTap() {
//     const a = 97;
//     alert("1 - 100 аралығында сан жасырылған!");

//     while (true) {
//         const b = +prompt("Болжаған санды жазыңыз:");

//         if (b === a) {
//             alert("Сіз жасырын санды таптыңыз!");
//             break;
//         } else if (b < 1 || b > 100) {
//             alert("1 мен 100 аралығындағы санды енгізіңіз!");
//         } else if (b > a) {
//             alert("Сәл төмен!");
//         } else if (b < a) {
//             alert("Сәл жоғары!");
//         }else if (a == 92 || a == 93 || a == 94 || a == 95 || a == 96){
//             alert("Жай жоғары")
//         }else if (a == 98 || a == 99 || a == 100){
//             alert("Жай төмен")
//         }
//     }
// }
// sanTap();

