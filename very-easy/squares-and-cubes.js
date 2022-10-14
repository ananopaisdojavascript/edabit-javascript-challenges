const checkSquareAndCube = (arr) => {
  return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
};

console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([5, 12]));
console.log(checkSquareAndCube([9, 27]));
console.log(checkSquareAndCube([25, 120]));
console.log(checkSquareAndCube([25, 125]));
console.log(checkSquareAndCube([36, 215]));
console.log(checkSquareAndCube([36, 217]));
console.log(checkSquareAndCube([144, 1728]));
