const pHName = (pH) =>
  ({
    [pH > 7]: "alkaline",
    [pH < 7]: "acidic",
    [pH === 7]: "neutral",
    [pH < 0 || pH > 14]: "invalid",
  }[true]);

console.log(pHName(7.0));
console.log(pHName(7));
console.log(pHName(13.52));
console.log(pHName(-4.33));
console.log(pHName(8.27));
console.log(pHName(9.72));
console.log(pHName(-4.58));
console.log(pHName(14.85));
console.log(pHName(17.76));
console.log(pHName(3.9));
console.log(pHName(14.21));
console.log(pHName(-2.35));
console.log(pHName(2.66));
console.log(pHName(16.45));
console.log(pHName(3.46));
console.log(pHName(7.26));
console.log(pHName(12.46));
console.log(pHName(17.51));
console.log(pHName(19.7));
console.log(pHName(10.46));
console.log(pHName(-4.83));
console.log(pHName(3.13));
console.log(pHName(11.38));
console.log(pHName(5.23));
console.log(pHName(18.85));
console.log(pHName(15.82));
console.log(pHName(9.17));
console.log(pHName(2.73));
console.log(pHName(10.99));
console.log(pHName(-3.86));
console.log(pHName(17.59));
console.log(pHName(5.5));
console.log(pHName(-3.35));
console.log(pHName(16.02));
