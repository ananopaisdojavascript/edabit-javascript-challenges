const modifyLast = (str, n) => {
  const last = str[str.length - 1];
  return str.replace(last, last.repeat(5));
};

console.log(modifyLast("Hello", 3));
console.log(modifyLast("hey", 6));
console.log(modifyLast("plsssss!1!", 5));
console.log(modifyLast("gr", 2));
console.log(modifyLast("excuse me what?", 5));
console.log(modifyLast("123", 5));
console.log(modifyLast("a", 3));
console.log(modifyLast("STOP", 3));
