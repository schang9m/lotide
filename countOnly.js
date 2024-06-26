// FUNCTION IMPLEMENTATION
const args = process.argv;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️️❤️️❤️️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖤🖤🖤Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let nameCount = Object.keys(itemsToCount);
  let countObject = {};
  for (let item of nameCount) {
    if (itemsToCount[item]) {
      let count = 0;
      for (let name of allItems) {
        if (item === name) {
          count++;
        }
      }
      if (count > 0) {
        countObject[item] = count;
      } else {
        countObject[item] = undefined;
      }
      console.log(countObject);
    }
  }
  return countObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);