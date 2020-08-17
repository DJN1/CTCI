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
      temp.next.next = null;
    }
  }

  partition(node) {
    let currentNode = this.head;
    const smaller = new LinkedList();
    const larger = new LinkedList(node);
    while (currentNode.next !== undefined && currentNode.next !== null) {
      if (currentNode.data >= node.data) {
        larger.addNode(new Node(currentNode.data));
      } else {
        smaller.addNode(new Node(currentNode.data));
      }
      currentNode = currentNode.next;
    }
    smaller.head.next = larger;
    return smaller;
  }
}

const smallerList = new LinkedList();
const largerList = new LinkedList();
const list = new LinkedList();
let node = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
smallerList.addNode(node);
smallerList.addNode(node1);
smallerList.addNode(node2);
largerList.addNode(node4);
largerList.addNode(node5);
largerList.addNode(node6);
node = new Node(0);
node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
list.addNode(node);
list.addNode(node1);
list.addNode(node2);
list.addNode(node3);
list.addNode(node4);
list.addNode(node5);
list.addNode(node6);
const partioned = list.partition(node4);
console.log(partioned.getList());

module.exports = {
  Node,
  LinkedList,
};
