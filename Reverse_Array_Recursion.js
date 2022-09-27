let array2 = [11, 21, 31, 41, 51, 61, 71];

reversearray = (data, start, end) => {
  //recursive with bubble sort
  if (start <= end) {
    console.log(start);
    console.log(end);
    console.log("===");
    let temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reversearray(data, start + 1, end - 1);
  }
};

reversearray(array2, 0, array2.length - 1);

// console.log(array2);
let item = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(item.reverse());
