const stutter = (word) => {
  return `${word.slice(0, 2)}... `.repeat(2) + word + "?";
};

console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));
console.log(stutter("am"));
