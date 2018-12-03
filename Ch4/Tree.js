/**
 * Basic tree implementation
 */

 class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    get data() { return this.data; }
    get children() { return this.children; }
    
    set data(input) { this.data = input }

    addChild(data) {
        let node = new TreeNode(data);
        this.children.push(node);
    }

    getChildByIndex(index) {
        return this.children[index];
    }
 }

 class Tree {
    constructor(root) {
        this.root = root;
    }
 }