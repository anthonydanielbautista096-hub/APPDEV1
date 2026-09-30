function greet(name) {
  return "Hello, " + name;
}

const square = (num) => {
  return num * num;
};

function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Anthony"));
console.log(square(6));
console.log(calculator(4, 7));
