const toInt = (str) => {
  return Number(str);
};

const toStr = (int) => {
  return int.toString();
};

console.log(toInt("37"));
console.log(toInt("113"));
console.log(toInt("5"));
console.log(toInt("5231"));
console.log(toStr(37));
console.log(toStr(113));
console.log(toStr(5));
console.log(toStr(5231));
