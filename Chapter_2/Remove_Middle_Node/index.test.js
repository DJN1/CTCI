const test = require('ava');
const { Node, removeMiddleNode } = require('.');

test('Remove Middle Node: Null Test', (t) => {
  t.is(removeMiddleNode(null), false);
});
test('Remove Middle Node: node.next Null test', (t) => {
  const root = new Node(1);
  t.is(removeMiddleNode(root), false);
});
test('Remove Middle Node: Test 1', (t) => {
  const root = new Node(0);
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  node3.next = node4;
  node2.next = node3;
  node1.next = node2;
  root.next = node1;
  t.is(removeMiddleNode(node2), true);
});
