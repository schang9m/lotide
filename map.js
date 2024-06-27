const words = ["ground", "control", "to", "major", "tom"];
const test1 = [1, 5, 4, 6, 9, 25]
const test2 = [70, 55, 84, 61, 75, 25]


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`array 1:${arr1} array2:${arr2} The two arrays match!`);
  } else {
    console.log(`array 1:${arr1} array2:${arr2} The two arrays do not match!!`);
  }
};

const results1 = map(words, (word) => word[0]);
const results2 = map(test1, word => word * 3)
const results3 = map(test2, word => word + 1)

assertArraysEqual(results1, ["g", "c", "t", "m", "t"])
assertArraysEqual(results2, [3, 15, 12, 18, 27, 75])
assertArraysEqual(results3, [71, 56, 85, 62, 76, 26])