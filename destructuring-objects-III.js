const { one = 1, two = 2 } = `({ one, two } = { two : 2 }).toString()`

console.log(two);