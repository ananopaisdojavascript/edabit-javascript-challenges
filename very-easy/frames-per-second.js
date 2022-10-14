const frames = (minutes, fps) => {
  return minutes * 60 * fps;
};

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));
