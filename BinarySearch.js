//Binary always working on sorted array
//so first sort array and then apply binary search
// then execute then function
// let array = [5, 9, 13, 17];

// //now sorting the array first
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] > array[j + 1]) {
//       let temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }

let data = [5, 9, 13, 17, 80, 85, 90];
let find = 90;
let start = 0;
let end = data.length - 1;
let position = undefined;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(position);
