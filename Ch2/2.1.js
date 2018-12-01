/**
 * Remove duplicates from an unsorted
 * linked list.
 * Then do so without the use of a temporary
 * buffer.
 * @author Ashaun Thomas
 */

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
    remove(nodeData) {
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.data != nodeData) {
                currentNode = currentNode.next;
            }
            else {
                // if (nodeData === this.head.data) {
                //     console.log('removing head!!');
                //     let prevNode = nodeData.prev;
                //     prevNode.next = null;
                //     nodeData.prev = null;
                //     this.head = nextNode;
                // }
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
    generateListFrom(['ash','shawn','srini','caleb']),
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

let firstList = testCases[0];
let currentNode = firstList.head;

let nodeToDelete = firstList.head.next.data;
console.log("Node to delete: " + nodeToDelete);
firstList.remove(nodeToDelete);

while (currentNode != null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;    
}
