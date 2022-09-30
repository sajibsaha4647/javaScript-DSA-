class Linkedlist {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
    this.size = 1;
  }

  appendform(newnode) {
    let newdata = {
      value: newnode,
      next: null,
    }
   
    this.tail.next = newdata;
    this.tail = newdata;
    this.size += 1;
  }

  traversing = () => {

    let counter = 0;
    let currentnode = this.head;

    while (counter < this.size) {
      currentnode = currentnode.next;
      counter++;
    }
  }

  deleteElement = (index) =>{
    let counter = 1;
    let lead = this.head
    if(index == 1){
      this.head = this.head.next
    }
    else{
      while(counter<index-1){
        lead = lead.next
        counter++
      }
    }

    let newnode = lead.next.next
    lead.next = newnode
   
    
  }

  insertNode = (index,value) =>{

   let counter = 1
    let currennode = this.head

    while(counter<index){
      counter ++
      currennode = currennode.next
    }

    let nextnode = currennode.next
    currennode.next={
      value:value,
      next:nextnode
    }

  }

  searchNode = (data)=>{
    let result  = undefined
    let loop = true
    let lead = this.head

    while(loop){
      lead = lead.next
      loop = !!lead
      if(loop && lead.value == data){
        loop = false
        result = lead
        console.warn("result")
      }


    }
    console.log(result,"result")
  }


}

let list = new Linkedlist(1);
list.appendform(2);
list.appendform(3);
list.appendform(4);
list.appendform(5);
list.appendform(60);
list.traversing();
list.deleteElement(3);
list.insertNode(1,300000)
list.searchNode(60)
// console.log(JSON.stringify(list));
