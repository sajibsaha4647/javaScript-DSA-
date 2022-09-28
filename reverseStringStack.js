let array = [];
let arrlength = array.length;

push = (val) => {
  array[arrlength] = val;
  arrlength += 1;
};

reverseStr = (val) => {
  for (let i = 0; i < val.length; i++) {
    array.push(val[i]);
  }
};

pop = () => {
  removeitem = array[arrlength - 1];
  arrlength -= 1;
  array.length = arrlength;
  return removeitem;
};

let val = "sajib";
let result = val.split("");
reverseStr(result);
array.reverse();
console.log(array);
