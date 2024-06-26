// FUNCTION IMPLEMENTATION
const args = process.argv;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️️❤️️❤️️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖤🖤🖤Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(str) {
  //make a new object
  let letterCount = {}; 
  for (let letter of str) {
    if (letter !== " "){
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }
  return letterCount;
};
console.log(countLetters("lighthouse in the house"));