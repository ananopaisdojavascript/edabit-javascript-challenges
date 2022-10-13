const rotateByOne = (arr) => {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
};

console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([20, 15, 26, 8, 4]));
console.log(rotateByOne([7, 8, 6, 4, 5]));
console.log(rotateByOne([5, 9, 45, 1, 2]));
