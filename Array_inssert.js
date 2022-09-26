let array = [30, 40, 50, 80];

let element = 90;
let pos = 0;

for (let i = array.length - 1; i >= 0; i--) {
  if (i >= pos) {
    array[i + 1] = array[i];
  }
  if (i == pos) {
    array[i] = element;
  }
}

console.log(array);
