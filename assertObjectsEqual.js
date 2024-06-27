const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length === obj2.length) {
    for (let val of obj1) {
      if (Array.isArray(object1[val])) {
        if (!eqArrays(object1[val], object2[val])) {
          return false;
        }
      } else if (object1[val] !== object2[val]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
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

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c: 4})