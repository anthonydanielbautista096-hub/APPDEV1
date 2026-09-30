# JavaScript Refresher Reflection

### 00_script_in_html.html
I've learned that to run JavaScript inside HTML document, you need to use a `<script>` tag. I also learned the difference between a regular `<script>` tag and a `<script>` tag with `type="module"`. This makes it easy to organize and use again the code across different files.

### 01_base_syntax.js
I've learned that `console.log()` is the main way to see what my code is doing, and the JavaScript is case-sensitive, like when `myName` and `myname` are two different variables. I also learned about the naming rules like a name can't start with a digit.

### 02_variables.js
I've learned that every value has a type and that `typeof` tells me which one I'm working with (string, number, boolean). I also learned that `==` will converts types before comparing, so `"20" == 20` is `true`, while `===` checks both type and value, so it is `false`. From now on I should use `===` to avoid surprises. but for me i will use the  `===` to avoid suprises

### 03_functions.js
I've learned three ways to write and use functions: `greet()`, `square()`, `calculator()` which returns a object and give back more than one result. I also learned that function should describe an action.

### 04_objects.js
I've learned that a object groups is related to the data under one name, and the method is a function stored as property. Inside a method, `this` refers to the object itself, whichand the `introduce()` can read `this.name` and `this.age`. I also learned that I can also add a new property, like `hobby`, even after the object was created.

### 05_arrays.js
I've learned that `push()` will adds a item to the end of an array and `shift()` removes the first item. I also learned that `for...of` goes every item in order, and that `.map()` will creates a new array from the old one without changing the original. This made doing the lists of data much clearer.

### 06_control_structures.js
I've learned how `if else` checks conditions from top to bottom and also runs only the first one that is true, that' why order of the conditions matters. I also learned when to use a `for  loop` (when I know the count) and it needs `while loop` so it will not run forever

### 07_dom.html
I've learned that `setTimeout()` will update the paragraph after 2 seconds.

### 08_essential_features.js
I've learned numbers can help to make the easier especially when i need to add more

### 09_tricky_parts.js
I've learned that `undefined` means the variable has no value, but `null` is really empty.

### 10_let_const.js
I've learned that `let` can be reassigned and `const` cannot, and  also when trying to reassign a `const` will throws a error.

### 11_arrow_functions.js
I've learned arrow functions with no parameters use `()`, and with one parameter the parentheses are just optional.

### 12_destructuring.js
I've learned that destructuring lets pull values out of the objects and arrays into their own variables in one line, example is `const { name, age } = person`.

### 13_spread_rest.js
I've learned that spread (`...`) copies the items array or properties of an object into a new one without changing the original. it helps so than typing it over and over again you can just do that to make it easy and fast

### 14_classes_inheritance.js
I've learned and remember that a class is like a blueprint, because it's the main bases

### 15_modules_export.js
I've learned that the file can have one default export and any number of named exports.

### 16_modules_import.js
I've learned and remember that a default export don't need curly braces, while a named export needs curly braces and should must match the exported name exactly.

### 17_logical_operators.js
I've learned that `false`, `0`, `""`, `null`, `undefined`, and `NaN` is falsy, and `[]` and `{}`, is truthy.

### 18_ternary_nullish.js
I've learned that the ternary operator `condition ? a : b` and `if...else` packs into a single expression.

### 19_strings_numbers.js
I've learned everyday string methods like `split()`, `toUpperCase()`, `includes()`, and `slice()` for cleaning and checking text specially `trim()` because it mention in 2nd year.

### 20_array_methods.js
I've learned that `.filter()` keeps only the items that pass a test, `.find()` the one match, `.some()` and `.every()` just answer yes/no questions about the whole array, and `.sort()` reorders it.

### 21_errors_json.js
I've learned that `try/catch` keeps the program from crashing when something fails, and that I can use `throw new Error()` to put my own errors on purpose, like when dividing by zero. I also learned that `JSON.stringify()` turns object into text and `JSON.parse()` turns it back into an object that i can use.

### 22_async_javascript.js
I've still abit confuse about `callback`, imean it's abit challenge to explain but to what i search  it "Run this code later, when you are done"

### 23_closures_scope.js
I've learned that a closure lets a function remember the variables from where it was created