const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('calculated', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('calculated', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('calculated', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('calculated', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it("calculated", () => { 
    assert.equal(calculateNumber(1.7, 3.2), 5)});
});
