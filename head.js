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

const head = function(arr){
  return arr[0];
}
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), "Hello");