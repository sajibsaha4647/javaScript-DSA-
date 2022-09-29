let arr = [12, 203, 40, 70, 78, 62, 67];

let arr2 = [];

pushingarray = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 70) {
      console.log(arr[i]);
      arr2.push(arr[i]);
    } else if (arr[i] == 40) {
      arr2.push(arr[i]);
    }
  }
  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
};
pushingarray();

let res = arr.filter((item) => item !== arr2[0] && item !== arr2[1]);

let result = [...res, ...arr2];
console.log(result);

//result [203, 78, 67, 62, 12, 40, 70];
