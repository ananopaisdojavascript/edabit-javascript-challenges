const kineticEnergy = (m, v) => {
  return ((m * Math.pow(v, 2)) / 2).toFixed(0);
};

console.log(kineticEnergy(60, 3));
console.log(kineticEnergy(45, 10));
console.log(kineticEnergy(63.5, 7.35));
