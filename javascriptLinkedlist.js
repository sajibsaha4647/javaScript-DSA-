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
    };
    this.tail.next = newdata;
    this.tail = newdata;
    this.size += 1;
  }

  traversing = () => {
    let counter = 0;
    let currentnode = this.head.next;

    while (counter < this.size) {
      console.log(JSON.stringify(currentnode));
      currentnode = currentnode;
      counter++;
    }
  };
}

let list = new Linkedlist(200);
list.appendform(2000);
list.appendform(3000);
list.appendform(4000);
list.appendform(5000);
list.appendform(4000);
list.traversing();
// console.log(JSON.stringify(list));
