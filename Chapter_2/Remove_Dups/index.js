class Node {
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  checkDups(node) {
    let currentNode = this.head;
    while (currentNode !== node) {
      if (currentNode.data === node.data) {
        return true;
      }

      currentNode = currentNode.next;
    }
    return false;
  }

  getList() {
    const returnList = [];
    let temp = this.head;
    while (temp !== undefined) {
      returnList.push(temp.data);
      temp = temp.next;
    }
    return returnList;
  }

  addNode(node) {
    if (this.head === undefined && this.head !== null) {
      node.next = null; // eslint-disable-line no-param-reassign
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next !== undefined && temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  removeDups() {
    let node = this.head;
    while (node !== undefined) {
      if (node.next !== undefined && this.checkDups(node.next)) {
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }
    return this.head;
  }
}

module.exports = {
  Node,
  LinkedList,
};
