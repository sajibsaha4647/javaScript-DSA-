let arr = [12, 203, 40, 70, 78, 62, 67];

let given1 = 70;
let given2 = 40;

getsorting = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1] && arr[j] !== given1 && arr[j] !== given2) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
getsorting();
console.log(arr);
