/*let gradeSystem = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
};*/

function verifierAndPointCalc (course) {
    myGrades[course] = prompt ("What was your grade in " + course);

    while (myGrades[course] !== "A" && myGrades[course] !== "B" && myGrades[course] !== "C" && myGrades[course] !== "D" && myGrades[course] !== "E" && myGrades[course] !== "F") {
    myGrades[course] = prompt ("Incorrect Grade. Must be 'A', 'B', 'C', 'D', 'E', or 'F'")
    myGrades[course] !== "A" && myGrades[course] !== "B" && myGrades[course] !== "C" && myGrades[course] !== "D" && myGrades[course] !== "E" && myGrades[course] !== "F"
    }
if (myGrades[course] === "A") {
        myPoints[course] = 5 * coursePoints[course];
        } 
        else if (myGrades[course] === "B") {
            myPoints[course] = 4 * coursePoints[course];
        }
        else if (myGrades[course] === "C") {
            myPoints[course] = 3 * coursePoints[course];
        }
        else if (myGrades[course] === "D") {
            myPoints[course] = 2 * coursePoints[course];
        }
        else if (myGrades[course] === "E") {
            myPoints[course] = 1 * coursePoints[course];
        }
        else {
            myPoints[course] = 0;
        }

return myPoints[course];
}


let coursePoints = {
    English : 2,
    French: 2,
    Mathematics : 4,
    Physics : 4,
    Chemistry : 4,
    Biology : 3,
    Workshop : 1,
    TechnicalDrawing : 1,
    Humanities : 1,
};

let myGrades = {};
let myPoints = {};

verifierAndPointCalc ("English");
verifierAndPointCalc ("French");
verifierAndPointCalc ("Mathematics");
verifierAndPointCalc ("Physics");
verifierAndPointCalc ("Chemistry");
verifierAndPointCalc ("Biology");
verifierAndPointCalc ("Workshop");
verifierAndPointCalc ("TechnicalDrawing");
verifierAndPointCalc ("Humanities");


let myTotalPoints = 0
for (const key in myPoints) {
    myTotalPoints += myPoints [key];
}


let totalCoursePoints = 0
for (const key in coursePoints) {
    totalCoursePoints += coursePoints [key];
}

let CGPA = myTotalPoints / totalCoursePoints;
console.log ("Your CGPA is " + CGPA);
document.write ("Your CGPA is " + CGPA);
alert ("Your CGPA is " + CGPA)