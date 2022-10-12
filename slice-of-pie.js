const equalSlices = (total, people, each) => {
  const totalSlices = people * each <= total ? true : false;
  if (people === 0) {
    return true;
  }
  return totalSlices;
};

console.log(equalSlices(11, 5, 2));
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));
