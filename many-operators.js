const operate = (num1, num2, operator) => {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
  return 0;
};

console.log(operate(1, 1, "+"));
console.log(operate(1, 1, "-"));
console.log(operate(1, 1, "*"));
console.log(operate(1, 1, "/"));
console.log(operate(1, 1, "%"));
console.log(operate(2, 1, "+"));
console.log(operate(2, 1, "-"));
console.log(operate(2, 1, "*"));
console.log(operate(2, 1, "/"));
console.log(operate(2, 1, "%"));
