//here circular queue
class Circularue {
  constructor(size) {
    this.maxsize = size;
    this.items = new Array(size);
    this.currentsize = 0;
    this.rear = -1;
    this.front = -1;
  }

  enqueue(val) {
    if (this.currentsize != this.maxsize) {
      if (this.rear == this.maxsize - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.items[this.rear] = val;
      this.currentsize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue = () => {
    if (this.currentsize != 0) {
      this.items[this.front] = null;
      if (this.front == this.maxsize - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentsize--;
    } else {
      console.log("queue is empty");
    }
  };

  display = () => {
    console.log(this.items);
  };
}

let circle = new Circularue(5);
circle.enqueue(45);
circle.enqueue(40);
circle.enqueue(40);
circle.enqueue(40);
circle.enqueue(40);
circle.enqueue(40);
circle.enqueue(60);
circle.enqueue(45);
circle.enqueue(40);
circle.enqueue(40);
circle.dequeue();
circle.display();
console.log(circle);
