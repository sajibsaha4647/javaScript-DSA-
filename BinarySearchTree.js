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
    if (!root.left) {
      // console.warn(root.value, "this is mini number");
      return root.value;
    } else {
      this.getMinValue(root.left);
    }
  };

  getMaxvalue = (root) => {
    if (!root.right) {
      // console.warn(root.value, "this is maximum number");
      return root.value;
    } else {
      this.getMaxvalue(root.right);
    }
  };

  removeData = (value) => {
    this.root = this.removeNode(this.root, value);
  };

  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }
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
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.bfsTraversion(bst.root);
// bst.getMinValue(bst.root);
// bst.getMaxvalue(bst.root);
// bst.getDeleteNode(5);
bst.removeData(20);
// console.log(bst.searchNode(bst.root, 900));

console.log(JSON.stringify(bst), "full class");
