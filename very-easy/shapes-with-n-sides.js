const nSidedShape = (n) => {
  const shapes = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };
  return shapes[n];
};

console.log(nSidedShape(1));
console.log(nSidedShape(2));
console.log(nSidedShape(3));
console.log(nSidedShape(4));
console.log(nSidedShape(5));
console.log(nSidedShape(6));
console.log(nSidedShape(7));
console.log(nSidedShape(8));
console.log(nSidedShape(9));
console.log(nSidedShape(10));
