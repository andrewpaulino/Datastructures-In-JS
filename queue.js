const { DoubleLinkedList } = require('./doubleLinkedList.js');

// Stack - LIFO (Last in First out)
// Useful for comparisons and keeping track
// can have any underlying datastructure such as Array or LinkedList

class Queue {
  constructor() {
    this.queue = new DoubleLinkedList();
  }

  // Remove element and return element
  dequeue() {
    let returnValue = this.queue.getTail();
    this.queue.removeTail();

    return returnValue;
  }

  // Add to stack
  enqueue(val) {
    this.queue.addToHead(val);
  }

  front() {
    return this.queue.getTail();
  }

  display() {
    this.queue.display();
  }
}

// Driver Code

// const queue = new Queue();

// // FIFO - FIRST IN FIRST OUT
// queue.enqueue(1);
// queue.enqueue(2);

// // Dequeue
// console.log("Dequeue: ", queue.dequeue());

// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// queue.display();

module.exports.Queue = Queue;
