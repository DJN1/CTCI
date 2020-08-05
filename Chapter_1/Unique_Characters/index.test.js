const test = require('ava');
const uniqueCharacters = require('.');

// BRUTEFORCE
test('Unique Characters: Bruteforce Test 1', (t) => {
  t.is(uniqueCharacters.bruteForce('sadfebjkeaf'), false);
});
test('Unique Characters: Bruteforce Test 2', (t) => {
  t.is(uniqueCharacters.bruteForce('asdfghjkl;'), true);
});

// SORTINGMETHOD
test('Unique Characters: Sorting Method Test 1', (t) => {
  t.is(uniqueCharacters.sortingMethod('sadfebjkeaf'), false);
});
test('Unique Characters: Sorting Method Test 2', (t) => {
  t.is(uniqueCharacters.sortingMethod('asdfghjkl;'), true);
});
