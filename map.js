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

module.exports = map;
