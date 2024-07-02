const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe("#takeUntil()", () => {
  it('return [1, 2, 5] until takeUntil greater than 6', () => {
    assert.deepEqual(takeUntil(data1, x => x > 6), [1, 2, 5]);
  });

  it(`return ["I've", "been", "to"] until takeUntil gets to Hollywood `, () => {
    assert.deepEqual(takeUntil(data2, x => x === 'Hollywood'),["I've", "been", "to"]);
  });
});

