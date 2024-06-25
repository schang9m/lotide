// FUNCTION IMPLEMENTATION
const args = process.argv;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️️❤️️❤️️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖤🖤🖤Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(args[2] , args[3]);

const eqArrays = function(arr1, arr2) {
  let check = false;
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      check = true;
    }
  }
  return check;
}

assertEqual(eqArrays([1, 2, 3], [2, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [2, 2, 3]), true);

