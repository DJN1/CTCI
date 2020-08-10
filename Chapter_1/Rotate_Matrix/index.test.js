const test = require('ava');
const rotateMatrix = require('.');

test('Rotate Matrix: Bruteforce Null Test', (t) => {
  t.is(rotateMatrix.bruteForce(null), false);
});
test('Rotate Matrix: Bruteforce Empty Matrix Test', (t) => {
  t.is(rotateMatrix.bruteForce([]), false);
});
test('Rotate Matrix: Bruteforce Empty Nested Matrix Test', (t) => {
  t.is(rotateMatrix.bruteForce([[], []]), false);
});
test('Rotate Matrix: Bruteforce Dimension Mismatch Test', (t) => {
  t.deepEqual(rotateMatrix.bruteForce([[1, 2]]), false);
});
test('Rotate Matrix: BruteForce Length 1 Test', (t) => {
  t.deepEqual(rotateMatrix.bruteForce([[1]]), [[1]]);
});
test('Rotate Matrix: Bruteforce Test 1', (t) => {
  t.deepEqual(rotateMatrix.bruteForce(
    [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],
  ),
  [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
});
