const test = require('ava');
const { Node, LinkedList } = require('.');

test('Remove Dups: Test 1', (t) => {
  const list = new LinkedList();
  const newNode = new Node(1);
  list.addNode(newNode);
  const newNode1 = new Node(2);
  list.addNode(newNode1);
  const newNode2 = new Node(3);
  list.addNode(newNode2);
  const dupNode = new Node(2);
  list.addNode(dupNode);
  t.deepEqual(list.removeDups(), [1, 2, 3]);
});
