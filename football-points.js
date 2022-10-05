const footballPoints = (wins, draws, losses) => {
  return 3 * wins + 1 * draws + 0 * losses;
};

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));
