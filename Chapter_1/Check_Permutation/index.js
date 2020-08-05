// Runs in O(N) time
const bruteForce = (str1, str2) => {
  if (str1 === null && str2 === null) return false;
  for (let i = 0; i < str1.length; i += 1) {
    if (str2.indexOf(str1.charAt(i)) === -1) {
      return false;
    }
  }
  return str1.length === str2.length;
};

// Runs in O(N log N) and O(N) space
const sortedArrayMethod = (str1, str2) => {
  if (str1 === null && str2 === null) return false;
  if (str1.length !== str2.length) return false;
  const str1Arr = str1.split('').sort();
  const str2Arr = str2.split('').sort();
  return str1Arr.toString() === str2Arr.toString();
};

module.exports = {
  bruteForce,
  sortedArrayMethod,
};
