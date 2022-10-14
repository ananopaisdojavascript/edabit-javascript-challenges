const ctoa = (c) => {
  let ch = c;
  let index = 0;
  let i = ch.charCodeAt(index);
  return i;
};

console.log(ctoa(" "));
console.log(ctoa("A"));
console.log(ctoa("]"));
console.log(ctoa("^"));
console.log(ctoa("c"));
