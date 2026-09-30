const person = { name: "Anthony", age: 20 };
const { name, age } = person;
console.log(name, age); // "Anthony 20"

const hobbies = ["coding", "gaming", "music"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // "coding gaming"

function printName({ name }) {
  console.log(name);
}

printName(person); // "Anthony"
