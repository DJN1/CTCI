const test = require('ava');
const checkPermutation = require('.');

// BRUTEFORCE
test('Check Permutations: Bruteforce Test 1', (t) => {
  t.is(checkPermutation.bruteForce('abcd', 'dacb'), true);
});
test('Check Permutations: Bruteforce Test 2', (t) => {
  t.is(checkPermutation.bruteForce('asfs', 'fjel'), false);
});
test('Check Permutations: Bruteforce Null case', (t) => {
  t.is(checkPermutation.bruteForce(null, null), false);
});

// Using sorted array Method
test('Check Permutations: Sorting Method Test 1', (t) => {
  t.is(checkPermutation.sortedArrayMethod('abcd', 'dacb'), true);
});
test('Check Permutations: Sorting Method Test 2', (t) => {
  t.is(checkPermutation.sortedArrayMethod('asfs', 'fjel'), false);
});
test('Check Permutations: Sorting Null case', (t) => {
  t.is(checkPermutation.sortedArrayMethod(null, null), false);
});
