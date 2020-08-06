// Runs in O(N) time and O(N) space
const bruteForce = (str) => {
  if (str.length <= 1) return false;
  let singleMet = false;
  const chars = str.toLowerCase().replace(/\s/g, '').split('').sort();
  for (let i = 1; i < chars.length; i += 2) {
    if (chars[i] !== chars[i - 1]) {
      if (singleMet) {
        return false;
      }
      singleMet = true;
    }
  }
  return true;
};

module.exports = {
  bruteForce,
};
