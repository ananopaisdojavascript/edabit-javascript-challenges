const colorInvert = (rgb) => {
  const newR = 255 - rgb[0];
  const newG = 255 - rgb[1];
  const newB = 255 - rgb[2];
  return [newR, newG, newB];
};

console.log(colorInvert([165, 170, 119]));
console.log(colorInvert([165, 170, 136]));
console.log(colorInvert([165, 170, 153]));
console.log(colorInvert([165, 170, 170]));
console.log(colorInvert([165, 170, 187]));
console.log(colorInvert([165, 170, 204]));
console.log(colorInvert([165, 170, 221]));
console.log(colorInvert([165, 170, 238]));
console.log(colorInvert([165, 180, 0]));
console.log(colorInvert([165, 180, 17]));
console.log(colorInvert([165, 180, 34]));
