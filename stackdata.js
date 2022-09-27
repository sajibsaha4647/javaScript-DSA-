let array = [];
let max = 5;

let currentelement = array.length;

Push = (value) => {
  if (currentelement != max) {
    array[currentelement] = value;
    currentelement++;
  }
};

pop = () => {
  if (currentelement > 0) {
    currentelement--;
    array.length = currentelement;
  } else {
    console.log("stack is empty");
  }
};

Push(2);
Push(3);
Push(5);
Push(6);
Push(7);
pop();
pop();
pop();

//here stack main logic is (first in last out)

console.log(array);
