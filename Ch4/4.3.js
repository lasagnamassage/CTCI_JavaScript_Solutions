/**
 * Given a binary tree,
 * design an algorithm which creates a linked list of all the
 * nodes at each depth (e.g, If you have a tree with depth D),
 * @author Ashaun Thomas
 */

/**
 * Basic binary tree implementation
 */

class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(data) {
        if (this.children < 2) {
            this.children.push(new BinaryTreeNode(data));
        }
        else {
            return false;
        }
    }
 }

 