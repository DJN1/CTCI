class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.length = 0;
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
      this.length += 1;
    } else {
      let temp = this.head;
      while (temp.next !== undefined && temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
      this.length += 1;
    }
  }

  // Runs in O(N) time and O(1) space
  getKthToLast(k) {
    if (k > this.length - 1) {
      return false;
    }
    let index = this.length - 1;
    if (index === k) return this.head;
    let currentNode = this.head;
    while (k !== index) {
      if (currentNode !== null) {
        currentNode = currentNode.next;
        index -= 1;
      } else {
        return false;
      }
    }
    currentNode.next = null;
    return currentNode;
  }
}

module.exports = {
  Node,
  LinkedList,
};
