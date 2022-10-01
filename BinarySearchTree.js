class Node{

    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }

}

class BinarySearchTree {

    constructor(){
        this.root = 56 
       }

    isRootEmpty = ()=>{
       return this.root === null
    }


}


let bst = new BinarySearchTree()

console.log(bst.isRootEmpty())

let node = new Node()