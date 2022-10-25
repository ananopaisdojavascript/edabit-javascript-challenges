const longBurp = (num) => {
  let str = "Burp";
  let char = "r";
  return str.replace("r", char.repeat(num));
};

console.log(longBurp(3));
console.log(longBurp(5));
console.log(longBurp(9));
console.log(longBurp(10));
console.log(longBurp(13));
console.log(longBurp(18));
console.log(longBurp(1));
