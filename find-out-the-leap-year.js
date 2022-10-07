const leapYear = (year) => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(1968));