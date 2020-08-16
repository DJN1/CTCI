const test = require('ava');
const { LinkedList, Node } = require('.');

test('Partition: Test 1', (t) => {
  const smallerList = new LinkedList();
  const node = new Node(0);
  smallerList.addNode(node);
  const node1 = new Node(1);
  smallerList.addNode(node1);
  const node2 = new Node(2);
  smallerList.addNode(node2);
  const node3 = new Node(3);
  const largerList = new LinkedList();
  const node4 = new Node(4);
  largerList.addNode(node4);
  const node5 = new Node(5);
  largerList.addNode(node5);
  const node6 = new Node(6);
  largerList.addNode(node6);
  const list = new LinkedList();
  list.addNode(node);
  list.addNode(node1);
  list.addNode(node2);
  list.addNode(node3);
  list.addNode(node4);
  list.addNode(node5);
  list.addNode(node6);
  const [smaller, larger] = list.partition(new Node(4));
  console.log(smaller.getList());
  console.log(larger.getList());
  t.deepEqual(smaller.getList(), smallerList.getList());
  t.deepEqual(larger.getList(), largerList.getList());
});
