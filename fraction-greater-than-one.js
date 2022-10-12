const greaterThanOne = (frac) => {
  const strToNum = frac.split("/");
  const num1 = Number(strToNum[0]);
  const num2 = Number(strToNum[1]);
  return num1 / num2 > 1 ? true : false;
};

console.log(greaterThanOne("1/2"));
console.log(greaterThanOne("7/4"));
console.log(greaterThanOne("10/10"));
console.log(greaterThanOne("12/30"));
console.log(greaterThanOne("28/3"));
console.log(greaterThanOne("35/31"));
console.log(greaterThanOne("11/27"));
console.log(greaterThanOne("42/32"));
console.log(greaterThanOne("34/15"));
console.log(greaterThanOne("16/16"));
console.log(greaterThanOne("38/41"));
console.log(greaterThanOne("45/43"));
console.log(greaterThanOne("13/38"));
console.log(greaterThanOne("43/2"));
console.log(greaterThanOne("16/31"));
console.log(greaterThanOne("41/15"));
