const potatoes = (str) => {
  const countPotato = str.match(/potato/g).length;
  return countPotato;
};

console.log(potatoes("potato"));
console.log(potatoes("potatopotatocherry"));
console.log(potatoes("potatopotatopotatoorange"));
console.log(potatoes("potatopotatobananapotatopotato"));
console.log(potatoes("potatopotatomangopotatopotatopotato"));
console.log(potatoes("potatocucumberpotatopotatopotatopotatopotato"));
