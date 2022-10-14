const toNumberArray = (arr) => {
  return arr.map((item) => Number(item));
};

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));
console.log(toNumberArray(["19", "14"]));
console.log(toNumberArray(["0", "4"]));
console.log(toNumberArray(["9", "4", "5", "6", "7", "8", "9"]));
console.log(toNumberArray(["11", "14", "13", "12", "3", "6"]));
console.log(toNumberArray(["7.2", "9.7", "4.0", "9.7", "6.5"]));
console.log(
  toNumberArray(["2.1", "1.7", "7.0", "4.7", "9.3", "6.8", "9.1", "9.1"])
);
