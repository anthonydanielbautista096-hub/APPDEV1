// Equality & emptiness
console.log(20 == "20");  // true
console.log(20 === "20"); // false

let notDefined;
let empty = null;

console.log(notDefined); // undefined
console.log(empty);      // null

// this & reference vs copy
const obj = {
  name: "Anthony",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    // "this?." because in an ES module the outer this is undefined
    console.log(this?.name);
  },
};

obj.regularMethod(); // "Anthony" - this is set by how it's called
obj.arrowMethod();   // undefined - arrow borrows this from where it was written

const original = [10, 20, 30];

const copyByReference = original;
copyByReference.push(40);
console.log(original); // [10, 20, 30, 40] - same array in memory

const copyBySpread = [...original];
copyBySpread.push(50);
console.log(original);     // [10, 20, 30, 40] - untouched
console.log(copyBySpread); // [10, 20, 30, 40, 50] - separate array
