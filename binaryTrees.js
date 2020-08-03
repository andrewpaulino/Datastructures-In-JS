const { Queue } = require('./queue.js');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  setValue(val) {
    this.val = val;
  }
}

class BinaryTree {
  constructor() {
    this.rootNode = null;
    this.traversalPointer = this.rootNode;
    this.length = 0;
  }

  addNode(val) {
    if (this.rootNode === null) {
      const nodeToBeAdded = new Node(val);
      this.rootNode = nodeToBeAdded;

      return;
    }

    const queue = new Queue();

    // Insertion Operation
    queue.enqueue(this.rootNode);
    while (queue.length !== 0) {
      let frontOfQueue = queue.front();
      queue.dequeue();

      if (!frontOfQueue.left) {
        frontOfQueue.left = new Node(val);
        break;
      } else {
        queue.enqueue(frontOfQueue.left);
      }

      if (!frontOfQueue.right) {
        frontOfQueue.right = new Node(val);
        break;
      } else {
        queue.enqueue(frontOfQueue.right);
      }
    }
  }

  inorder = (node) => {
    if (node === null) {
      return;
    }
    this.inorder(node.left);
    console.log('Current Pointer (Inorder): ', node.val);
    this.inorder(node.right);
  };

  postorder = (node) => {
    if (node === null) {
      return;
    }

    this.postorder(node.left);
    this.postorder(node.right);
    console.log('Current Pointer (postorder): ', node.val);
  };

  preorder = (node) => {
    if (node === null) {
      return;
    }

    console.log('Current Pointer (preorder): ', node.val);

    this.preorder(node.left);
    this.preorder(node.right);
  };

  search = (val) => {
    // We want to return: Your value was found 3 Levels down with the parent being
    let parentOfChildSearchValue;

    const recrussivelyTraverse = (node, valueToBeFound) => {
      if (node === null) {
        return;
      }
      if (node.left) {
        if (node.left.val === valueToBeFound) {
          parentOfChildSearchValue = node.val;
          return;
        }
      } else if (node.right) {
        if (node.right.val === valueToBeFound) {
          parentOfChildSearchValue = node.val;
          return;
        }
      }

      if (node.val === valueToBeFound) {
        parentOfChildSearchValue = 'This was found at the last level of the Binary Tree';
        return;
      }
      recrussivelyTraverse(node.left, valueToBeFound);
      recrussivelyTraverse(node.right, valueToBeFound);
    };

    recrussivelyTraverse(this.rootNode, val);

    return `Found this value right below this parent value of ${parentOfChildSearchValue}`;
  };

  display = () => {

    const recursivelyDisplay = (node) => {
      if (node === null) {
        return;
      }

      if (!node.left && !node.right) {
        
      }

      recursivelyDisplay(node.left);
      recursivelyDisplay(node.right);
    };
    recursivelyDisplay(this.rootNode);
  };
}

const binaryTree = new BinaryTree();

binaryTree.addNode(1);
binaryTree.addNode(2);
binaryTree.addNode(3);
binaryTree.addNode(4);
binaryTree.addNode(5);
binaryTree.display();

