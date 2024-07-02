const takeUntil = function (array, callback) {
  // ...
  let takeArr = [];
  for (let value of array) {
    if (!callback(value)) {
      takeArr.push(value)
    } else {
      return takeArr;
    };
  };
  return takeArr;
};

module.exports = takeUntil;

