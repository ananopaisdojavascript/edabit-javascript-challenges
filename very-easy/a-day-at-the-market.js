const whoWinsTonight = (coins, space, price, size) => {
  const bill = Math.floor(coins / price);
  const will = Math.floor(space / size);
  const winner = bill === will ? "Tie" : bill > will ? "Bill" : "Will";
  return winner;
};

console.log(whoWinsTonight(20, 20, 5, 10));
console.log(whoWinsTonight(30, 100, 1, 50));
console.log(whoWinsTonight(90, 10, 2, 5));
console.log(whoWinsTonight(10, 2, 20, 1));
console.log(whoWinsTonight(40, 100, 5, 10));
console.log(whoWinsTonight(5, 5, 5, 2));
console.log(whoWinsTonight(3, 7, 2, 5));
console.log(whoWinsTonight(50, 50, 49, 26));
console.log(whoWinsTonight(100000, 100000, 1, 1));
