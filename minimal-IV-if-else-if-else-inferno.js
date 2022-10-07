const equilbrium = (x) => {
  if (x > 0) return "positive";
  if (x < 0) return "negative";
  return true;
};

console.log(equilbrium(0.0));
console.log(equilbrium(0));
console.log(equilbrium(3));
console.log(equilbrium(66));
console.log(equilbrium(5425));
console.log(equilbrium(1111.1));
console.log(equilbrium(0.0001));
console.log(equilbrium(-3));
console.log(equilbrium(-66));
console.log(equilbrium(-5425));
console.log(equilbrium(-1111.1));
console.log(equilbrium(-0.0001));
