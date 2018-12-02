/**
 * Implement an algorithm to find kth to last element
 * in a singly-linked list
 * @author Ashaun Thomas
 */


/**
 * Node for singly-linked list
 */
class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }

    set data(data) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    set next(next) {
        this._next = next;
    }

    get next() {
        return this._next;
    }
}

/**
 * Generic singly-linked list implementation
 */
class SinglyLinkedList {
    constructor() {
        this._tail = null;
    }

    get tail() {
        return this._tail;
    }

    set tail(tail) {
        this._tail = tail;
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
        let currentNode = this.tail;
        if (currentNode == node) {
            this.tail = currentNode.next;
            currentNode.next = null;
        }
        while (currentNode.next != null) {
            if (currentNode.next === node) {
                console.log('match found!');
                currentNode.next = currentNode.next.next;
                currentNode.next.next = null;
                return;
            }
            currentNode = currentNode.next;
        }
        console.log("Nothing found!");
    }
}


/**
 * Finds node k starting from the last element,
 * the tail of the linkedList.
 * @param linkedlist The linkedlist we are finding the kth node of 
 * @param k The kth node from last in the linkedlist
 */
function removeKthElement(linkedlist, k) {
    let currentNode = linkedlist.tail;
    for (let i = 0; i < k; i++) {
        currentNode = currentNode.next;
    }
    console.log("Removing node: " + currentNode.data);
    linkedlist.remove(currentNode);
    return currentNode;
}


let myList = new SinglyLinkedList();
myList.append(new Node('ash'));
myList.append(new Node('shrini'));
myList.append(new Node('dave'));
myList.append(new Node('sam'));
myList.printAll();
removeKthElement(myList, 2);
myList.printAll();