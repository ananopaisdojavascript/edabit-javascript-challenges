const howManyWalls = (n, w, h) => {
  return (n / (w * h)).toFixed(0);
};

console.log(howManyWalls(100, 4, 5));
console.log(howManyWalls(10, 15, 12));
console.log(howManyWalls(41, 3, 6));
