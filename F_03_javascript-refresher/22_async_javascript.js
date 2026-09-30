// 1. Callback
function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Anthony", age: 20 });
  }, 1000);
}

fetchUserMock((user) => {
  console.log("Got user (callback):", user);
});

// 2. Promise + async/await
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Anthony", age: 20 }), 1000);
  });
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Got user (async/await):", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}

showUser();

// 3. Real API: callback style
function getTodoCallback(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

function handleTodo(error, data) {
  if (error) {
    console.error("Error fetching todo:", error.message);
  } else {
    console.log("Fetched todo (callback):", data);
  }
}

getTodoCallback(handleTodo);

// 4. Real API: promise style
function getTodoPromise() {
  return fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(response => response.json());
}

getTodoPromise()
  .then(todo => console.log("Todo (promise):", todo))
  .catch(error => console.error("Something went wrong:", error.message));

// 5. Real API: async/await style
async function getTodoAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await response.json();
  return data;
}

async function fetchTodo() {
  try {
    const todo = await getTodoAsync();
    console.log("Todo (async/await):", todo);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

fetchTodo();

// 6. Synchronous vs asynchronous
let name = "Anthony Daniel Bautista";
let age = 20;
let address = "Angeles City";

setTimeout(() => {
  console.log("This message is printed after 2 seconds");
}, 2000);

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);
