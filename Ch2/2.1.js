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
        this.id = getID();
    }

    get prev() {
        return this.prev;
    }

    get next() {
        return this.next;
    }

    get id() {
        return this.id;
    }

    id(id) {
        this.id = id; 
    }

    prev(node) {
        this.prev = node;
    }

    next(node) {
        this.next = node;
    }
}

class IDGenerator {
    constructor() {
        this.usedIDs = {};
    }
    getID() {
        let id;
        do {
            id = (Math.random() * 10000 + 1);
        } while (usedIDs.hasOwnProperty(id));
        usedIDs[id] = true;
    }
}


/**
 * Generates IDs for nodes
 * @return generated id
 */
function getID() {
    let id;
    let maxIDs = 10000;
    do {
        id = Math.random() * maxIDs + 1;
    } while (usedIDs.hasOwnProperty(id));
    usedIDs[id] = true;
    return id;
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
     * Removes a node in the list and reconfigures
     * the "pointer" properties as needed.
     * @todo Redo this for custom IDs. Currently list improperly handles nodes with congruent data
     * @param nodeData Data of node to be removed
     */
    removeById(id) {
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.id != id) {
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
 * to a Hashmap, then 
 * @todo Finish this function using linkedlist remove method and hashmap
 * @param linkedlist Linked list given 
 */
function removeDuplicates(linkedlist) {

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
        console.log(removeDuplicates(testCases[i]));
    }
}

while (currentNode != null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;    
}
