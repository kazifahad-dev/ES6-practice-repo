const students = [
  { name: "Fahad", marks: 85 },
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 72 },
  { name: "Sakib", marks: 38 }
];



const studentsName = students.map((student) => {
    return student.name
})

// console.log(studentsName);

const expectedNumber = students.filter((student) => {
    return student.marks >= 50 
}).map((student) => {
    return student.name 
})

// console.log(expectedNumber);

const greatMarks = students.find((student) => {
    return student.marks > 70
})

// console.log(greatMarks);


studentsMarks = students.forEach((student) => {
    console.log(`${student.name} got ${student.marks}`)
})

// console.log(studentsMarks);


