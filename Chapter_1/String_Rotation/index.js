// Runs in O(N) time and O(1) space
const bruteForce = (s1, s2) => {
  if (s1 === null || s2 === null || s1.length === 0 || s2.length === 0) return false;
  if (s1.length !== s2.length) return false;
  return (s2 + s2).includes(s1);
};

module.exports = {
  bruteForce,
};
