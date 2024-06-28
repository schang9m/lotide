// FUNCTION IMPLEMENTATION
const args = process.argv;
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️️❤️️❤️️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖤🖤🖤Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined
}

const test1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

const test2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
); // => "noma"

assertEqual(test2, "Akaleri")