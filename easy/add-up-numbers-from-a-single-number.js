const addUp = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
};

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log(addUp(392));
console.log(addUp(53));
console.log(addUp(897));
console.log(addUp(23));
console.log(addUp(1000));
console.log(addUp(738));
console.log(addUp(100));
console.log(addUp(925));
console.log(addUp(1));
console.log(addUp(999));
console.log(addUp(175));
console.log(addUp(111));
