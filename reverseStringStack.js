let array = [];
let arrlength = array.length;

push = (val) => {
  array[arrlength] = val;
  arrlength += 1;
};

pop = () => {
  if (arrlength != 0) {
    let removeitem = array[arrlength - 1];
    arrlength -= 1;
    array.length = arrlength;
    return removeitem;
  }
};

reverseStr = (val) => {
  for (let i = 0; i < val.length; i++) {
    array.push(val[i]);
  }

  for (let i = 0; i < val.length; i++) {
    console.warn(pop());
  }
};
let val = "sajib";
let result = val.split("");
reverseStr(result);

console.log(array);
