const minMax = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
};

console.log(minMax([14, 35, 6, 1, 34, 54]));
console.log(minMax([1.346, 1.6532, 1.8734, 1.8723]));
console.log(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]));
console.log(minMax([13, 72, 98, 43, 24, 65, 31]));
console.log(minMax([-54, -23, -54, -21]));
console.log(minMax([-0.473, -0.6834, -0.1287, 0.5632]));
console.log(minMax([0, 0, 0, 0]));
