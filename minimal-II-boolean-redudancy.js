const parity = (n) => {
  let remainder = Boolean(n % 2);
  return remainder === false ? "even" : "odd";
};

console.log(parity(2));
console.log(parity(3));
console.log(parity(10));
console.log(parity(31));
console.log(parity(666));
console.log(parity(777));
console.log(parity(3482034));
console.log(parity(3482035));
