//LECTURE: Functions

function describeCountry(country, population1, capitalCity) {
  return `${country} has ${population1} million people and its capital city is ${capitalCity}`;
}

const describeFin = describeCountry('Finland', 6, 'Helsinki');
const describeSp = describeCountry('Spain', 9, 'Madrid');
const describeGr = describeCountry('Greece', 5, 'Athens');
const allCountries = `
${describeFin}
${describeSp}
${describeGr}
`;

console.log(allCountries);


//LECTURE: Function Declarations vs. Expressions
//function declaration

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
//function expression
const percentageOfWorld2 = function(population) {
  return (population / 7900) * 100;
}

const countryCh = percentageOfWorld1 (1441);
const countryGr = percentageOfWorld1 (150);
const countryFr = percentageOfWorld1 (200);

console.log (countryCh, countryGr, countryFr);

//arrow function

const percentageOfWorld3 = population => (population / 7900) * 100;

const countryJap = percentageOfWorld3 (10);
const countryCy = percentageOfWorld3 (1500);
const countryIt = percentageOfWorld3 (210);

console.log (countryJap, countryCy, countryIt);