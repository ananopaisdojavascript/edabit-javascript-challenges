const add = (char, str) => {
  return str.replace(/\s+/g, char);
};

console.log(add("#", "hello world"));
console.log(add("R", "javascript is fun"));
console.log(add("*", "use .join() for this challenge"));
console.log(add("#", " "));
