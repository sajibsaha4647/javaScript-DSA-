// here exaple of linear search

let array = [12, 34, 34, 4, 5, 56, 67, 56, 4, 43];

let pos = null;
let find = 34;

for (let i = 0; i < array.length; i++) {
  if (find == array[i]) {
    pos = i;
    break;
  }
}

console.log(pos);
