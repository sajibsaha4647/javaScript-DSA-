class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isRootEmpty = () => {
    return this.root === null;
  };

  makeTree = (val) => {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertIntree(this.root, newNode);
    }
  };

  insertIntree = (root, newnode) => {
    if (root.value > newnode.value) {
      if (root.left === null) {
        root.left = newnode;
      } else {
        this.insertIntree(root.left, newnode);
      }
    } else {
      if (root.right === null) {
        root.right = newnode;
      } else {
        this.insertIntree(root.right, newnode);
      }
    }
  };

  searchNode = (root, val) => {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return true;
    } else if (root.value > val) {
      return this.searchNode(root.left, val);
    } else {
      return this.searchNode(root.right, val);
    }
  };

  preOrder = (root) => {
    //start from root to end with left value first
    if (root !== null) {
      // console.log(root.value, "val pre");
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  };

  inOrder = (root) => {
    //start from bottom to top with left value first
    if (root !== null) {
      this.inOrder(root.left);
      //   console.log(root.value);
      this.inOrder(root.right);
    }
  };

  postOrder = (root) => {
    //start from left=> bottom and then right bottom then root make cycle complete
    // then right cycle complete with same condition
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      // console.log(root.value);
    }
  };

  bfsTraversion = (root) => {
    //breath first search
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      var current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      // console.log(queue);
      // console.log("==============");
      // console.log(current.value);
      //[20,10,30,5,11,23,40]
    }
  };

  getMinValue = (root) => {
    if (root !== null) {
      if (root.left !== null) {
        this.getMinValue(root.left);
      } else {
        console.warn(root.value, "this is minimum number");
      }
    }
  };

  getMaxvalue = (root) => {
    if (root !== null) {
      if (root.right !== null) {
        this.getMaxvalue(root.right);
      } else {
        console.warn(root.value, "this is maximum number");
      }
    }
  };
}

let bst = new BinarySearchTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(2);
bst.makeTree(11);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);
bst.bfsTraversion(bst.root);
bst.getMinValue(bst.root);
bst.getMaxvalue(bst.root);
// console.log(bst.searchNode(bst.root, 900));

// console.log(JSON.stringify(bst), "full class");
