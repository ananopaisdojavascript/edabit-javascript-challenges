function numberArgs(/* fill-in */) {
  let args = Array.from(arguments);
  let sortedArgs = args.length;
  return sortedArgs;
}

console.log(numberArgs("a", "b", "c"));
console.log(numberArgs(10, 20, 30, 40, 50));
console.log(numberArgs("x", "y"));
console.log(numberArgs());
