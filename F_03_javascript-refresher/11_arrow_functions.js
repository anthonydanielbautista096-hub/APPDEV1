const greet = name => "Hello, " + name; // implicit return
const square = n => n * n;              // implicit return

const sayHi = () => {
  console.log("Hi! I'm Anthony.");
};

console.log(greet("Daniel"));
console.log(square(9));
sayHi();
