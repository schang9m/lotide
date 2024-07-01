const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅️ array 1 => ${arr1} ||| array2 => ${arr2} The two arrays match!`);
  } else {
    console.log(`🛑🛑🛑array 1 => ${arr1} ||| array2 => ${arr2} The two arrays do not match!!`);
  }
};

module.exports = assertArraysEqual;