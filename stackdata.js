let array = [];
let max = 5;

let currentelement = array.length;

Push = (value) => {
  if (currentelement != max) {
    array[currentelement] = value;
    currentelement++;
  }
};

Push(2);
Push(3);
Push(5);
Push(6);
Push(7);
Push(8);
Push(9);
Push(10);

console.log(array);
