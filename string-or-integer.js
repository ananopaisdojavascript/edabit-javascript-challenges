const intOrString = (param) => {
  return typeof param === "string" ? "str" : "int";
};

console.log(intOrString(1));
console.log(intOrString("HELLO"));
console.log(intOrString("edabit"));
console.log(intOrString(873432874));
console.log(intOrString(5));
