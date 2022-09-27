let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [11, 21, 31, 41, 51, 61, 71];
let mergeconcat = [];
let mergeforloop = [];
// marge array
merge = array2.concat(array1);
// console.log(mergeconcat);

//merge forloop
for (let i = 0; i < array1.length; i++) {
  mergeforloop[i] = array1[i];
}

for (let i = 0; i < array2.length; i++) {
  mergeforloop[array1.length + i] = array2[i];
}
// mergeforloop.reverse();
// console.log(mergeforloop);

mergeforloop = [...array2, ...array1]; //merge array

console.log(mergeforloop);
