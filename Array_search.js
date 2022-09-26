let array = [45, 40, 56, 67, 68, 78, 7, 56];
let search = 40; //search index if this exist
let pos = 2;
for (let i = 0; i < array.length; i++) {
  if (array[i] == search) {
    let data = array.filter((item) => {
      if (item != search) {
        return item;
      }
    });
    array = data;
    break;
  }
}

// console.log(array);

//search array index
let array1 = [45, 40, 56, 67, 68, 78, 7, 56];

let ele = 67;
let index = null;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] === ele) {
    index = i;
    break;
  }
}

// let res = array1.splice(2, 1); //first index and next how many items [56]
let res = array1.slice(1, 3); //start point from 1 index and finish at 3 index [40,56]

console.log(res);

console.log(index);
