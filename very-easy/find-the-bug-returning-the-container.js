const getContainer = (product) => {
  let container;
  switch (product) {
    case "Bread":
      container = "bag";
      break;
    case "Beer":
      container = "bottle";
      break;
    case "Milk":
      container = "bottle";
      break;
    case "Cerials":
      container = "box";
      break;
    case "Eggs":
      container = "carton";
      break;
    case "Candy":
      container = "plastic";
      break;
    default:
      container = null;
  }

  return container;
};

console.log(getContainer("Bread"));
console.log(getContainer("Beer"));
console.log(getContainer("Candy"));
console.log(getContainer("Cheese"));
