const { name, email, ...rest} = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, rest} = user ).toString()`

console.log(rest)