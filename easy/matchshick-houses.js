const matchHouses = (step) => {
  return step === 0 ? 0 : 6 + (step - 1) * 5;
};

console.log(matchHouses(1));
console.log(matchHouses(0));
console.log(matchHouses(17));
console.log(matchHouses(36));
console.log(matchHouses(15));
console.log(matchHouses(99));
console.log(matchHouses(3));
console.log(matchHouses(87));
