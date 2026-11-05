const students = [];

//add Student
function addStudent(name, score) {
      name = name.toUpperCase();
      students.push({ name, score });
    }

//get grades
function getGrades() {
         return students.map(student => {
            let grade='F';
            if (student.score >= 90) grade = 'A';
            else if (student.score >= 80) grade = 'B';
            else if (student.score >= 70) grade = 'C';
            else if (student.score >= 60) grade = 'D';
            else if (student.score < 60) grade = 'F';
            return {...student, grade};
        });
    }

//get top scores
function topScores() {
    return students.filter(student => student.score > 80);
 }

//search student 
function searchStudent(name){
    return students.find(student => student.name === name);
 }

//display all students
function DisplayAll(){
    const getGraded = getGrades().sort((a,b) => b.score - a.score);
    console.log("  Students Data  ");
    console.log("All Students with Grades:");
    console.log('    ');
    console.log('Name | Score | Grade');
    getGraded.forEach(student => {
        console.log(`${student.name} | ${student.score} | ${student.grade}`);
    });
 }
 
addStudent("John", 85);
addStudent("Alice", 92);
addStudent("Bob", 78);
addStudent("Eve", 65);  
addStudent("Charlie", 55);

DisplayAll();
console.log('    ');
console.log('Top Scores: ');
console.log(topScores());
console.log('    ');
console.log('Search Student: ');
console.log(searchStudent("ALICE"));
 