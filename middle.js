const eqArrays = function(arr1, arr2) {
  console.log(arr1, arr2)
  let check = false;
  if ((arr1.length || arr2.length) < 1) {
    return true;
  }
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

const middle = function(array) {
  let mid;
  if (array.length < 3) {
    return []
  }else if (array.length % 2 !== 0) {
    mid = (Math.floor(array.length / 2))
    return array.slice(mid, mid + 1)
  } else {
    mid = (array.length / 2) - 1
    return array.slice(mid, mid + 2)
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);