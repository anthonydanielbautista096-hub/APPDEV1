// Block scope
if (true) {
  let insideBlock = "only visible here";
  console.log(insideBlock); // works fine
}

try {
  console.log(insideBlock); // ReferenceError
} catch (error) {
  console.log("insideBlock is not defined out here");
}

// Closure
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1 -- independent of counterA
