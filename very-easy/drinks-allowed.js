const shouldServeDrinks = (age, onBreak) => {
  return age >= 18 && onBreak === false;
};

console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));
