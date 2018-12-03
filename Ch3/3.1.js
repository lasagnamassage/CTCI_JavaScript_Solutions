/**
 * Describe how you would use a single array to implement
 * 3 stacks.
 * @todo Clean this up a bit
 * @author Ashaun Thomas
 */

let testCases = [
    [1,5,1,4],
    [1,4,5,2,4,5,2,4],
    ['these','are','all','words','that','will','be','in','stacks']
];


/**
 * Generic Stack implementation
 */
 class Stack {
    constructor() {
        this._top = null;
    }

    get top() { return this._top; }
    set top(top) { this._top = top; }

    /**
     * Removes topmost element in stack
     */
    pop() {
        if (this.isEmpty()) {
            return false; // empty stack
        }
        let topData = this.top.data;
        this.top = this.top.next;
        return topData;
    }

    /**
     * Adds new element by accepting data for it
     * @param data The data to be stored in the StackNode
     */
    push(data) {
        let node = new StackNode(data);
        node.next = this.top === null ? null : this.top;
        this.top = node;
    }

    /**
     * Returns topmost element
     * @return top The topmost element
     */
    peek() {
        return this.top ? this.top : undefined;
    }

    /**
     * Checks if Stack is empty
     */
    isEmpty() {
        return this.top === null;
    }
 }

 class StackNode {
     constructor(data) {
         this._data = data;
         this._next = null;
     }

     get data() { return this._data; }
     get next() { return this._next; }

     set data(data) { this._data = data; }
     set next(next) { this._next = next; }
 }


function convert3Stacks(someArray) {
    let parts = Math.ceil(someArray.length / 3);
    let counter = 0;
    let stacks = [];
    for (let i = 0; i < someArray.length; i++) {
        if (counter % parts == 0) {
            stacks.push(new Stack());
        }
        let currentStack = stacks[stacks.length - 1];
        currentStack.push(someArray[i]);
    }
    console.log(`stacks 1: ${stacks[0]}`);
    console.log(`stacks 2: ${stacks[1]}`);
    console.log(`stacks 3: ${stacks[2]}`);
    console.log('-----------------');
}

/**
 * Runs test cases
 */
function main() {
    for (let i = 0; i < testCases.length; i++) {
        convert3Stacks(testCases[i]);
    }
}

main();