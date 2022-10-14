const moodToday = (mood) => {
  return `Today, I am feeling ${mood || "neutral"}`;
};

console.log(moodToday("happy"));
console.log(moodToday("sad"));
console.log(moodToday("very happy"));
console.log(moodToday("rather empty inside"));
console.log(moodToday("confused"));
console.log(moodToday());
