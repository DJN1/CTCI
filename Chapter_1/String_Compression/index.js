// Runs in O(N) time and O(N) space
const bruteForce = (str) => {
  if (str === null || str.length === 0) return '';
  if (str.length === 1) return str;
  let prevChar = str.charAt(0);
  let counter = 1;
  let compressedString = '';
  for (let i = 1; i < str.length; i += 1) {
    if (str.charAt(i) !== prevChar) {
      compressedString += `${prevChar}${counter}`;
      prevChar = str.charAt(i);
      counter = 1;
    } else {
      counter += 1;
    }
  }
  compressedString += `${prevChar}${counter}`;
  return (compressedString.length < str.length ? compressedString : str);
};

module.exports = {
  bruteForce,
};
