// FUNCTION IMPLEMENTATION
const countOnly = function(allItems, itemsToCount) {
  let nameCount = Object.keys(itemsToCount);
  let countObject = {};
  for (let item of nameCount) {
    if (itemsToCount[item]) {
      let count = 0;
      for (let name of allItems) {
        if (item === name) {
          count++;
        }
      }
      if (count > 0) {
        countObject[item] = count;
      } else {
        countObject[item] = undefined;
      }
      console.log(countObject);
    }
  }
  return countObject;
};

module.exports = countOnly;