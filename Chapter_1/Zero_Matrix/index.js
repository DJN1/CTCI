// Runs in O(MN) time and O(MN) space
const bruteForce = (matrix) => {
  if (matrix === null || matrix.length < 1 || matrix[0].length < 1) return matrix;
  const m = matrix;
  const colIndices = [];
  const rowIndices = [];
  for (let i = 0; i < m.length; i += 1) {
    for (let j = 0; j < m[0].length; j += 1) {
      if (m[i][j] === 0) {
        rowIndices.push(i);
        colIndices.push(j);
      }
    }
  }
  rowIndices.forEach((index) => {
    for (let i = 0; i < m.length; i += 1) {
      m[index][i] = 0;
    }
  });
  colIndices.forEach((index) => {
    for (let i = 0; i < m[0].length; i += 1) {
      m[i][index] = 0;
    }
  });
  return m;
};

module.exports = {
  bruteForce,
};
