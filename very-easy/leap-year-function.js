const leapYear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

console.log(leapYear(1990));
console.log(leapYear(1924));
console.log(leapYear(2021));
