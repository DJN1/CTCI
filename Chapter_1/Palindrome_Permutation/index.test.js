const test = require('ava');
const palindromePermutation = require('.');

test('Palindrome Permutation: Bruteforce Test 1', (t) => {
  t.is(palindromePermutation.bruteForce('Tact Coa'), true);
});
test('Palindrome Permutation: Bruteforce Null Test', (t) => {
  t.is(palindromePermutation.bruteForce(''), false);
});
test('Palindrome Permutation: Bruteforce Fail Test', (t) => {
  t.is(palindromePermutation.bruteForce('asdfvds'), false);
});
