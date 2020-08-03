class Node {
  constructor() {
    this.next = '';
    this.prev = '';
    this.val = '';
  }

  setValue(val) {
    this.val = val;
  }
}

class DoubleLinkedList {
  constructor() {
    const beginningRoot = new Node();
    this.head = beginningRoot;
    this.tail = beginningRoot;
    this.length = 0;
  }

  getHead = () => {
    return this.head.val;
  };

  getTail = () => {
    return this.tail.val;
  };

  removeHead = () => {
    let headToBeRemoved = this.head;
    let newHead = this.head.next;

    newHead.prev = null;

    this.head = newHead;

    headToBeRemoved = null;
  };

  removeTail = () => {
    let tailToBeRemoved = this.tail;
    let newTail = this.tail.prev;
  
    if (newTail !== null) {
      newTail.next = null;

      this.tail = newTail;
    }

    tailToBeRemoved = null;
  };

  addToHead = (val) => {
    const newNode = new Node();
    newNode.setValue(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;

      this.head.prev = null;
      this.tail.prev = null;
      this.head.next = null;
      this.tail.next = null;
    } else {
      let oldHead = this.head;

      oldHead.prev = newNode;

      newNode.prev = null;
      newNode.next = oldHead;

      this.head = newNode;
    }
    this.length += 1;
  };

  push = (val) => {
    const newNode = new Node();
    newNode.setValue(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;

      this.head.prev = null;
      this.tail.prev = null;
      this.head.next = null;
      this.tail.next = null;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.next = null;
    }
    this.length += 1;
  };

  remove = (val) => {
    let tempNode = this.head;
    let nodeToBeDeleted;

    while (tempNode.next !== null) {
      if (tempNode.val === val) {
        nodeToBeDeleted = tempNode;
      }
      tempNode = tempNode.next;
    }

    nodeToBeDeleted.prev.next = nodeToBeDeleted.next;
    nodeToBeDeleted.next.prev = nodeToBeDeleted.prev;

    nodeToBeDeleted = undefined;
  };

  display = () => {
    let tempNode = this.head;
    while (tempNode !== null) {
      console.log(tempNode.val);
      tempNode = tempNode.next;
    }
  };
}

//Driver Code;
// Uncomment to use stack and queues
// const linked_list = new DoubleLinkedList();

// linked_list.push(1);
// linked_list.push(2);
// linked_list.push(3);
// linked_list.push(4);

// linked_list.remove(3);

// linked_list.display();

module.exports.DoubleLinkedList = DoubleLinkedList;
