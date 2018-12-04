/**
 * Given a sorted (increasing order) array with unique
 * integer elements, write an algorithm to
 * create a binary search tree with minimal height.
 * @author Ashaun Thomas
 */

 /**
  * Thought process:
  *     "Minimal height" sticks out as a clue...this could mean that
  *     this binary tree must be "complete", meaning every level of the
  *     tree is filled as much as possible. It's worth noting that binary
  *     search trees must have left descendents smaller than the parent and
  *     right descendents larger than their parents.
  */

  let testCases = [
      [1,4,5,9,10],
      [-1,0,3,5,7,8],
      [0,10,11,11000]
  ];

class TreeNode {
    constructor(value) {
        this.value = value; 
        this.leftChild = null; 
        this.rightChild = null;
    }

    get leftChild() { return this.leftChild; }
    get rightChild() { return this.rightChild; }

    set leftChild(node) { this.leftChild = node }
    set rightChild(node) { this.rightChild = node }
}


function createBST(array, constraints) {
    let start = constraints.start;
    let end = constraints.end;
    if (end < start) {
        return null;
    }
    if (!start || !end) {
        return createBST(array, {
            start: 0,
            end: array.length - 1
        });
    }
    else {
        let mid = Math.ceil( (start + end) / 2);
        let node = new TreeNode(array[mid]);
        node.leftChild = createBST(array, {
            start: start,
            end: mid - 1
        });
        node.rightChild = createBST(array, {
            start: mid + 1,
            end: end
        });
        console.log('node: ' + node.value);
        console.log('leftChild: ' + leftChild);
        console.log('rightChild: ' + rightChild);
        return node;
    }
}
