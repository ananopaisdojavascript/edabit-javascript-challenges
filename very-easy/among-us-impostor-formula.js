const imposterFormula = (i, p) => `${(100 * (i / p)).toFixed(0)}%`;

console.log(imposterFormula(1, 10));
console.log(imposterFormula(2, 5));
console.log(imposterFormula(1, 8));