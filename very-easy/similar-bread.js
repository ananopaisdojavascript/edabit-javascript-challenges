const hasSameBread = (arr1, arr2) => {
  return arr1.shift() === arr2.shift() && arr1.pop() === arr2.pop();
};

console.log(
  hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  )
);
console.log(
  hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
  )
);
console.log(
  hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])
);
console.log(
  hasSameBread(
    ["white bread", "lettuce", "toast"],
    ["white bread", "tomato", "toast"]
  )
);
console.log(
  hasSameBread(
    ["white bread", "lettuce", "toast"],
    ["brown bread", "tomato", "toast"]
  )
);
console.log(
  hasSameBread(
    ["white bread", "lettuce", "brown bread"],
    ["brown bread", "tomato", "white bread"]
  )
);
console.log(
  hasSameBread(
    ["white bread", "lettuce", "brown bread"],
    ["white bread", "tomato", "white bread"]
  )
);
