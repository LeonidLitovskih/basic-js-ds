const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
    // remove line with error and write your code here
  }

  add(data) {
    this.rootTree = addTree(this.rootTree, data);
    function addTree(tree, data) {
      if (!tree) return new Node(data);
      if (tree.data === data) return tree;
      if (data < tree.data) {
        tree.left = addTree(tree.left, data);
      } else {
        tree.rigth = addTree(tree.rigth, data);
      }
      return tree;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return searchTree(this.rootTree, data)
    function searchTree(tree, data) {
      if (!tree) return false;
      if (tree.data === data) return true;
      return data < tree.data ?
        searchTree(tree.left, data) :
        searchTree(tree.rigth, data);
    }
    // remove line with error and write your code here
  }

  find( data ) {
    return searchTree(this.rootTree, data);

    function searchTree(tree, data) {
      if (!tree) return null;
      if (tree.data === data) return tree;
      return data < tree.data ?
        searchTree(tree.left, data) :
        searchTree(tree.rigth, data);
    }
    // remove line with error and write your code here
  }

  remove(data ) {
    this.rootTree = removeTree(this.rootTree, data);
    function removeTree(tree, data) {
      if (!tree) return null;
      if (data < tree.data) {
        tree.left = removeTree(tree.left, data);
        return tree;
      } else if (data > tree.data) {
        tree.rigth = removeTree(tree.rigth, data);
        return tree;
      } else {
        if (!tree.left && !tree.rigth) return null;
        if (!tree.left) {
          tree = tree.rigth;
          return tree;
        }
        if (!tree.rigth) {
          tree = tree.left;
          return tree;
        }
        let rigthMin = tree.rigth;
        while (rigthMin.left) {
          rigthMin = rigthMin.left;
        }
        tree.data = rigthMin.data;
        tree.rigth = removeTree(tree.rigth, rigthMin.data);
        return tree;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootTree) return;
    let tree = this.rootTree;
    while (tree.left) {
      tree = tree.left;
    }
    return tree.data;
    // remove line with error and write your code here
  }

  max() {
     if (!this.rootTree) return;
    let tree = this.rootTree;
    while (tree.rigth) {
      tree = tree.rigth;
    }
    return tree.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};