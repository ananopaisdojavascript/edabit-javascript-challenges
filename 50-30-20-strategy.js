const fiftyThirtyTwenty = (ati) => {
  const income = {
    Needs: ati * 0.5,
    Wants: ati * 0.3,
    Savings: ati * 0.2,
  };
  return income;
};

console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));
console.log(fiftyThirtyTwenty(27800));
console.log(fiftyThirtyTwenty(19000));
console.log(fiftyThirtyTwenty(17610));
console.log(fiftyThirtyTwenty(25000));
console.log(fiftyThirtyTwenty(100000));
console.log(fiftyThirtyTwenty(347100));
