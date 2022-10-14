const match = (s1, s2) => {
  return s1.toUpperCase() === s2.toUpperCase();
};

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));
