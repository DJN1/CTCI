// Runs in O(1) and O(1) space
const stringMethod = (str) => str.trim().replace(/\s/g, '%20');

module.exports = stringMethod;
