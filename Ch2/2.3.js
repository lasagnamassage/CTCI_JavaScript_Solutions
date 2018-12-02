/**
 * Delete a node in the middle (any node but the first and last)
 * of a singly linjked list, given only access to that node
 * @author Ashaun Thomas
 */

class Node {
     constructor(data) {
         this._data = data;
         this._next = null;
     }

     get data() { return this._data; }
     get next() { return this._next; }

     set data(data) { this._data = data; }
     set next(next) { this._next = next; }
 }

class SinglyLinkedList {
    constructor() {
        this._tail = null;
    }

    get tail() { return this._tail; }
    set tail(tail) { this._tail = tail; }

    /**
     * Appends a node to the linked-list
     */
    append(node) {
        if (this.tail) {
            node.next = this.tail;
        }
        this.tail = node;
    }

    /**
     * Removes node by reference
     * @param node 
     */
    remove(node) {
        if (node == null || node.next == null) {
            return; // Can't perform operation
        }
        let nextNode = node.next;
        node.data = next.data;
        node.next = nextNode.next;
    }

    /**
     * Makes array of node data and prints to console
     */
    printAll() {
        let currentNode = this.tail;
        let dataArr = [];
        while (currentNode != null) {
            dataArr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log("Nodes in list: " + dataArr);
    }
}


let myList = new SinglyLinkedList();
myList.append(new Node('ash'));
myList.append(new Node('shrini'));
myList.append(new Node('dave'));
myList.append(new Node('sam'));
myList.printAll();
let nodeToRemove = myList.tail.next.next;
console.log("removing " + nodeToRemove.data);
myList.remove(nodeToRemove);
myList.printAll();