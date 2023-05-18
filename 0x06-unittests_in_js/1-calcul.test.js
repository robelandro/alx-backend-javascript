const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('SUM', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Error', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
