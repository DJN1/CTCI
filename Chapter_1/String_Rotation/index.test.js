const test = require('ava');
const stringRotation = require('.');

test('String Rotation: Bruteforce Null Test', (t) => {
  t.is(stringRotation.bruteForce(null, null), false);
});
test('String Rotation: Bruteforce Empty Test', (t) => {
  t.is(stringRotation.bruteForce('', ''), false);
});
test('String Rotation: Bruteforce Length Mismatch Test', (t) => {
  t.is(stringRotation.bruteForce('not', 'right'), false);
});
test('String Rotation: Bruteforce Test 1', (t) => {
  t.is(stringRotation.bruteForce('waterbottle', 'erbottlewat'), true);
});
