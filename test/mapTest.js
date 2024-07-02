const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const test1 = [1, 5, 4, 6, 9, 25]
const test2 = [70, 55, 84, 61, 75, 25]

describe("#map()", () => {
  it('return ["g", "c", "t", "m", "t"] when map words,(word) => word[0] ', () => {
    assert.deepEqual(map(words, (word) => word[0]),["g", "c", "t", "m", "t"]);
  });

  it('return [3, 15, 12, 18, 27, 75] when map test1 * 3 ', () => {
    assert.deepEqual(map(test1, word => word * 3),[3, 15, 12, 18, 27, 75]);
  });

  it('return [71, 56, 85, 62, 76, 26] when map test2 + 1', () => {
    assert.deepEqual(map(test2, word => word + 1),[71, 56, 85, 62, 76, 26]);
  });
});