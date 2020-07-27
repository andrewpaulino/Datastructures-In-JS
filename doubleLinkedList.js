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
const linked_list = new DoubleLinkedList();

linked_list.push(1);
linked_list.push(2);
linked_list.push(3);
linked_list.push(4);

linked_list.remove(3);

linked_list.display();