function calculateNumber(type, a, b) {
  let result;
  if (b === 0) {
    return 'Error';
  }
  if (type === 'SUM') {
    result = Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    result = Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    result = Math.round(a) / Math.round(b);
  }
  return result;
}

module.exports = calculateNumber;
