const students = [
  { name: "Anthony", grade: 91 },
  { name: "Bea", grade: 88 },
  { name: "Carlo", grade: 45 },
];

const passing = students.filter(student => student.grade >= 60);
console.log(passing.map(student => student.name)); // ["Anthony", "Bea"]

const bea = students.find(student => student.name === "Bea");
console.log(bea); // { name: "Bea", grade: 88 }

console.log(students.some(student => student.grade < 60));   // true
console.log(students.every(student => student.grade >= 60)); // false

const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(student => student.name)); // ["Anthony", "Bea", "Carlo"]
