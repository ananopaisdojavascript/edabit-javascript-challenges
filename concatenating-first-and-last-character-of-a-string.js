const firstLast = (name) => {
  const str = name;
  const firstCharacter = str.slice(0, 1);
  const lastCharacter = str.slice(-1);
  return firstCharacter + lastCharacter;
};

console.log(firstLast("ganesh"));
console.log(firstLast("kali"));
console.log(firstLast("shiva"));
console.log(firstLast("vishnu"));
console.log(firstLast("durga"));
