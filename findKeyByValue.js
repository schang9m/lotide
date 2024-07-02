const findKeyByValue = function(obj, val) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (val === obj[key]) {
      return key;
    }
  }
};
module.exports = findKeyByValue;