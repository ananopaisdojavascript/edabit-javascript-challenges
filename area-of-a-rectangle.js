const area = (h, w) => {
  const calculateRectangleArea = h * w;
  if (calculateRectangleArea <= 0) {
    return -1;
  }
  return calculateRectangleArea;
};

console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));
