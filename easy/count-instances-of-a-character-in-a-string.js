const charCount = (myChar, str) => {
  const charArr = str.split("");
  const char = [];
  charArr.forEach((item) => {
    if (item.includes(myChar)) {
      char.push(item);
    }
  });
  const countChar = char.length;
  return countChar;
};

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(
  charCount("f", "frank and his friends have offered five foxes for sale")
);
console.log(charCount("x", "edabit"));
console.log(charCount("a", "Adam and Eve bit the apple and found a snake"));
console.log(charCount("s", "sssssssssssssssssssssssss"));
console.log(charCount("7", "10795426697"));
