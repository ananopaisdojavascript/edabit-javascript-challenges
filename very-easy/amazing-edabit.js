const amazingEdabit = (str) => {
  const singular = str.includes("edabit")
    ? str
    : str.replace(" is amazing.", " is not amazing.");
  return singular;
};

console.log(amazingEdabit("edabit is amazing."));
console.log(amazingEdabit("Mubashir is amazing."));
console.log(amazingEdabit("Trump is amazing."));
console.log(amazingEdabit("Infinity is amazing."));
console.log(amazingEdabit("Mubashir and edabit are amazing."));
console.log(amazingEdabit("Matt is amazing."));
console.log(amazingEdabit("Helen is amazing."));
console.log(amazingEdabit("Python and edabit are amazing."));
console.log(amazingEdabit("C++ is amazing."));
console.log(amazingEdabit("javascript is amazing."));
console.log(amazingEdabit("java is amazing."));
console.log(amazingEdabit("ruby is amazing."));
console.log(amazingEdabit("SQL is amazing."));
console.log(amazingEdabit("CSS is amazing."));
console.log(amazingEdabit("Pakistan is amazing. edabit"));
console.log(amazingEdabit("You and edabit are amazing."));
console.log(amazingEdabit("Matt and edabit are amazing."));
console.log(amazingEdabit("Helen and edabit are amazing."));
console.log(amazingEdabit("Everyone is amazing."));
console.log(amazingEdabit("Swift and edabit are amazing."));
