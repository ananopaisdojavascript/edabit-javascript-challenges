const firstOne = (a, b = 0, c = 0, d = 0) => {
  return a || b || c || d || "not found";
};

console.log(firstOne("Edabit"));
console.log(firstOne(false));
console.log(firstOne("", "Pikachu"));
console.log(firstOne("", 0));
console.log(firstOne(0, 20, ""));
console.log(firstOne(0, 0, ""));
console.log(firstOne("", 0, true, false));
console.log(firstOne("", 0, false, false));
