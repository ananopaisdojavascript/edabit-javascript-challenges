const arrBetween = (num1, num2, arr) => {
  return arr.filter((value) => value > num1 && value < num2);
};

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));
console.log(arrBetween(1, 1, [1, 0, 3, 7]));
console.log(arrBetween(0, 310, [1, -2, 300, 78765, 100, 99, 98, 234]));
