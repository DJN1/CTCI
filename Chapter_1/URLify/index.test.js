const test = require('ava');
const stringMethod = require('.');

// Javascript String Method
test('Unique Characters: Sorting Method Test 1', (t) => {
  t.is(stringMethod('Mr John Smith    '), 'Mr%20John%20Smith');
});
test('Unique Characters: Sorting Method Test 2', (t) => {
  t.is(stringMethod('Testing this method     '), 'Testing%20this%20method');
});
