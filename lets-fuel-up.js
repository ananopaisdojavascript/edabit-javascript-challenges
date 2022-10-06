const calculateFuel = (n) => {
  let fuel = n * 10;
  if (fuel < 100) {
    return 100;
  }
  return fuel;
};

console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));
