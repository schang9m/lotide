const assert = require('chai').assert;
const countOnly   = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe("#count object()", () => {
  it("return 1 if counting for Jason", () => {
    assert.equal(result1["Jason"], 1);
  });

  it("return undefined if counting for Karima", () => {
    assert.equal(result1["Karima"], undefined);
  });

  it("return 2 if counting for Fang", () => {
    assert.equal(result1["Fang"], 2);
  });

  it("return undefined if counting for Agouhanna", () => {
    assert.equal(result1["Agouhanna"], undefined);
  });
});