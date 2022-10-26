const getSumOfItems = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));
