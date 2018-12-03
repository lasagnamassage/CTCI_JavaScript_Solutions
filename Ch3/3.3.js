/**
 * Imagine a literal stack of plates. If the stack gets too high, it may
 * topple. In this case we would need a stack data structure that can make
 * new stacks once one has reached a given threshold.
 * @todo Good implementation, PUSH function needs debugging
 * @author Ashaun Thomas
 */

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

/**
 * Generic Stack implementation
 */
class Stack {
    constructor() {
        this._top = null;
        this._length = 0;
    }

    get top() { return this._top; }
    get length() { return this._length }

    set top(top) { this._top = top; }

    /**
     * Removes topmost element in stack
     */
    pop() {
        if (this.isEmpty()) {
            return false; // empty stack
        }
        let topData = this.top.data;
        this.top = top.next;
        return topData;
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

class SetOfStacks {
    constructor(maxEntries = 5) {
        this._stacks = [];
        this._currentStack = null;
        this._maxEntries = maxEntries;
    }

    get currentStack() { return this._currentStack }
    get maxEntries() { return this._maxEntries }
    

    /**
     * Pushes to stack, but in the event the stack
     * is at its max, it makes another.
     */
    push(data) {
        let stackNode = new StackNode(data);
        if (this._currentStack == null || this._currentStack.length == this._maxEntries) { // set or change stacks
            this._stacks.push(new Stack());
            let stackLength = this._stacks.length - 1; 
            this._currentStack = this._stacks[stackLength];
            let prevStack = null;
            if (stackLength - 2 > -1) {
                prevStack = this.stacks[(stackLength - 2 > -1 ? this._stacks.length - 2 : 0)];
            }
            if (prevStack) { // a previous stack exists
                stackNode._next = prevStack._top;
                this._currentStack._top = stackNode;
            }
        }
        else if (this._currentStack._top) { // stack on top of "plates"
            stackNode._next = this._currentStack._top;
            this.currentStack._top = stackNode;
        }
        else { // first "plate"
            this._currentStack._top = stackNode;
        }
    }

    /**
     * Pops from the current stack. If empty, pops the 
     * next full one.
     */
    pop() {
        if (this.recentStackEmpty) {
            this._stacks.pop();
            this._currentStack = this.stacks[this.stacks.length - 1];
            if (currentStack === null) { // No stacks left
                return; 
            }
        }
        this._top = this._top._next;

    }

    /**
     * Checks if most recent stack is empty
     */
    recentStackEmpty() {
        return this._currentStack._top === null;
    }

    /**
     * Prints all stacks and elements
     */
    printAll() {   
        for (let i = 0; i < this._stacks.length; i++) {
            console.log(`STACK ${i+1}`);
            console.log(this._stacks[i]);
            console.log('---------\n');
        }
    }
}

let dishes = new SetOfStacks(2);
dishes.push('plate');
dishes.push('bowl');
dishes.push('pot');
dishes.push('pan');
dishes.printAll();