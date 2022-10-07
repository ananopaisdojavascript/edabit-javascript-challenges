const newWord = (str) => {
  const word = str;
  const firstLetter = word[0];
  const newWord = str.replace(firstLetter, "");
  return newWord;
};

console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));
