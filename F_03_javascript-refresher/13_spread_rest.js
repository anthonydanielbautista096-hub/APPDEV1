const numbers = [5, 10, 15];
const newNumbers = [...numbers, 20, 25];
console.log(newNumbers); // [ 5, 10, 15, 20, 25 ]

const user = { name: "Anthony Daniel Bautista", age: 20 };
const newUser = { ...user, email: "anthony@example.com" };
console.log(newUser);

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(2, 4, 6, 8)); // 20
