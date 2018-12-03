/**
 * Given a directed graph, design an algorithm to
 * find out whether or not there is a route between
 * nodes.
 * @author Ashaun Thomas
 */

 class Graph {
     constructor() {
         this.nodes = [];
     }

     get nodes() { return this.nodes; }
     set nodes(input) { this.nodes = input }

     /**
      * Generic breadth-first search
      * to determine if route exists between
      * two nodes
      * @param  start Node we're starting at 
      * @param  end Node we're looking for
      */
     isRoute(start, end) {
        if (start === end) {
            return true;
        }
        let q = new Queue();
        this.start.visited = true;
        q.enqueue(start);
        let currentNode;
        while (!q.isEmpty()) {
            currentNode = q.dequeue();
            if (currentNode != null) { //if current node exists
                for (let i = 0; i < currentNode.siblings.length; i++) {
                    let currentChild = currentNode.children[i];
                    if(!currentChild.visited) {
                        if (currentChild === end) {
                            return true;
                        }
                        else {
                            currentChild.visited = true;
                            q.enqueue(start);
                        }
                    }
                }
                currentNode.visited;
            }
        }
     }
 }

 class Node {
    constructor(name) {
        this.name = name;
        this.visited = false;
        this.children = [];
        this.siblings = [];
    }
 }

 class Queue {
     constructor() {
         this.first = null;
         this.last = null;
     }

     get first() { return this.first; }
     get last() { return this.last; }

     set first(input) { this.first = input; }
     set last(input) { this.last = input; }

     enqueue(data) {
        let node = new Node(data);
        this.last.next = this.last ? node : null;
        this.last = node;
        if (!this.first) {
            this.first = this.last;
        }
     }

     dequeue() {
         if (this.first === null) {
            return false; // no existing elements
         }
         let data = this.first.data;
         this.first.next = this.first;
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