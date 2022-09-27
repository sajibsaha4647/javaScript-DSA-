let array = [];
let arrlength = array.length;

push = (val) => {
  array[arrlength] = val;
  arrlength++;
};

pop = () => {
  if (arrlength > 0) {
    arrlength--;
    array.length = arrlength;
  }
};

push(2);
push(4);
push(5);
push(6);

pop();
pop();

console.log(array);
