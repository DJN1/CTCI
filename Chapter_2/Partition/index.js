class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getList() {
    const returnList = [];
    let temp = this.head;
    while (temp !== undefined && temp !== null) {
      returnList.push(temp.data);
      temp = temp.next;
    }
    return returnList;
  }

  addNode(node) {
    if (this.head === undefined || this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next !== undefined && temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  partition(node) {
    let currentNode = this.head;
    const smaller = new LinkedList();
    const larger = new LinkedList();
    larger.addNode(new Node(node.data));
    while (currentNode !== null) {
      if (currentNode.data >= node) {
        larger.addNode(new Node(currentNode.data));
      } else {
        smaller.addNode(new Node(currentNode.data));
      }
      currentNode = currentNode.next;
    }
    return [smaller, larger];
  }
}
console.log('starting');
const smallerList = new LinkedList();
const largerList = new LinkedList();
const list = new LinkedList();
const node = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
smallerList.addNode(node);
smallerList.addNode(node1);
smallerList.addNode(node2);
largerList.addNode(node4);
largerList.addNode(node5);
largerList.addNode(node6);
list.addNode(node);
list.addNode(node1);
list.addNode(node2);
list.addNode(node3);
list.addNode(node4);
list.addNode(node5);
list.addNode(node6);
console.log('reached partition');
const [smaller, larger] = list.partition(new Node(4));
console.log(smaller.getList());
console.log(larger.getList());

module.exports = {
  Node,
  LinkedList,
};
