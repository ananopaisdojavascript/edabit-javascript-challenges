const isTriangle = (a, b, c) => {
  const triangleSides = a + b > c && a + c > b && b + c > a;
  return triangleSides ? true : false;
};

console.log(isTriangle(4, 5, 6));
console.log(isTriangle(3, 4, 6));
console.log(isTriangle(2, 5, 7));
console.log(isTriangle(2, 5, 9));
console.log(isTriangle(2, 9, 5));
console.log(isTriangle(9, 2, 5));
console.log(isTriangle(11, 12, 20));
console.log(isTriangle(14, 3, 12));
console.log(isTriangle(23, 4, 28));
console.log(isTriangle(21, 4, 25));
