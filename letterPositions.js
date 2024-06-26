const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};
const eqArrays = function(arr1, arr2) {
  let check = false;
  if (arr1.length !== arr2.length) {
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
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`array 1:${arr1} array2:${arr2} The two arrays match!`);
  } else {
    console.log(`array 1:${arr1} array2:${arr2} The two arrays do not match!!`);
  }
};

console.log(letterPositions("lighthouse in the house"))