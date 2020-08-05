// Runs in O(N) using O(N) space
const bruteForce = (str) => {
  const seen = [];
  str.split('').forEach((char) => {
    if (seen.indexOf(char) === -1) {
      seen.push(char);
    }
  });
  return seen.length === str.length;
};

// Runs in O(N) using O(N) space
const sortingMethod = (str) => {
  const sortedCharArr = str.split('').sort();
  for (let i = 0; i < sortedCharArr.length - 1; i += 1) {
    if (sortedCharArr[i] === sortedCharArr[i + 1]) {
      return false;
    }
  }
  return true;
};

module.exports = {
  bruteForce,
  sortingMethod,
};
