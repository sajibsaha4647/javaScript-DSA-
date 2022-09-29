class Linkedlist {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
  }

  appendform(newnode) {
    let newdata = {
      value: newnode,
      next: null,
    };
    this.tail.next = newdata;
    this.tail = newdata;
  }
}

let list = new Linkedlist(200);
list.appendform(2000);
list.appendform(3000);
list.appendform(4000);
console.log(JSON.stringify(list));
