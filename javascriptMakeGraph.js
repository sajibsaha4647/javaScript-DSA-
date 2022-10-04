//Make a graph

class Graph {
  constructor() {
    this.data = {};
  }

  addvertex = (vertex) => {
    if (
      !this.data[vertex] &&
      vertex !== null &&
      vertex !== "" &&
      vertex !== typeof String
    ) {
      this.data[vertex] = [];
    }
  };

  addAdge = (v1, v2) => {
    if (!this.data[v1]) {
      this.addvertex(v1);
    }
    if (!this.data[v2]) {
      this.addvertex(v2);
    }
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  };
}

let graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addvertex("D");
graph.addAdge("A", "C");
graph.addAdge("A", "B");
graph.addAdge("B", "C");
graph.addAdge("B", "D");
console.log(graph);
//Ans
// data: {
//     A: [ 'C', 'B' ],
//     B: [ 'A', 'C', 'D' ],
//     C: [ 'A', 'B' ],
//     D: [ 'B' ]
//   }
