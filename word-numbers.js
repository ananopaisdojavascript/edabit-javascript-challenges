const word = (s) => {
  const messages = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  return messages[s];
};

console.log(word("zero"));
console.log(word("one"));
console.log(word("two"));
console.log(word("three"));
console.log(word("four"));
console.log(word("five"));
console.log(word("six"));
console.log(word("seven"));
console.log(word("eight"));
console.log(word("nine"));
