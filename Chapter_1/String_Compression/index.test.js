const test = require('ava');
const stringCompression = require('.');

test('String Compression: Bruteforce Test 1', (t) => {
  t.is(stringCompression.bruteForce('aabcccccaaa'), 'a2b1c5a3');
});
test('String Compression: Bruteforce empty string test', (t) => {
  t.is(stringCompression.bruteForce(''), '');
});
test('String Compression: Bruteforce null test', (t) => {
  t.is(stringCompression.bruteForce(null), '');
});
test('String Compression: Bruteforce longer compression test', (t) => {
  t.is(stringCompression.bruteForce('abcdefg'), 'abcdefg');
});
