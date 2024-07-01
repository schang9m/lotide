const assert = require('chai').assert;
const tail = require("../tail")

// Test Case: Check the original array
describe("#tail", () => {
  it("Return Lighthouse first", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it("Return the length -1", () => {
    assert.lengthOf(tail(["Yo Yo", "Lighthouse", "Labs"]), 2)
  });
  
  it("make sure the original array was not altered by the tail function", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(words.length, 3);
  });
})