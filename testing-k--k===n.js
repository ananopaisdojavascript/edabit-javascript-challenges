const kToK = (n, k) => {
  return k ** k === n;
};

console.log(kToK(4, 2));
console.log(kToK(387420489, 9));
console.log(kToK(302875106592253, 13));
console.log(kToK(3124, 5));
console.log(kToK(17, 3));
console.log(kToK(823544, 7));
