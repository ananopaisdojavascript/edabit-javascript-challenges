const addBinary = (a, b) => {
  const sum = a + b;
  return Number(sum).toString(2);
};

console.log(addBinary(1, 1));
console.log(addBinary(1, 2));
console.log(addBinary(4, 5));
console.log(addBinary(8, 20));
console.log(addBinary(100, 20));
console.log(addBinary(40, 50));
console.log(addBinary(65, 77));
console.log(addBinary(40, 50));
console.log(addBinary(1, 0));
