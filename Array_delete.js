let array = [45, 40, 56, 67, 68, 78, 7, 56];

pos = 2;

for (let i = pos; i < array.length - 1; i++) {
  array[i] = array[i + 1];
}

array.length = array.length - 1;

console.log(array);
