const halfQuarterEighth = (n) => {
  const half = n / 2;
  const quarter = n / 4;
  const eighth = n / 8;
  const arr = [];
  arr.push(half, quarter, eighth);
  return arr;
};

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));
console.log(halfQuarterEighth(18));
console.log(halfQuarterEighth(98));
console.log(halfQuarterEighth(14));
