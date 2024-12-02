// let number = prompt ('1 - ден 3ке дейін таңдаңыз:')
// let order = '';

// switch (number) {
//     case '1':
//     alert ('Siz 1 tandadynyz');
//     order = 1;
//     break;

//     case '2':
//     alert ('Siz 2 tandadynyz');
//     order = 2;
//     break;

//     case '3':
//     alert ('Siz 3 tandadynyz');
//     order = 3;
//     break;

//     default:
//         alert ('1 - ден 3ке дейін таңдаңыз:');
//         order = "Qate";
// }

// alert (order);




let name = prompt("Атыңызды жазыңыз:");
let order = "";     
let buketter = prompt("Букеттің түрін танданыз:" +"\n" +"A) Компазиция  50 000tg" +"\n" +"B) Монобукеты  90 000tg" +"\n" + "C)Роза 25 000tg"); 

switch (buketter) {
    case "A":
        alert('Компазицияны 50 000 дығын тандадыңыз');
        order += " Компазиция \n";
        break;

        case "B":
            alert('Монобукетдың 90 000 дығын тандадыңыз');
            order += " Монобукеты \n";
            break;

            case "C":
                alert('Розаның 25 000 дығын тандадыңыз');
                order += " Роза \n";
                break;
}


let shar = prompt("Шардын размері:" + "\n" + "A) Үлкен 5 000tg" + "\n" + "B) Орташа  3 000tg" + "\n" + "C) Кіші 1 500tg");
switch (shar) {
    case "A":
        alert('Үлкенін 5 000 тенгелігін таңдадыңыз');
        order += " Үлкен \n";
        break;

        case "B":
            alert('Орташаның 3 000 тенгелігін таңдадыңыз');
            order += " Орташа \n";
            break;

            case "C":
                alert('Кішкентайынын 1 500 тенгелігін  таңдадыңыз');
                order += " Кіші \n";
                break;
}

let prize = prompt( "Сыйлыктар:" +"\n" +"A) Бенто торты 5 700" +"\n" +"B) Мишка 95 000" +"\n" +"C) Клубника в шоколаде 20 000");
switch (prize) {
    case "A":
        alert('Бенто тортын 5 700 тенгелігін таңдадыңыз');
        order += " Бенто торты \n";
        break;

        case "B":
            alert('Мишканын 95 000 тенгелігін таңдадыңыз');
            order += " Мишка \n";
            break;

            case "C":
                alert('Клубника в шоколаденің 20 000 тенгелігін таңдадыңыз');
                order += " Клубника в шоколаде \n";
                break;
}

alert(order);