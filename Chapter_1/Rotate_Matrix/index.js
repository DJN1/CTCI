// Runs in O(N) time and space
const bruteForce = (matrix) => {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0
        || matrix.length !== matrix[0].length) return false;
  if (matrix.length === 1) return matrix;
  const m = matrix;
  for (let i = 0; i < Math.floor(m.length / 2); i += 1) {
    const end = matrix.length - 1 - i;
    for (let j = i; j < m.length - 1 - i; j += 1) {
      const top = m[i][j];
      m[i][j] = m[end - (j - i)][i];
      m[end - (j - i)][i] = m[end][end - (j - i)];
      m[end][end - (j - i)] = m[j][end];
      m[j][end] = top;
    }
  }
  return m;
};

module.exports = {
  bruteForce,
};
