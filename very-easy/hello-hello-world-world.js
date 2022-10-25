const helloWorld = (num) =>
  ({
    [num % 3 === 0]: "Hello",
    [num % 5 === 0]: "World",
    [num % 3 === 0 && num % 5 === 0]: "Hello World",
  }[true]);

console.log(helloWorld(3));
console.log(helloWorld(5));
console.log(helloWorld(15));
