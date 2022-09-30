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
    }else{
      while(counter<index-1){
        lead = lead.next
        counter++
      
      }
    }
    let newnode = lead.next.next
    lead.next = newnode
   

  }

}

let list = new Linkedlist(1);
list.appendform(2);
list.appendform(3);
list.appendform(4);
list.appendform(5);
list.appendform(60);
list.traversing();
list.deleteElement(5);
console.log(JSON.stringify(list));
