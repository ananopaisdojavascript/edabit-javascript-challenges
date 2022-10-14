function fifth() {
  const args = Array.from(arguments);
  return args[4] ? typeof args[4] : "Not enough arguments";
}

console.log(fifth(1, 2, 3, 4, 5));
console.log(fifth("a", 2, 3, true, "five"));
console.log(fifth());
