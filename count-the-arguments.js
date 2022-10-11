function numArgs() {
  let args = Array.from(arguments);
  let sortedArgs = args.length;
  return sortedArgs;
}

console.log(numArgs());
console.log(numArgs("foo"));
console.log(numArgs("foo", "bar"));
console.log(numArgs(true, false));
console.log(numArgs({}));
