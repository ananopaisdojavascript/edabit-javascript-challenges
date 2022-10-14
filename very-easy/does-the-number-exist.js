const validStrNumber = (n) => {
  return Number(n) ? true : false;
};

console.log(validStrNumber("3.2"));
console.log(validStrNumber("324"));
console.log(validStrNumber("54..4"));
console.log(validStrNumber("number"));
console.log(validStrNumber(".5"));
