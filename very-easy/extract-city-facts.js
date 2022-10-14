const cityFacts = (city) => {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
};

console.log(
  cityFacts({ name: "Manila", population: "1,780,148", continent: "Asia" })
);
console.log(
  cityFacts({
    name: "Melbourne",
    population: "4,936,349",
    continent: "Australia",
  })
);
console.log(
  cityFacts({ name: "Kampala", population: "1,507,080", continent: "Africa" })
);
console.log(
  cityFacts({
    name: "Buenos Aires",
    population: "2,891,082",
    continent: "South America",
  })
);
console.log(
  cityFacts({
    name: "Vancouver",
    population: "631,486",
    continent: "North America",
  })
);
console.log(
  cityFacts({ name: "Berlin", population: "3,748,148", continent: "Europe" })
);
console.log(
  cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
  })
);
console.log(
  cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia",
  })
);
