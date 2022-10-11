const areTrue = (a, b) => {
  return a === true
    ? b === true
      ? "both"
      : "first"
    : b === true
    ? "second"
    : "neither";
};

console.log(areTrue(true, true));
console.log(areTrue(true, false));
console.log(areTrue(false, true));
console.log(areTrue(false, false));
