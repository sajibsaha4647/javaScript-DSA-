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

console.log(array);
