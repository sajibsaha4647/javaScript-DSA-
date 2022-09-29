let data = new Map([]);
data.set("number", 5).set("color", "blue").set("city", "Santiago");
//should use key
console.log(data.get("color")); //blue
console.log(data.has("number")); //true

for (x of data) {
  //   console.log(x);
}
