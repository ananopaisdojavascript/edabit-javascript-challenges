const yearsInOneHouse = (age, moves) => Math.round(age / (moves + 1))

console.log(yearsInOneHouse(30, 1));
console.log(yearsInOneHouse(15, 2));
console.log(yearsInOneHouse(80, 0));
console.log(yearsInOneHouse(23, 2));