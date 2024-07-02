const flatten = function(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // for (let y = 0; y < arr[i].length; y++) {
      //   flatArr.push(arr[i][y]);
      //}
      flatArr = flatArr.concat(arr[i])
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

module.exports = flatten;