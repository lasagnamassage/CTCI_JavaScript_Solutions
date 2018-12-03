/**
 * Design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element. Push, pop, and min should all operate
 * in O(1) time.
 * @author Ashaun Thomas
 */

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }  

    get data() { return this.data }
    get next() { return this.next }

    set next(input) { this.next = input; }
    set data(input) { this.data = input; }
}

class Stack {
    constructor() {
        this.top = null;
    }

    set top(input) { this.top = input; }

    peek() {
        return this.top;
    }

    push(input) {
        if (this.top === null) {
            this.top = input;
        }
        else {
            input.next = this.top;
            this.top = input;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return false;
        }
        let topData = this.top.data;
        this.top = this.top.next;
        return topData;
    }
}

class MinStack extends Stack {
    constructor() {
        super();
        this.min = new Stack();
    }

    push(data) {
        let node = new StackNode(data);
        node.next = this.top === null ? null : this.top;
        this.top = node;
    }
}