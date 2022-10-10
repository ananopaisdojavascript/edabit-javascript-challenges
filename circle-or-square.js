const circle_or_square = (rad, area) => {
  const circumference = 2 * 3.14 * rad;
  const squarePerimeter = 4 * Math.sqrt(area);
  return circumference > squarePerimeter;
};

console.log(circle_or_square(16, 625));
console.log(circle_or_square(5, 100));
console.log(circle_or_square(8, 144));
console.log(circle_or_square(18, 900));
