//example
// for (let i = 1; i <= 5; i++ ) {
//     console.log(i);
// }


// //example
// for (let i = 1; i <= 10; i++ ){
//     if (i % 2 === 0) {
//         console.log (i + " - жұп");
//     } else {
//         console.log ( i + " - тақ");
//     }
// }



//example
// for (let i = 1; i <= 5; i++ ) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// //example 
// for ( let i = 10; i >= 1; i-- ) { // кері ретпен журеді
//     console.log(i);
// }

//example
// var example = Number (prompt ("сан енгізіңіз:")) 
// for (let i = 0; i < example; i++ ) {
//     console.log(i);
// }



//example
// let num = Number(prompt("санды енгізіңіз"));
// let result = 0;

// for (let i = 1; i <= num; i++ ) {
//         result += i;
//         console.log(result + " + "  + i + " = " + (result + i)) ;
        
// }

// //example
// for (let i = 1; i < 5; i ++ ) {
//     console.log(i);
//     if (i == 3) {
//         break;
//     }
// }


// //example
// for (let i = 1; i <= 2; i++ ) {
//     let question = Number (prompt("Qazaq handygy qai jyly quryldy"));

//     if (question == "1465") {
//     break;
// } else {
//     alert ("Qate");
// }
// }


// //example
// for (let i = 1; i <= 100; i+= 2){
//     console.log(i);
// }



//example
// for (let i = 3; i <= 100; i += 3){
//     console.log(i);
// }


// //example 
// for ( let i = 100; i >= 0; i -= 2 ) { 
//     console.log(i);
// }




//example
for (let i = 100; i >= 0; i -= 2 ) {
    if (i % 4 == 0) 
        continue;
    console.log(i);
}