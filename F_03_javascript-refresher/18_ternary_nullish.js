// Ternary
const score = 85;
const result = score >= 75 ? "Pass" : "Fail";
console.log(result); // "Pass"

const num = 20;
console.log(num % 2 === 0 ? "even" : "odd"); // "even"

// Optional chaining & nullish coalescing
const user = { name: "Anthony" }; // no address property
console.log(user.address?.city);  // undefined, no crash

const age = 0;
console.log(age || 18); // 18 -- wrong! 0 is falsy, so || overrides it
console.log(age ?? 18); // 0  -- right, ?? only replaces null/undefined
