class Node{

    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }

}

class BinarySearchTree {

    constructor(){
        this.root = null 
       }

    isRootEmpty = ()=>{
       return this.root === null
    }

    makeTree = (val)=>{
        let newNode = new Node(val)

        if(this.root  === null){
           this.root = newNode
        }else{
            this.insertIntree(this.root,newNode)
        }
    }

    insertIntree = (root,newnode)=>{
        if(root.value>newnode.value){
            if(root.left === null){
                root.left = newnode
            }else{
                this.insertIntree(root.left,newnode)
            }
        }else{
            if(root.right === null){
                root.right = newnode
            }else{
                this.insertIntree(root.right,newnode)
            }
        }
    }

    searchNode = (root,val)=>{

        if(root === null){
            return false
        }else if(root.value === val){
            return true
        }else if(root.value>val){
            return this.searchNode(root.left,val)
        }else{
            return this.searchNode(root.right,val)
        }



    }


}


let bst = new BinarySearchTree()
bst.makeTree(10)
bst.makeTree(8)
bst.makeTree(20)
bst.makeTree(90)
bst.makeTree(5)
console.log(bst.searchNode(bst.root,900))

console.log(JSON.stringify(bst),"full class")

