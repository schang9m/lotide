const without = require("../without");
const assert = require('chai').assert;

const words = ["hello", "world", "lighthouse"];

describe("#without()", () => {
  it("return ['hello', 'world'] if use without(lighthouse) ", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ['hello', 'world']);
  });

});
