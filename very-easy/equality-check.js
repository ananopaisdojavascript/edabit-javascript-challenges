const checkEquality = (a, b) => {
  return a === b;
};

console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));
console.log(checkEquality(0, ""));
console.log(checkEquality(1, "1"));
console.log(checkEquality(0, false));
console.log(checkEquality(NaN, NaN));
console.log(checkEquality(null, undefined));
console.log(checkEquality(undefined, undefined));
console.log(checkEquality(false, null));
