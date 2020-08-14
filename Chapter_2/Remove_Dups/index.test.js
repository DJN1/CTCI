const test = require('ava');
const { Node, LinkedList } = require('.');

test('Remove Dups: Null Test', (t) => {
  const list = new LinkedList();
  t.deepEqual(new LinkedList(list.removeDups()).getList(), []);
});
test('Remove Dups: No Duplicate Test', (t) => {
  const list = new LinkedList();
  const newNode = new Node(1);
  list.addNode(newNode);
  const newNode2 = new Node(2);
  list.addNode(newNode2);
  const newNode3 = new Node(3);
  list.addNode(newNode3);
  const newNode4 = new Node(4);
  list.addNode(newNode4);
  t.deepEqual(new LinkedList(list.removeDups()).getList(), [1, 2, 3, 4]);
});
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
  const nonDupList = list.removeDups();
  t.deepEqual(new LinkedList(nonDupList).getList(), [1, 2, 3]);
});
test('Remove Dups: Alpha Test', (t) => {
  const list = new LinkedList();
  const newNode = new Node('a');
  list.addNode(newNode);
  const newNode1 = new Node('b');
  list.addNode(newNode1);
  const dupNode = new Node('c');
  list.addNode(dupNode);
  const newNode2 = new Node('d');
  list.addNode(newNode2);
  const newNode3 = new Node('e');
  list.addNode(newNode3);
  const dupNode1 = new Node('c');
  list.addNode(dupNode1);
  const dupNode2 = new Node('c');
  list.addNode(dupNode2);
  const dupNode3 = new Node('d');
  list.addNode(dupNode3);
  const nonDupList = list.removeDups();
  t.deepEqual(new LinkedList(nonDupList).getList(), ['a', 'b', 'c', 'd', 'e']);
});
