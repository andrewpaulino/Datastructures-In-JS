class Node {
  constructor() {
    this.next = '';
    this.val = '';
  }

  setValue(val) {
    this.val = val;
  }
}

class LinkedList {
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

      this.head.next = null;
      this.tail.next = null;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.next = null;
    }
    this.length += 1;
  };

  remove = (val) => {
    let tempNode = this.head;
    let nodeBeforeDeletedNode;
    let nodeToBeDeleted;
    while (tempNode.next !== null) {
      if (tempNode.next.val === val) {
        nodeBeforeDeletedNode = tempNode;
        nodeToBeDeleted = tempNode.next;
      }
      tempNode = tempNode.next;
    }
    nodeBeforeDeletedNode.next = nodeToBeDeleted.next;
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
const linked_list = new LinkedList();

linked_list.push(1);
linked_list.push(2);
linked_list.push(3);
linked_list.push(4);

linked_list.remove(3);

linked_list.display();
