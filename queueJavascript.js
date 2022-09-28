//first in fast out for queue
let queue = [];
let currentsize = queue.length;
let maxsize = 5;

enqueues = (newval) => {
  if (currentsize >= maxsize) {
    console.log("stack is full");
  } else {
    queue[currentsize] = newval;
    currentsize++;
  }
};

dequeues = () => {
  if (currentsize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentsize--;
    queue.length = currentsize;
  } else {
    console.log("queue is already empty");
  }
};

display = () => {
  console.log(queue);
};

enqueues(5);
enqueues(15);
enqueues(25);
dequeues();
display();
