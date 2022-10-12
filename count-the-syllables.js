const countSyllables = (str) => {
  return str.match(/[a-zA-Z]{1,2}/g).length;
};

console.log(countSyllables("Hehehehehehe"));
console.log(countSyllables("bobobobobobobobo"));
console.log(countSyllables("NANANANA"));
console.log(countSyllables("lelelele"));
console.log(countSyllables("momomomomomomomomo"));
console.log(countSyllables("WiWiWiWiWiWiWiWiWiWi"));
console.log(countSyllables("RURURURURURUrurururuRURU"));
console.log(countSyllables("go"));
console.log(countSyllables("dede"));
