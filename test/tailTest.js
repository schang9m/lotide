const assert = require('chai').assert;
const tail = require("../tail")

// Test Case: Check the original array
describe("#tail", () => {
  it("Return Lighthouse first", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })
  it("Return the length -1", () => {
    assert.lengthOf(tail(["Yo Yo", "Lighthouse", "Labs"]), 2)
  })
})