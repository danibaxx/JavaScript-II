// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function candyBar() {
  const sweet1 = 'chocolate';
  console.log(`My favorite sweet is ${sweet1}`);

  function hardCandy() {
    const sweet2 = 'nerds';
    console.log(sweet2);

    function notCandy() {
      const notSweet = 'Doritos';
      console.log(notSweet);
    }
    notCandy();
  }
  hardCandy();
}
candyBar();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
