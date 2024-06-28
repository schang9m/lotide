const takeUntil = function (array, callback) {
  // ...
  let takeArr = [];
  for (let value of array) {
    if (!callback(value)) {
      takeArr.push(value)
    } else {
      return takeArr;
    }
  }
  return takeArr;
}

const eqArrays = function (arr1, arr2) {
  if ((arr1.length || arr2.length) < 1) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅️ array 1:${arr1} array2:${arr2} The two arrays match!`);
  } else {
    console.log(`🛑🛑🛑array 1:${arr1} array2:${arr2} The two arrays do not match!!`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x > 6);
assertArraysEqual(results1, [1, 2, 5])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === 'Hollywood');
assertArraysEqual(results2, ["I've", "been", "to"])


