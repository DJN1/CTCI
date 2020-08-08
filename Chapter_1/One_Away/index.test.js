const test = require('ava');
const oneAway = require('.');

test('One Away: Bruteforce Test 1', (t) => {
  t.is(oneAway.bruteForce('pale', 'ple'), true);
});
test('One Away: Bruteforce Test 2', (t) => {
  t.is(oneAway.bruteForce('pales', 'pale'), true);
});
test('One Away: Bruteforce Test 3', (t) => {
  t.is(oneAway.bruteForce('pale', 'bale'), true);
});
test('One Away: Bruteforce Test 4', (t) => {
  t.is(oneAway.bruteForce('pale', 'bake'), false);
});
test('One Away: Bruteforce Null Tets', (t) => {
  t.is(oneAway.bruteForce(null, null), false);
});
