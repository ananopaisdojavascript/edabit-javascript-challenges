const invertArray = (arr) => {
  return arr.map((num) => (num = num / -1));
};

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));
console.log(invertArray([0]));
