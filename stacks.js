const { DoubleLinkedList } = require('./doubleLinkedList.js');


// Stack - LIFO (Last in First out)
// Useful for comparisons and keeping track
// can have any underlying datastructure such as Array or LinkedList
    
class Stack {
    constructor() {
        this.stack = new DoubleLinkedList();

    }

    // Remove element and return element
    pop() {
        let returnValue = this.stack.getTail();
        this.stack.removeTail();

        return returnValue;
    }

    // See element at the top
    peek() {
        return this.stack.getTail();
    }

    // Add to stack
    push(val) {
        this.stack.push(val)
    }

    display() {
        this.stack.display();
    }
}



// Driver Code

const stack = new Stack();


// LIFO - LAST IN FIRST OUT
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.display()