/**
 * Remove duplicates from an unsorted
 * linked list.
 * Then do so without the use of a temporary
 * buffer.
 * @author Ashaun Thomas
 */


// Holds IDs for specified nodes.
var usedIDs = {};

 /**
  * Generic doubly-linked list Node implementation
  */
class Node {
    
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    get prev() {
        return this.prev;
    }

    get next() {
        return this.next;
    }


    prev(node) {
        this.prev = node;
    }

    next(node) {
        this.next = node;
    }
}

/**
 * Generic doubly-linked list implementation
 */
class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    set head(node) {
        this._head = node;
    }

    set tail(node) {
        this._tail = node;
    }

    /**
     * Prints all nodes 
     */
    printAll() {
        let node = this.head;
        let nameArr = [];
        while (node != null) {
            nameArr.push(node.data);
            node = node.next;
        }
        console.log("Nodes by data: " + nameArr);
    }

    /**
     * Appends specified node to linked list
     * and configures necessary properties
     * @param node 
     */
    appendToTail(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            let temp = this.tail;
            this.tail = node;
            temp.next = node;
            node.prev = temp;
        }
    }

    /**
     * Removes first instance of node with equivalent data
     * in the list and reconfigures
     * the "pointer" properties as needed.
     * @param node Node to be removed
     */
    removeFirstInstanceOf(node) {
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.data != node.data) {
                currentNode = currentNode.next;
            }
            else {
                let prevNode = currentNode.prev;
                let nextNode = currentNode.next;
                if (prevNode) {
                    prevNode.next = currentNode.next;
                }
                if (nextNode) {
                    nextNode.prev = currentNode.prev;
                }
                currentNode.prev = null;
                currentNode.next = null;
                console.log("removed " + node.data);
                return;
            }
        }
    }   
}



let testCases = [
    generateListFrom(['ash','shawn', 'shawn', 'srini','caleb']),
    generateListFrom(['ann', 'dave', 'nishanth'])
];

/**
 * Removes duplicates by mapping node data in a linked list
 * to a Hashmap, then removing duplicates.
 * @todo Finish this function using linkedlist remove method and hashmap
 * @param linkedlist Linked list given 
 */
function removeDuplicates(linkedlist) {
    let currentNode = linkedlist.head;
    let map = new Map();
    do {
        if (map.has(currentNode.data)) {
            map.set(currentNode.data, map.get(currentNode.data) + 1);
        }
        else {
            map.set(currentNode.data, 1);
        }
        currentNode = currentNode.next;
    } while (currentNode != null);
    for (let [key, value] of map) {
        if (value > 1) {
            linkedlist.removeFirstInstanceOf(value);
        }
    }
    linkedlist.printAll();
}

/**
 * Creates a generic doubly-linked list
 * from a given array of strings as Node
 * data values.
 * @param namesArr 
 */
function generateListFrom(namesArr) {
    let list = new LinkedList();
    for (let i = 0; i < namesArr.length; i++) {
        let node = new Node(namesArr[i]);
        list.appendToTail(node);
    }
    return list;
}

/**
 * Runs test cases
 */
function main() {
    for (let i = 0; i < testCases.length; i++) {
        removeDuplicates(testCases[i]);
    }
}

main();