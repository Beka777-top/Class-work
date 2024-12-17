const students = +prompt("1.Жаңа студент қосу \n 2. Студентті іздеу \n 3. Орташа ұпайды есептеу \n 4. Ең жоғарғы және төмен ұпайды тапқан студентті анықтау \n 5. Студенттердің ұпайын өсу ретімен сұраптау" );
var studentsNew = [];

switch (students) {
    case 1:
        AddStudent();
        break;
        case 2:
            Searchstudent();
            break;
            case 3:
                ortashaball();
                break;
                case 4: 
                   sortStudents();
                    break;
                    case 5:
                        sortScore();
                        break;
};

function AddStudent (){
    let name = prompt("Студенттің атын енгізіңіз:");
    let age = +prompt("Студенттің жасын енгізіңіз:");
    let score = +prompt("Студенттің упайын енгізіңіз:");
    return studentsNew.push({name: name, age: age, score: score});
    
}

console.log(studentsNew);

function Searchstudent() {
    let engizName = prompt("Іздейтін студенттің атын енгізіңіз:"); 
    while(true) {
        let student = studentsNew.find(student => student.name === engizName);
        if(student) {
            alert(`Студенттің аты: ${student.name}, жасы: ${student.age}, упайы: ${student.score}`);
            break;
        } 
        else if(engizName === "stop") {
            studentsNew;
        } 
        else {
            alert("Бұл студент табылмады");
            engizName = prompt("Студенттің атын енгізіңіз:");
        }
    }
}
console.log(Searchstudent());
