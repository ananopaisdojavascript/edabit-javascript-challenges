const printArray = (number) => {
  const newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
};

console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));
