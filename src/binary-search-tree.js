const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  makeBranching(node, dataNode) {
    if (dataNode.data < node.data) {
      if (!node.left) {
        node.left = dataNode;
      } else {
        this.makeBranching(node.left, dataNode);
      }
    } else {
      if (!node.right) {
        node.right = dataNode;
      } else {
        this.makeBranching(node.right, dataNode);
      }
    }
}

  add(data) {
    let dataNode = new Node(data);
    if (!this.node) {
      this.node = dataNode;
    } else {
      this.makeBranching(this.node, dataNode);
    }
  }

  has(data) {
    if (this.find(data)) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    function findData(node, data) {
      if (!node) {
        return null;
      } else if (node.data == data) {
        return node;
      } else if (data > node.data) {
        return findData(node.right, data);
      } else if (data < node.data) {
        return findData(node.left, data);
      }
    }
    return findData(this.node, data);
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.node) return null;
    let nod = this.node;
    while (nod.left) {
      nod = nod.left;
    }
    return nod.data;
  }

  max() {
    if (!this.node) return null;
    let nod = this.node;
    while (nod.right) {
      nod = nod.right;
    }
    return nod.data;
  }
}