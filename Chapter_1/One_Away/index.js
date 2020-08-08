// Runs in O(N) time and O(1) space
const bruteForce = (str1, str2) => {
  if (str1 === null || str2 === null) return false;
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let diffSeen = false;
  for (let i = 0, j = 0; (i < str1.length && j < str2.length); i += 1, j += 1) {
    if (str1.charAt(i) !== str2.charAt(j)) {
      if (diffSeen) return false;
      if (str1.length > str2.length) j -= 1;
      else if (str1.length < str2.length) i -= 1;
      diffSeen = true;
    }
  }
  return true;
};

module.exports = {
  bruteForce,
};
