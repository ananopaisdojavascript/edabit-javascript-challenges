const nextEdge = (side1, side2) => {
  return side1 + side2 - 1;
};

console.log(nextEdge(5, 4));
console.log(nextEdge(8, 3));
console.log(nextEdge(7, 9));
console.log(nextEdge(10, 4));
console.log(nextEdge(7, 2));
