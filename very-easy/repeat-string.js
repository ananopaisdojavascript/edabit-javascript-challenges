const repeatString = (txt, n) => {
  const isAString = typeof txt === "string";
  return isAString ? txt.repeat(n) : "Not A String !!";
};

console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 7));
console.log(repeatString("*", 3));
console.log(repeatString("Hello", 11));
console.log(repeatString("243624", 22));
console.log(repeatString([], 3));
console.log(repeatString({}, 3));
console.log(repeatString(24, 3));
console.log(repeatString(true, 3));
console.log(repeatString("Hello", 0));
