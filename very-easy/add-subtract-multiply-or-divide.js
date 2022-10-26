const operation = (num1, num2) =>
  ({
    [num1 + num2 === 24]: "added",
    [num1 - num2 === 24]: "subtracted",
    [num1 * num2 === 24]: "multiplied",
    [num1 / num2 === 24]: "divided",
  }[true] || null);

console.log(operation(12, 12));
console.log(operation(100, 76));
console.log(operation(6, 4));
console.log(operation(528, 22));
console.log(operation(10, 12));
