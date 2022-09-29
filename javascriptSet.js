let data = new Set(["sajib", "rajib", "mithun", "45", "45", "rana", "rony"]);

// console.log(data); // here remove "45"
data.add({ age: 57 });

// console.log(data);//full array
// console.log(data.has("sajib"));//true

for (i of data) {
  //   console.log(i);
}
data.delete("45");
// console.log(data.values()); //here i get values
console.log(data.entries()); //here i get key =>values

data.forEach((element) => {
  //   console.log(element);
});
