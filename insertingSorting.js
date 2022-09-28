let data = [12, 110, 13, 5, 6, 7, 8, 80];

insertionSorting = () => {
  let i, current, j;
  for (i = 1; i < data.length; i++) {
    current = data[i];
    j = i - 1;

    // console.log(j, "j");
    // 0, 1, 2, 3, 4;
    // console.log(current, "current");
    // 110, 13, 5, 6;
    // console.log(data[j], "data[j]");
    // 12, 110, 13, 5, 6;

    while (j >= 0 && data[j] < current) {
      data[j + 1] = data[j];
      j = j - 1;
      console.log(j, "j");
    }
    data[j + 1] = current;

    // console.log(data[j + 1]);
  }
};

insertionSorting(data);

console.log(data);
// console.log(0 - 1);
