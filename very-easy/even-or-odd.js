const evenOrOdd = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum % 2 === 0 ? "even" : "odd";
};

console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));
console.log(evenOrOdd([0, 1, 3]));
console.log(evenOrOdd([1023, 1, 2]));
console.log(evenOrOdd([0, -1, -5]));
console.log(evenOrOdd([0, -1, -3]));
console.log(evenOrOdd([-1023, 1, -2]));
console.log(evenOrOdd([0, 1, 2]));
console.log(evenOrOdd([0, 1, 4]));
console.log(evenOrOdd([1023, 1, 3]));
console.log(evenOrOdd([0, -1, 2]));
console.log(evenOrOdd([0, 1, -4]));
