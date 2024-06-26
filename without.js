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
const without = function(source, remove) {
  //compare source to remove,  and get rid of the ones that are the same
  //I can use filter
  // return source.filter(item => !remove.includes(item));
  // const compare = function(item) {
  //   return !remove.includes(item)
  // };
  // let filterArr = source.filter(compare)
  let newArr = [];
  for(let i = 0; i < source.length; i++) {
    let same = false;
    for(let y = 0; y <remove.length; y++) {
      if (source[i] === remove[y]) {
        same = true;
        break;
      }
    }
    if(!same){
      newArr.push(source[i]);
    }
  }
  return newArr;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);