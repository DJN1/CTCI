class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Runs in O(1) time and space
const removeMiddleNode = (node) => {
  const replaceNode = node;
  if (replaceNode === null || replaceNode.next === null) {
    return false;
  }

  const nextNode = replaceNode.next;
  replaceNode.data = nextNode.data;
  replaceNode.next = nextNode.next;
  return true;
};

module.exports = {
  Node,
  removeMiddleNode,
};
