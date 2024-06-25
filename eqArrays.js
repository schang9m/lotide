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
  //counter for arr2
  let arr2Count = 0;
  let check = false;
  for (let i = 0; i < arr1.length; i++){
    //as arr[i]++ arr2Count also ++
    if (arr1[i] !== arr2[arr2Count]) {
      return false
    }else{
      check = true; 
      arr2Count++;
    }
  }
  return check;
}

assertEqual(eqArrays([1, 2, 3], [2, 2, 3]), true);