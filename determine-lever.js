const determineLever = (arr) => {
  const [a, b, c] = arr;
  if (a === "e" && b === "f" && c === "l") return "first class lever";
  if (a === "e" && b === "l" && c === "f") return "second class lever";
  if (a === "f" && b === "e" && c === "l") return "third class lever";
  return arr;
};

console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));
console.log(determineLever(["f", "e", "l"]));
