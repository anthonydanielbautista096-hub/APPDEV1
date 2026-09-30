// String methods
const raw = "  Anthony Bautista  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase());        // "ANTHONY"
console.log(clean.includes("Bautista")); // true
console.log(clean.slice(0, 7));          // "Anthony"
console.log(`Full name: ${first} ${last}`);

// Number methods
console.log(parseInt("20px"));       // 20
console.log((49.9999).toFixed(2));   // "50.00"

const result = "abc" / 2;
console.log(result);                 // NaN
console.log(Number.isNaN(result));   // true
