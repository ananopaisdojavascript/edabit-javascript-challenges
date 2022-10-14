const relationToLuke = (name) => {
  const relations = {
    "Darth Vader": "Luke, I am your father",
    Leia: "Luke, I am your sister",
    Han: "Luke, I am your brother in law",
    R2D2: "Luke, I am your droid",
  };
  return relations[name];
};

console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));
