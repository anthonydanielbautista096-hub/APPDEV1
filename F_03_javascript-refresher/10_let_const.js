let name = "Anthony";
const age = 20;

name = "Daniel"; // OK
console.log(name);

// age = 21; // Error: Assignment to constant variable
console.log(age);

try {
  age = 21;
} catch (error) {
  console.log("Cannot reassign a const:", error.message);
}

var city = "Angeles City"; // works, but avoid var
console.log(city);
