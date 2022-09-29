let data = {
  name: "sajib",
  age: 45,
  home: "dhaka",
  memory: () => {
    let item = {
      name: "sajib saha",
    };
    return item;
  },
};

for (x in data) {
  console.log(x); //here i get key
  console.log(data[x]); //here i get value
}

data.contact = "new add";
delete data.name; // delete item from object
console.log(data.memory().name);
