//here is list graph
//A-B-C-D
//connected
// ============
//a=>b=>c = 0,1,1,0

//b=>a=>b=>d = 1,0,1,1

//c=>a=>b = 1,1,0,0

//d=>b = 0,1,0,0

let data = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b"],
  d: ["b"],
};

console.log(data.a);
