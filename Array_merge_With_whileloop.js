let array1 = [1, 2, 3, 4, 5, 6, 7, 4, 56, 67, 67];
let array2 = [11, 21, 31, 41, 51, 61, 71];

let array3 = [];

let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < array1.length && d2 < array2.length) {
  if (array1[d1] < array2[d2]) {
    array3[d3] = array1[d1];
    d1++;
  } else {
    array3[d3] = array2[d2];
    d2++;
  }
  d3++;
}

while (d2 < array2.length) {
  array3[d3] = array2[d2];
  d2++;
  d3++;
}

console.log(array3);
