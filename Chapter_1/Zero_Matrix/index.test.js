const test = require('ava');
const zeroMatrix = require('.');

test('Zero Matrix: Bruteforce Null Test', (t) => {
  t.is(zeroMatrix.bruteForce(null), null);
});
test('Zero Matrix: Bruteforce Empty Array Test', (t) => {
  t.deepEqual(zeroMatrix.bruteForce([]), []);
});
test('Zero Matrix: Bruteforce Empty Matrix Test', (t) => {
  t.deepEqual(zeroMatrix.bruteForce([[]]), [[]]);
});
test('Zero Matrix: Bruteforce 1x1 Test', (t) => {
  t.deepEqual(zeroMatrix.bruteForce([[0]]), [[0]]);
});
test('Zero Matrix: Bruteforce 2x2 Test', (t) => {
  t.deepEqual(zeroMatrix.bruteForce([[1, 0], [3, 4]]), [[0, 0], [3, 0]]);
});
test('Zero Matrix: Bruteforce Test 1', (t) => {
  t.deepEqual(zeroMatrix.bruteForce([
    [1, 3, 0, 4],
    [4, 6, 9, 3],
    [0, 6, 8, 2],
    [1, 3, 6, 4],
  ]), [
    [0, 0, 0, 0],
    [0, 6, 0, 3],
    [0, 0, 0, 0],
    [0, 3, 0, 4],
  ]);
});
