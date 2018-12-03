/**
 * Basic Queue implementation
 */
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    get first() { return this.first; }
    get last() { return this.last }
    set first(n) { this.first = n; }
    set last(n) { this.last = n; }

    add(data) {
        let node = new QueueNode(data);
        this.last.next = this.last ? null : node;
        this.last = node;
        this.first = this.first ? this.first : this.last;
    }

    remove() {
        if (this.first === null) {
            return false; // No existing elements
        }
        let data = first.data;
        this.first = this.first.next;
        if (this.first === null) {
            this.last = null;
        }
        return data;
    }

    peek() {
        if (this.isEmpty()) {
            return false;
        }
        return this.first;
    }

    isEmpty() {
        return first === null;
    }


}

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}