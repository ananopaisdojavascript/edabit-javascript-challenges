const volPizza = (radius, height) => {
  return Math.round(Math.pow(radius, 2) * height * Math.PI);
};

console.log(volPizza(1, 1));
console.log(volPizza(7, 2));
console.log(volPizza(10, 2.5));
console.log(volPizza(15, 1.3));
console.log(volPizza(20, 1));
console.log(volPizza(13, 2));
