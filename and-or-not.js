const NOT = (n) => {
  return !n ? 1 : 0;
};

const AND = (a, b) => {
  return a && b;
};

const OR = (a, b) => {
  return a || b;
};

console.log(AND(1, 1));
console.log(AND(0, 0));
console.log(OR(1, 0));
console.log(OR(1, 1));
console.log(NOT(0));
console.log(NOT(1));
