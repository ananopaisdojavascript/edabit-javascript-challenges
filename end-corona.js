const endCorona = (recovers, newCases, activeCases) => {
  return Math.ceil(activeCases / (recovers - newCases));
};

console.log(endCorona(4000, 2000, 77000));
console.log(endCorona(3000, 2000, 50699));
console.log(endCorona(30000, 25000, 390205));
console.log(endCorona(260000, 255000, 20511691));
