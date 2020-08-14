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

  checkDups(node) {
    let currentNode = this.head;
    while (currentNode !== node) {
      if (node !== null && currentNode.data === node.data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
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

  // Runs in O(N) time and O(1) space
  removeDups() {
    let node = this.head;
    while (node !== undefined) {
      if (node !== null && node.next !== undefined && this.checkDups(node.next)) {
        node.next = node.next.next;
      } else if (node !== null && node.next) {
        node = node.next;
      } else {
        return this.head;
      }
    }
    return this.head;
  }
}

module.exports = {
  Node,
  LinkedList,
};
