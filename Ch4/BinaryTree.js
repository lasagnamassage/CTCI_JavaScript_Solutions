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