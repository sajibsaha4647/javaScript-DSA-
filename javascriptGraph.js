//graph matrix connections
//A-B-C-D
//connected
// ============
//a=>b=>c = 0,1,1,0

//b=>a=>b=>d = 1,0,1,1

//c=>a=>b = 1,1,0,0

//d=>b = 0,1,0,0

let data = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
];

console.log(data[3][3]);
