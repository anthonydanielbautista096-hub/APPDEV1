console.log("Hello JavaScript");

let myName = "Anthony";
let myname = "Daniel";

console.log(myName); // Anthony
console.log(myname); // Daniel

// Naming rules
// Valid
let age = 20;
let _temp = "cache";
let $price = 49.5;
let userName = "anthony"; // camelCase convention

// Invalid -- each one breaks a rule (all throw a SyntaxError)
// let 2cool = true;     -- can't start with a digit
// let my-name = "Dan";  -- hyphens aren't allowed in a name
// let let = 5;          -- "let" is a reserved word

console.log(age, _temp, $price, userName);
